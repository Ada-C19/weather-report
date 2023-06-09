// TASK LIST:
// AH: create helper function to convert into F
// AH: call helper function and pass its output into state 
// LP: change logic of both buttons so Reset button has a 
// default city name (e.g., Seattle) (Wave 5)
// AH + LP: do the sky (Wave 6)

const state = {
  temp: 90,
  cityName: "Seattle"
};

const setUpTemperature = () => {
  let classType;
  let gardenType;

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

//search button function
function City() {
  const cityName = document.getElementById("cityname").value;
  const cityHeader = document.querySelector("h2");
  cityHeader.textContent = cityName;
  state.cityName = cityName;
  findLatitudeAndLongitude();
}

const findLatitudeAndLongitude = (query) => {
  console.log("Hi, find latitude and longtitude")
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
      console.log("success in findLatitudeAndLongitude!", latitude, longitude);
      findTemperature(latitude, longitude)

    }).catch((error) => {
        console.log("error in findLatitudeAndLongitude!");
    }); 
  };    

// make weather call to proxy server
const findTemperature = (query) => {
  console.log("find inside temp")
  console.log(state.latitude, state.longitude)
  axios
    .get("http://127.0.0.1:5000/weather", {
      params: {
        lat: state.latitude,
        lon: state.longitude,
        // units: "imperial",
        // format: "json",
    },
    }).then((response) => {
      // console.log(response)
      realTimeTemp = response["data"]["main"]["temp"];
      // console.log("success in find realTimeTemp", realTimeTemp);
      // call temp helper function and pass output to state
      state.temp = realTimeTempF(realTimeTemp);
    }).catch((error) => {
        console.log("error in find realTimeTemp");
    });     
  };    


console.log("Hello Houston")

// helper function to convert K to F
const realTimeTempF = function(realTimeTemp) {
  (realTimeTemp - 273.15) * 9/5 + 32
}


const registerEventHandlers = () => {
  const buttonDown = document.getElementById("downbtn");
  buttonDown.addEventListener("click", Down);

  const buttonUp = document.getElementById("upbtn");
  buttonUp.addEventListener("click", Up);

  const searchButtonTemp = document.querySelector("#tempbtn");
  searchButtonTemp.addEventListener("click", setUpTemperature);

  const searchButtonCity = document.getElementById("searchbtn");
  searchButtonCity.addEventListener("click", City);

  const buttonReset = document.getElementById("resetbtn");
  buttonReset.addEventListener("click", clearInput)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
