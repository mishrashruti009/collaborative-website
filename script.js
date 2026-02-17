
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-links a");

if (links.length > 0) {
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#6c63ff";
            link.style.fontWeight = "600";
        }
    });
}


// Contact Form Alert
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}
