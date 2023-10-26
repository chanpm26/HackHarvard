// functions that handle dom interactions and displays

function showDifficultyModeScreen() {
  let difficultyModeScreen = document.getElementById("difficulty-screen");
  let playerModeScreen = document.getElementById("player-screen");
  playerModeScreen.classList.add("hidden");
  difficultyModeScreen.classList.remove("hidden");
}

function showMainScreen() {
  let modeScreen = document.getElementById("difficulty-screen");
  let mainScreen = document.getElementById("main");
  modeScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
}

// function that displays the round and tries remaining
function displayRoundAndTries(round, tries) {
  let roundContainer = document.getElementById("round");
  roundContainer.textContent = `Round ${round}. Tries Left: ${tries}`;
}

// function that displays the range of numbers to guess from (dependent on mode)
function displayNumberRange(round) {
  let rangeContainer = document.getElementById("number-range");
  if (round <= 10) {
    rangeContainer.textContent = `The range is from 0 to 50`;
  } else if (round <= 25) {
    rangeContainer.textContent = `The range is from 0 to 100`;
  } else {
    rangeContainer.textContent = `The range is from 0 to 250`;
  }
}

// function that displays whether the player's guess is over, under or correct
function displayResponse(relativeGuess) {
  let overOrUnderContainer = document.getElementById("over-or-under");
  if (relativeGuess == 0) {
    overOrUnderContainer.textContent = "Correct Guess!";
  } else if (relativeGuess == -1) {
    overOrUnderContainer.textContent = "(Your guess is too small)";
  } else if (relativeGuess == 1) {
    overOrUnderContainer.textContent = "(Your guess is too large)";
  } else {
    overOrUnderContainer.textContent = "(Your input is not valid)";
  }
}

function displayCurrentPlayer(player) {
  let currentPlayerContainer = document.getElementById("current-player");
  currentPlayerContainer.classList.remove("hidden");
  if (player == 1) {
    currentPlayerContainer.textContent = "Player 1's Turn";
  } else {
    currentPlayerContainer.textContent = "Player 2's Turn";
  }
}

function displayTwoPlayerDescription() {
  let description = document.getElementById('description') 
  description.innerText = "You are in two player mode. Players will take turns guessing the number for 10 rounds. The score is counted by totaling the number of tries a player takes to guess a number correctly. Like golf, whichever player has the LOWER score at the end wins."
  description.style.fontSize = "1.3rem";
}

function displayTwoPlayerScores(playerOneScore, playerTwoScore, winner) {
  let scoreScreen = document.getElementById('player-scores');
  let mainScreen = document.getElementById("main");
  let playerOneScoreContainer = document.getElementById('player-one-score');
  playerOneScoreContainer.innerText = `Player One Score: ${playerOneScore}`;
  let playerTwoScoreContainer = document.getElementById('player-two-score');
  playerTwoScoreContainer.innerText = `Player Two Score: ${playerTwoScore}`;
  let winnerContainer = document.getElementById('winner');
  winnerContainer.innerText = winner;
  mainScreen.classList.add('hidden');
  scoreScreen.classList.remove('hidden');
} 

export {
  displayResponse,
  displayRoundAndTries,
  displayNumberRange,
  showDifficultyModeScreen,
  showMainScreen,
  displayCurrentPlayer,
  displayTwoPlayerDescription,
  displayTwoPlayerScores,
};
