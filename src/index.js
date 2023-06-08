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

const tempColorUpdate = () => {
  state.temperatureValue.className = getTemperatureColor(
    state.currentTemperature
  );
};

const increaseTemperature = () => {
  state.currentTemperature += 1;
  state.temperatureValue.textContent = state.currentTemperature;
  allGraphicsUpdate();
};

const decreaseTemperature = () => {
  state.currentTemperature -= 1;
  state.temperatureValue.textContent = state.currentTemperature;
  allGraphicsUpdate();
};

const locUrl = "http://localhost:5000/location";
const weatherUrl = "http://localhost:5000/weather";

const getTempFromLocation = () => {
  const q = state.cityTextField.value;
  axios
    .get(locUrl, { params: { q } })
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      axios
        .get(weatherUrl, { params: { lat, lon } })
        .then((weatherResponse) => {
          const tempCelsius = weatherResponse.data.main.temp - 273.15;
          const newTemp = Math.floor(tempCelsius * (9 / 5) + 32);
          state.currentTemperature = newTemp;
          state.temperatureValue.textContent = state.currentTemperature;
          allGraphicsUpdate();
        })
        .catch((error) => {
          console.log("Weather call failed", error);
        });
    })
    .catch((error) => {
      console.log("Location call failed", error);
    });
};

const allGraphicsUpdate = () => {
  tempColorUpdate();
  landscapeUpdate();
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
  allGraphicsUpdate();
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

  state.currTempButton.addEventListener("click", getTempFromLocation);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
