let temperature = 60;

const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');

function updateTemperature() {
    tempValue.textContent = temperature;
}

function increaseTemperature() {
    temperature++;
    updateTemperature();
}

function decreaseTemperature() {
    temperature--;
    updateTemperature();
}

increaseTempControl.addEventListener('click', increaseTemperature);
decreaseTempControl.addEventListener('click', decreaseTemperature);

updateTemperature();
``