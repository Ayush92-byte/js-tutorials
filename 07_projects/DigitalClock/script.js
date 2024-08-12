const clock = document.getElementById('clock')
// or use const clock = document.querySelector('#clock)

// to show a data or run any method continously after any interval, use setInterval
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);