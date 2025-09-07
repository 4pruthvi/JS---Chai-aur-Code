//this keyword in JavaScript to refer to the object that is currently calling the function.
const user = {
    username: "pruthvi",
    price: 999,

    welcomeMessage: function() {
        //here while accessing username use this keyword (this => give current context reference)
        console.log(`${this.username} , welcome to the website`);
        //console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sairaj" //here context changed
user.welcomeMessage()

//console.log(this) // o/p: {}

//this is only working in the objects 
function chai() {
    let username = 'hitesh'
    console.log(this.username);  //undefined
}

chai();

//or

const chai1 = function () {
    let username = 'hitesh'
    console.log(this.username);  //undefined
}

chai1();

//Arrow function

//in arrow functions, this does not point to user.
//It takes this from the outer scope, which in this case is the global scope (window in browsers, global in Node.js).
//And in the global scope, this.username is undefined.

const chai2 = () => {
    let username = 'hitesh'
    console.log(this.username);  //undefined
    console.log(this); // output = {}
    
}

chai2()

//Arrow function syntax

//() => {}

// explicit return
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(2,8));

//or [emplicit return syntax]  
//note : if wrapped in curlly braces then we need to use return statement
//if partantises() used no need of return statement

const addTwo1 = (num1,num2) => (num1 + num2)

console.log(addTwo1(2,3));

//how to return object in emplicit way

const addTwo2 = (num1,num2) => ({username: "mahadev"})

console.log(addTwo2())

