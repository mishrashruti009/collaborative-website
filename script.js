async function buyPlan(planName, price) {

    const userEmail = prompt("Enter your email:");

    if (!userEmail) {
        alert("Email is required!");
        return;
    }

    const response = await fetch("http://localhost:5000/api/buy-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmail,
            plan: planName,
            amount: price
        })
    });

    const data = await response.json();
    alert(data.message);

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
  main
}
