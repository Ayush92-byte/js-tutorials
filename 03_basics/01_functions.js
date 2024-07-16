function sayMyName() {
    // console.log("Hello");
}

sayMyName()

// function add(n1, n2) {
//     console.log(n1 + n2);
// }

function add(n1, n2) {
    // let result = n1 + n2
    // return result
    // console.log("Ayush");// after return, nothing will print

    // or
    return n1+n2
}

const result = add(3, 5)

// console.log("Result: ", result);

function loginUserMsg(username){
    // if(!username) it is same as below, bcz undefined is false in js
    if(username === undefined) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Ayush"))
// console.log(loginUserMsg())

function calculateCartPrice(val1, val2, ...n1){
    return n1
}

console.log(calculateCartPrice(2, 4, 5))

// object
const user = {
    username: "Ayush",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 299
})
 // Array 
const Arr = [2,3,4,1]

function returnSecondValue(getArr) {
    return getArr[1]
}

console.log(returnSecondValue(Arr));
