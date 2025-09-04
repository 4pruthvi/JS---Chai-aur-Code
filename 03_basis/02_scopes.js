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
