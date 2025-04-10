/***************************Function sayMyName() */

function MyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("U");
}

// MyName();


/**********************Function addTwoNum() (Addition of Two Numbers)*********************** */
function addTwoNum(number1, number2){
    console.log (number1 + number2);
}

function addTwoNum(number1, number2){
        let result = number1 + number2
        console.log("Subhendu");
        return result
     }

const result1 = addTwoNum(3, 4); // Arguments are 3 and 4 here

// console.log("Result:", result1);

function addTwoNum(number1, number2){
    let result = number1 + number2
    console.log("Subhendu");
    return result
 }

// const result = addTwoNum(3, 4); // Arguments are 3 and 4 here

// console.log("Result:", result);


/**********************Function loginUserMessage() with Default Parameter */

function loginUserMessage(username = "Sam") {
    if (!username) {  // This check is redundant since the default value is "sam"
        console.log("Subho");
        return 0;
    }
    return `${username} just logged in`;  // Use backticks for string interpolation
}

// loginUserMessage("Subho");  // Logs nothing because there's no console.log here
// console.log(loginUserMessage("Subho"));  // Logs: Subhendu just logged in
// console.log(loginUserMessage());  // Logs: sam just logged in (uses default value)


function calculateCartPrice(...number1){
    return number1;
}

// console.log(calculateCartPrice(200, 400, 500, 1200));

/************************************************************* */
const user = {
    username: "Subhendu",
    prices: 299,
};

function handleObject(anyobject) {
    // Use backticks for string interpolation
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user);

handleObject({
    username: "sam",
    prices: 399, 
});



/********************************************************* */

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[2];  // Accessing the element at index 1 (second element)
}

// console.log(returnSecondValue(myNewArray));  // => expected output: 400
// console.log(returnSecondValue([200, 400, 100, 600]));  // => expected output: 400