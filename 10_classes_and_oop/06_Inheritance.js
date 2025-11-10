class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username Logged in is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username)  //////superkeyword used here
        this.email = email
        this.password = password
    }

    addCource() {
        console.log(`New course is added by ${this.username}`);
    }
}

const chai = new Teacher('Pruthvi','pruthvi@gmail.com',123)

console.log(chai.addCource());

console.log(chai === Teacher);

console.log(chai instanceof Teacher);

console.log(chai instanceof User);




