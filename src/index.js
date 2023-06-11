// const so 72 is not hard coded, used in increaseTemp & decreaseTemp functions
const tempValue = document.getElementById("tempValue");

// assign a constant state for temp
const state = {
  tempCount: tempValue.innerText,
  city: "Seattle",
  lat: 0,
  lon: 0,
};

// changes function above to start temperature with info from API call
// state city name from
// city: "",
// temperature: 0,
// lat: 0,
// lon: 0,

// assign variable for landscape and sky image icons
const landscapeEmojis = {
  1: "🌞🌵___🐍🦂__🌵🌞",
  2: "🌸🌿__🌷🌻🌷__🌿🌸",
  3: "🦚__🍄🌳🪷🌳🍄__🦚",
  4: "__🍂🍂🍁🍁🍁🍂🍂__",
  5: "⛄️🌲______🌲⛄️",
};

const skyEmojis = {
  0: "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
  1: "🌞🌞🌞🌤🌞🌞🌞",
  2: "🌧🌈🌧💧🌈🌈💧🌧🌈🌧",
  3: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
};

// add 1 degree to temp
// had to transform str to int to +1 properly, otherwise it was 721
// innerText is a key on the element span with id "tempValue"
// go to dev tools console and click the up and down arrows, see the console!
const increaseTemperature = () => {
  state.tempCount = Number(state.tempCount) + 1;
  tempValue.innerText = state.tempCount;
  tempRange();
  console.log(state.tempCount);
};

// subtract 1 degree to temp
// had to transform str to int to -1 properly
// innerText is a key on the element span with id "tempValue"
const decreaseTemperature = () => {
  state.tempCount = Number(state.tempCount) - 1;
  tempValue.innerText = state.tempCount;
  tempRange();
  console.log(state.tempCount);
};

// tempRange function manages landscape element based on state.tempCount value
const tempRange = () => {
  const temp = document.getElementById("tempValue");
  const landscape = document.getElementById("landscape");

  // console.log({ temp });

  if (state.tempCount <= 49) {
    temp.className = "teal";
    landscape.textContent = landscapeEmojis["5"];
  } else if (state.tempCount <= 59 && state.tempCount >= 50) {
    temp.className = "green";
    landscape.textContent = landscapeEmojis["4"];
  } else if (state.tempCount <= 69 && state.tempCount >= 60) {
    temp.className = "yellow";
    landscape.textContent = landscapeEmojis["3"];
  } else if (state.tempCount >= 70 && state.tempCount <= 79) {
    temp.className = "orange";
    landscape.textContent = landscapeEmojis["2"];
  } else if (state.tempCount >= 80) {
    temp.className = "red";
    landscape.textContent = landscapeEmojis["1"];
  }
};

// updates sky according to drop down menu selection
const updateSky = () => {
  const inputSky = document.getElementById("skySelect").value;
  const skyContainer = document.getElementById("sky");

  let sky = "";
  let skyColor = "";

  if (inputSky === "Cloudy") {
    sky = skyEmojis[0];
    skyColor = "cloudy";
  } else if (inputSky === "Sunny") {
    sky = skyEmojis[1];
    skyColor = "sunny";
  } else if (inputSky === "Rainy") {
    sky = skyEmojis[2];
    skyColor = "rainy";
  } else if (inputSky === "Snowy") {
    sky = skyEmojis[3];
    skyColor = "snowy";
  }

  skyContainer.textContent = sky;
};

// function to get reset city name
const resetCityName = () => {
  const header = document.getElementById("headerCityName");
  const citySearch = document.getElementById("cityNameReset");

  state.city = "Seattle";
  header.textContent = state.city;
  citySearch.value = state.city;
};

// function to submit city for API
const submitCityName = () => {
  const header = document.getElementById("headerCityName");
  const citySearch = document.getElementById("cityNameSubmit");

  state.city = "";
  header.textContent = state.city;
  citySearch.value = state.city;
};

//function to change header city name based on search input
const updateCity = () => {
  const inputName = document.getElementById("cityNameInput").value;
  const header = document.getElementById("headerCityName");
  state.city = inputName;
  header.textContent = state.city;
};

// function for calling APIs
const searchLocation = () => {
  axios
    .get("http://127.0.0.1:5000/location", {
      params: {
        q: state.city,
      },
    })
    .then((response) => {
      console.log("search location success!");
      state.lat = response.data[0].lat;
      state.lon = response.data[0].lon;
      searchTemperature();
    })
    .catch((error) => {
      console.log("searchLocation error: " + error.response);
    });
};

const searchTemperature = () => {
  axios
    .get("http://localhost:5000/weather", {
      params: {
        lat: state.lat,
        lon: state.lon,
      },
    })
    .then((response) => {
      console.log("searchTemperature success!");
      console.log(response.data);
      state.tempCount = ((response.data.main.temp - 273.15) * 1.8 + 32).toFixed(
        0
      );
      // return current temp and assign it to  temp count
      const tempCount = document.getElementById("tempValue");
      tempCount.textContent = `${state.tempCount}`;
      tempRange();
    })
    .catch((error) => {
      console.log("searchTemperature failing here!");
      console.log(error);
      console.log("searchTemperature error: " + error.response);
    });
};

// confirmed this is working with console.log statement
const handleCityNameSubmit = () => {
  console.log("we are here");
};

const registerEventHandlers = () => {
  // assigns upTempArrow to that specific button. Document keyword grabs everything in index.html
  // then you run func on document called querySelector. Then you are grabbing the id of increaseTempControl
  // Do not need # in front of decreaseTempControl bc .getElementById does it automatically
  const downTempArrow = document.getElementById("decreaseTempControl");
  downTempArrow.addEventListener("click", decreaseTemperature);

  const upTempArrow = document.getElementById("increaseTempControl");
  upTempArrow.addEventListener("click", increaseTemperature);

  const skySelector = document.getElementById("skySelect");
  skySelector.addEventListener("change", updateSky);

  updateCity();

  const updateCityName = document.getElementById("cityNameInput");
  updateCityName.addEventListener("input", updateCity);

  const resetCity = document.getElementById("cityNameReset");
  resetCity.addEventListener("click", resetCityName);

  const cityNameSubmit = document.getElementById("cityNameSubmit");
  cityNameSubmit.addEventListener("click", handleCityNameSubmit);
};

// resetCityName();

// submitCityName();
// const submitCity = document.getElementById("cityNameSubmit");
// submitCity.addEventListener("change", submitCityName);
// previously didn't exist, calls function here to register events
registerEventHandlers();

// console.log(searchLocation())
// console.log(searchTemperature())
// registercityName and change location functions
// inputElement.addEventListener("input", function () {
//     const cityName = inputElement.tempValue;
//     const cityNameInput = document.querySelector("h3");
//     cityName.textContent = "For the lovely city of " + cityName;

// const changeLocation = document.querySelector('cityNameInput');
// changeLocation.addEventListener('click', searchLocation);
// });

// need to fix reset button
// need to add submit button
// need to fix the API call
