// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Active Navbar Link Highlight
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#6c63ff";
        link.style.fontWeight = "600";
    }
});


// Contact Form Alert
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}
