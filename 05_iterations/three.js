// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// maps - store unique values
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

// console.log(map);

for(const [key, value] of map)
{
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// this for of loop doesnt work here
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   
// }

