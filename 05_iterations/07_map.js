// maps in js 
//map : Calls a defined callback function on each element of an array, and returns an array that contains the results.


const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumber.map((nums) => nums + 10)
console.log(newNums);

// map cahining
const myNumber01 = [1,2,3,4,5,6,7,8,9,10]

const newNums01 = myNumber01
                    .map( (num) => num * 10)            
                    .map((num) => num + 1)  ////here, num takes values from the above map function
                    .filter((num) => num > 40)
console.log(newNums01);
