const state = {
    // HTML elements
    temperatureLabel: null,
    temperatureIncreaseButton: null,
    temperatureDecreaseButton: null,
    getRealtimeTemperatureButton: null,
    skyImage: null,
    landscapeImage: null,

    // data
    temperatureValue: 72,
};

const showTemp = () => {
    state.temperatureLabel.textContent = state.temperatureValue;
}; 

const setTempLabelColor = (temperature) => {
    if (temperature >= 80) {
        return state.temperatureLabel.setAttribute("class", "red");
    } else if (temperature >= 70) {
        return state.temperatureLabel.setAttribute("class", "orange");
    } else if (temperature >= 60) {
        return state.temperatureLabel.setAttribute("class", "yellow");
    } else if (temperature >= 50) {
        return state.temperatureLabel.setAttribute("class", "green");
    } else {
        return state.temperatureLabel.setAttribute("class", "teal");
    }
};

const landscapeImages = {
    80: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    70: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    60: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    50: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
}

const setLandscapeImage = temperature => {
    if (temperature >= 80) {
        return landscapeImages[80];
    } else if (temperature >= 70) {
        return landscapeImages[70];
    } else if (temperature >= 60) {
        return landscapeImages[60];
    } else {
        return landscapeImages[50];
    }
}

const updateTemperature = () => {
    state.temperatureLabel.textContent = state.temperatureValue;
    state.landscapeImage.textContent = setLandscapeImage(state.temperatureValue);
    setTempLabelColor(state.temperatureValue);
};

const loadControls = () => {
    state.temperatureLabel = document.getElementById("tempValue");
    state.temperatureDecreaseButton = document.getElementById("decreaseTempControl");
    state.temperatureIncreaseButton = document.getElementById("increaseTempControl");
    state.getRealtimeTemperatureButton = document.getElementById("currentTempButton");
    state.skyImage = document.getElementById("sky");
    state.landscapeImage = document.getElementById("landscape");
};

const handleTemperatureDecreaseButtonClick = () => {
    state.temperatureValue -= 1;
    updateTemperature();


    // if (state.temperatureValue >= 80) {
    //     state.temperatureLabel.classList.remove('orange');
    //     state.temperatureLabel.classList.add('red');
    // } else if (state.temperatureValue >= 70) {
    //     state.temperatureLabel.classList.remove('red');
    //     state.temperatureLabel.classList.add('orange');
    // } else if (state.temperatureValue >= 60) {
    //     state.temperatureLabel.classList.remove('orange');
    //     state.temperatureLabel.classList.add('yellow');
    // } else if (state.temperatureValue >= 50) {
    //     state.temperatureLabel.classList.remove('yellow');
    //     state.temperatureLabel.classList.add('green');
    // } else {
    //     state.temperatureLabel.classList.remove('green');
    //     state.temperatureLabel.classList.add('teal');
    // }
}

const handleTemperatureIncreaseButtonClick = () => {
    state.temperatureValue += 1;
    updateTemperature();
    setTemperatureLabel();

    // if (state.temperatureValue >= 80) {
    //     state.temperatureLabel.classList.remove('orange');
    //     state.temperatureLabel.classList.add('red');
    // } else if (state.temperatureValue >= 70) {
    //     state.temperatureLabel.classList.remove('red');
    //     state.temperatureLabel.classList.add('orange');
    // } else if (state.temperatureValue >= 60) {
    //     state.temperatureLabel.classList.remove('orange');
    //     state.temperatureLabel.classList.add('yellow');
    // } else if (state.temperatureValue >= 50) {
    //     state.temperatureLabel.classList.remove('yellow');
    //     state.temperatureLabel.classList.add('green');
    // } else {
    //     state.temperatureLabel.classList.remove('green');
    //     state.temperatureLabel.classList.add('teal');
    // }
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
    showTemp();
};

onLoad();


