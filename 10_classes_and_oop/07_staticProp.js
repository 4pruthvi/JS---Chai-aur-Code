class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username ${this.username}`);
    }
    
    //static keyword used here
    static createId() { 
        return 123;
    }
}

const Pruthvi = new User("Pruthvi")
// console.log(Pruthvi.createId()); // returns 123 . but when static keyword is used before createId function it will not work 
//means child class cannot access it.

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher('Iphone','iPhone@apple.com')
console.log(Iphone.createId()); //here also we cannot access createID function due to static keyword used.
