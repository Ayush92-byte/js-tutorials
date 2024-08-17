const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// the reason why we can't change the value of pi - when we see some of the properties of pi which are hidden, there, writable: false, enumerable: false, configurable: false and we can also give such properties to our frameworks which can not be changed.

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log(("offff"));
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
