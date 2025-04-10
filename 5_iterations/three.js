// for...of Loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

// Looping through a string

const greetings = "Hello World!"

for (const greet of greetings) {
    if ("W" == greet) {
        console.log(`${greet} as in World??`);
        break;
    } else {
        console.log(`${greet}`);
    }
}

// Creating and using a Map
// Maps

// The "Map" object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

// map objects are collections of key-value pairs

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('IN', "India");
map.set('Fr', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}


// const myObject = {
    // 'Game1': 'NFS',
    // 'Game2': 'Spider-Man'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

let map2 = new Map();
map2.set({ name: 'Subhendu' }, 'Person');
map2.set(101, 'ID');
console.log(map2);

// Map(2) {
//     { name: 'Subhendu' } => 'Person',
//     101 => 'ID'
//   }
  //