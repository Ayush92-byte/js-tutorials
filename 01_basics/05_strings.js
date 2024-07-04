const name = "ayush"
const repoCount = 50

// console.log(name + repoCount + " Value"); outdated

// string interpolation
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('ayushak')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt());

console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringOne = "   ayush"
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ayush.com/ayush%20ak"
console.log(url.replace('%20', '-'));