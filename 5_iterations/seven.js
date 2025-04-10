const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => num + 10 );

// const newNums = myNumbers.map( (num) => {return num + 10} );

const myNums = [];

myNumbers.forEach( (num) => {
    num = num + 10;
    return myNums.push(num);
})

const newNums = myNumbers
    .map( (num) => num * 10 )   // Step 1
    .map( (num) => num + 1 )    // Step 2
    .filter( (num) => num >= 40 ); // Step 3

console.log(newNums);