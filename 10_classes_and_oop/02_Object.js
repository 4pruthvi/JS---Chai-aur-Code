function multiplyby5(num) {
    return num*5
}

multiplyby5.power = 2  //as we can use . on function as object so we can say that fuction is a object just like string and array

console.log(multiplyby5(5)); //25
console.log(multiplyby5.power); //2
console.log(multiplyby5.prototype); //{} - empty object

// Note: Everything in JS that is array, string, functions is an `object`.
// arrays, strings, functions prototype is object and final object has prototype reference as null.

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++          // `this` matlab: jisne call diya, uske paas jaao
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser('chai',25)
const tea = createUser("tea", 250)

console.log(chai);
chai.printMe()
chai.increment()
console.log(chai.score);

/* What is prototype

In JavaScript, every function automatically has a property called prototype.

This prototype is an object that can store methods or properties that should be shared by all objects created from that function using the new keyword. */

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.

*/