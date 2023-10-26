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
  displayCurrentPlayer,
  displayTwoPlayerDescription,
  displayTwoPlayerScores,
} from "./dom";

let submitButton = document.getElementById("submit");
let inputForm = document.getElementById("player-input");
let currentPlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

// switch between player one and player two in two player mode
function switchPlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  return currentPlayer;
}

function addToPlayerScore(currentPlayer, triesTaken) {
  if (currentPlayer == 1) {
    playerOneScore += triesTaken;
  } else {
    playerTwoScore += triesTaken;
  }
}

// function that runs the game when it is two player
function playGameTwoPlayer(maxTries, tries, round, mode) {
  //displays information about round, tries left and range
  displayTwoPlayerDescription();
  displayRoundAndTries(round, tries);
  displayNumberRange(round);
  displayCurrentPlayer(currentPlayer);
  let targetNumber = generateRandomNumber(round);
  console.log(targetNumber);
  if (round < 11) {
    inputForm.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        // updates the tries # parameter if the guess was incorrect
        let triesCheck = twoPlayerValidateGuess(
          targetNumber,
          maxTries,
          tries,
          round,
          mode
        );
        if (triesCheck == -1) tries--;
      }
    });
    submitButton.addEventListener("click", function () {
      // updates the tries # parameter if the guess was incorrect
      let triesCheck = twoPlayerValidateGuess(
        targetNumber,
        maxTries,
        tries,
        round,
        mode
      );
      if (triesCheck == -1) tries--;
    });
  } else {
    let winner;
    if (playerOneScore < playerTwoScore) winner = "Player One Wins";
    else if (playerTwoScore < playerOneScore) winner = "Player Two Wins";
    else winner = "It is a tie";
    displayTwoPlayerScores(playerOneScore, playerTwoScore, winner);
  }
}

function twoPlayerValidateGuess(targetNumber, maxTries, tries, round, mode) {
  let playerGuess, currentTries;
  currentTries = tries;
  if (currentTries > 0) {
    playerGuess = acceptPlayerInput();
    let output = checkPlayerGuess(playerGuess, targetNumber, currentTries);
    displayResponse(output);
    if (output == 0) {
      let triesTaken = maxTries - currentTries;
      addToPlayerScore(currentPlayer, triesTaken);
      if (currentPlayer == 2) {
        round++;
      }
      switchPlayer();
      tries = createTries(mode, round);
      playGameTwoPlayer(maxTries, tries, round, mode);
    } else if (output != 2) {
      currentTries--;
      displayRoundAndTries(round, currentTries);
      return -1;
    }
  }
}

export { playGameTwoPlayer };
