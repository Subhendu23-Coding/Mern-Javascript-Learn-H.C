# Project related to DOM

## project Link

[Click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## * Color Scheme Bg_Color_Switcher_Page
## Project 1 
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bg_Color_Switcher_Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="canvas">        
         <h1>Color Scheme Bg_Color_Switcher_Page</h1>
         <span class="button" id="magenta"></span>
         <span class="button" id="yellow"></span>
         <span class="button" id="green"></span>
         <span class="button" id="red"></span>
         <span class="button" id="skyblue"></span>
         <span class="button" id="black"></span>
    </div>
    <h2>
        Try Cliking on one the color above
        <span>
            to change the background color of this page!
        </span>
    </h2>
</div>
<script src="script.js"></script>
</body>
</html>
```
### CSS
```css
html {
margin: 0;
}

span{
    display: block;
}
.canvas{
    margin: 100px auto 100px;
    width: 500px;
    text-align: center;
}

.button{
    width: 50px;
    height: 100px;
    border: solid;
    display: inline-block;
    border-radius: 9%;
    border-color:black;
    margin: 5px;
}
#magenta{
    background-color: magenta;
}
#yellow{
    background-color: yellow;
}
#green{
    background-color: green;
}
#red{
    background-color: red;
}
#skyblue{
    background-color: skyblue;
}
#black{
    background-color: black;
}
```
#### Javascript

```Javascript

const buttons = document.querySelectorAll('.button');  
const body = document.querySelector("body");

buttons.forEach(function(button) {  
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        
        if (e.target.id === 'magenta') {
            body.style.backgroundColor = e.target.id;  
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;  
        }

        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;  
        }

        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;  
        }

        if (e.target.id === 'skyblue') {
            body.style.backgroundColor = e.target.id;  
        }

        if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;  
        }
    });
});

```
# BIM Calculator
# Project 2
## HTML
 ```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IBM Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
        <h1>Body Mass Index Calculator</h1>
        <form>
            <p>
                <label>Height in Centimeter</label>
                <input type="text" id="height"/>
            </p>
            <p>
                <label>Weight in Kilograms:</label>
                <input type="text" id="weight"/>
            </p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide">
                <h3>Body Mass Index Weight Guide</h3>
                <p>Under Weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>
            </div>
        </form>
  </div>
</body>
<script src="bmi.js"></script>
</html>

```
## CSS
```CSS

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    margin: 0;
    background: linear-gradient(40deg, #e2e2eb, #8915d6,#e2e2eb);

}
.container{
display: flex;
flex-direction: column;
width: 600px;
height: auto;
background-color: fuchsia;
padding-left: 10px;
text-align: center;
border-radius: 5px;

}

input {
    width: 50%;
    padding: 8px;
    margin-top: 5px;
    border: 0.1px solid #ccc;
    border-radius: 4px;
    border: none;
}

button {
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#results {
    margin-top: 20px;
    font-weight: bold;
}

#weight-guide {
    margin-top: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    width: 90%;
    margin: 24px;
    text-align: center;
    height: auto;
}
```

## Javascript

```Javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi > 0 && bmi < 18.6) {
            results.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span> 'You are under weighted'`;
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span> 'You are totally fit'`;
            
        } else if(bmi > 24.9) {
            results.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span> 'You are over weighted'`;
        } else {
            results.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span>`;
        }
    
    }
});

```

# Digital Clock
## Project 3
## HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Local Time</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <!-- <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="https://www.google.com">Google</a> 
    </nav>  -->

    <div class="center">
        <div id="banner">
            <span> Walcome Your Local Time</span>
        </div>
        <div id="clock"></div>
    </div>
</body>
<script src="clock.js"></script>
</html>

```
# CSS
```CSS
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #f0b7a3, #88c2e6) ;
    color: #333;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto; 
}

#banner {
    background-color: #f8e4c6;  
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: initial;
    font-weight: bold;
    color: #667abe;
}

#clock {
    font-size: 5rem;
    font-weight: bold;
    margin-top: 30px;
    color: #f30c33; 
}


```
## Javascript
```Javascript
// const clock = document.querySelector('#clock'); any one used

// const clock = document.getElementById('clock')
// // let date = new Date();
// // console.log(date.toLocaleTimeString);


const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date(); 
    console.log(date.toLocaleTimeString());  
    clock.innerHTML = date.toLocaleTimeString();  
}, 1000);

```

# Guess The Number Game
## Project 4
## HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <h1>Number Guessing Game</h1>
        <p>Try and guess a random number between 1 and 100</p>
        <p>You have 10 attempts to guess the right number.</p>
        <br>
        <form class="form">
            <label for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField" placeholder="Enter your guess">
            <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">
        </form>

        <div class="resultPares">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult"></span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```
## CSS
```CSS
html {
    font-family: sans-serif;
}

body {
    width: 300px;
    max-width: 750px;
    min-width: 480px;
    margin: 0 auto;
    background-color: grey;
}

.lastResult {
    color: #fff;
    padding: 7px;
}

.guesses {
    color: #fff;
    padding: 7px;
}

button {
    background-color: #16161616;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    /* margin-left: 50px; */
}

#subt {
    background-color: #161616;
    color: #fff;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    border-style: none;
    margin-top: 50px;
    /* margin-left: 75px; */
}

#guessField {
    color: #000;
    width: 250px;
    height: 50px;
    font-size: 30px;
    border-style: none;
    margin-top: 25px;

    /* margin-left: 50px; */
    border: 5px solid #6c6d6d;
    text-align: center;
}

#guess {
    font-size: 55px;
    /* margin-left: 90px; */
    margin-top: 120px;
    color: #fff;
}

.guesses {
    background-color: #7a7a7a;
}

#wrapper {
    box-sizing: border-box;
    text-align: center;
    width: 450px;
    height: 550px;
    background-color: #474747;
    color: #fff;
    font-size: 25px;
}

h1 {
    background-color: #161616;
    color: #fff;
    text-align: center;
}

p {
    font-size: 16px;
    text-align: center;
    color: #fff;
}
```
## Javascript
```Javascript
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

let prevGuess = []; 
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
    numGuess++;   
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
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    const guessesLeft = maxGuesses - numGuess - 1; 
    remaining.innerHTML = `${guessesLeft}`;
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        displayMessage("");
        randomNumber = Math.floor(Math.random() * 100) + 1; // 
        numGuess = 0; // Reset numGuess for the new game
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxGuesses}`;
        userInput.removeAttribute('disabled'); 
        startOver.removeChild(p); 
        playGame = true;
    });
}

```

# KeyCodeChecker
## Project 5

## HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KeyCodeChecker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="project">
        <div id="insert">
            <div class="color">Press a key and watch the magic</div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```
## CSS
```CSS
/* Table Styles */
table, th, td {
    border: 3px solid #e7e7e7;
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
}

/* Project Container Styles */
.project {
    background-color: #1c1c1c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    font-family: Arial, sans-serif;
}

/* Color Styling for Text */
.color {
    font-size: 40px;
    color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.color table {
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
    background-color: #333;
}

th {
    background-color: #444;
    color: #fff;
}

td {
    background-color: #555;
    color: #fff;
}

/* Make sure the body has some padding around */
body {
    margin: 0;
    padding: 0;
}

```
## Javascript
```JS

const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});

```
# UnlimitedColors_Change
## Project 6
## HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlimited Colors</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
    <script src="script.js"></script>
</html>

```

```js

// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 10)];
    };
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    } else {
        alert("Color changer is already running!!");
    };
    function changeBgColor(){
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor(),` ${localTime}`);
    };
};
const stopChangingColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    } else {
        alert("Please start the color changer first!!");
    };
};

// console.log(Math.floor(Math.random() * 16));
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```


