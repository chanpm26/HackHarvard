let previousNumbers = [];

function createMode(playerCount) {
  if (playerCount == 1) {
  }
}

// function that determines the number of tries
// that a player has dependent on the mode selected
function createTries(mode, round) {
  let max_tries;
  if (round <= 10) {
    if (mode == "easy") {
      max_tries = 40;
    } else if (mode == "medium") {
      max_tries = 20;
    } else if (mode == "hard") {
      max_tries = 10;
    }
  } else if (round > 10 && round <= 25) {
    if (mode == "easy") {
      max_tries = 75;
    } else if (mode == "medium") {
      max_tries = 40;
    } else if (mode == "hard") {
      max_tries = 20;
    }
  } else {
    if (mode == "easy") {
      max_tries = 185;
    } else if (mode == "medium") {
      max_tries = 100;
    } else if (mode == "hard") {
      max_tries = 45;
    }
  }
  return max_tries;
}

// function to generate random number
// range of possible numbers is dependent on the round
// utilizes while loop to prevent repeats

function generateRandomNumber(round) {
  let number;
  if (round <= 10) {
    number = Math.floor(Math.random() * 51);
    while (checkPreviousNumbers(number, previousNumbers)) {
      number = Math.floor(Math.random() * 51);
    }
  } else if (round <= 25 && round > 11) {
    number = Math.floor(Math.random() * 101);
    while (checkPreviousNumbers(number, previousNumbers)) {
      number = Math.floor(Math.random() * 101);
    }
  } else if (round > 25) {
    number = Math.floor(Math.random() * 251);
    while (checkPreviousNumbers(number, previousNumbers)) {
      number = Math.floor(Math.random() * 251);
    }
  }
  return number;
}

// function to check that the number selected has not already been picked
function checkPreviousNumbers(number, array) {
  let duplicate = false;
  array.map((num) => {
    if (num == number) duplicate = true;
  });
  return duplicate;
}

// function to take in player guess from the input bar
function acceptPlayerInput() {
  let inputForm = document.getElementById("player-input");
  let playerGuess = inputForm.value;
  return playerGuess;
}

//function to check whether the player guess is correct
function checkPlayerGuess(guess, number) {
  if (isNaN(guess)) {
    return 2;
  } else {
    let relativeGuess;
    if (number == guess) {
      relativeGuess = 0;
      previousNumbers.push(number);
    } else if (guess > number) {
      relativeGuess = 1;
    } else if (guess < number) {
      relativeGuess = -1;
    }
    return relativeGuess;
  }
}

// switch between player one and player two in two player mode
function switchPlayer(currentPlayer) {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

export {
  generateRandomNumber,
  checkPlayerGuess,
  acceptPlayerInput,
  createTries,
  switchPlayer,
};
