// here we have to create trueLength method which can return the ture length of the string
let myName = "pruthvi    "

String.prototype.trueLength = function() {
    return this.trim().length
}
console.log(myName.trueLength());

console.log(myName.length);


// *****************************************

let myHeros = ['ShaktiMan','Baba']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Pruthvi = function() {
    console.log(`Pruthvi you get placed in good company `);
}

Array.prototype.helloPruthvi = function() {
    console.log(`Pruthvi say hello`);
}

myHeros.Pruthvi()  //// `here`, we made new method `Pruthvi` using prototype in Object and as the object is at the top level , this method is accessible to all i.e: arrays, strings, function, etc.
heroPower.Pruthvi()

myHeros.helloPruthvi() // we have made new property `helloPruthvi` using prototype in array so only array has access to it
// heroPower.helloPruthvi() //error  //// `heroPower` object has no access to `helloPruthvi()` method.

// Inheritance using Prototype

const person = {
  alive: true,
};

const musician = {
  playsInstrument: true,
};

musician.__proto__ = person; // Setting person as the prototype of musician

console.log(musician.alive); // true (inherited from person)

///////////////////////////////////////////////////////////////////////////////////////////////////

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport  //means TeachingSuppoet is the property of TAsupport now
}

// Old Syntax to inherit properties from user to Teacher
Teacher.__proto__ = User
console.log(Teacher.email);



//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
//TeachingSuppoet access the propertys of Teacher


// solution of starting problem
let anotherUsername = "ChaiAurCode      "

// Calculates the true length of a string by removing leading and trailing whitespaces.

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"kuldeep".trueLength()
"iceTea".trueLength()


