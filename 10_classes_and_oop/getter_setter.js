class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}subho`
    }

    set password(value){
        this._password = value
    }
}

const subho = new User("s@ubho.ai", "abc")
console.log(subho.password);