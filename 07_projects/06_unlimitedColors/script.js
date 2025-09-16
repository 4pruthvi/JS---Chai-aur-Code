//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]    //gives lower value (because of floor) between 0 and 16
    }
    return color;
};

let intervalId
const startChangingColor = function () {

    if (!intervalId) {  //HERE WE CHECK IT INTERVALID IS NULL OR EMPTY
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;  //WE EMPTY VARIABLE HERE TO SAVE MEMORY [GOOD PRECTICE]
};

document.querySelector('#start').addEventListener('click', startChangingColor)


document.querySelector('#stop').addEventListener('click', stopChangingColor)

//CODE I TYPED 
/*

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
let currentIndex = 0
let stopAgain

const changeBackground = function() {
  document.querySelector('body').style.backgroundColor = colors[currentIndex]
}

start.addEventListener('click',function() {
  stopAgain = setInterval(function() {
    changeBackground()
    currentIndex++
    if (currentIndex >= colors.length) {
      currentIndex = 0;
    }
  },1000)
  
})

stop.addEventListener('click',function() {
  clearInterval(stopAgain)
})

*/