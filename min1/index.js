const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#mins")
const seconds = document.querySelector("#seconds")


function newyear(){
    const currentYear= new Date().getFullYear()
const newYear= new Date(`january 1 ${currentYear+1} 00:00:00`)
currentDate = new Date()
let diff = newYear - currentDate;
const d = Math.floor(diff/1000/60/60/24)
const h = Math.floor((diff/1000/60/60)%24)
const m = Math.floor((diff/1000/60)%60)
const s = Math.floor((diff/1000)%60)

days.innerHTML=d
minutes.innerHTML=m
hours.innerHTML=h
seconds.innerHTML=s
}

setInterval(newyear,1000)