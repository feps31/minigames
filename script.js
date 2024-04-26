// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    const result = document.getElementById('guessResult');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`;
        disableInputAndButton();
    } else if (guess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }
}

function disableInputAndButton() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}
