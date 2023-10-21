document.addEventListener("DOMContentLoaded", () => {

    const handleFormSubmit = (url, formId) => {
        return (event) => {
            event.preventDefault();
            const formData = new URLSearchParams(new FormData(event.target)).toString();

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not successful.");
                }
                return response.text();
            })
            .then(message => {
                alert(message);
                if (message.includes("successfully") || message.includes("Login successful")) {
                    document.getElementById(formId).reset();
                }
                if (message.includes("Login successful")) {
                    // Redirect to a index or another route
                    window.location.href = "/index.html"; 
                }
            })
            .catch(error => {
                console.error(`Error during ${url.slice(1)}:`, error);
                alert("An error occurred. Please try again.");
            });
        };
    };

    document.getElementById("registerForm").addEventListener("submit", handleFormSubmit('/register', "registerForm")); // registerForm is the id of the form
    document.getElementById("loginForm").addEventListener("submit", handleFormSubmit('/login', "loginForm")); // loginForm is the id of the form
});

// Game save function to local storage
function save() {
    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('score', JSON.stringify(score));
}
// Load game data from local storage
function load() {
    player = JSON.parse(localStorage.getItem('player'));
    score = JSON.parse(localStorage.getItem('score'));
}
