/* ==============================
   BLOOD DONATION FACTS
================================ */

const facts = [
    "❤️ One blood donation can save up to 3 lives.",
    "⏱️ Blood donation usually takes only a few minutes.",
    "🩸 Blood cannot be manufactured — it comes from generous donors.",
    "💪 Every healthy eligible donor can make a difference."
];

let factIndex = 0;

const factBox = document.getElementById("fact");
const dots = document.querySelectorAll(".dot");

setInterval(() => {

    factBox.style.opacity = "0";

    setTimeout(() => {

        factIndex++;

        if (factIndex >= facts.length) {
            factIndex = 0;
        }

        factBox.innerHTML = facts[factIndex];

        factBox.style.opacity = "1";

        dots.forEach(dot => {
            dot.classList.remove("active-dot");
        });

        dots[factIndex].classList.add("active-dot");

    }, 400);

}, 3000);



/* ==============================
   STATISTICS COUNTER
================================ */

function animateCounter(id, target, duration) {

    const element = document.getElementById(id);

    let start = 0;

    const increment = target / (duration / 20);

    const timer = setInterval(() => {

        start += increment;

        if (start >= target) {

            element.innerText = target;

            clearInterval(timer);

        } else {

            element.innerText = Math.floor(start);

        }

    }, 20);
}


animateCounter("donors", 12000, 2000);

animateCounter("lives", 8500, 2000);

animateCounter("hospitals", 150, 1500);


/* ==============================
   BUTTON DEMO
================================ */

const donorButtons = document.querySelectorAll(
    ".donor-card button, .outline-btn, .cta-btn"
);

donorButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Donor registration page will be connected here!"
        );

    });

});


const recipientButtons = document.querySelectorAll(
    ".recipient-card button, .primary-btn"
);

recipientButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Blood donor search page will be connected here!"
        );

    });

});