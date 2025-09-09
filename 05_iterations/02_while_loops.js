// While loops

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// While loop on array
let myArray = ['hitman' , 'kingkohli' , 'captailcool']

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// do - while loops
// in do while loops work is done first and condition is checked at last
let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);