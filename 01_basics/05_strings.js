const name = 'pruthvi'  //string decliration
const repoCount = 50

console.log(name.toUpperCase());

//string concadination
console.log(name + repoCount + ' Value');

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string
const gameName = new String('sawant')

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4).toUpperCase());
console.log(gameName.length);
console.log(gameName.indexOf('t')); 
console.log(gameName[0]);
console.log(name[0]);

//Methods in Stirng

//substirng does not allow negative indices. treat them as 0
const newString = gameName.substring(0,3)
console.log(newString);

//slice allows negative indices
const anotherString = gameName.slice(-4)
console.log(anotherString);

//tirm is used to remove starting and ending space .
const newStirngOne = "       pruthvi    "
console.log(newStirngOne);
console.log(newStirngOne.trim());

//replace is use to replace particular word in the stirng
const url = "https://pruthvi.com/pruthvi%30sawant"
console.log(url.replace('%30','--'));
console.log(url.replace('pruthvi','mahadev'));
console.log(url.includes('pruthvi'));

//created array form string using specific seperator [split()]
const nameThree = 'hitman-rohit-sharma';
console.log(nameThree.split('-'));
