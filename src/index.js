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
  if (state.temperature >= 80) {
    newLandscape = landscapes.hotLandscape;
  } else if (state.temperature >= 70) {
    newLandscape = landscapes.warmLandscape;
  } else if (state.temperature >= 60) {
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
  temperature: null,
  currTempButton: null,
  tempUpButton: null,
  tempDownButton: null,
};

const loadData = () => {
  //Assign selected HTML elements to attributes of state
  state.cityTextField = document.querySelector("#cityNameInput");
  state.headerCity = document.querySelector("#headerCityName");
  state.cityResetButton = document.querySelector("#cityNameReset");
  state.landscapeField = document.querySelector("#landscape");
  state.temperature = document.querySelector("#tempValue").textContent;
  state.currTempButton = document.querySelector("#currentTempButton");
  state.tempDownButton = document.querySelector("#decreaseTempControl");
  state.tempUpButton = document.querySelector("#increaseTempControl");
};

const registerEventHandlers = (event) => {
  //All event handlers will be defined here
  loadData();
  landscapeUpdate();
  state.cityTextField.addEventListener("input", cityUpdate);
  state.cityResetButton.addEventListener("click", cityReset);
  state.currTempButton.addEventListener("click", landscapeUpdate);
  state.tempDownButton.addEventListener("click", landscapeUpdate);
  state.tempUpButton.addEventListener("click", landscapeUpdate);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
