// let a = 10
// const b =20
// var c = 30

// Global scope variables
let a = 300; // Global 'a'

if (true) {
    let a = 10; // Local 'a' inside the if block
    const b = 20; // Local 'b' inside the if block
    // console.log("INNER: ", a); // Prints 10 (local 'a' inside the block)
}


// console.log(a); // Prints 300 (global 'a', not affected by the block scope)
// console.log(b); // ReferenceError: b is not defined (as 'b' is block-scoped)
// console.log(c); // ReferenceError: c is not defined (as 'c' is not declared anywhere)


function one(){
    const username = "majhivi";
    function two(){
        const website = "youtube";
        console.log(username);
        function three(){
            console.log(website);
        }
        three();
    }
    // console.log(website);
    two();
}

one();

/********************************************************** */
function userInfoOne() {
    const oneUserName = "sub@123.in";
    let oneWebsiteName = "www.website.com";
    function one() {
        console.log(oneUserName) 
    }
    function two() {
        console.log(oneWebsiteName)
    }
    function three() {
        console.log(`
            ${oneUserName}
            ${oneWebsiteName}
            `);  
    }
    // one();
    // two();
    three();
}
userInfoOne();


if(true){
    const username = "Subho";
    if(username === "Subho"){
        const website = "linkedIn";
        // console.log(username + website);
        console.log(`
            ${username}
            ${website}
        `);     
    }
    // console.log(website);
}

// console.log(username);


/*******************************Interesting********************** */
addOne(5);
function addOne(Number){
    return Number + 3;

}
console.log(addOne(5));

// Hoisting Example

addTwo(5);
const addTwo = function(number) {  
    return number + 2;
}
console.log(addTwo(5));