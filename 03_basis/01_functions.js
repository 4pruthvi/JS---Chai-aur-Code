function sayMyName() {
    console.log('h');
    console.log('e');
    console.log('l');
    console.log('l');
    console.log('o');
}

sayMyName //this is reference of the function
sayMyName() //this is execution of the function


//in functions there are parameters in the ()
function addTwoNumbers(num1,num2) {
    console.log(num1+num2);
}

//while calling there are arguments in the ()

//addTwoNumbers(2,8) //op-10

const result = addTwoNumbers(3,7)
//here problem is that we did not get value of result: as 10 
//because our function is not returning the value it is just printing it.
console.log('result value is:',result); //undefined

//function which returns the value not print
function addTwoNumbers01(num1,num2) {
    let answer = num1 + num2
    return answer
    console.log('hello ji'); //this will not be printed because once return statement is executed then js will not check below lines
    //if console.log was above the return statement this it will be executed
}

const result01 = addTwoNumbers01(36,4)
console.log("final value is:",result01);

//or another way to return

function addTwoNumbers02(num1,num2) {
    return (num1+num2);
}

const result02 = addTwoNumbers02(9,4)
console.log("final value is:",result02);

//user login meaggage
function loggedInMessage(username) /*we can also avoid the case of undefined by using (username = 'sam')*/  {
    if(username === undefined) /*we can also use this (!username)*/  { //is user does not enter the unsername
        console.log("please enter a username");
        return  //because below line should not execute
    }
    return `${username} just logged in`
}

console.log(loggedInMessage('Sairaj'));
console.log(loggedInMessage());

//****************************************************************************** */

//when we require multiple parameters in the function or we dont know how much parameter will come then we will use
// ...(called as rest or spread operator based on the its use case)
// it will put all the parameter values into the array where we can use loops to perform required operations
//01 const parameters given
function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(200));  //

//used rest operator in the function parameter
//02 rest operator used 
function calculateCartPrice01(...num1) { // this is also used insted of this(val1,val2, ...num1)
    return num1
}

console.log(calculateCartPrice01(200,284,900,899)); //adds all values into the array

//how to pass object into the function and use it
//object created
 const user = {
     username: "pruthvi",
     price: 199
 }
//function created to handle object 
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and course price is ${anyobject.price}`);   
}

//function called
//handleObject(user) 

//OR we can pass object like this also directly 
handleObject({
    username: 'mahadev sawant',
    price: 38579
})

//how to add or pass array inside the function
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray))
//or like this also we can call
// console.log(returnSecondValue([200,399,837,838989]));


