const state = {
    temp: 0
};

const increaseTemp = () => {
    state.temp += 1;
    state.tempValue.textContent = state.temp;
    changeColor(state.temp);
    changeLandscape(state.temp);
}

const decreaseTemp = () => {
    state.temp -= 1;
    state.tempValue.textContent = state.temp;
    changeColor(state.temp);
    changeLandscape(state.temp);
}

const changeColor = (temp) => {
    if (temp >= 80) {
        tempValue.style.color = 'red';
    } else if (temp < 79 && temp > 70){
        tempValue.style.color = "orange";
    } else if (temp < 69 && temp > 60){
        tempValue.style.color = "yellow";
    } else if (temp < 59 && temp > 50){
        tempValue.style.color = "green";
    } else {
        tempValue.style.color = "teal";
    }
}

const changeLandscape = (temp) => {
    if (temp >= 80) {
        landscapeEmojis.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp < 79 && temp > 70){
        landscapeEmojis.textContent ='🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp < 69 && temp > 60){
        landscapeEmojis.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else{
        landscapeEmojis.textContent ='🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}

const loadControls = () => {
    state.tempValue = document.getElementById("tempValue");
    state.increaseButton = document.getElementById("increaseTempControl");
    state.decreaseButton = document.getElementById("decreaseTempControl");
    state.landscapeEmojis = document.getElementById("landscape");
}

const registerEvents = () => {
    state.increaseButton.addEventListener("click", increaseTemp);
    state.decreaseButton.addEventListener("click", decreaseTemp);
}


const onLoaded = () => {
    // steps to carry out when the page has loaded
    loadControls();
    registerEvents();
};

onLoaded();