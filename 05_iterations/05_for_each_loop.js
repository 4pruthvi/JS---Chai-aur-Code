// for each loop

const brothers = ['pruthvi','sairaj','ruturaj']
                //no need to write the name of the function
brothers.forEach( function (values) {
    console.log(values);  
})

// using arrow functions insted of normal functions
brothers.forEach( (values) => {
    console.log(values); 
})

// creating new function and assigning it in for each
function printMe(values) {
    console.log(values);
}

brothers.forEach(printMe)

//for each has access to various paramiters
brothers.forEach( (values,index,arr) => {
    console.log(values,index,arr);
})

// Using for each on array containing objects for iteration and accessing

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach( (items) => {
    console.log(items.languageName);
})