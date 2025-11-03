// Object Litral

let user = {
    username: 'Pruthvi',
    loginCount: 3,
    signedIn: true,

    //method used in object 
    getUserDetails: function() {  
        //console.log('got user details from database');
        console.log(`Username: ${this.username}`);  //here 'this' is used before username to get username value from current context
        console.log(this); //gives current context means whole object above
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // op: {} because it is in global context currently

// CONSTRUCTOR FUNCTION

// In JavaScript, a constructor function is a special type of function that is used to create and initialize objects.When you want to create multiple objects with similar properties and methods, you can define a constructor function as a blueprint for those objects.

// Here are some key points about constructor functions in JavaScript:

// 1. ** Usage **: Constructor functions are typically used with the`new` keyword to create new instances of objects based on the defined blueprint.

// 2. ** Initialization **: Inside a constructor function, you can set up the initial state of the object by assigning values to properties.

// 3. ** `this` Keyword **: Within a constructor function, the `this` keyword is used to refer to the current instance of the object being created.It allows you to set and access properties specific to that instance.

// 4. ** Example **:

// ```javascript
//    Constructor function for creating Person objects
//    function Person(name, age) {
//        this.name = name;
//        this.age = age;
//        this.greet = function() {
//            return `Hello, my name is ${ this.name } and I am ${ this.age } years old.`;
//        };
//    }

//    Creating instances of Person using the constructor function
//    const person1 = new Person('Alice', 30);
//    const person2 = new Person('Bob', 25);

//    console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
//    console.log(person2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
//    ```

// In the example above, `Person` is a constructor function for creating`Person` objects with `name`, `age`, and a `greet` method.By using the `new` keyword, we can create multiple instances of `Person` with different properties while sharing the same methods defined in the constructor function  


// Constructor Function 

// A constructor function in JavaScript is a special type of function used to create and initialize objects. 
// It serves as a blueprint for creating multiple similar objects, each with its own unique properties and method

//new : it is constructor funciton . it allows us to create multilple objects instance from one object litral
// creates new context

// const promiseOne = new Promise()

function User(username,loginCount,signIn) {
    this.username = username //Inside the function, this → refers to that new empty object
    this.loginCount = loginCount  //userOne.username = pruthvi;
    this.signIn = signIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    //return this;   //it is not compulsory to write as `this` keyword is implicitly returned
}

// const userOne = User("Pruthvi",3,true)
// const userTwo  = User("rutu",4,false)

// console.log(userOne);  // i am trying to get value of userOne but i am getting values of userTwo. Because values are overrided
// as we have not used the new keywoed

// without new keyword userTwo will overwrite userOne  

// new → creates a new empty object {}

//When you write new User(...), JavaScript internally does:

/*
* Step-1: By using `new` keyword, an empty object is created called as `instance`.
* 
* Step-2: A constructor function is called because of `new` keyword. It packs all the arguments and gives us.
* 
* Step-3: All the arguments are injected into `this` keyword.
* 
* Step-4: We get all the values in the function. */



/* 1. Creates a new empty object {}.

2.Sets this to point to that new object.

3.Runs the function body (this.username = ... etc.)

4.Returns the new object automatically.*/

const userOne = new User("Pruthvi",3,true)
const userTwo  = new User("rutu",4,false)

console.log(userOne);
console.log(userTwo);


/*
The `instanceof` operator in JavaScript is used to check if an object belongs to a particular class or constructor function. It returns `true` if the object is an instance of the specified class or constructor function, otherwise it returns `false`.

Here's a simple example to illustrate the usage of `instanceof`:

```javascript
 Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

 Creating an instance of Person
const person = new Person('Alice', 30);

 Using instanceof to check if person is an instance of Person
console.log(person instanceof Person); // Output: true
```

In this example, `person instanceof Person` returns `true` because the `person` object was created using the `Person` constructor function.

*/