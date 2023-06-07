const state = {}

const loadControls = () => {
    const elementsWithId = document.querySelectorAll('[id')
    elementsWithId.forEach(element => state[element.id] = element);
}

const registerEvents = () => {
    state.increaseTempControl.addEventListener('click', handleIncrease)
    state.decreaseTempControl.addEventListener('click', handleDecrease)
}

const handleIncrease = () => handleTempChange(1);
const handleDecrease = () => handleTempChange(-1);

const handleTempChange = (adj) => {
    let currentTemp = parseInt(state.tempValue.innerText);
    let newTemp = currentTemp + adj;
    state.tempValue.innerText = newTemp;
}

const onLoaded = () => {
    loadControls();
    registerEvents();
}

document.addEventListener("DOMContentLoaded", onLoaded);
