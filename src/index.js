const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempValue: null,
    temperature: 69,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
    state.tempValue = document.getElementById("tempValue");
};

const handleIncreaseTempClicked = () => {
    ++state.temperature;
    state.tempValue.textContent = state.temperature;
};

const handleDecreaseTempClicked = () => {
    --state.temperature;
    state.tempValue.textContent = state.temperature;
};



const registerEventHandlers = () => {
    loadControls();
    state.increaseTempButton.addEventListener("click", handleIncreaseTempClicked);
    state.decreaseTempButton.addEventListener("click", handleDecreaseTempClicked);
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);