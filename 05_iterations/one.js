// for 

for(let i=0;i<=10;i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer Loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner Loop value : ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);   
}
for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);   
}