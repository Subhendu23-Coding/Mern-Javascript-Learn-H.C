function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


/* Jab new keyword use kiya jata hai, toh kuch cheezein behind the scenes hoti hain:

   Ek naya object banaya jata hai: new keyword ek naya JavaScript object create karta hai.

   Prototype link hota hai: Jo naya object banaya gaya hai, woh constructor function ke prototype property se link ho jata hai. Iska matlab hai ki is object ko woh properties aur methods milti hain jo constructor ke prototype mein defined hoti hain.

   Constructor call hota hai: Phir constructor function ko diye gaye arguments ke saath call kiya jata hai aur this keyword newly created object ko point karta hai. Agar constructor mein explicitly koi value return nahi ki gayi hoti, toh JavaScript assume karta hai ki newly created object hi return value hai.

   Naya object return hota hai: Jab constructor function call ho jata hai, agar koi non-primitive value (object, array, function, etc.) explicitly return nahi hoti, toh JavaScript automatically newly created object ko return kar deta hai. */