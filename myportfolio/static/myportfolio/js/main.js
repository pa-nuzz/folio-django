// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX - 15 + "px";
    blur.style.top = e.clientY - 15 + "px";
});

// TERMINAL INTRO
const terminal = document.querySelector(".terminal-text");
const introText = [
    "Booting Anuj.dev...",
    "Loading AI Modules...",
    "Connecting to GitHub...",
    "System Ready."
];

let i = 0;
function typeLine() {
    if (i < introText.length) {
        terminal.innerHTML += introText[i] + "<br>";
        i++;
        setTimeout(typeLine, 700);
    } else {
        setTimeout(() => {
            document.getElementById("terminal-intro").style.display = "none";
        }, 1000);
    }
}
typeLine();

// TYPING HERO
new Typed(".typing", {
    strings: [
        "AI Systems Engineer",
        "FastAPI Architect",
        "Automation Specialist",
        "Backend Performance Optimizer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    line_linked: { enable: true }
  }
});

// 3D TILT EFFECT
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// THEME TOGGLES
document.getElementById("theme-toggle").onclick = () =>
    document.body.classList.toggle("ultra-dark");

document.getElementById("matrix-toggle").onclick = () =>
    document.body.classList.toggle("matrix");
