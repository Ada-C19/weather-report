//STATES
const state = {
    cityNameInput: null,
    increaseTempControl: null,
    decreaseTempControl: null,
    resetButton: null,
    skyUpdate: null,
    gardenContent: null,
    sky: null,
    landscapeElement: null,
    currentTempButton: null,
    cityHeader: null,
    tempValue: null,
    tempInt : 70,
  
};

const loadControls = () => {
  state.resetButton = document.querySelector("#cityNameReset");
  state.skyUpdate = document.getElementById('skySelect');
  state.cityNameInput = document.getElementById('cityNameInput');
  state.decreaseTempControl = document.getElementById('decreaseTempControl');
  state.increaseTempControl = document.getElementById('increaseTempControl');
  state.cityHeader = document.getElementById('headerCityName')
  state.gardenContent = document.getElementById('gardenContent');
  state.sky = document.getElementById('sky');
  state.tempValue = document.getElementById("tempValue");
  state.landscapeElement = document.getElementById("landscape");
  state.currentTempButton = document.getElementById("currentTempButton");

};

const convertKtoF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

//WAVE 4 AXIOS CALLING APIS ////////////////////

const findLatAndLon = () => {
  //let lat, long;
  return axios
    .get('http://localhost:5000/location', {
      params: {
        q: 'seattle',
      },
    })
    .then((response) => {
      let lat = response.data[0].lat;
      let lon = response.data[0].lon;

      return {
        latitude: lat,
        longitude: lon,
      }
    })
    .catch((error) => {
      console.log('Unknown latitude and longitude:', error.response);
    });
};

const getWeather = (location) => {
  return axios
    .get('http://localhost:5000/weather', {
      params: {
        lat: location.latitude,
        lon: location.longitude,
      },
    })
    .then((response) => {
      let targetTemp = response.data.main.temp
      return Math.round(convertKtoF(targetTemp));
      // applyColorAndGarden();
    })
    .catch((error) => {
      console.log('Error getting the weather:', error);
    });
  };
  
  // WAVE 2 HELPER FUNCTION //////////////////////
  const applyColorAndGarden = () => {
    state.tempValue.textContent = state.tempInt;
    
    let landscape = '';
    if (state.tempInt < 0 || state.tempInt > 120) {
      state.tempValue.style.color = 'red';
      state.tempValue.textContent = 'DANGER'
      landscape = '🚫🚫🚫TOO MUCH WEATHER🚫🚫🚫'; 
    } else if (state.tempInt>= 80) {
      state.tempValue.style.color = 'red';
      landscape = '🌵🏜️🌵🐍🦂🌋👹🌋🦂🐍🌵🏜️🌵';
    } else if (state.tempInt>= 70) {
      state.tempValue.style.color = 'orange';
      landscape = '🌞🌞🌻🌻🏖️🏝️👙🏝️🏖️🌻🌻🌞🌞';
    } else if (state.tempInt>= 60) {
      state.tempValue.style.color = 'yellow';
      landscape = '🌹🌸🎋🌹🌸🌱🪺🌱🌸🌹🎋🌸🌹';
    } else if (state.tempInt>= 50) {
      state.tempValue.style.color = 'green';
      landscape = '🌳🌾🍂🪵🌳🐿️🧣🐿️🌳🪵🍂🌾🌳';
    } else if (state.tempInt>= 40) {
      state.tempValue.style.color = 'teal';
      landscape = '🌲🌳🌨️🪵🌲🌳🧤🌳🌲🪵🌨️🌳🌲';
    } else if (state.tempInt< 40) {
      state.tempValue.style.color = 'aqua';
      landscape = '🎄❄️🌨️🌲⛄️🌨️❄️🌨️⛄️🌲🌨️❄️🎄'; 
    }
    
    state.landscapeElement.textContent = landscape;
  };
  
  const increaseTemp = () => {
    state.tempInt++;
    applyColorAndGarden();
  };
  
  const decreaseTemp = () => {
    state.tempInt--;
    applyColorAndGarden();
  };
  
  const updateCity = () => {
    state.city = state.cityNameInput.value;
    state.cityHeader.textContent = state.city;
  }

  
  //WAVE 5 FUNCTION //////////////////////
  const skyView = (event) => {
    let skyColor = event.target.value;
    console.log(event)
    // let skyColor = '';
    if (skyColor === 'Cloudy') {
      state.sky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      // skyColor = 'cloudy';
    } else if (skyColor === 'Sunny') {
      state.sky.textContent = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
      // skyColor = 'sunny';
    } else if (skyColor === 'Rainy') {
      state.sky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      // skyColor = 'rainy';
    } else if (skyColor === 'Snowy') {
      state.sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      // skyColor = 'snowy';
    }
  };
  
  
  // WAVE 6 reset city name ////////////////////////
  
  //WAVE 6 FUNCTION /////////////////////
  
  const resetCity = () => {
    state.cityNameInput.value = '';
    state.cityHeader.textContent = '';
  };

  const handleCurrentTempButtonClicked = () => {
    findLatAndLon()
      .then((location) => getWeather(location))
      .then((targetTemp) => {
        console.log(targetTemp)
        state.tempInt = targetTemp;
        applyColorAndGarden();
      })
  }
  
  
  // EVENT HANDLERS FOR ALL WAVES LIVE HERE ! //////////////
  const registerEventHandlers = () => {
    loadControls();

    // WAVE 2 event is 'click listening to increase decrease Temp handler///////
    state.increaseTempControl.addEventListener('click', increaseTemp);
    
    state.decreaseTempControl.addEventListener('click', decreaseTemp);
    
    // WAVE 3 event is 'input' listening to updateCity handler //////////// 
    state.cityNameInput.addEventListener('input', updateCity);
    
    // WAVE 5 event is 'change' listening to skyView handler ///////
    state.skyUpdate.addEventListener('change', skyView)
    
    
    //WAVE 6 event is 'click' listening to 'resetCount' handler /////
    state.resetButton.addEventListener("click", resetCity);

    state.currentTempButton.addEventListener("click", handleCurrentTempButtonClicked)


  };
  document.addEventListener("DOMContentLoaded", registerEventHandlers);
  

