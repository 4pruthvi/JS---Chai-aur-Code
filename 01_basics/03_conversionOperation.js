let score = undefined // also use this value - "33abd" , "33" , null , undefined , pruthvi , boolean-true or false

//console.log(typeof score) //or  //number
//console.log(typeof(score))

let valueInNumber = Number(score)  //Numebr() convert input variable into numebr.
//console.log(typeof valueInNumber)
//console.log(valueInNumber) //NaN - NOT A NUMBER

// "33" (converts to) => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0
// null => 0
//undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)  //convert input value to boolean 
//console.log(booleanIsLoggedIn);
 
// 1 => true ; 0 => false
// "" => false
// "hitesh" => true
// null => false

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//************************* OPERATIONS ****************************************

let value = 3;
let negValue = -value
//console.log(negValue);

// console.log(2+2); // 4
// console.log(2*3); // 4
// console.log(2-2); // 0
// console.log(2/2); // 1
// console.log(2%3); // 2 (remainder)
// console.log(2**3); // 8 (to the powr)

let str1 = "hello"
let str2 = " pruthvi"

let str3 = str1 + str2
//console.log(str3); // to add string

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 becaue string is present at 1st position so js treat all remaining no as strig hence o/p 122.
// console.log(1 + 2 + "2"); // 32 because number is present at 1st position so js adds that numbers and strig remains as it is.

// console.log(3 + 5 * 9 % 2 ); //4 it is not used in real world like this. it is considered as bad practice.

// console.log(+true);  //1
// console.log(+""); //0

let num1, num2 , num3;
                            // no consistancy present
num1 = num2 = num3 = 2+2; // considered as bad code and practice

let gameCounter = 100
let playCounter = 100

gameCounter++ ; //postfix
++playCounter; //prefix

//console.log(gameCounter); 
//console.log(playCounter);

//Prefix

let x = 3;
const y = ++x; // x becomes 4, and y is assigned the new value of x (which is 4)
console.log(x); // 4
console.log(y); // 4

//Postfix

let a = 3;
const b = a++; // y is assigned the original value of x (which is 3), then x becomes 4
console.log(a); // 4
console.log(b); // 3
















