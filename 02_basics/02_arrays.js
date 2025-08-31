const marvelHeros = ['ironman','thor','spiderman']
const dcHeros = ['superman','batman','flash']

//both arrays will not merge.it takes dcHeros array as single data element in marvelHeros
// marvelHeros.push(dcHeros)

console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

//to merge both arrays properly we use concat
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

//Spread is another method to merge both arrays it is more often used than concat
const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

//convert all subarrays into single array
const another_arrays = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arrays = another_arrays.flat(Infinity)
console.log(real_another_arrays);

//the Array.isArray() method to check if the value "Hitesh" is an array. 
// Since "Hitesh" is a string, not an array, this will output false
console.log(Array.isArray('pruthvi'));

//the Array.from() method to create a new Array
//Therefore, this will output ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from('pruthvi'));

//not able to convert so give empty array in op
console.log(Array.from({name: "pruthvi"})); //interesting

//return array form set of elements or variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
