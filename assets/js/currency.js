document.addEventListener("DOMContentLoaded", function () {
  // Fetch currency codes and populate dropdowns
  const sourceCurrencyDropdown = document.getElementById("sourceCurrency");
  const destinationCurrencyDropdown = document.getElementById("destinationCurrency");

  fetch("https://open.er-api.com/v6/latest/USD?apikey=0573d2f86ed9452a9562324bc7e81b07")
    .then(response => response.json())
    .then(data => {
      const currencyCodes = Object.keys(data.rates);

      // Populate source and destination dropdowns
      currencyCodes.forEach(currencyCode => {
        const option = document.createElement("option");
        option.value = currencyCode;
        option.textContent = currencyCode;
        sourceCurrencyDropdown.appendChild(option.cloneNode(true));
        destinationCurrencyDropdown.appendChild(option);
      });

      // Set default values for the dropdowns
      sourceCurrencyDropdown.value = "USD";
      destinationCurrencyDropdown.value = "EUR";
    })
    .catch(error => {
      displayError("An error occurred while fetching currency codes.");
    });
});

function convertCurrency() {
  const sourceCurrency = document.getElementById("sourceCurrency").value.toUpperCase();
  const destinationCurrency = document.getElementById("destinationCurrency").value.toUpperCase();
  const amount = parseFloat(document.getElementById("amount").value);

  // Validate input
  if (!sourceCurrency || !destinationCurrency || isNaN(amount) || amount <= 0) {
    displayError("Please enter valid input.");
    return;
  }

  // Fetch exchange rate from Open Exchange Rates API
  const apiUrl = `https://open.er-api.com/v6/latest/${sourceCurrency}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.rates[destinationCurrency]) {
        const exchangeRate = data.rates[destinationCurrency];
        const timestamp = new Date().toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        // Calculate converted amount
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        // Display result
        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `
          <p>Source Currency: ${sourceCurrency} (${getSourceCurrencyName(sourceCurrency)})</p>
          <p>Destination Currency: ${destinationCurrency} (${getDestinationCurrencyName(destinationCurrency)})</p>
          <p>Current Exchange Rate: 1 ${sourceCurrency} = ${exchangeRate} ${destinationCurrency}</p>
          <p>Calculation Timestamp: ${timestamp}</p>
          <p>Amount of Transaction: ${amount} ${sourceCurrency} = ${convertedAmount} ${destinationCurrency}</p>
        `;
      } else {
        displayError(`Exchange rate not available for ${destinationCurrency} or invalid currency codes.`);
      }
    })
    .catch(error => {
      displayError(error.message);
    });
}

// Helper function to get the currency name based on currency code
function getSourceCurrencyName(currencyCode) {
  // Add more cases as needed
  switch (currencyCode) {
    case "GBP":
      return "UK Pound";
    // Add more cases as needed
    default:
      return currencyCode;
  }
}

// Helper function to get the currency name based on currency code
function getDestinationCurrencyName(currencyCode) {
  // Add more cases as needed
  switch (currencyCode) {
    case "MYR":
      return "Malaysian Ringgit";
    // Add more cases as needed
    default:
      return currencyCode;
  }
}

function displayError(message) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<p class="error">${message}</p>`;
}
