// const tinderUser = new Object() -- > this is singleton object
const tinderUser = {} // this is non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "ayush",
            lastname: "kushwaha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2} // simple and latest to use
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
 // object de-structure

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// API's 

//json
// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "free" 
// }
