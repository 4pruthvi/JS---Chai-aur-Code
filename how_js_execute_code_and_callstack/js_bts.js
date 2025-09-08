// Javascript Execution context: it means, the javascript created by you, how it will run

//Javascript has 2 execution context: 
// 1. Global execution context: It is store in 'this', executed in thread, remember javascript is single threaded language
// 2. Functional execution context

/*Javascript runs the code into 2 phases 1. Memory creation phase:

Memory is created for variables and functions declared, it is not executed here

Just variables are created, and kept with us 2. Execution Phase: we will get all the values

lets see with the example*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
let total  = num1  + num2;
        return total;
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// 1.  Memory Creation Phase: Here, In 1st cyle we will get
// - val1 -> undefined
// - val2 -> undefined
// - addNum -> defination
// - result1 -> undefined
// - result2 -> undefined
// 2.  Execution Phase:
// - val1  <- 10
// - val1  <- 5

/*For addNum function, now different execution phase will be created

New variable environment
Execution thread
Memory phase:
val1 -> undefined
val2 -> undefined - total -> undefined
Execution context: Here execution happens
num1 -> 10
num2 -> 5
total -> 15 ➜ total will return to global execution context
The execution context will be deleted after the work is done
result1 -> 15
result2 -> here again 2 phased will be created
Memory phase
Execution Phase
here again the total will be calculated and sent to the execution context
Callstack: All the method will be executed here, it will be removed once the work is done

It follow the LIFO

*/



//************************************************************************************************ */

/*  🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Contex */


//call stack
/* Understand call stack with the help of live demo :
browser > inspect > Sources
1.then create a snippet by clicking on the arrow(>>) next to workspace
2.then write down some functions in the created snippet ,do save them by ctrl+S*/

/******************************************************************************* */

/* 🔹 What is Execution Context?

Execution Context is the environment in which JavaScript code is evaluated and executed.
It contains information about variables, functions, objects, and the scope in which the code is running.

🔹 Types of Execution Context

Global Execution Context (GEC):
Created when the JS file first runs.
this refers to the window object (in browser) or global (in Node.js).
Only one global context exists.

Function Execution Context (FEC):
Created whenever a function is invoked.
Each function has its own context.
Stores local variables, arguments, and inner function declarations.

Eval Execution Context (rarely used):
Created when code is executed inside eval() function.
Not recommended in real projects.

🔹 Execution Context Phases

Each context has 2 phases:

Creation Phase (Memory creation / Hoisting):
Variables and function declarations are stored in memory.
var is initialized as undefined.
Functions are fully hoisted.

Execution Phase:
Code runs line by line.
Variables are assigned actual values.
Functions are executed.

🔹 Execution Stack (Call Stack)
JavaScript uses a call stack to manage execution contexts.

First, the Global Execution Context is pushed on the stack.
When a function is called, its Function Execution Context is pushed.
When the function finishes, it is popped out.
At the end, Global Execution Context is popped*/