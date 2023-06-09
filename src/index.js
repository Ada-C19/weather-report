const state = {

};

const setUpTemperature = () => {
  let classType;
  let gardenType;
  let temperature = state.temp

  if (state.temp >= 80) {
    classType = "red";
    gardenType = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if ((state.temp >= 70) & (state.temp <= 79)) {
    classType = "orange";
    gardenType = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if ((state.temp >= 60) & (state.temp <= 69)) {
    classType = "yellow";
    gardenType = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else if ((state.temp >= 50) & (state.temp <= 59)) {
    classType = "green";
    gardenType = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  } else {
    classType = "teal";
    gardenType = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }

  let temp = document.querySelector("#temp");
  temp.setAttribute("class", classType);
  temp.textContent = state.temp;

  let garden = document.querySelector("#garden");
  garden.textContent = gardenType;
  garden.setAttribute("class", classType);
};

function Up() {
  let temp = document.querySelector("#temp");
  state.temp = state.temp + 1;
  temp.textContent = state.temp;
  setUpTemperature();
}

function Down() {
  const temp = document.getElementById("temp");
  state.temp = state.temp - 1;
  temp.textContent = state.temp;
  setUpTemperature();
}

// update city name and h2 values
function City() {
  const cityName = document.getElementById("cityname").value;
  const cityHeader = document.querySelector("h2");
  cityHeader.textContent = cityName;
  state.cityName = cityName;
  console.log("cityname")
  console.log(state.cityName)
}

function clearInput() {
  const cityName = document.getElementById("cityname");
  const cityHeader = document.querySelector("h2");
  if (cityName.value != "") {
    cityName.value = "";
    cityHeader.textContent = "";
  }
}

mySelect = document.getElementById("sky");
mySelect.onchange = function selectSky() {
  selectedSky = document.getElementById("sky").value
  pElement = document.getElementById("sky-emoji")
  if (selectedSky == "rainy") {
    pElement.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (selectedSky == "sunny") {
    pElement.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  } else if (selectedSky == "snowy") {
    pElement.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
  } else if (selectedSky == "cloudy") {
    pElement.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  }
}

function findRealTimeTemp() {
  findLatitudeAndLongitude();
  
}

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios
    .get("http://127.0.0.1:5000/location", {
      params: {
        q: state.cityName,
        format: "json",
      },
    }).then((response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      state.latitude = latitude;
      state.longitude = longitude;
      // make a call to another API
      findTemperature(latitude, longitude)

    }).catch((error) => {
        console.log("error in findLatitudeAndLongitude!");
    }); 
  };    

// make weather call to proxy server
const findTemperature = (query) => {
  axios
    .get("http://127.0.0.1:5000/weather", {
      params: {
        lat: state.latitude,
        lon: state.longitude,
    },
    }).then((response) => {
      realTimeTemp = response["data"]["main"]["temp"];
      // call temp helper function and pass output to state
      console.log("real time temp")
      console.log(realTimeTemp)
      state.temp = realTimeTempF(realTimeTemp);
      console.log("real time tempFFFFF");
      console.log(state.temp);
      setUpTemperature();
    }).catch((error) => {
        console.log("error in find realTimeTemp");
    });     
  };    

// helper function to convert K to F
const realTimeTempF = function(realTimeTemp) {
  return parseInt((realTimeTemp - 273.15) * 9/5 + 32);
}

const registerEventHandlers = () => {
  const buttonDown = document.getElementById("downbtn");
  buttonDown.addEventListener("click", Down);

  const buttonUp = document.getElementById("upbtn");
  buttonUp.addEventListener("click", Up);

  const searchButtonTemp = document.querySelector("#tempbtn");
  searchButtonTemp.addEventListener("click", findRealTimeTemp);

  const buttonReset = document.getElementById("resetbtn");
  buttonReset.addEventListener("click", clearInput)

  // change city name in header as user types city name input
  const cityInput = document.getElementById("cityname");
  cityInput.addEventListener("input", City);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
