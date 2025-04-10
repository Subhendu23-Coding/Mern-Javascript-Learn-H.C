// Basic for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");        
    }
    console.log(element);
}
// console.log(element);

// Yeh loop 0 se lekar 10 tak chalega (index ki value 0 se 10 tak increment hogi).
// Agar index ka value 5 hota hai, toh "5 is best number" print hoga.
// Har iteration mein, index ki value print hoti hai.

// for loop (Outer + Inner loop)

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and outer loop ${i}`);
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Yahan pe ek outer loop hai jo i ko 1 se 10 tak iterate karta hai.
// Har outer loop ke liye, ek inner loop hai jo j ko 1 se 10 tak iterate karta hai.
// Yeh multiplication table ko print karta hai, jaise 1*1=1, 1*2=2,

// Iterating through an Array

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// myArray ek array hai jisme "flash", "batman", aur "superman" hain.
// Loop array ki length tak chalega, par yeh code galat hai kyunki i <= myArray.length ki wajah se, array ke last element ke baad undefined print hoga.
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


// break in a loop

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;  // Loop ko break karo jab index 5 ho
    }
    console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;  // Current iteration skip karo, next iteration pe jump karo
    }
    console.log(`Value of i is ${index}`);
}
//