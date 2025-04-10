/****************************Date***********************/

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);  //object



console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-02-13")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("02-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("02-14-2025");
let myTimeStamp = Date.now();
console.log(myTimeStamp);          // Current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // Timestamp for myCreatedDate
console.log(Date.now());           // Current timestamp
console.log(Math.floor(Date.now()/1000)); // Timestamp in seconds



// let newDate = new Date();
console.log(newDate.getMonth());  // Returns the month index (0 for January, 11 for December)
console.log(newDate.getDay());    // Returns the day index (0 for Sunday, 6 for Saturday)

console.log(newDate.getMonth() + 1);

// let newDate =new Date()
console.log(newDate.getDay());


let newDate = new Date();
let now = newDate.toLocaleString('default', {
    weekday: "long",
});
console.log(now); // Prints the current weekday name (e.g., "Monday")



// let myDate = new Date();
console.table([
  { method: 'toString', result: myDate.toString() },
  { method: 'toUTCString', result: myDate.toUTCString() },
  { method: 'toISOString', result: myDate.toISOString() },
  { method: 'toDateString', result: myDate.toDateString() },
  { method: 'toLocaleDateString', result: myDate.toLocaleDateString() },
  { method: 'toLocaleString', result: myDate.toLocaleString() },
  { method: 'toJSON', result: myDate.toJSON() },
  { method: 'toTimeString', result: myDate.toTimeString() },
  { method: 'toLocaleTimeString', result: myDate.toLocaleTimeString() }
]);


console.log(myDate.getTimezoneOffset());

getTimezoneOffset(); //Aapke current timezone ka offset minutes mein return karega (jaise India ka offset +330 minutes hai)


// /********************************************************************************************************* */

 console.log(myBirthDate.toDateString());   // Date ko string mein display karta hai
 console.log(myBirthDate.toLocaleString()); // Date aur time ko local format mein display karta hai
 console.log(myBirthDate.toLocaleTimeString()); // Sirf time ko local format mein display karta hai


// /********************************************************************** */
// let myTimeStampInMilliSecond = Date.now(); // Current timestamp in milliseconds
// let diff = (myTimeStampInMilliSecond - (myBirthDate.getTime())); // Difference between current time and birthdate in milliseconds

// let ageInDays = ((((diff / 1000) / 60) / 60) / 24); // Converting milliseconds to days
// let myAge = Math.floor(ageInDays / 365.25); // Converting days to years

// let remainingDays = ageInDays - (myAge * 365.25); // Remaining days after full years
// let ageMonths = Math.floor(Math.floor(remainingDays / 30.44)); // Converting remaining days to months

// remainingDays -= ageMonths * 30.44 - 1; // Adjusting days
// let ageDays = Math.floor(remainingDays); // Final remaining days

// /*************************************************************************************** */

// console.log(`My age is ${myAge} Years ${ageMonths} months and ${ageDays} days`);