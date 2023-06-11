const state = {
    city: 'Honolulu',
    lat: 21.3099,
    long: 157.8581,
    temp: 72,
};

const formatTempAndGarden = () => {
    let temp = state.temp;
    let color = 'blue';
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";

    if (temp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60) {
        color = 'yellow';
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'green';
    } else {
        color = 'blue';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const temperature = document.getElementById('temp');
    temperature.textContent = String(state.temp);
    temperature.className = color;
    temperature.style.color = color;
    console.log('test1')
    const garden = document.getElementById('garden');
    garden.textContent = landscape;
    console.log('test2')
};

const incrementTemp = () => {
    state.temp += 1;
    formatTempAndGarden();
};

const decrementTemp = () => {
    state.temp -= 1;
    formatTempAndGarden();
};

const registerEventHandlers = () => {
    formatTempAndGarden();
    const increaseTempButton = document.getElementById('up-arrow');
    increaseTempButton.addEventListener("click", incrementTemp);
    const decreaseTempButton = document.getElementById('down-arrow');
    decreaseTempButton.addEventListener("click", decrementTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);