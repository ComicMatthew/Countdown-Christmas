//script file
//testing if changes apply to GitHub

//test test test 

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const secondss = document.getElementById('seconds')

const christmas = "26 Dec 2021" ; 


function countdown() { 
    const christmasDate = new Date(christmas);
    const currentDate = new Date()


    const seconds= Math.floor((christmasDate - currentDate) / 1000);
    
    let daysClock = Math.floor(seconds / 3600 / 24)
    let hoursClock = Math.floor((seconds / 3600) % 24)
    let minutesClock = Math.floor((seconds / 60) % 60)
    let secondsClock = seconds % 60;

    days.innerHTML = daysClock
    hours.innerHTML = hoursClock
    minutes.innerHTML = putZero(minutesClock)
    secondss.innerHTML = putZero(secondsClock)
}

function putZero(time) {
 return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)