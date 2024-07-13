// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Kushwaha",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Ayush@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);// we cant access full name with (dot)

// console.log(JsUser[mySym]);
// we cant use symbol without square bracket. otherwise it will be treated as string.

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser");
}
console.log(JsUser.greeting());