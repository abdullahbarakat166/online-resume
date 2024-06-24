document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById("skillsContainer");

    // Sample data - replace with your skills
    const skillsData = [
        "Languages: English and Arabic",
        "Qualified first aider",
        "IT Skills: Microsoft Office, Excel & QuickBooks",
        "Coding Skills: JavaScript, HTML, CSS, React & DOM, Express JS, Node JS, MySQL",
        "Flexible and willing to travel, with a full UK driving license",
        "Able to prioritize and plan effectively",
        "Able to collaborate effectively in both, verbally and in writing",
        "Able to manage teams, time, quality, and costings"
        // Add more skills as needed
    ];

    // Create and append skill elements
    skillsData.forEach(skill => {
        const skillElement = document.createElement("div");
        skillElement.classList.add("skill");
        if (skill.includes("Languages: English and Arabic")) {
            skillElement.classList.add("highlighted");
        }

        skillElement.innerHTML = `<h2>${skill}</h2>`;
        skillsContainer.appendChild(skillElement);
    });
});
