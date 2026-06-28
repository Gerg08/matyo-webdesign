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


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if(form){
    form.addEventListener("submit", async function(e){
        e.preventDefault();

        formMessage.textContent = "Küldés folyamatban...";
        formMessage.style.color = "#CBD5E1";

        const formData = new FormData(form);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if(result.success){
            formMessage.textContent = "Köszönöm! Az üzeneted sikeresen elküldve.";
            formMessage.style.color = "#22C55E";
            form.reset();
        }else{
            formMessage.textContent = "Hiba történt. Próbáld újra később.";
            formMessage.style.color = "#EF4444";
        }
    });
}
