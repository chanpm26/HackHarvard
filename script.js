document.addEventListener("DOMContentLoaded", () => {

    // Register function
    const registerUser = (event) => {
        event.preventDefault();

        const formData = new URLSearchParams(new FormData(event.target)).toString();

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            if (message.includes("successfully")) {
                document.getElementById("registerForm").reset(); // Clear the form if registration is successful
            }
        })
        .catch(error => {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again.");
        });
    };

    // Login function
    const loginUser = (event) => {
        event.preventDefault();

        const formData = new URLSearchParams(new FormData(event.target)).toString();

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            if (message.includes("successful")) {
                document.getElementById("loginForm").reset(); 
                //need to add redirect or do some action after a successful login here
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        });
    };

    // Event listeners
    document.getElementById("registerForm").addEventListener("submit", registerUser);
    document.getElementById("loginForm").addEventListener("submit", loginUser);

});
