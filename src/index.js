const tempState = {
    liveTemp : 68
};


let temp = tempState.liveTemp;
let color = 'yellow';
if (temp >= 80) {
    color = 'hot';
} else if (temp >= 70) {
    color = 'warm';
} else if (temp >= 60) {
    color = 'moderate';
} else if (temp >= 50) {
    color = 'cool';
} else {
    color = 'cold';
}

const temperature = document.getElementById('live_temp');
temperature.className = color;
temperature.textContent = String(tempState.liveTemp);

const tempIncrease = (event) => {
    
    //temp behavior
    tempState.liveTemp += 1;
    const liveTempContainer = document.querySelector("#live_temp");
    liveTempContainer.textContent = `${tempState.liveTemp}`;

}
const tempDecrease = (event) => {
    
    //temp behavior
    tempState.liveTemp -= 1;
    const liveTempContainer = document.querySelector("#live_temp");
    liveTempContainer.textContent = `${tempState.liveTemp}`;

}

const registerEventHandlers = (event) => {
    const tempIncButton = document.querySelector("#increase_button");
    tempIncButton.addEventListener("click", tempIncrease);
    const tempDecButton = document.querySelector("#decrease_button");
    tempDecButton.addEventListener("click", tempDecrease);
}



document.addEventListener("DOMContentLoaded", registerEventHandlers);