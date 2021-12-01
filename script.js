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
    
    days.innerHTML = Math.floor(seconds / 3600 / 24)
    hours.innerHTML = Math.floor((seconds / 3600) % 24)
    minutes.innerHTML = Math.floor((seconds / 60) % 60)
    secondss.innerHTML = seconds % 60;

    
}


setInterval(countdown, 1000)