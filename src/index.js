import { generateRandomNumber, checkPlayerGuess, acceptPlayerInput } from "./logic";
import { displayNumberRange, displayResponse, displayRound, showMainScreen } from "./dom";

let round = 1;

function playGame() {
    displayRound(round);
    displayNumberRange(round);
    let targetNumber = generateRandomNumber(round);
    console.log(targetNumber);
    let submitButton = document.getElementById('submit');
    let playerGuess;
    submitButton.addEventListener('click', function() {
        playerGuess = acceptPlayerInput();
        let output = checkPlayerGuess(playerGuess, targetNumber);
        displayResponse(output);
        if (output == 0) {
            round++;
            playGame();
        }
    })
}

showMainScreen();
playGame();
