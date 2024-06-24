document.addEventListener("DOMContentLoaded", function () {
    // Add your JavaScript code here if needed

    // Function to open links in a new tab
    function openLinkInNewTab(selector) {
        const link = document.querySelector(selector);
        if (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                window.open(this.href, '_blank');
            });
        }
    }

    // Open email link in a new tab
    openLinkInNewTab('.contact-link a[href^="mailto"]');

    // Open phone number link in a new tab
    openLinkInNewTab('.contact-link span#phone-link');

    // Open LinkedIn link in a new tab
    openLinkInNewTab('.contact-link a[href^="https://www.linkedin.com"]');

    // Open GitHub link in a new tab
    openLinkInNewTab('.contact-link a[href^="https://github.com"]');
});



$(document).ready(function () {
    $("#contactForm").validate({
        rules: {
            fullName: "required",
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: true,
                phoneUS: true // Assuming you want US phone number format
            },
            subject: "required",
            message: {
                required: true,
                maxlength: 500
            }
        },
        messages: {
            fullName: "Please enter your full name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phoneNumber: {
                required: "Please enter your phone number",
                phoneUS: "Please enter a valid US phone number"
            },
            subject: "Please enter a subject",
            message: {
                required: "Please enter your message",
                maxlength: "Maximum 500 characters allowed"
            }
        },
        submitHandler: function (form) {
            // Your custom submit logic goes here
            alert('Form submitted successfully!');
        }
    });

    // Character counter for the message field
    $("#message").on("input", function () {
        var maxLength = 500;
        var currentLength = $(this).val().length;
        var charactersLeft = maxLength - currentLength;
        $("#charCounter").text("Characters left: " + charactersLeft);
    });
});