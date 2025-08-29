const score = 400 //here js has automatically identified the that 400 is a number
console.log(score);

// we can expiclitly define the Number in js. that will be number everywhere
const balance = new Number(299)
console.log(balance);

//converted number to string
console.log(balance.toString());

//as it is converted to string we can use string methods such as length
console.log(balance.toString().length);

//used to show how much number should be present after decimal
console.log(balance.toFixed(2));

//give round off value of a number in the form of string
const otherNumber = 124.8746
console.log(otherNumber.toPrecision(3)); //op 125
console.log(otherNumber.toPrecision(4)); //op 124.9

// adds , to the hundered numbers according to given standaed [indian, default usa]
const hundereds = 1957494
console.log(hundereds.toLocaleString()); // adds , as default form
console.log(hundereds.toLocaleString('en-IN')); //To convert in indian number form

console.log(     );
console.log("MATHS SECTIONS STARTS BELOW");
console.log(        );


//********************************* MATHS ****************************************************************

console.log(Math);

// absolute convert the negative value to positive only not vice versa
console.log(Math.abs(-6));

//round offf us used to round off the input value 
console.log(Math.round(4.5));
//ceiling means top so choose greater no if there in anyno after decimal
console.log(Math.ceil(4.3));
//floor means lower so choose lower value only
console.log(Math.floor(4.3));

//used to find min and max value from the array
console.log(Math.max(4,7,8,1));
console.log(Math.min(4,7,8,1));

//random gives random value between 0 and 1.
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); //convert value to one dight

//below gives random value between 10 and 20
const min = 10;
const max =20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


