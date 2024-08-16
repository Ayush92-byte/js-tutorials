// object literal
const user = {
    username: "Ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);

        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


// constructor function -> gives you everytime a new instance means a copy which you can use for ur purpose. others will not get affected.

function User(username, loginCount, isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Ayush", 12, true)
const userTwo = new User("JS", 11, false)
console.log(userOne);

// working of this and new -> 1. first empty object is create 2.'new' backs all the arguments of function 3. all the arguments goes to this.  