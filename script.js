// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= BUY PLAN FUNCTION =================

function buyPlan(planName, price) {
    alert(
        "You selected:\n\n" +
        planName +
        "\nPrice: ₹" +
        price +
        " per month\n\nRedirecting to checkout..."
    );

    // Example future redirect
    // window.location.href = "checkout.html";
}
