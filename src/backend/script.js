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
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.message.includes("successfully") || data.message.includes("Login successful")) {
                    document.getElementById(formId).reset();
                }
                if (data.message.includes("Login successful")) {
                    // Redirect to a dashboard or another route
                    window.location.href = "/dashboard"; 
                }
            })            
            .catch(error => {
                console.error(`Error during ${url.slice(1)}:`, error);
                alert("An error occurred. Please try again.");
            });
        };
    };

    document.getElementById("registerForm").addEventListener("submit", handleFormSubmit('/register', "registerForm"));
    document.getElementById("loginForm").addEventListener("submit", handleFormSubmit('/login', "loginForm"));
});

// Game save and load functions
function save() {
    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('score', JSON.stringify(score));
}

function load() {
    player = JSON.parse(localStorage.getItem('player'));
    score = JSON.parse(localStorage.getItem('score'));
}
