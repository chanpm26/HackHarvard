function showMainScreen() {
    let easyModeButton = document.getElementById('easy');
    let mediumModeButton = document.getElementById('medium');
    let hardModeButton = document.getElementById('hard');
    easyModeButton.addEventListener('click', function() {
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        
    })
    mediumModeButton.addEventListener('click', function() {
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        
    })
    hardModeButton.addEventListener('click', function() {
        let modeScreen = document.getElementById('mode-select-screen');
        let mainScreen = document.getElementById('main')
        modeScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        
    })
}

function displayRound(round) {
    let roundContainer = document.getElementById('round');
    roundContainer.textContent = `Round ${round}`;
}


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


function displayResponse(relativeGuess) {
    let overOrUnderContainer = document.getElementById('over-or-under');
        if (relativeGuess == 0) {
            overOrUnderContainer.textContent = "Correct Guess!";
        } else if (relativeGuess == -1) {
            overOrUnderContainer.textContent = "(Your guess is too small)";
        } else {
            overOrUnderContainer.textContent = "(Your guess is too big)";
    
    }
}


export { displayResponse, displayRound, displayNumberRange, showMainScreen };