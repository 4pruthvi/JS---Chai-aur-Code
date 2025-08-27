"use strict"; // treat all JavaScript code as newer version

// alert( 3 + 3 ) // we are using nodejs, not browser (it runs in browser as jS engine is present there)

console.log(3 
    +
     3) //code readibility should be high

console.log("pruthvi")

//Data Types -> Primitive and Non-primitive

let name = "Pruthvi sawant" // string
let age = 22 // int , number
let price = 14.94 // float
let isLoggedIn = false // boolen
let state; //undefined as no value
let emptyValue = null

//number[range ] => 2 to power 53 (or bigint use for large numbers)
//string => ""
//boolean => true/false
//null => standalone value / representaion of empty value
//undefined => value is not assigned
//symbol = to identify uniqueness {unique}

//object -> non-primitive datatype (Array)

console.log(typeof "pruthvi") // type = string //typeof tell us the DataType of the vale in it.
console.log(typeof age) // type = int

console.log(typeof null) // type = object
console.log(typeof undefined)// type = undefined

//Array: ordered collection of values of specific data type of object

let cars = ["mahindra","BMW","Ford"]
console.log(cars);





