const state = {
    temp:69,
    city: 'Seattle',
};

const updateTempLandscape = () => {
    const tempElement = document.querySelector("#temp");
    const landscapeElement = document.querySelector("#landscape")
    tempElement.textContent = `${state.temp}`;
    if (tempElement.textContent >= 80) {
        tempElement.style.color = 'red';
        landscapeElement.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (tempElement.textContent >= 70) {
        tempElement.style.color = 'orange';
        landscapeElement.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (tempElement.textContent >= 60) {
        tempElement.style.color = 'yellow';
        landscapeElement.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'
    } else if (tempElement.textContent >= 50) {
        tempElement.style.color = 'green';
        landscapeElement.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        tempElement.style.color = 'teal';
        landscapeElement.textContent = '🌲🌲⛄️🌲⛄️⛄️🌲⛄️🌲🌲⛄️⛄️🌲';
    }
}


const upTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp += 1;
    updateTempLandscape();
}


const downTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp -= 1;
    updateTempLandscape();
}


const nameInput = document.querySelector("#citynameinput")
const currentName = document.querySelector("#cityname")

const changeCity = () => {
    currentName.textContent = nameInput.value;
}


const resetCity = () => {
    currentName.textContent = "Seattle";
    nameInput.value = "";
}


const changeSky = (event) => {
    const currentSky = document.getElementById('changeSky').value;
    const skyContainer = document.getElementById('sky');
    // future sky background here
    if (currentSky === 'Sunny') {
        skyContainer.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (currentSky === 'Cloudy') {
        skyContainer.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (currentSky === 'Rainy') {
        skyContainer.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (currentSky === 'Snowy') {
        skyContainer.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
}


const registerEventHandlers = () => {
    // future weather events go here

    upTemp();
    const increaseTemp = document.querySelector("#upTempControl")
    increaseTemp.addEventListener("click",upTemp);
  
    downTemp();
    const decreaseTemp = document.querySelector("#downTempControl");
    decreaseTemp.addEventListener("click",downTemp);
  
    changeCity();
    const enterCityName = document.querySelector("#enter");
    enterCityName.addEventListener("click",changeCity);
  
    resetCity();
    const resetCityName = document.querySelector("#reset");
    resetCityName.addEventListener("click",resetCity);
  
    changeSky();
    const selectSky = document.getElementById('changeSky');
    selectSky.addEventListener("change", changeSky);
  };
  
document.addEventListener('DOMContentLoaded', registerEventHandlers);