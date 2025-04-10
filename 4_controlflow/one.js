// if

// const isUserloggedIn = true;

// if (isUserloggedIn) {}

// if (condition) {}

// if (true) {}

// if (false) {}

// < (less than)
// > (greater than)
// <= (less than or equal to)
// >= (greater than or equal to)
// == (equal to)
// != (not equal to)
// === (strictly equal to)
// !== (strictly not equal to)


if(2 == "2") {
    console.log("executed");  // This will execute because `==` does type coercion
}

if(2 === "2") {
    console.log("executed");  // This will NOT execute because `===` checks both value and type
}

if(2 !== 3) {
    console.log("executed");  // This will execute because 2 is not equal to 3
}

const temperature = 41;

if( temperature < 50 ) {
    console.log("less than 50");  // This will execute because 41 is less than 50
} else {
    console.log("temperature is greater than 50");
}

const score = 200;

if (score > 100) {
    let power = "fly";  // Variable `power` is inside the `if` block
    console.log(`User power: ${power}`);  // This will print "User power: fly"
}
console.log(`User power: ${power}`);  // This will throw an error because `power` is not accessible outside the `if` block


const balance = 1000;

if (balance > 500) console.log("test"), console.log("test 2");  // Bad practice: multiple statements on same line


if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("greater than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

// Using AND (&&) operator
if (userLoggedIn && debitCard && 2 == 1) {
    console.log("Allow to buy course");  // This will NOT execute because 2 == 1 is false
}

// Using OR (||) operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");  // This will execute because at least one condition is true
}