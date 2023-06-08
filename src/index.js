//Wave 2
//refactor this
const increaseTemp = document.getElementById('increaseTempControl');
const decreaseTemp = document.getElementById('decreaseTempControl');
const tempValue = document.getElementById('tempValue');
const skySelect = document.getElementById('skySelect');
const landscape = document.getElementById('landscape');
//Event handlers
let temperature = 70;
state.increaseTemp.addEventListener('click', changeTemp);
state.decreaseTemp.addEventListener('click', changeTemp);


//changes color + landscape
const changeTemp = () => {
    let landscapeEmojis = '';
    if (tempValue >= 80) {
        tempValue.style.color = 'red';
        landscapeEmojis = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (tempValue< 80 && tempValue >= 70) {
        tempValue.style.color = 'orange';
        landscapeEmojis = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (tempValue < 70 && tempValue >= 60) {
        tempValue.style.color = 'yellow';
        landscapeEmojis = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (tempValue < 60 && temp >= 50) {
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


