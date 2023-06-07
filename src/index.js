const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempDeg: 0,
    landscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener("click", increaseTemp, changeColor, changeLandscape);
    state.decreaseTempButton.addEventListener("click", decreaseTemp, changeColor, changeLandscape);
    
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
};

const increaseTemp = () => {
    state.tempDeg += 1;
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = `${state.tempDeg}`
    changeColor(tempValue);
    changeLandscape(tempValue);
};

const decreaseTemp = () => {
    state.tempDeg -= 1;
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = `${state.tempDeg}`;
    changeColor(tempValue);
    changeLandscape(tempValue);
};

const changeColor = () => {
    const tempValue = document.getElementById("tempValue");
    let currentTemp = tempValue.textContent;
    if (currentTemp >= 80) {
        tempValue.style.color = "red";
    } else if (currentTemp >= 70) {
        tempValue.style.color = "orange";
    } else if (currentTemp >= 60) {
        tempValue.style.color = "yellow";
    } else if (currentTemp >= 50) {
        tempValue.style.color = "green";
    } else {
        tempValue.style.color = "teal";
    }
};

const changeLandscape = () => {
    const tempValue = document.getElementById("tempValue");
    let currentTemp = tempValue.textContent;
    const landscapeElement = document.getElementById("landscape");
    // let currentLandscape = landscape.textContent;
    if (currentTemp >= 80) {
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        landscapeElement.textContent = `${state.landscape}`;
    } else if (currentTemp >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
        landscapeElement.textContent = `${state.landscape}`;
    } else if (currentTemp >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
        landscapeElement.textContent = `${state.landscape}`;
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
        landscapeElement.textContent = `${state.landscape}`;
    }
};

const onLoaded = () => {
    loadControls();
    registerEventHandlers();
};

onLoaded();