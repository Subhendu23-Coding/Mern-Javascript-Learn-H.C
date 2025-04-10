// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 10)];
    };
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    } else {
        alert("Color changer is already running!!");
    };
    function changeBgColor(){
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor(),` ${localTime}`);
    };
};
const stopChangingColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    } else {
        alert("Please start the color changer first!!");
    };
};

// console.log(Math.floor(Math.random() * 16));
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);