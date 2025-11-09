class User {
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc@`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('Pruthvi','pruthvi@google.com','hello')

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//Behind the Scenes {without using class }

function UserOne(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}

UserOne.prototype.encryptPassword = function(){
    return `${this.password}abc@`
}

UserOne.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new UserOne('tea','tea@g.com','1234')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

