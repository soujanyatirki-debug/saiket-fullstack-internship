document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;
    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("emailAddress").value.trim();
    let message = document.getElementById("userMessage").value.trim();
    // Getting form elements by ID
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }
    if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
        isValid = false;
    }
    if (isValid) {
        alert("Thank you! Your message has been submitted.");
        document.getElementById("contactForm").reset();
    }
});