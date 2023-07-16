let temperature = 60;

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

increaseTempControl.addEventListener('click', increaseTemperature);
decreaseTempControl.addEventListener('click', decreaseTemperature);

updateTemperature();
updateLandscape();
