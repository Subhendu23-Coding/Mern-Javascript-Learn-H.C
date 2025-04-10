let randomNumber = Math.floor(Math.random() * 100 + 1);
let numGuess = 0; // number of guesses made
const maxGuesses = 10;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // store previous guesses
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // validate the guess
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number higher than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    // print the message
    numGuess++; // Increment the number of guesses each time a guess is made.
    
    if (guess === randomNumber) {
        displayMessage('WOW !! You guessed it right');
        endGame();
    } else if (numGuess >= maxGuesses) {
        displayMessage(`Game Over! The random number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    // Display the guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    const guessesLeft = maxGuesses - numGuess - 1; // Update remaining guesses after increment
    remaining.innerHTML = `${guessesLeft}`;
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // Disable input after game over
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        // Start a new game
        displayMessage("");
        randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
        numGuess = 0; // Reset numGuess for the new game
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxGuesses}`;
        userInput.removeAttribute('disabled'); // Enable the input again
        startOver.removeChild(p); // Remove "Start New Game" button
        playGame = true;
    });
}