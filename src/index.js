//Wave 2
const state = {
    tempValue: 60,
    increaseTemp: null,
    decreaseTemp: null,
    landscape: null,
}
//ask in office hours abt this
const increaseTemp = document.getElementById('increaseTempControl');
const decreaseTemp = document.getElementById('decreaseTempControl');
const tempValue = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');
//Event handler, fns and Load
const loadControls = () => {
    state.increaseTemp = document.getElementById('increaseTempControl');
    state.decreaseTemp = document.getElementById('decreaseTempControl');
    state.tempValue = document.getElementById('tempValue');
    state.landscape = document.getElementById('landscape');
};
const incTempButton = () => {
    temp++;
    tempValue.textContent = `${temp}`;
};

const decTempButton = () => {
    temp--;
    tempValue.textContent = `${temp}`;
};
const registerEvents = () => {
    increaseTemp.addEventListener('click', incTempButton);
    decreaseTemp.addEventListener('click', decTempButton);
    increaseTemp.addEventListener('click', changeTemp);
    decreaseTemp.addEventListener('click', changeTemp);
};
const onLoad = () => {
    registerEvents();
    loadControls();
};
//changes color + landscape
let temp = 60
const changeTemp = () => {
    let landscapeEmojis = '';
    if (temp >= 80) {
        tempValue.style.color = 'red';
        landscapeEmojis = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp< 80 && temp >= 70) {
        tempValue.style.color = 'orange';
        landscapeEmojis = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp < 70 && temp >= 60) {
        tempValue.style.color = 'yellow';
        landscapeEmojis = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (temp < 60 && temp >= 50) {
        tempValue.style.color = 'green';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        tempValue.style.color = 'teal';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = landscapeEmojis;
};

// --- Wave 3 --- 

const cityNameInput = document.getElementById('cityNameInput');
const cityNameReset = document.getElementById('cityNameReset'); 
const headerCityName = document.getElementById('headerCityName');

cityNameInput.addEventListener('input', () => {
    headerCityName.textContent = cityNameInput.value;
});

cityNameReset.addEventListener('click', () => {
    cityNameInput.value = headerCityName.textContent = ''; 
}); 


onLoad();