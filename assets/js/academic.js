document.addEventListener("DOMContentLoaded", function () {
    const qualificationsContainer = document.getElementById("qualificationsContainer");

    // Sample data - replace with your academic qualifications and work experience
    const qualificationsData = [
        { title: "Masters in Computer Science (Software Engineering)", year: "June 2024" },
        { title: "Computer Hardware Basics Certification", issuedBy: "Cisco", year: "Oct 2023" },
        { title: "Introduction To Cybersecurity Certification", issuedBy: "Cisco", year: "Oct 2023" },
        { title: "TEFL top up in Young Learners, Business English, and Online & 1:1", year: "Oct 2023" },
        { title: "TEFL Level 5 (Teach English as a Foreign Language)", year: "Sep 2023" },
        { title: "AWS Academy Cloud Foundation Certification", year: "June 2023" },
        { title: "Software Development (bootcamp)", year: "Dec 2022" },
        { title: "Bachelor’s degree in Business Management", year: "July 2022" },
        { title: "Level 5 award in Leadership & Management (8607-11)", issuedBy: "ILM", year: "2021" },
        { title: "Access to Higher Education in Business Management", year: "2019" },
        { title: "GCSE pass in Maths, English, Science, Arabic & Resistant Materials", year: "2014" }
        // Add more qualifications as needed
    ];

    // Create and append qualification elements
    qualificationsData.forEach(qualification => {
        const qualificationElement = document.createElement("div");
        qualificationElement.classList.add("qualification");

        qualificationElement.innerHTML = `
            <h2>${qualification.title} - ${qualification.year}</h2>
            ${qualification.issuedBy ? `<p>Issued by: ${qualification.issuedBy}</p>` : ""}
        `;

        qualificationsContainer.appendChild(qualificationElement);
    });
});
