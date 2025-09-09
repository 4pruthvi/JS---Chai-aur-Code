// If statement : In if statement, if the condition is true then only code will execude for if statement

const temperature = 100

if (temperature <= 87) {
    console.log('temperature less than 87');
} else {
    console.log('tempreature is greater than 87');
}

//<,>,<=,>=,==,!=,===,!==

const score = 200

if (score > 100) {
    let power = 'fly' ////var is completely global scope, so it is not advisable to use
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);  not accessable outside the if scope

const balance = 1000
//unreadable dont write code like this
if (balance > 500) console.log("test"),
console.log('test2');

//Nesting

if (balance < 500) {
    console.log('less than 500');
} else if (balance < 780) {
    console.log('less than 780');
} else if (balance < 900) {
    console.log('less than 900');
} else {
    console.log('less than 1200');
}

//use in real life

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {  // &&= both conditions must be true to execute
    console.log('Allow to buy course')
}

if (loggedInFromEmail || loggedInFromGoogle) { // ||= any one condition is true then it executes
    console.log('user logged in'); 
}



 

