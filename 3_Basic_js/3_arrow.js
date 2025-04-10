const user = {
    username: "Subho",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, Welcome to the website`);
        // console.log(this); // Logs the 'user' object
    }
};

// user.welcomeMessage();
// user.username = 'ram';
// user.welcomeMessage();

// console.log(`${this.username}, Welcome to the website`);

// console.log(this) // exprcted output in node : {}

function chai(){
    let username = "Subho";
    console.log(this.username); // expected output: undefined
}

// chai();

const chai = function () {
    let username = "Subho";
    console.log(this.username); // expected output: undefined
}

// chai();

const chai = () => {
    let username = "Subho";
    console.log(this); // expected output: {}
    console.log(this.username); // expected output: undefined
}

// chai();


const addTwo = (number1, number2) => {
    return number1 + number2; // explicit return
}

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// const addTwo = (num1, num2) => (num1 + num2); // implicit return
// const addTwo = (num1, num2) => ({username: "Subho"});
// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((element) => {

//     console.log(element); // prints each element of the array
// });