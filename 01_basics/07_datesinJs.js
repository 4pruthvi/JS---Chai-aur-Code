//Dates
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()   //date is object
// We can use various methods to convert this date into more readable value
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

//month starts with 0. as janaury as 0 .[array]
//let myCreatedDate = new Date(2025 ,5,21)
//let myCreatedDate = new Date(2025 ,5,21,1,3)
//let myCreatedDate = new Date('2023-06-21')
let myCreatedDate = new Date('06-21-2005')
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //convert that date into timestamp in milisecond from 1 jan 1970
console.log(Math.floor(Date.now()/1000)); //convert that milisecond value to second

//various methods in dates
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

 