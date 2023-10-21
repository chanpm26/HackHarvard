
let previousNumbers = [];
let relativeGuess = "";

// function to generate random number
// range of possible numbers is dependent on the round

function generateRandomNumber(round) {
    let number;
    if (round <= 10) {
        number = Math.floor(Math.random() * 51);
        while (checkPreviousNumbers(number, previousNumbers)) {
            number = Math.floor(Math.random() * 51);
        };
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
    })
    return duplicate;
}


// function to take in player guess from the input bar
function acceptPlayerInput() {
    let inputForm = document.getElementById('player-input');
    let playerGuess = inputForm.value;
    return playerGuess;
}

//function to check whether the player guess is correct
function checkPlayerGuess(guess, number) {
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


export {relativeGuess, generateRandomNumber,  checkPlayerGuess, acceptPlayerInput};