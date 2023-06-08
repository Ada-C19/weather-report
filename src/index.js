const state = {
    currentTemp: 72,
    defaultCity: 'Seattle'
};

const increaseTemp = () => {
    state.currentTemp++;
    setTempAndLandscape();
};

const decreaseTemp = () => {
    state.currentTemp--;
    setTempAndLandscape();
};

const setTempAndLandscape = () => {
    const currentTemp = document.querySelector('#display-temperature');
    currentTemp.textContent = `${state.currentTemp}`;
    changeTempColor();
    changeLandscape();
}

const changeTempColor = () => {
    const tempCurrent = document.getElementById('display-temperature');
    let color;
    switch (true) {
        case state.currentTemp >= 80:
            color = 'red';
            break;
        case state.currentTemp >= 70:
            color = 'orange';
            break;
        case state.currentTemp >= 60:
            color = 'yellow';
            break; 
        case state.currentTemp >= 50:
            color = 'green';
            break;
        default:
            color = 'teal';
    }
    tempCurrent.className = color;
};

const changeLandscape = () => {
    const landscape = document.getElementById('landscape');
    let emoji;
    switch (true) {
        case state.currentTemp >= 80:
            emoji = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
            break;
        case state.currentTemp >= 70:
            emoji = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
            break;
        case state.currentTemp >= 60:
            emoji = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
            break;
        default:
            emoji = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = emoji;
};

// const changeCity = (i) => {
//     const currentCityName = document.getElementById('current-city');
//     currentCityName.innerHTML = `This is the weather for ${i.target.value}!`;
//     state.defaultCity = i.target.value;
// };

// const cityInputField = document.getElementById('city-input');
// cityInputField.value = '';

const registerEventHandlers = () => {
    const increaseButton = document.getElementById("increase-temp");
    const decreaseButton = document.getElementById("decrease-temp");
    increaseButton.addEventListener("click", increaseTemp);
    decreaseButton.addEventListener("click", decreaseTemp);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);