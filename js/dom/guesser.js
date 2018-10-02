/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
 */

// Game values
let min = 1,
    max = 10,
    winningNum = Math.ceil(Math.random() * 10),
    guessLeft = 3,
    isGameOver = false;


// UI element
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min.toString();
maxNum.textContent = max.toString();

// Listen for guess
guessBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // current state is game over, restore the game
    if (isGameOver) {
        guessInput.value = '';
        window.location.reload();
    } else {
        let guess = parseInt(guessInput.value);

        // validate input
        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
            return;
        }

        // check if won
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct answer! You win.`);
        } else {
            guessLeft--;

            // check guesses left
            if (guessLeft === 0) {
                gameOver(false, `Game over!, the correct number was ${winningNum}.`);
            } else {
                guessInput.value = '';
                guessInput.style.borderColor = 'orange';
                let hint = guess > winningNum ? 'Too high' : 'Too low';
                setMessage(`${hint}, ${guess} is not correct! ${guessLeft} guesses left.`, 'orange');
            }
        }
    }
});

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessInput.style.color = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.classList.remove('button-primary');
    guessBtn.classList.add('button-default');

    isGameOver = true;
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


