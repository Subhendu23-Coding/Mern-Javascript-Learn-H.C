// ******************** Code Execution ********************

// ******************** JavaScript Execution Context ********************

// JavaScript is single threaded

// {} => Global Execution Context (this)
// Function or Functional Execution Context
// Eval Execution Context

// first phase
// *Global Execution* or *Parent Execution Context*

// second phase
// *Memory Creation Phase* or *Memory Phase* or *Creation Phase*
// all the value will be declared as 'undefined' before excution phase

let val1 = 10;
let val2 = 15;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
// third phase
// *Execution Phase* or *Execution Context*

// new execution context (new sandbox)
// new variable environment + execution thread
// after execution, new execution context will be deleted and again if (new sandbox) required it will create new execution context again and delete again. and return will be stored in global or parent execution context

let result1 = addNum(val1, val2);
let result2 = addNum(35, 36);

console.log(result1);
console.log(result2);

// ****************** Call Stack ******************

// LIFO => Last In First Out

function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();