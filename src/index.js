const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempValue: null,
    temperature: 69,
    landscape: null,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
    state.tempValue = document.getElementById("tempValue");
    state.landscape = document.getElementById("landscape");
};

const handleIncreaseTempClicked = () => {
    ++state.temperature;
    state.tempValue.textContent = state.temperature;
    setTempDisplay();
};

const handleDecreaseTempClicked = () => {
    --state.temperature;
    state.tempValue.textContent = state.temperature;
    setTempDisplay();
};

const setTempDisplay = () => {
    let displayIdentifier = Math.floor(state.temperature / 10) 
    state.tempValue.classList.toggle('teal', displayIdentifier <= 4);
    state.tempValue.classList.toggle('green', displayIdentifier === 5);
    state.tempValue.classList.toggle('yellow', displayIdentifier === 6);
    state.tempValue.classList.toggle('orange', displayIdentifier === 7);
    state.tempValue.classList.toggle('red', displayIdentifier >= 8);
    
    const landscapeTexts = [
        '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
        '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
        '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
        '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    ];
    let displayIndex = displayIdentifier >= 5 ? displayIdentifier - 5 : 0;
    state.landscape.textContent = landscapeTexts[displayIndex];
}

const registerEventHandlers = () => {
    loadControls();
    setTempDisplay();
    state.increaseTempButton.addEventListener("click", handleIncreaseTempClicked);
    state.decreaseTempButton.addEventListener("click", handleDecreaseTempClicked);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);