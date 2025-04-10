// Singleton
// Object.create() //  through constructor method


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Subho",
    "full name": "Subhendu Majhi",
    [mySym]: "mykey",  // symbol used as key
    age:  23,
    location: "West Bengal",
    email: "subhendu12@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);  // subhendu12@gmail.com
// console.log(JsUser["full name"]);  // Subhendu Majhi
// console.log(JsUser[mySym]);  // mykey
// console.log(typeof(JsUser.mySym));

// JsUser.email = "subhendu152@google.com";
// Object.freeze(JsUser);  // Freezes the object
// JsUser.email = "Subhendu@microsoft.com";  // This will not work because the object is frozen
// console.log(JsUser);  // Output: {name: "Subhendu", ... email: "subhendu12@gmail.com", ...}


JsUser.greeting = function() {
    console.log("Hello Js User");
}
console.log(JsUser.greeting);  // Prints: [Function: greeting]
console.log(JsUser.greeting());  // Prints: Hello Js User


JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());  // Output: Hello Js User, Subhendu