document.addEventListener("DOMContentLoaded", function () {
    const testimonialsContainer = document.getElementById("testimonialsContainer");

    // Sample data - replace with your testimonials
    const testimonialsData = [
        {
            name: "Mehivish  Hussain",
            role: "Chief Technology Officer",
            languages: "French | Italian | Japanese | English | Spanish",
            feedback: " Working closely with Abdullah Barakat, and I wholeheartedly  recommend him as a highly skilled and dedicated Software Engineer."
        },
      
        {
            name: "Ahmed Lababidi ",
            role: "Technical Sales Engineer",
            feedback: "Abdullah is an outstanding software engineer. His deep technical expertise, commitment to quality, and strong teamwork makes him a valuable asset. I highly recommend Abdullah for any software development role"
        },
        {
            name: "Abdul Mohamed",
            role: "Sales Engineer (Senior), EMEA",
            feedback: "Abdullah excels as a software engineer, showcasing profound technical knowledge, unwavering commitment to quality, and a robust team-oriented approach, rendering him a valuable asset. I wholeheartedly endorse Abdullah for any software development position."
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
