//code writtern in the if statement is block scope.
//and code outsid is global scope 


let a = 19; 
const b = 23;


if (true) {
    let a = 19;
    const b = 23;
    var c = 98
}

console.log(a);
console.log(b);
console.log(c);  //it is declared inside the scope but still it is accessed outsid soo var is not used

//child functions can access the variables of the parent function

function one() {
    const username = 'hitesh'

    function two() {
        const website = 'youtube'
        console.log(username);   
    }
    //console.log(website); //connot access the varible of child function
    two()
}

one()

if (true) {
    const username = 'mahadev'
    if (username === "mahadev") {
        const website = ' google'
        console.log(username + website);
    }
    //console.log(website); //error parent cannot acces variable of child class
    
}

//console.log(username); //error will occur because username is definded insid scope 

//+++++++++++++++++++++++++ intersting ++++++++++++++

//it will run if we call the function befor or after decleration of function

console.log(addOne(4))

function addOne(num) {
    return num + 1;
}


//function decelard inside a variable
//this function will not run we it is called befor deceleration.

const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(8))