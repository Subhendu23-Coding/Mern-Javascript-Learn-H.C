// let myName = "Subho"
// let mychannel = "chai"
// console.log(myName.truelength);

let myHeros = ["ram", "sam"]

let heroPower = {
    ram: "hum",
    sam: "tum",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.sam}`);
    }
}
Object.prototype.subho = function(){
    console.log(`subho is present in all objects`);
}

Array.prototype.haySubho = function(){
    console.log(`Subho says Hello`);
}

// heroPower.subho()

myHeros.subho()
myHeros.haySubho()
//heroPower.haySubho()

// inheritance
const User = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let  anootherUsername = "ChaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenth is: ${this.trim().length}`);
}

anootherUsername.trueLength()
"subho".trueLength()
"iceTea".trueLength()