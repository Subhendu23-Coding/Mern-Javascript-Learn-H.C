/************ * Array Initialization****************/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["ram", "sam"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);

// myArr ek array hai jisme numbers hain: [0, 1, 2, 3, 4, 5].
// myHeors mein do strings hain: "ram" aur "sam".
// myArr2 ek array hai jo new Array() constructor se bana hai. Ismein values hain: [1, 2, 3, 4].

/*****************************Array Methods: Push, Pop, Unshift, Shift*********************** */

// let myArr = [0, 1, 2, 3, 4, 5]; // Initial array
myArr.push(6);  // Add 6 to the array, now [1, 2, 3, 4, 5, 6]
myArr.push(7);  // Add 7 to the array, now [1, 2, 3, 4, 5, 6, 7]
myArr.pop();    // Remove the last element (7), now [1, 2, 3, 4, 5, 6]
console.log(myArr);  // Logs the updated array: [1, 2, 3, 4, 5, 6]


myArr.unshift(0);
myArr.unshift(9);
myArr.shift();
console.log(myArr);




console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr);
console.log(myArr);

/*****************************************Slice and Splice************************************* */
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);