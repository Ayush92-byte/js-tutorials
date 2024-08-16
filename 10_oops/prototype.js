// let myname = "Ayush    "

// console.log(myname.truelength);


let myheroes = ["thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function(){
    console.log(`ayush is present in all objects`);
}

Array.prototype.heyayush = function(){
    console.log(`hwy`);
    
}

// heropower.ayush()

myheroes.ayush()
myheroes.heyayush()
// heropower.heyayush()

// inheritance
