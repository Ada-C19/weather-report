const state = {
    // HTML elements
    temperatureLabel: null,
    temperatureIncreaseButton: null,
    temperatureDecreaseButton: null,
    getRealtimeTemperatureButton: null,

    // data
    temperatureValue: 72,
};


const loadControls = () => {
    state.temperatureLabel = document.getElementById("tempValue");
    state.temperatureDecreaseButton = document.getElementById("decreaseTempControl");
    state.temperatureIncreaseButton = document.getElementById("increaseTempControl");
    state.getRealtimeTemperatureButton = document.getElementById("currentTempButton");
};

const handleTemperatureDecreaseButtonClick = () => {
    state.temperatureValue -= 1
    state.temperatureLabel.textContent = state.temperatureValue;

    if (state.temperatureValue >= 80) {
        state.temperatureLabel.classList.remove('orange');
        state.temperatureLabel.classList.add('red');
    } else if (state.temperatureValue >= 70) {
        state.temperatureLabel.classList.remove('red');
        state.temperatureLabel.classList.add('orange');
    } else if (state.temperatureValue >= 60) {
        state.temperatureLabel.classList.remove('orange');
        state.temperatureLabel.classList.add('yellow');
    } else if (state.temperatureValue >= 50) {
        state.temperatureLabel.classList.remove('yellow');
        state.temperatureLabel.classList.add('green');
    } else {
        state.temperatureLabel.classList.remove('green');
        state.temperatureLabel.classList.add('teal');
    }
}

const handleTemperatureIncreaseButtonClick = () => {
    state.temperatureValue+= 1
    state.temperatureLabel.textContent = state.temperatureValue;

    if (state.temperatureValue >= 80) {
        state.temperatureLabel.classList.remove('orange');
        state.temperatureLabel.classList.add('red');
    } else if (state.temperatureValue >= 70) {
        state.temperatureLabel.classList.remove('red');
        state.temperatureLabel.classList.add('orange');
    } else if (state.temperatureValue >= 60) {
        state.temperatureLabel.classList.remove('orange');
        state.temperatureLabel.classList.add('yellow');
    } else if (state.temperatureValue >= 50) {
        state.temperatureLabel.classList.remove('yellow');
        state.temperatureLabel.classList.add('green');
    } else {
        state.temperatureLabel.classList.remove('green');
        state.temperatureLabel.classList.add('teal');
    }
}

const handleGetRealtimeTemperatureButtonClick = () => {

}

const registerEvents = () => {
    state.temperatureDecreaseButton.addEventListener("click", handleTemperatureDecreaseButtonClick);
    state.temperatureIncreaseButton.addEventListener("click", handleTemperatureIncreaseButtonClick);
    state.getRealtimeTemperatureButton.addEventListener("click", handleGetRealtimeTemperatureButtonClick);
};

const onLoad = () => {
    loadControls();
    registerEvents();
};

onLoad();


