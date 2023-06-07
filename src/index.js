const state = {
    temp: 32
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
        state.tempValue.style.color = 'red';
    } else if (temp <= 79 && temp >= 70) {
        state.tempValue.style.color = "orange";
    } else if (temp <= 69 && temp >= 60) {
        state.tempValue.style.color = "yellow";
    } else if (temp <= 59 && temp >= 50) {
        state.tempValue.style.color = "green";
    } else {
        state.tempValue.style.color = "teal";
    }
}
const changeLandscape = (temp) => {
    if (temp >= 80) {
        state.landscapeEmojis.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp <= 79 && temp >= 70) {
        state.landscapeEmojis.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp <= 69 && temp >= 60) {
        state.landscapeEmojis.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else {
        state.landscapeEmojis.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
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
    loadControls();
    registerEvents();
};

onLoaded();