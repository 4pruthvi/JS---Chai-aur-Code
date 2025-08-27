/* 
js is dynimically typed language

Two types of data in js

01) Primitive DataType: it is called by value means its copy is created and ther data is stored not in original place

7 types : String,Number,Boolean,null,undefined,Symbol,BigInt.*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //to chaeck noth are same or not 

const bigNumber = 490450584398469405n;





/*
02) Non-Primitive DataType (Reference) DataType: it is called by reference means data is stord in original memory not in copy

    Array , Object, Functions  */

const heros = ["shaktiman","naagraj","krish"]  //array declartation

let myObj = { //object deceleration  // values in curley brases is object 
    name: "pruthvi",
    age:20,
}

const myFunction = function() {
    console.log("Hello World");  
}

console.log(typeof bigNumber); //typeof used to know datatype


//******************************* Memory in js********************************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "kaypruthvi"

let anothername = myYoutubename
anothername = "keepgoingpruthvi"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pruithvi@google.com"  //we use . to access any thing in object

console.log(userOne.email);
console.log(userTwo.email);



/*Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.*/