const state = {
    tempValue: 70,
    tempLabel: null,
    emoji: null,
    cityLabel: null,
    cityValue: null
};


const updateUI = () =>  {
    state.tempLabel.textContent = state.tempValue;
}; 

const updateCity = (event) => {
    state.cityValue = event.target.value
    state.cityLabel.textContent = state.cityValue;
}


const increaseTemp = () => {
    ++state.tempValue;
    updateUI();

    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
};


const decreaseTemp = () => {
    --state.tempValue;
    updateUI();

    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
}; 


const registerEventHandlers = () => {
    const topButton = document.querySelector("#increaseTempControl");
topButton.addEventListener("click", increaseTemp);
    const bottomButton = document.querySelector("#decreaseTempControl");
bottomButton.addEventListener("click", decreaseTemp);
    const cityButton = document.querySelector("#cityNameInput");
cityButton.addEventListener("keyup", updateCity);

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

const loadControls = () => {
    state.tempLabel = document.getElementById("tempLabel");
    state.emoji = document.getElementById("landscape");
    state.cityLabel = document.getElementById("headerCityName");
    state.cityValue = document.getElementById("cityNameInput").value;
};

const onLoaded = () => {
    loadControls();
  };

onLoaded();