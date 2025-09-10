const coding = ['java','cpp','python','ruby']

//for each loop doesnt return anyting
//storing for each loop in variable

const values = coding.forEach( (items) => {
    console.log(items);
    return items  //cannot retrun undefined
})

console.log(values);

// Filter() operations [they can return]
//filter : Returns the elements of an array that meet the condition specified in a callback function.
//.filter() creates a new array with elements that pass the given condition.
const myNumber = [1,2,3,4,5,6,7,8,9,10]

//used return due to scope is present
const result = myNumber.filter( (nums) => {
    return nums > 7
})

console.log(result);

//no need to use return here.
const newResult = myNumber.filter( (nums) => nums > 4)
console.log(newResult);

//how we can do above in for each loop
const newResult01 = []

myNumber.forEach((nums) => {
    if (nums > 5) {
        newResult01.push(nums)
    }
}) 

console.log(newResult01);

//using in real world [filter]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//bk = objects in above arrays

//accessing bookd which has genere = history
let userBooks = books.filter((bk) => bk.genre === 'History' )

//book published after 2000
userBooks = books.filter((bk) => bk.publish >= 2000)

//i want book published after 1995 and of gener history
userBooks = books.filter((bk) => (bk.genre == 'History' && bk.publish >= 1995) )
console.log(userBooks);