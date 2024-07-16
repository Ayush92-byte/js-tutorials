
let a = 100
if(true) {
    let a=10
    const b=20
    // console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);

 
function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

// +++++ interesting

function addone(num) {
    return num + 1
}

addone(5)


const addTwo = function(num) {
    return num + 2
}

addTwo(5)
