// function that displays the round and tries remaining
function displayRoundAndTries(round, tries) {
    let roundContainer = document.getElementById('round');
    roundContainer.textContent = `Round ${round}. Tries Left: ${tries}`;
}

// function that displays the range of numbers to guess from (dependent on mode)
function displayNumberRange(round) {
    let rangeContainer = document.getElementById('number-range');
    if (round <= 10) {
        rangeContainer.textContent = `The range is from 0 to 50`;
    } else if (round <= 25) {
        rangeContainer.textContent = `The range is from 0 to 100`;
    } else {
        rangeContainer.textContent = `The range is from 0 to 250`;
    }
}

// function that displays whether the player's guess is over, under or correct
function displayResponse(relativeGuess, tries) {
    let overOrUnderContainer = document.getElementById('over-or-under');
        if (relativeGuess == 0) {
            overOrUnderContainer.textContent = "Correct Guess!";
        } else if (relativeGuess == -1) {
            overOrUnderContainer.textContent = "(Your guess is too small)";
        } else {
            overOrUnderContainer.textContent = "(Your guess is too large)";
    
    }
}

function showLogIn() {
    let loginButton = document.getElementById('login');
    let screens = Array.from(document.getElementsByClassName('screen'));
    let loginPopUp = document.getElementById('login-popup');
    loginButton.addEventListener('click', function() {
        screens.map((screen) => screen.classList.add('hidden'));
        loginPopUp.classList.remove('hidden');
    })
}

function showRegister() {
    let registerButton = document.getElementById('register');
    let screens = Array.from(document.getElementsByClassName('screen'));
    let registerPopUp = document.getElementById('register-popup');
    registerButton.addEventListener('click', function() {
        screens.map((screen) => screen.classList.add('hidden'));        
        registerPopUp.classList.remove('hidden');
    })
}

function showHome() {
    let homeButton = document.getElementById('home');
    let screens = Array.from(document.getElementsByClassName('screen'));
    let modeScreen = document.getElementById('mode-select-screen');
    homeButton.addEventListener('click', function() {
        screens.map((screen) => screen.classList.add('hidden'));
        modeScreen.classList.remove('hidden');
    })
}

showLogIn();
showRegister();
showHome();

export { displayResponse, displayRoundAndTries, displayNumberRange };