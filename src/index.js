const state = {
    // HTML elements
    temperatureLabel: null,
    temperatureIncreaseButton: null,
    temperatureDecreaseButton: null,
    getRealtimeTemperatureButton: null,

    // data
    temperatureDefault: 72,
};

const loadControls = () => {
    state.temperatureLabel = document.getElementById("tempValue");
    state.temperatureDecreaseButton = document.getElementById("decreaseTempControl");
    state.temperatureIncreaseButton = document.getElementById("increaseTempControl");
    state.getRealtimeTemperatureButton = document.getElementById("currentTempButton");
};

const handleTemperatureDecreaseButtonClick = () => {
    state.temperatureDefault -= 1
    state.temperatureLabel.textContent = state.temperatureDefault;
}

const handleTemperatureIncreaseButtonClick = () => {
    state.temperatureDefault += 1
    state.temperatureLabel.textContent = state.temperatureDefault;

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


