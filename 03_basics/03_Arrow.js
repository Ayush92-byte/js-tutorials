const user = {
    username: "Ayush",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()

// console.log(this);

// function chai() {
//     let username = "Ayush"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Ayush"
    console.log(this);
}
// chai()

// const addTwo = (n1, n2) => {
//     return n1+n2
// }
// or 

// curly braces m wrap krne pr return keyword aayga (explicit return) but braces m wrap krne pr nhi (implicit return)

// const addTwo = (n1, n2) => (n1+n2)
const addTwo = (n1, n2) => ({username: "Ayush"})

console.log(addTwo(2,3));
