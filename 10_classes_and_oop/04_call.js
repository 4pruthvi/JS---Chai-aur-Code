// in browser: this ---> {window}
// in node environment: this ---> {} ; an empty object

function setUsername(username) {
    //complex DB calls
    this.username = username
    console.log('called');
}

function createUsername(username,email,password) {
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUsername('chai','chai@cahi.com',124)
console.log(chai);



/*

✅ The problem (if we do NOT use .call)

Inside createUser, we want to call SetUsername, but if we simply write:

SetUsername(username);


Then:

> SetUsername runs as a normal function

> this inside it will refer to global object (NOT the new user object!)

> So username will not be set correctly

❌ this.username = username goes to global
✅ Not the object we are creating


✅ Solution: Use .call()

SetUsername.call(this, username);

Meaning:

Run SetUsername() but force this inside it to refer to the same object that createUser is working on.

So both functions now modify the same object ✅





1. **Global Context Comment**:
   - The comment at the top explains the behavior of `this` in different environments:
     - In a browser, `this` in the global context refers to the `window` object.
     - In a Node.js environment, `this` in the global context refers to an empty object `{}`.

2. **SetUsername Function**:
   - This function takes a `username` parameter and assigns it to the `username` property of `this`.
   - It also logs "called" to the console.
   - `this.username = username` is a way to set the `username` property on the object that `this` refers to.

3. **createUser Function**:
   - This function is designed to create a user object with `username`, `email`, and `password` properties.
   - It calls `SetUsername` using `SetUsername.call(this, username)`.
     - The `call` method allows you to call a function with a specific `this` value and arguments.
     - Here, `this` refers to the new object being created by `createUser`.
     - `SetUsername.call(this, username)` sets the `username` property on the new object.
   - After setting the `username`, it sets the `email` and `password` properties on the new object.

4. **Creating a New User**:
   - `const chai = new createUser("chai", "chai@fb.com", "123")`:
     - This line creates a new instance of `createUser`.
     - The `new` keyword creates a new object and sets `this` to that new object within the `createUser` function.
     - The `createUser` function initializes the new object with the provided `username`, `email`, and `password`.

5. **Logging the Result**:
   - `console.log(chai)`:
     - This line logs the newly created user object to the console.
     - However, since `createUser` is not returning anything explicitly, `chai` will be `undefined`.


### Explanation of the `call` Method

- **`call` Method**:
  - The `call` method is a built-in JavaScript function that allows you to call a function with a specific `this` value and arguments.
  - Syntax: `functionName.call(thisArg, arg1, arg2, ...)`
  - In this code, `SetUsername.call(this, username)`:
    - `SetUsername` is the function to be called.
    - `this` is the value to be used as `this` inside `SetUsername`.
    - `username` is the argument passed to `SetUsername`.

By using `call`, you ensure that `SetUsername` sets the `username` property on the correct object, which is the new object being created by `createUser`.



*/
