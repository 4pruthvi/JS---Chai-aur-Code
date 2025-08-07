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

console.log(id === anotherId);

const bigNumber = 490450584398469405n;





/*
02) Non-Primitive DataType (Reference) DataType: it is called by reference means data is stord in original memory not in copy

    Array , Object, Functions  */

const heros = ["shaktiman","naagraj","krish"]  //array declartation

let myObj = { //object deceleration
    name: "pruthvi",
    age:20,
}

const myFunction = function() {
    console.log("Hello World");  
}

console.log(typeof bigNumber); //typeof used to know datatype


