// how data is store in memory and how it is access, on this is the basis, data is categorized in two parts- primitive and non-primitive.

// primitive type -> 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// Reference(Non-primitive) type -> Reference can be allocate in the memory.

// Array, Objects, Functions

const heroes = ["shaktiman","naagraj", "doga"]

let myObj = {
    name: "ayush",
    age: 22,
}

const myFunc = function() {
    console.log("Hello World!");
}

// to find datatype : use of typeof

