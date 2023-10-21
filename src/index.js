import { generateRandomNumber, checkPlayerGuess, acceptPlayerInput, createTries } from "./logic";
import { displayNumberRange, displayResponse, displayRoundAndTries } from "./dom";

let round = 1;
let submitButton = document.getElementById('submit');
let tries, mode;

// function that runs the game
function playGame(mode, tries) {
    //displays information about round, tries left and range
    displayRoundAndTries(round, tries);
    displayNumberRange(round);
        let targetNumber = generateRandomNumber(round);
        let playerGuess;
        submitButton.addEventListener('click', function() {
            // allow play if tries remaining
            if (tries > 0) {
                playerGuess = acceptPlayerInput();
                let output = checkPlayerGuess(playerGuess, targetNumber, tries);
                displayResponse(output);
                // if correct then move to next round
                if (output == 0) {
                    round++;
                    tries = createTries(mode, round);
                    playGame(mode, tries);
                // if incorrect, tries goes down
                } else {
                    tries = tries-1;
                    displayRoundAndTries(round, tries);
                }
            } else {
                // if out of tries, the page refreshes to start over
                location.reload();
            }
    })
    
}


// function that displays the main game screen after selecting mode
// and triggers the playGame() function
function showMainScreen() {
    let easyModeButton = document.getElementById('easy');
    let mediumModeButton = document.getElementById('medium');
    let hardModeButton = document.getElementById('hard');
    easyModeButton.addEventListener('click', function() {
        // DOM effect
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        // generates max tries
        mode = "easy";
        let maxTries = createTries(mode, round);
        tries = maxTries;
        // runs game
        playGame(mode, tries);
    })
    mediumModeButton.addEventListener('click', function() {
        // DOM effect
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        // generates max tries
        mode = "medium";
        let maxTries = createTries(mode, round);
        tries = maxTries;
         // runs game
        playGame(mode, tries);
        
    })
    hardModeButton.addEventListener('click', function() {
        // DOM effect
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        // generates max tries
        mode = "hard";
        let maxTries = createTries(mode, round);
        tries = maxTries;
        // runs game
        playGame(mode, tries);
    })
    
}


showMainScreen();