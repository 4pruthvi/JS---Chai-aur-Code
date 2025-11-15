class User {
    constructor(email,password) {
        this.email = email;
        this.password = password
    }
//getter is used to take value from outside the class
    get password() {
        return `${this._password}pruthvi`
    }
//setter is used to set the value inside the class
    set password(value) {
        this._password = value
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
}

const pruthvi = new User("pruthvi@123","abc")
console.log(pruthvi.password);
console.log(pruthvi.email);
