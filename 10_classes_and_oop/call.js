function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
        SetUsername.call(this.username)
        this.username = username
        this.email = email
        this.password = password
}

const chai = new  createUser("chai", "chai@gmail.com", "433")
console.log(chai);