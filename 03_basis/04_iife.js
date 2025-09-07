// Immediately Invoked Functions Expression (IIFE)

// "iffy," is a JavaScript function that is executed immediately after its definition.
//  This pattern is primarily used to create a private scope for variables and functions, preventing them from polluting the global namespace. 

//whole function is wrapped in the paranthisis ()
//SYNTAX = ()() 

(function chai() { //it is named IIFE function
    console.log(`DB CONNECTED`);
}) (); //always end with semicolon to end code running

//In the form of Arrow function

( () => { // unnamed IIFE
    console.log(`DB CONNECTED AGAIN`);
}) (); //end with semicolon

( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
}) ('padmaja')