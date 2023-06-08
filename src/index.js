const cityUpdate = () => {
  const newCityText = state.cityTextField.value;
  state.headerCity.textContent = newCityText;
};

const cityReset = () => {
  state.cityTextField.value = state.cityDefault;
  state.headerCity.textContent = state.cityDefault;
};

const getTemperatureColor = (temperature) => {
  if (temperature >= 80) {
    return "red";
  }
  else if (temperature >= 70 && temperature <= 79) {
    return "orange";
  }
  else if (temperature >= 60 && temperature <= 69) {
    return "yellow";
  }
  else if (temperature >= 50 && temperature <= 59) {
    return "green";
  }
  else if (temperature <= 49) {
    return "teal";
  }
}

const increaseTemperature = () => {
  state.currentTemperature += 1;
  state.temperatureValue.textContent = state.currentTemperature;
  state.temperatureValue.className = `${getTemperatureColor(state.currentTemperature)}`;
}

const decreaseTemperature = () => {
  state.currentTemperature -= 1;
  state.temperatureValue.textContent = state.currentTemperature;
  state.temperatureValue.className = `${getTemperatureColor(state.currentTemperature)}`;
}

const loadData = () => {
  //Assign selected HTML elements to attributes of state
  state.cityTextField = document.querySelector("#cityNameInput");
  state.headerCity = document.querySelector("#headerCityName");
  state.cityResetButton = document.querySelector("#cityNameReset");

  state.temperatureValue = document.querySelector("#tempValue");
  state.temperatureIncreaseButton = document.querySelector("#increaseTempControl");
  state.temperatureDecreaseButton = document.querySelector("#decreaseTempControl");
};

const registerEventHandlers = (event) => {
  //All event handlers will be defined here
  loadData();
  state.cityTextField.addEventListener("input", cityUpdate);
  state.cityResetButton.addEventListener("click", cityReset);

  state.temperatureIncreaseButton.addEventListener("click", increaseTemperature);
  state.temperatureDecreaseButton.addEventListener("click", decreaseTemperature);
};

const state = {
  cityTextField: null,
  headerCity: null,
  cityDefault: "Boston",
  cityResetButton: null,

  currentTemperature: 50,
  temperatureValue: null, 
  temperatureIncreaseButton: null, 
  temperatureDecreaseButton: null
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
