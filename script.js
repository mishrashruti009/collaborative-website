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
}
