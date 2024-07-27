const coding = ["js", "ruby", "java", "cpp", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// or

// coding.forEach( (item) => {
//     console.log(item);
// } )

// or

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


// this will help in accessing values from database 

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )