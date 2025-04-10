// Falsy Values:
// These values are considered false when evaluated in an if or any condition. They include:

// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)

// Truthy Values:
// Any value that is not falsy is considered truthy. Some common truthy values include:

// "0" (string with a zero)
// "false" (string with the text "false")
// " " (space)
// [] (empty array)
// {} (empty object)

// const userEmail = "subho@.ai";  // This would be truthy
// const userEmail = "";  // This would be falsy
const userEmail = [];  // This is an empty array, but still truthy

if (userEmail) {
    console.log("Got the user Email");
} else {
    console.log("Don't have user Email");
}


if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0 //  true
false == '' //  true
0 == '' //  true


let val1;
val1 = null ?? 10; //  output: 10
val1 = undefined ?? 15; //  output: 15


val1 = null ?? 10 ?? 15;
console.log(val1); // output: 10


// Ternary Operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");