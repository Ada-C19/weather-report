const state = {
    tempValueCount: 0,
    tempValue: null,
    increaseTempControl: null,
    decreaseTempControl: null,
};

const increaseTemp = (event) => {
    ++state.tempValueCount;
    state.tempValue.textContent = state.tempValueCount;
};

const registerEvents = () => {
    state.increaseTempControl.addEventListener("click", increaseTemp);
};

const loadControls = () => {
    state.tempValue = document.getElementById("tempValue");
    state.increaseTempControl = document.getElementById("increaseTempControl");
    state.decreaseTempControl = document.getElementById("decreaseTempControl");
};

const onLoaded = () => {
    loadControls();
    registerEvents();
};

onLoaded();