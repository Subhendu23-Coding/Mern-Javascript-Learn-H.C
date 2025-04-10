const marvel_Heroes = ["Thor", "Iron Man", "Spider-Man"];
const dc_Heroes = ["Super Man", "Flash", "Bat-Man"];

marvel_Heroes.push(...dc_Heroes);  // Spread the dc_Heroes array

console.log(marvel_Heroes);
console.log(marvel_Heroes[3][2]);

marvel_Heroes.concat(dc_Heroes);
console.log(marvel_Heroes)

const allHeros = marvel_Heroes.concat(dc_Heroes)
console.log(allHeros);

const all_new_heroes = [...marvel_Heroes, ...dc_Heroes];
console.log(all_new_heroes);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Subhendu"))
console.log(Array.from("Subhendu"))
console.log(Array.from({name: "Subhendu"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));