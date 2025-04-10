// for...in Loop with Objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${myObject[key]}'s shortcut is ${key}`);
}

// for...in Loop with Arrays

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}

// for...in Loop with Map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Jp', "Japan");
map.set('Fr', "France");

// for (const key in map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

//