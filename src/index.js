// `"use strict";`
const axios = require('axios');

const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempNumberContainer: null,
    tempNumberClass: null,
    tempNumber: 1,
    skyEmojiContainer: null,
    skyEmoji: '',
    landEmojiContainer: null,
    landEmoji: '',
    cityNameContainer: null,
    cityName: '',
    cityInput: '',
    cityResetButton: null,
};




const loadControls = () => {
    state.increaseTempButton = document.getElementById('increaseTempButton');
    state.decreaseTempButton = document.getElementById('decreaseTempButton');
    state.tempNumber = parseInt(document.getElementById('tempNumberContainer').innerText);
    state.tempNumberContainer = document.getElementById('tempNumberContainer');
    state.tempNumberClass = document.getElementById('tempNumberContainer').className;
    state.skyEmojiContainer = document.getElementById('skyEmojiContainer');
    state.skyEmoji = document.getElementById('skyEmojiContainer').innerText;
    state.landEmojiContainer = document.getElementById('landEmojiContainer');
    state.landEmoji = document.getElementById('landEmojiContainer').innerText;
    state.cityNameContainer = document.getElementById('cityNameContainer');
    state.cityName = document.getElementById('cityNameContainer').innerText;
    state.cityInput = document.getElementById('cityInput');
    state.cityResetButton = document.getElementById('cityResetButton');
};

const getTempColor = (tempNumber) => {
    let className = 'redTemp';
    if (tempNumber >= 80) {
        className = 'redTemp';
    } else if (tempNumber >= 70) {
        className = 'orangeTemp';
    } else if (tempNumber >= 60) {
        className = 'yellowTemp';
    } else if (tempNumber >= 50) {
        className = 'greenTemp';
    } else if (tempNumber <= 49) {
        className = 'tealTemp';
    }
    return className
}

const getLandscape = (temperature) => {
    if (temperature >= 80) {
        return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 70) {
        return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 60) {
        return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = ++state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.tempNumberContainer.innerText);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);
    });
    state.decreaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = --state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.tempNumber);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);
    });
    state.cityInput.addEventListener('input', () => {
        state.cityNameContainer.innerText = state.cityInput.value;
        axios
        .get('http://localhost:5000/location',{
            params: {
                q: state.cityNameContainer.innerText
            },
        })
        .then((response) => {
            console.log(response)
        })
    });
    state.cityResetButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = 'temp value from weather api';
        state.tempNumberContainer.className = getTempColor(state.tempNumber);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);

    });
};

const onLoaded = () => {
    loadControls();
    registerEventHandlers();
};

onLoaded();