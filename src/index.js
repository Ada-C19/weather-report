const state = {
    city: 'Seattle, WA',
    temperature: 68,
    latitude: 45.5152,
    longitude: 122.6784,
  };

const increaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature++;
    tempContainer.textContent = state.temperature;
};

const decreaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature--;
    tempContainer.textContent = state.temperature;
};

const registerEventHandlers = () => {
    const increaseTempBtn = document.querySelector('#increaseTempControl');
    increaseTempBtn.addEventListener("click", increaseTemp);

    const decreaseTempBtn = document.querySelector('#decreaseTempControl');
    decreaseTempBtn.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);