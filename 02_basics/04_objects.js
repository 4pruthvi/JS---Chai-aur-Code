// Constructor way to declare objects. [singleton]
// const tinderUser = {} // [non-singelton]

const tinderUser = new Object

tinderUser.id = '123abc'
tinderUser.name = 'sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// using objects in objects
const regularUser = {
    email: 'someuser@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'PRUTHVI',
            lastname: 'SAWANT'
        }
    }
}

//how to access nested objects and elements in the objects
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

// how to merge or combine the two objects
const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'a' , 4:'b'}
const obj3 = {5:'a' , 6:'b'}

//const obj4 = {obj1,obj2,obj3} dont use

//in object.assign we add {} first because this act as target and all remaining values which are objects stores in it
//we will not use object.assign commonly 
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//we will use spread for combining objects
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

//when values come from database they are in the form of array which contain objects
const users = [
    {
        id: 123,
        name: 'babban'
    },
    {
        id: 123,
        name: 'babban'
    },
    {
        id: 123,
        name: 'babban'
    }, 
]

//as it is array we can access with indices
users[1].id

console.log(Object.keys(tinderUser));  //all keys in arrays form
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

//we can also ask objects that if it has particular value or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//De-structuring

const courese = {
    coursename: 'js in hindi',
    price: '999',
    courseInstructor: 'hitesh'
}

// courese.courseInstructor

//another way to access onject elements
const {courseInstructor} = courese
console.log(courseInstructor);

//OR [we can change also change the name of elements in object and access it]

const {courseInstructor: insturctor} = courese
console.log(insturctor);

//jason [belown]

{
    "name": "pruthvi",
    "courseName": "it",
    "price": "free"
}
