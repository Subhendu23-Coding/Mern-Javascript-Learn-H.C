const user = {
    username: "Subho",
    loginCount: 6,
    singedIn: true,

    grtUserDetails: function(){
        // console.log("Got user datails form databased");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


const user2 = {
    username: "Subho",
    loginCount: 6,
    singedIn: true,

    grtUserDetails: function(){
        // console.log("Got user datails form databased");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.grtUserDetails);
// user.grtUserDetails();
// console.log(this)



// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne =  new User("Subho", 12, true)
const userTow =  new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTow);