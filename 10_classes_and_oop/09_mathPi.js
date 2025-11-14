/*
Object.getOwnPropertyDescriptor()

It is a JavaScript method used to check the hidden properties (metadata) of an object's property.
It tells you how a property behaves — can it be changed, deleted, seen during loops, etc.

Syntax:
Object.getOwnPropertyDescriptor(obj, prop);

-> `obj`: object name containing the property
-> `prop`: The name or Symbol of the property whose descriptor is to be retrieved

🧩 Why do we need this?

Because every property in JavaScript has extra settings behind the scenes:

value → the actual stored value

writable → A boolean indicating can we change it?

enumerable → A boolean indicating will it appear in loops?

configurable → A boolean indicating can we delete or redefine it?

get and set → for getters & setters

Using Object.getOwnPropertyDescriptor() we can see those hidden settings. */

console.log(Math.PI); //universal constant
Math.PI = 4;
console.log(Math.PI); // its value cannot be overite means changed

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);

const chai = {
    name : "home chai",
    price: "mothers love",
    isAvailable: "always",

    orderChai: function() {
        console.log("chai nahi hain");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//Now we will define our property descriptor and we will change its values

Object.defineProperty(chai,'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// entries: Returns an array of key/values of the enumerable properties of an object

for (let [key,value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
}

//// the enumerable property for `name` is false , so the above loop will not apply on `name` property.