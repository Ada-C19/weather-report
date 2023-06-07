const cityUpdate = () => {
  const newCityText = state.cityTextField.value;
  state.headerCity.textContent = newCityText;
};

const cityReset = () => {
  state.cityTextField.value = state.cityDefault;
  state.headerCity.textContent = state.cityDefault;
};

const loadData = () => {
  //Assign selected HTML elements to attributes of state
  state.cityTextField = document.querySelector("#cityNameInput");
  state.headerCity = document.querySelector("#headerCityName");
  state.cityResetButton = document.querySelector("#cityNameReset");
};

const registerEventHandlers = (event) => {
  //All event handlers will be defined here
  loadData();
  cityReset();
  state.cityTextField.addEventListener("input", cityUpdate);
  state.cityResetButton.addEventListener("click", cityReset);
};

const state = {
  cityTextField: null,
  headerCity: null,
  cityDefault: "Boston",
  cityResetButton: null,
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
