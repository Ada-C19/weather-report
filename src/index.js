const state = {
    defaultCity: 'San Francisco',
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

const resetCity = () => {
    const headerCity = document.querySelector('#headerCityName');
    headerCity.innerText = state.defaultCity;
    const newCity = document.querySelector('#cityNameInput');
    newCity.value = state.defaultCity;
};

const registerEventHandlers = () => {
    const increaseTempBtn = document.querySelector('#increaseTempControl');
    increaseTempBtn.addEventListener("click", increaseTemp);

    const decreaseTempBtn = document.querySelector('#decreaseTempControl');
    decreaseTempBtn.addEventListener("click", decreaseTemp);

    const cityNameInput = document.querySelector('#cityNameInput');
    cityNameInput.addEventListener("input", renameCityHeader);

    const reset = document.querySelector('#cityNameReset');
    reset.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);