// for of loops

// ["", "", ""] : multiple strings in array 
// [{}, {}, {}] : multiple objects in array

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(`value is ${i}`);
}

const string01 = 'Hello pruthvi!'
for (const value of string01) {
    console.log(`each character is ${value}`);
}

// Map {object} which stores key-value pairs {it has unique elements only. not contain duplicates}

const map = new Map()
//adds a new key-value pair to the map
map.set('IND' , 'INDIA')
map.set('USA','United States of America')
map.set('AUS','Australia')

console.log(map);

// for of loop on map

// if we want particular value only between key and value or both then use [] to destructore
for (const [key,value] of map) {
    console.log(key ,':-', value);
    console.log(value);
}

//for of loops on objects
//for of loops does not work on objects as they are not iterateable

//to iterate an object using for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//this will not work because Objects are not iterable using for of loop
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }