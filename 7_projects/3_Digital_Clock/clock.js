
// const clock = document.querySelector('#clock'); any one used

// const clock = document.getElementById('clock')
// // let date = new Date();
// // console.log(date.toLocaleTimeString);


const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date(); 
    console.log(date.toLocaleTimeString());  
    clock.innerHTML = date.toLocaleTimeString();  
}, 1000);
