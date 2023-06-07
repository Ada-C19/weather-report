const tempState = {
    liveTemp : 68
};
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