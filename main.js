let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let miliseconds = document.getElementById("miliseconds")

let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")
let resetBtn = document.getElementById("reset")


let timerFunction = () => {
    let interval = setInterval(() => {
        if (miliseconds.textContent == "99") {
    
            miliseconds.innerText = "00"
            if (seconds.textContent == "59") {
    
                seconds.innerText = "00"
                if (minutes.textContent == "59") {
    
                    minutes.innerText = "00"
                    if (hours.textContent[0] == "0" && hours.textContent[1] != "9") {
                        hours.innerText = "0" + (Number(hours.textContent) + 1)
                    }
                    else {
                        hours.innerText = Number(hours.textContent) + 1
                    }
                }
                else {
                    if (minutes.textContent[0] == "0" && minutes.textContent[1] != "9") {
                        minutes.innerText = "0" + (Number(minutes.textContent) + 1)
                    }
                    else {
                        minutes.innerText = Number(minutes.textContent) + 1
                    }
                }
            }
            else {
                if (seconds.textContent[0] == "0" && seconds.textContent[1] != "9") {
                    seconds.innerText = "0" + (Number(seconds.textContent) + 1)
                }
                else {
                    seconds.innerText = Number(seconds.textContent) + 1
                }
            }
        }
        else {
            if (miliseconds.textContent[0] == "0" && miliseconds.textContent[1] != "9") {
                miliseconds.innerText = "0" + (Number(miliseconds.textContent) + 1)
            }
            else {
                miliseconds.innerText = Number(miliseconds.textContent) + 1
            }
        }
    }, 10);

    let pauseFunction = () => {
        clearInterval(interval)
        console.log("pause");
    }
    pauseBtn.addEventListener("click", pauseFunction)

    let resetFunction = () =>{
        clearInterval(interval)
        let time = [hours, minutes, seconds, miliseconds]
        for (let i = 0; i < 4; i++) {
            time[i].innerText = "00"
        }
        console.log("reset");
    }
    resetBtn.addEventListener("click", resetFunction)
}

startBtn.addEventListener("click", timerFunction)