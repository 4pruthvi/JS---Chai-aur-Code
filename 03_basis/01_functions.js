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
console.log('result value is:',result); 

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
