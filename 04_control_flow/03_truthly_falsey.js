const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt -> 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

//how to check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
//how to check empty object
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null , undefined

let val1;

// val1 = 5 ?? 10  //5
// val1 = null ?? 20 //20
// val1 = undefined ?? 40 //40
val1 = null ?? 20 ?? 78 // 20 [first value after null]

console.log(val1);

// Treniary Opreator : condition ? true : false

const teaPrice = 10
teaPrice > 9 ? console.log('yes') : console.log('no');
