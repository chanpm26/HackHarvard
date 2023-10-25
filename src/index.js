import { generateRandomNumber, createTries, acceptPlayerInput, checkPlayerGuess} from "./logic";
import { displayNumberRange, displayRoundAndTries, showDifficultyModeScreen, displayResponse,
showMainScreen, 
displayCurrentPlayer} from "./dom";

let round = 1;
let submitButton = document.getElementById('submit');
let inputForm = document.getElementById('player-input');
let tries, mode, playerCount;
let currentPlayer = 1;


// function to validate the player's guess and controls
// the display of tries and rounds
function validateGuess(targetNumber, tries) {
    let playerGuess, currentTries;
    currentTries = tries;   
    if (currentTries > 0) {
        playerGuess = acceptPlayerInput();
        let output = checkPlayerGuess(playerGuess, targetNumber, currentTries);
        displayResponse(output);
        // if correct then move to next round
        if (output == 0) {
            round++;
            tries = createTries(mode, round);
            playGame(tries, playerCount);
        // if incorrect, tries goes down
        } else if (output != 2) {
            currentTries--;
            displayRoundAndTries(round, currentTries);
            return -1;
        }
    } else {
        // if out of tries, the page refreshes to start over
        location.reload();
    }
}

// function that runs the game
function playGame(tries, playerCount) {
    //displays information about round, tries left and range
    if (playerCount == 2) {
        displayCurrentPlayer(currentPlayer);
    }
    displayRoundAndTries(round, tries);
    displayNumberRange(round);
        let targetNumber = generateRandomNumber(round);
        inputForm.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                // updates the tries # parameter if the guess was incorrect
                let triesCheck = validateGuess(targetNumber, tries);
                if (triesCheck == -1) tries--;
            }
          });
        submitButton.addEventListener('click', function() {
            // updates the tries # parameter if the guess was incorrect
            let triesCheck = validateGuess(targetNumber, tries);
            if (triesCheck == -1) tries--;
    });
    
}



//function that shows the difficulty mode screen
function pickPlayerMode() {
    let onePlayerMode = document.getElementById('one-player');
    let twoPlayerMode = document.getElementById('two-player');
    onePlayerMode.addEventListener('click', function() {
        showDifficultyModeScreen();
        playerCount = 1;
        pickGameDifficulty();
    })
    twoPlayerMode.addEventListener('click', function() {
        showDifficultyModeScreen();
        playerCount = 2;
        pickGameDifficulty();
    })
}


// function that displays the main game screen after selecting mode
// and triggers the playGame() function with proper difficulty
function pickGameDifficulty() {
    let easyModeButton = document.getElementById('easy');
    let mediumModeButton = document.getElementById('medium');
    let hardModeButton = document.getElementById('hard');
    easyModeButton.addEventListener('click', function() {
        showMainScreen();
        mode = "easy";
        let maxTries = createTries(mode, round);
        tries = maxTries;
        playGame(tries, playerCount);
    })
    mediumModeButton.addEventListener('click', function() {
        showMainScreen();
        mode = "medium";
        let maxTries = createTries(mode, round);
        tries = maxTries;
        playGame(tries, playerCount);
        
    })
    hardModeButton.addEventListener('click', function() {
        showMainScreen();
        mode = "hard";
        let maxTries = createTries(mode, round);
        tries = maxTries;
        playGame(tries, playerCount);

    })
}

function runGame() {
    pickPlayerMode();

}

runGame();
