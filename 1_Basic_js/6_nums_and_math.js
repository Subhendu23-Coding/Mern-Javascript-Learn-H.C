const score = 800;
// console.log(score); //800

const balance = new Number(200);
// console.log(balance); //[Number 200]


/**********************************************************************/

// const balance = new Number(200);
// console.log(balance.toString());  // Number object কে string এ রূপান্তরিত করবে ("200")
// console.log(balance.toString().length);  // String-এ রূপান্তরিত করার পর তার দৈর্ঘ্য (3)
// console.log(balance.toFixed(1));  // ১ দশমিক স্থান পর্যন্ত সংখ্যা প্রদর্শন করবে("200.0")
// console.log(balance.toFixed(2));  // ২ দশমিক স্থান পর্যন্ত সংখ্যা প্রদর্শন করবে ("200.00")

/********************************************************************************************* */
const otherNumber = 234.9876; 
// console.log(otherNumber.toPrecision(4));  // ("234.9") সংখ্যা ৪টি significant digits পর্যন্ত রাউন্ড করা হবে

const hundreds = 1000;
// console.log(hundreds.toLocaleString('en-IN'));  //("1,000") সংখ্যাটিকে ভারতীয় সিস্টেমে সজ্জিত করবে 
// console.log(Number.MAX_VALUE);  // (1.7976931348623157e+308) ( 1.8 × 10^308) সর্বোচ্চ সংখ্যা, যা JavaScript এ ব্যবহারযোগ্য


/****************************************************************************************************************** */


// console.log(Math);  // Math object ko display karega, output hoga [object Math]
console.log(Math.abs(-33));  // 33, abs() function se negative number ka absolute value milta hai
console.log(Math.round(5.8));  // 6, round() function se number ko nearest integer tak round kiya jata hai
console.log(Math.ceil(5.5));  // 6, ceil() function se number ko nearest greater integer tak round kiya jata hai
console.log(Math.floor(5.9));  // 5, floor() function se number ko nearest smaller integer tak round kiya jata hai
console.log(Math.min(5, 4, 7, 8));  // 4, min() function se sabse chhota number milta hai
console.log(Math.max(5, 6, 8, 9));  // 9, max() function se sabse bada number milta hai
console.log(Math.sqrt(38));  // 6.164414002968976, sqrt() function se number ka square root milta hai
console.log(Math.random());  // Random number between 0 and 1, random() function random number generate karta hai
console.log(Math.random() * 10);  // Random number between 0 and 10
console.log((Math.random() * 10) + 1);  // Random number between 1 and 11
// Random number between any range (min to max):
let min = 10;
let max = 20;
console.log(Math.random() * ((max - min) + 1));  // Random number between 0 and (max-min+1)
console.log(Math.floor(Math.random() * ((max - min) + 1) + min));  // Random integer between min (10) and max (20)