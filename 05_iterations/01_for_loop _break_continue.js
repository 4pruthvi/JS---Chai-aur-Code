// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4) {
        console.log('4 is my fav no');
    }
    console.log(element);
} 

//nested loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
}

//using for loop on array
let myArray = ['hitman' , 'runmachine' , 'captailcool' , 'masterblaster']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);    
}

// Break and Continue

// break keyword : loop stops to execute after break statement

for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        console.log(`4 is my favourate no`);
        break  //stops the loop once condition is true
    }
    console.log(`Value of i is ${i}`);
    
}

//continue keyword : skips the value and continue from the next value

for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        console.log(`4 is my favourate no`);
        continue  //yek condition maff 
    }
    console.log(`Value of i is ${i}`);
    
}