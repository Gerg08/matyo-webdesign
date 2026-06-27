const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

const form = document.querySelector("form");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        formMessage.textContent = "Köszönöm! Hamarosan válaszolok.";
    });
}
