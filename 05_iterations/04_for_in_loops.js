// for in loops

//we can use for in loops to iterate on objects

const myObject = {
    JS: 'java script',
    cpp: 'c++',
    swift: 'swift by apple',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop on array

const programming = ['cpp','java','js','python','swift']

for (const key in programming) {
    console.log(programming[key]);
}

// we cannot apply for in loops on map because it is not iterable