const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ["js", "rb", "py", "cpp"]

for (const key in prog) {
    // console.log(prog[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const key in map) {
    // console.log(key);
}

