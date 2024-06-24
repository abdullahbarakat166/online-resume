document.addEventListener("DOMContentLoaded", function () {
    const qualificationsContainer = document.getElementById("qualificationsContainer");

    // Sample data - replace with your academic qualifications and work experience
    const qualificationsData = [
        { title: "Masters in Computer Science", institution: "Present", details: [
            "Designed an app for students with visual impairment using Kotlin and reflected upon my techniques.",
            "Used SPSS software to collect, analyze, and deploy data.",
            "Designed a membership management system using PHP and JavaScript.",
            "Written a report for a new company to move to a web-based infrastructure using the AWS platform.",
            "Written reports on cybersecurity, agile methodologies, effectiveness of software security measures, and the top 10 security flaws."
        ]},
        { title: "AWS Academy Cloud Foundation Certification", year: "2023", details: [
            "Cloud concepts, Economics, and Billing.",
            "AWS global infrastructure.",
            "AWS cloud security, Networking, and Content Delivery.",
            "Compute, Storage, and Databases.",
            "Cloud Architecture.",
            "Auto scaling and monitoring."
        ]},
        { title: "Software Development Bootcamp", year: "2022", details: [
            "Created many projects with HTML, CSS, JavaScript, DOM, React, API, Express JS, MongoDB, Node JS & SQL (available at Github.com).",
            "Completed multiple full-stack & MERN stack projects independently.",
            "Partnered with a team of developers to create, design, develop, and test high-quality software.",
            "Maintained software quality by performing bug fixes and code reviews."
        ]},
        { title: "Monolos Restaurant & Playhouse - Manager", year: "2015 - 2020", details: [
            "Provided outstanding customer service and handled escalated customers who may need assistance or problem-solving.",
            "Conducted regular audits of all compliance-related areas to ensure laws & regulations are met.",
            "Ran employee scheduling software & CRM software.",
            "Prepared and submitted all required compliance reports to senior managers.",
            "Monitored daily operations and labor management reporting.",
            "Ensured everyone is trained, safe & complying with their duties.",
            "Observed healthcare regulations and assisted allied healthcare professionals to ensure safety.",
            "Handled data selection and forwarding."
        ]}
        // Add more qualifications as needed
    ];

    // Create and append qualification elements
    qualificationsData.forEach(qualification => {
        const qualificationElement = document.createElement("div");
        qualificationElement.classList.add("qualification");

        qualificationElement.innerHTML = `
            <h2>${qualification.title} - ${qualification.year || qualification.institution}</h2>
            <ul>${qualification.details.map(detail => `<li>${detail}</li>`).join("")}</ul>
        `;

        qualificationsContainer.appendChild(qualificationElement);
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const testimonialsContainer = document.getElementById("testimonialsContainer");

    // Sample data - replace with your testimonials
    const testimonialsData = [
        {
            name: "Valérie Fauchon",
            role: "Retail | Business Development | MBA HRM",
            languages: "French | Italian | Japanese | English | Spanish",
            feedback: "Responsive, flexible, and insightful, Helga went above and beyond my expectations. She did impressive work, adding significant value to both my CV and LinkedIn Profile. Helga has been accurate to my needs, ensuring that I had the support I needed. Her work is a worthy investment. March 2019."
        },
        {
            name: "Valmai Jones",
            role: "Retail | Trading Manager",
            feedback: "I am pleased to tell you I have been successful in joining Tesco and am now in my second week of training. Your CV helped me to get a foot in the door, and I am very glad I used your service."
        },
        {
            name: "Sean Kemp",
            role: "Sales Director, Dublin",
            feedback: "Looks great. You've halved the volume and doubled the content value. Thanks a million."
        },
        {
            name: "John Fyfe",
            role: "Sales Engineer (Senior), EMEA",
            feedback: "Helga has done an excellent job - turning my old basic CV into something that makes me feel proud of my career accomplishments. Certainly, I am more confident of taking new challenges with the CV at my side. Highly recommended for anyone looking to update their CV."
        }
        // Add more testimonials as needed
    ];

    // Create and append testimonial elements
    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");

        testimonialElement.innerHTML = `
            <h2>${testimonial.name}</h2>
            <p>${testimonial.role}</p>
            ${testimonial.languages ? `<p>Languages: ${testimonial.languages}</p>` : ""}
            <p>${testimonial.feedback}</p>
        `;

        testimonialsContainer.appendChild(testimonialElement);
    });
});
