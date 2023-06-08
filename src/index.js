const state = {
    temperature: 40
};


const tempText = document.querySelector("#tempValue")
const landscapeText = document.querySelector("#landscape")

const increaseTemp = () => {
    state.temperature += 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
        tempText.style.color = "red";
    } else if (state.temperature <= 79 && state.temperature > 69) {
        landscapeText.innerHTML = '"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"';
        tempText.style.color = "orange";
    } else if (state.temperature <=69 && state.temperature > 59) {
        landscapeText.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"; 
        tempText.style.color = "yellow";       
    } else if (state.temperature <=59 && state.temperature > 49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "green"; 
    } else if (state.temperature <=49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "teal";
    }  
};

const decreaseTemp = () => {
    state.temperature -= 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        tempText.style.color = "red";
    }else if (state.temperature <= 79 && state.temperature > 69) {
        landscapeText.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
        tempText.style.color = "orange";
    } else if (state.temperature <=69 && state.temperature > 59) {
        landscapeText.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
        tempText.style.color = "yellow";        
    } else if (state.temperature <=59 && state.temperature > 49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "green"; 
    } else if (state.temperature <=49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "teal";
    }    
};

const updateCityHeader = () => {
    const cityText = document.querySelector("#cityNameInput");
    let currentCityInput = cityText.value;
    const cityHeader = document.querySelector("#headerCityName");
    cityHeader.innerHTML = `${currentCityInput}`;
};

const resetCityName = () => {
    const cityText = document.querySelector("#cityNameInput");
    cityText.value = ''
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTempControl");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const updateCity = document.querySelector("#cityNameInput");
    updateCity.addEventListener("input", updateCityHeader);

    const cityReset = document.querySelector("#cityNameReset");
    cityReset.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// const getCurrentTime = () => {
//     const currentDate = new Date();
//     console.log("getCurrentTime");
//     return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
// }
// console.log(`The current time is ${getCurrentTime()}.`);