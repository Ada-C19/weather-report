const cityUpdate = () => {
  const newCityText = state.cityTextField.value;
  state.headerCity.textContent = newCityText;
};

const cityDefault = "Boston";

const cityReset = () => {
  state.cityTextField.value = cityDefault;
  state.headerCity.textContent = state.cityTextField.value;
};

const landscapes = {
  coldLandscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
  coolLandscape: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
  warmLandscape: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
  hotLandscape: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
};

const landscapeUpdate = () => {
  let newLandscape;
  if (state.currentTemperature >= 80) {
    newLandscape = landscapes.hotLandscape;
  } else if (state.currentTemperature >= 70) {
    newLandscape = landscapes.warmLandscape;
  } else if (state.currentTemperature >= 60) {
    newLandscape = landscapes.coolLandscape;
  } else {
    newLandscape = landscapes.coldLandscape;
  }

  state.landscapeField.textContent = newLandscape;
};

const state = {
  cityTextField: null,
  headerCity: null,
  cityResetButton: null,
  landscapeField: null,
  currTempButton: null,
  temperatureValue: null,
  currentTemperature: 50,
  temperatureIncreaseButton: null,
  temperatureDecreaseButton: null,
};

const getTemperatureColor = (temperature) => {
  if (temperature >= 80) {
    return "red";
  } else if (temperature >= 70 && temperature <= 79) {
    return "orange";
  } else if (temperature >= 60 && temperature <= 69) {
    return "yellow";
  } else if (temperature >= 50 && temperature <= 59) {
    return "green";
  } else if (temperature <= 49) {
    return "teal";
  }
};

const increaseTemperature = () => {
  state.currentTemperature += 1;
  state.temperatureValue.textContent = state.currentTemperature;
  state.temperatureValue.className = `${getTemperatureColor(
    state.currentTemperature
  )}`;
};

const decreaseTemperature = () => {
  state.currentTemperature -= 1;
  state.temperatureValue.textContent = state.currentTemperature;
  state.temperatureValue.className = `${getTemperatureColor(
    state.currentTemperature
  )}`;
};

const loadData = () => {
  //Assign selected HTML elements to attributes of state
  state.cityTextField = document.querySelector("#cityNameInput");
  state.headerCity = document.querySelector("#headerCityName");
  state.cityResetButton = document.querySelector("#cityNameReset");
  state.landscapeField = document.querySelector("#landscape");
  state.currTempButton = document.querySelector("#currentTempButton");
  state.temperatureValue = document.querySelector("#tempValue");
  state.temperatureIncreaseButton = document.querySelector(
    "#increaseTempControl"
  );
  state.temperatureDecreaseButton = document.querySelector(
    "#decreaseTempControl"
  );
};

const registerEventHandlers = (event) => {
  //All event handlers will be defined here
  loadData();
  landscapeUpdate();
  state.cityTextField.addEventListener("input", cityUpdate);
  state.cityResetButton.addEventListener("click", cityReset);

  state.temperatureIncreaseButton.addEventListener(
    "click",
    increaseTemperature
  );
  state.temperatureDecreaseButton.addEventListener(
    "click",
    decreaseTemperature
  );
  state.temperatureIncreaseButton.addEventListener("click", landscapeUpdate);
  state.temperatureDecreaseButton.addEventListener("click", landscapeUpdate);

  state.currTempButton.addEventListener("click", landscapeUpdate);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
