//objects can be decelered by two types one by litral and another by constructor

// singelton [make when constructor]
//Object.create

// Object literals [no singelton]

const mySym = Symbol('key1')

const JsUser = {
    name: 'PRUTHVI',
    "last Name": "SAWANT",
    [mySym]: 'mykey1', //correct way to declare the symbol in object
    age: 20,
    location: "Latur",
    email: "sawantpruthvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ['MONDAY','SATURDAY']
}

//HOW TO ACCESS OBJECTS
//two ways to access objects with dot and square brackets

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["last Name"]); //not able to use . here

console.log(JsUser[mySym]);  //correct way to access symbol in the object

//HOW TO CHANGE THE VALUES IN THE OBJECTS

JsUser.email = 'mahadevsawant@gmail.com'
console.log(JsUser.email);

//how to lock values in object so no one can change it
//Object.freeze(JsUser)

//console.log(JsUser);

//how to add functions in objects
JsUser.greetings = function() {
    console.log('hello JS users');
    
    
}

console.log(JsUser.greetings());

//how referece name from the object in function
//when we have to reference the same object we will use this keyword and use dot with it to get all propertys of objects
JsUser.greetingsTwo = function() {
    console.log(`hello JS users,  ${this.name} here`);
}

console.log(JsUser.greetingsTwo());


