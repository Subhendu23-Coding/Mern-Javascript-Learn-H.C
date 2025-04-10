// while Loop

let index = 0;

while (index <= 10) {
    console.log(`Value of index is: ${index}`);
    index = index + 2;
}

// Yeh while loop tab tak chalega jab tak index ki value 10 se chhoti ya barabar hai.
// Har iteration mein, index ko 2 se increment kiya jaayega (index = index + 2).
// Iska matlab, yeh loop 0, 2, 4, 6, 8, 10 tak chalega.

// Iterating through an Array with while loop

let myArray = ['flash', 'batman', 'superman', 'wonder woman'];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// Is loop mein hum ek array (myArray) ke elements ko iterate kar rahe hain.
// Jab tak arr ki value array ki length se kam hai, loop chalega.
// Har iteration mein, array ka ek element print hoga, aur arr ko 1 se increment kiya jayega (arr = arr + 1).


// do-while Loop
// do {
    
// } while (condition);

// let score = 11;

let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);
//