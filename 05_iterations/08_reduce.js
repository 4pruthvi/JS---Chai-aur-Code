// reduce in js
//reduce : It returns a single value: the function's accumulated result and does not change the original array.

const myNumber  = [1,2,3,4,5]

const myTotal = myNumber.reduce(function (accumulator,currentvalue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentvalue}`);
    return accumulator + currentvalue
    
},0) //0 is initial value of the accumulator

console.log(myTotal);

// using arrow function in reduce

const myNumber01 = [1,2,3,4,5]

const myTotal01 = myNumber01.reduce( (accumulator,currentValue) => accumulator + currentValue ,0)
console.log(myTotal01);

//applying in real world

const shoppingCart = [
    {
        courseName: 'js course',
        price: 2999
    },
    {
        courseName: 'py course',
        price: 999
    },
    {
        courseName: 'android devlopment course',
        price: 5999
    },
    {
        courseName: 'data science course',
        price: 12999
    },
]
//to get total price in cart
const totalPrice = shoppingCart.reduce( (accumulator,item) => accumulator + item.price ,0)
console.log(totalPrice);

//item denotes each object in the array
