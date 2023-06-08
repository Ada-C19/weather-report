const state = {
    city: 'San Francisco, CA',
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

const renameCityHeader = () => {
    const headerCity = document.querySelector('#headerCityName');
    const newCity = document.querySelector('#cityNameInput');
    state.city = newCity.value;
    headerCity.innerText = state.city;
};

const registerEventHandlers = () => {
    const increaseTempBtn = document.querySelector('#increaseTempControl');
    increaseTempBtn.addEventListener("click", increaseTemp);

    const decreaseTempBtn = document.querySelector('#decreaseTempControl');
    decreaseTempBtn.addEventListener("click", decreaseTemp);

    const cityNameInput = document.querySelector('#cityNameInput');
    cityNameInput.addEventListener("input", renameCityHeader);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);