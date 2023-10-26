import {
  createTries,
} from "./logic";
import {
  showDifficultyModeScreen,
  showMainScreen,
} from "./dom";
import {
  playGameSinglePlayer
} from "./singlePlayer"
import { playGameTwoPlayer } from "./twoPlayer";

let round = 1;
let tries, mode, playerCount;

//function that shows the difficulty mode screen
function pickPlayerMode() {
  let onePlayerMode = document.getElementById("one-player");
  let twoPlayerMode = document.getElementById("two-player");
  onePlayerMode.addEventListener("click", function () {
    showDifficultyModeScreen();
    playerCount = 1;
    pickGameDifficulty();
  });
  twoPlayerMode.addEventListener("click", function () {
    showDifficultyModeScreen();
    playerCount = 2;
    pickGameDifficulty();
  });
}

// function that displays the main game screen after selecting mode
// and triggers the playGame() function with proper difficulty
function pickGameDifficulty() {
  let easyModeButton = document.getElementById("easy");
  let mediumModeButton = document.getElementById("medium");
  let hardModeButton = document.getElementById("hard");
  easyModeButton.addEventListener("click", function () {
    showMainScreen();
    mode = "easy";
    let maxTries = createTries(mode, round);
    tries = maxTries;
    playCorrectMode(tries, maxTries, playerCount, round, mode);
  });
  mediumModeButton.addEventListener("click", function () {
    showMainScreen();
    mode = "medium";
    let maxTries = createTries(mode, round);
    tries = maxTries;
    playCorrectMode(tries, maxTries, playerCount, round, mode);
  });
  hardModeButton.addEventListener("click", function () {
    showMainScreen();
    mode = "hard";
    let maxTries = createTries(mode, round);
    tries = maxTries;
    playCorrectMode(tries, maxTries, playerCount, round, mode);
  });
}

function playCorrectMode(tries, maxTries, playerCount, round, mode) {
  if (playerCount == 2) {
      playGameTwoPlayer(maxTries, tries, round, mode);
  }
  else {
      playGameSinglePlayer(tries, round, mode);
  }
}


function runGame() {
  pickPlayerMode();
}

runGame();
