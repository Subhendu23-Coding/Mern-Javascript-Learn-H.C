const name = "Subho";
const repoCount = 50;
// console.log(name + repoCount + "Value");  // "Subho10Value"
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
// const gemName = new String ('subho');
//  const gemName = new String ('#');


const gemName = new String('subho');
// console.log(gemName);           // [String: 'subho'] (এটি একটি অবজেক্ট)
// console.log(typeof gemName);    // "object" (এটি স্ট্রিং টাইপের অবজেক্ট)
// console.log(gemName == 'subho'); // false (যেহেতু এটি একটি অবজেক্ট, তাই তুলনা করার সময় এটি false দিবে)
// console.log(gemName.valueOf()); // "subho" (এটি স্ট্রিং অ্যাক্সেস করতে valueOf() মেথড ব্যবহার করতে হবে)


const gameName = "Subho";

// console.log(gameName[0]); // 'S'
// console.log(gameName[1]); // 'u'
// console.log(gameName[2]); // 'b'
// console.log(gameName[3]); // 'h'
// console.log(gameName[4]); // 'o'

// console.log(gameName.__proto);           // প্রোটোটাইপ দেখায়
// console.log(gameName.length);            // স্ট্রিংয়ের দৈর্ঘ্য
// console.log(gameName.toUpperCase());    // স্ট্রিংটিকে বড় হাতের অক্ষরে রূপান্তরিত করবে
// console.log(gameName.charAt(4));         // ইনডেক্স 4 এর চরিত্র (অথবা নির্দিষ্ট চরিত্র)
// console.log(gameName.indexOf('h'));     // 'h' চরিত্রের প্রথম উপস্থিতির ইনডেক্স


let index = -1;
while((index = gemName.indexOf('h', index + 1)) !== -1) {
    // console.log(`Found 'h' at index: ${index}`);
}



// // 1. `substring()` ব্যবহার
const newString = gameName.substring(0, 5);  // স্ট্রিংয়ের 0 থেকে 4 ইনডেক্স পর্যন্ত অংশ কেটে নেয়
// console.log(newString); // "Subho"

// // 2. `slice()` ব্যবহার
const anotherString = gameName.slice(-2, 5);  // স্ট্রিংয়ের শেষ থেকে 13তম ইনডেক্স থেকে 2 ইনডেক্স পর্যন্ত কাটবে
//console.log(anotherString); 

const newStringOne = "  Subho  "; // অতিরিক্ত স্পেস সহ স্ট্রিং
// console.log(newStringOne);  // "  Subho  "
// console.log(newStringOne.trim());  // "Subho" (অতিরিক্ত স্পেস মুছে ফেলবে)



// const url = "www.abc.com";
// console.log(url.replace('%20', '-'));  // '%20' স্ট্রিংটিকে '-' দিয়ে প্রতিস্থাপন করবে

// // 2. `includes()` মেথড
// console.log(url.includes('#'));  // স্ট্রিংয়ে '#' আছে কিনা চেক করবে

// // 3. `split()` মেথড
// // const gameName = "Subho-Developer-JavaScript";
// console.log(gameName.split('-'));  // '-' দিয়ে স্ট্রিংটিকে বিভক্ত করবে