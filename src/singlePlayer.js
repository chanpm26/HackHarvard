
import {
    generateRandomNumber,
    createTries,
    acceptPlayerInput,
    checkPlayerGuess,
  } from "./logic";
  import {
    displayNumberRange,
    displayRoundAndTries,
    displayResponse,
  } from "./dom";

let submitButton = document.getElementById("submit");
let inputForm = document.getElementById("player-input");

// function that runs the game when it is only single player
function playGameSinglePlayer(tries, round, mode) {
    //displays information about round, tries left and range
    displayRoundAndTries(round, tries);
    displayNumberRange(round);
    let targetNumber = generateRandomNumber(round);
    inputForm.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        // updates the tries # parameter if the guess was incorrect
        let triesCheck = singlePlayerValidateGuess(targetNumber, tries, round, mode);
        if (triesCheck == -1) tries--;
      }
    });
    submitButton.addEventListener("click", function () {
      // updates the tries # parameter if the guess was incorrect
      let triesCheck = singlePlayerValidateGuess(targetNumber, tries, round, mode);
      if (triesCheck == -1) tries--;
    });
  }
  
  // function to validate the player's guess and controls
  // the display of tries and rounds
  function singlePlayerValidateGuess(targetNumber, tries, round, mode) {
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
        playGameSinglePlayer(tries, round, mode);
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

  export { playGameSinglePlayer }