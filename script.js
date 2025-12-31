// LOGIN FORM
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        document.getElementById("loginMessage").innerText =
            "Welcome! Login successful.";
    } else {
        document.getElementById("loginMessage").innerText =
            "Please fill in all fields.";
    }
});

// FEEDBACK FUNCTION
function sendFeedback() {
    let feedback = document.getElementById("feedbackText").value;

    if (feedback.trim() === "") {
        document.getElementById("feedbackMessage").innerText =
            "Please write some feedback.";
    } else {
        document.getElementById("feedbackMessage").innerText =
            "Thank you for your feedback!";
        document.getElementById("feedbackText").value = "";
    }
}
