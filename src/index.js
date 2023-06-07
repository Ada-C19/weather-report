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
    setTempColor();
};

const handleDecreaseTempClicked = () => {
    --state.temperature;
    state.tempValue.textContent = state.temperature;
    setTempColor();
};

const setTempColor = () => {
    let colorIdentifier = Math.floor(state.temperature / 10) 
    state.tempValue.classList.toggle('teal', colorIdentifier <= 4);
    state.tempValue.classList.toggle('green', colorIdentifier === 5);
    state.tempValue.classList.toggle('yellow', colorIdentifier === 6);
    state.tempValue.classList.toggle('orange', colorIdentifier === 7);
    state.tempValue.classList.toggle('red', colorIdentifier >= 8);
}

const registerEventHandlers = () => {
    loadControls();
    setTempColor();
    state.increaseTempButton.addEventListener("click", handleIncreaseTempClicked);
    state.decreaseTempButton.addEventListener("click", handleDecreaseTempClicked);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);