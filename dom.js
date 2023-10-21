import {round} from './logic';


function displayRound() {
    let roundContainer = document.getElementById('round');
    roundContainer.textContent = `Round: ${round}`;
}

function displayNumberRange() {
    let rangeContainer = document.getElementById('number-range');
    if (range <= 10) {
        rangeContainer.textContent = `The range is from 0 to 50`;
    } else if (range <= 25) {
        rangeContainer.textContent = `The range is from 0 to 100`;
    } else {
        rangeContainer.textContent = `The range is from 0 to 250`;
    }
}

