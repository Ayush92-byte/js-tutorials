const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username:"name", email:"name@example.com"})
  }, 1000)  
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Ayush", password: "1234"})
        } else {
           reject('ERROR: Something went wrong') 
        }
    }, 1000)
})


// chaining 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "1234"})
        } else {
           reject('ERROR: JS went wrong') 
        }
    }, 1000)
});

async function consumedPromiseFive(){
       try {
        const response = await promiseFive
        console.log(response);
       } catch (error) {
        console.log(error);
       }
}

consumedPromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('jsonplaceholder.typicode.come/users')
    const data = 
    await response.json()
    console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
