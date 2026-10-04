// =========================
// PORTFOLIO JAVASCRIPT
// =========================


// =========================
// 1. NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// 2. SCROLL REVEAL
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

});


// =========================
// 3. CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[name="name"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[name="email"]'
    ).value.trim();

    const message = contactForm.querySelector(
        'textarea[name="message"]'
    ).value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all required fields.");

        return;

    }


    alert(`Thank you ${name}! Your message has been received.`);

    contactForm.reset();

});


// =========================
// 4. CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Your Name. All Rights Reserved.`;