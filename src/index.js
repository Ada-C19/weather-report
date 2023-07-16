let temperature = 60;

// Wave 2
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const landscape = document.getElementById('landscape');

function updateTemperature() {
    tempValue.textContent = temperature;

    if (temperature >= 80) {
        tempValue.style.color = 'red';
    } else if (temperature >= 70 && temperature <= 79) {
        tempValue.style.color = 'orange';
    } else if (temperature >= 60 && temperature <= 69) {
        tempValue.style.color = 'yellow';
    } else if (temperature >= 50 && temperature <= 59) {
        tempValue.style.color = 'green';
    } else {
        tempValue.style.color = 'blue'; // teal showed up as too similar on my screen and made testing hard
    }
    }

function updateLandscape() {
    if (temperature >= 80) {
    landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 70 && temperature <= 79) {
    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 60 && temperature <= 69) {
    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

function increaseTemperature() {
    temperature++;
    updateTemperature();
    updateLandscape();
}

function decreaseTemperature() {
    temperature--;
    updateTemperature();
    updateLandscape();
}

// Wave 3
const headerCityName = document.getElementById('headerCityName');
const cityNameInput = document.getElementById('cityNameInput');

function updateCityName() {
    headerCityName.textContent = cityNameInput.value;
}

// Wave 5
const skySelect = document.getElementById('skySelect');
const sky = document.getElementById('sky');

function updateSky() {
    const selectedSky = skySelect.value;


    sky.textContent = '';

    switch (selectedSky) {
        case 'sunny':
            sky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
            break;
        case 'cloudy':
            sky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
            break;
        case 'rainy':
            sky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
            break;
        case 'snowy':
            sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
            break;
        default:
            break;
        }
    }

// Wave 6
const cityNameReset = document.getElementById('cityNameReset');
const defaultCityName = 'Cleveland';

function resetCityName() {
    cityNameInput.value = defaultCityName;
    updateCityName();
}

// Event
increaseTempControl.addEventListener('click', increaseTemperature);
decreaseTempControl.addEventListener('click', decreaseTemperature);
cityNameInput.addEventListener('input', updateCityName);
cityNameReset.addEventListener('click', resetCityName);
skySelect.addEventListener('change', updateSky);

// Initializations
updateTemperature();
updateLandscape();
updateCityName();