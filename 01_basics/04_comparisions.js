// console.log(2 > 1);  //it gives answer in boolean value . true or false
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//while comparing make sure that datatype should be same of both elements.
//because problem may occur as it does not give pridictable result

// console.log("2" > 1);
// console.log("02" > 1);

// Here problem occurs
// here both comparision[>,<] and equal check[==] operator works differently
// comparision convert null to number 0.

//avoid this type of comparisons

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

// ===  [it is strict check. it checks values strictly]

console.log("2" == 2); //true bec == convert both to same datatype and compare
console.log("2" === 2); //false because different data types so comparision fails

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  objec 






