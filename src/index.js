const state = {
    city: 'Honolulu',
    lat: 21.3099,
    long: 157.8581,
    temp: 0,
};

const incrementTemp = () => {
    state.temp += 1;
    const temperature = document.getElementById('temp');
    temperature.textContent = String(state.temp);
};

const decrementTemp = () => {
    state.temp -= 1;
    const temperature = document.getElementById('temp');
    temperature.textContent = String(state.temp);
};

const registerEventHandlers = () => {
    const increaseTempButton = document.getElementById('up-arrow');
    increaseTempButton.addEventListener("click", incrementTemp);
    const decreaseTempButton = document.getElementById('down-arrow');
    decreaseTempButton.addEventListener("click", decrementTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);