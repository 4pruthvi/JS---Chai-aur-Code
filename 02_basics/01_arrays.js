// array
//there can be different types of elements in the array
//js arrays are resizalable

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ['shaktiman', 'krish']

//another way to declare arrays
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);

//Array methods

//push is used to add new data or element inside the array
myArr.push(6)
myArr.push(7)
console.log(myArr);

//remove the last elemet from the array
myArr.pop()
console.log(myArr);

//adds element to the first positon of the arrays.
myArr.unshift(9)
// myArr.shift()  remove the first element of the array
console.log(myArr);

// insludes answers our question as if 9 is present or not in arry.
console.log(myArr.includes(9));

// gives index of the element
console.log(myArr.indexOf(3));

//join binds array elements and convert them into string format
const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

//---------------------------------------------------------------------------------------
//slice and splice

// slice(): This method creates a new array containing a 
// shallow copy of a portion of the original array. 
// It does not modify the original array.

//splice(): This method modifies the original array by adding,
// removing, or replacing elements.
// It returns an array containing the deleted elements 


//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array); //splice
console.log(array2); //slice

//*************************** */

console.log('A',myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log('B',myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2); //spice removes those selected elements form the arrays and modifys it
console.log('C',myArr);

//splice not includes last index value but it takes number of values given from starting index.....
//for ex: arr = [2,3,4,5,6,7,8,9] and then console.log(arr.splice(3,4)); gives 5,6,7,8




