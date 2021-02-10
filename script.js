const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

// Need to be able to click it and hide the menu back
// Fixed it, had to adjust the button active transition
