const cityUpdate = () => {
  const newCityText = state.cityTextField.value;
  state.headerCity.textContent = newCityText;
};

const loadData = () => {
  state.cityTextField = document.querySelector("#cityNameInput");
  state.headerCity = document.querySelector("#headerCityName");
};

const registerEventHandlers = (event) => {
  //All event handlers will be called here
  loadData();
  state.cityTextField.addEventListener("input", cityUpdate);
};

const state = {
  cityTextField: null,
  headerCity: null,
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
