//STATES
const state = {
    cityNameInput: null,
    increaseTempControl: null,
    decreaseTempControl: null,
    resetButton: null,
    skyUpdate: null,
    gardenContent: null,
    skyContainer: null,
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
  state.skyContainer = document.getElementById('sky');
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
      state.tempInt.textContent = 'DANGER'
      landscape = '🚫🚫🚫🚫🚫🚫'; 
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
  
  
  // WAVE 2 increase and decrease temp buttons change number///////
  
  // line 24  <span id="increaseTempControl">⬆️</span>
  // line 25  <span id="tempValue"></span>
  // line 26  <span id="decreaseTempControl">⬇️</span>
  
  const increaseTemp = () => {
    state.tempValue++;
    applyColorAndGarden();
  };
  
  const decreaseTemp = () => {
    state.tempValue--;
    applyColorAndGarden();
  };
  
  
  //WAVE 3 grab the value of the text input elemen.//////////////////////
  
  // THIS IS THE NAME INPUT BOX   
  //input: line 40 "cityNameInput"
  
  //THIS IS THE HEADER WITH THE STARS CSS
  //output: line 18 id="headerCityName"
  
  // WAVE 3 FUNCTION ////////////////////////////
  const updateCity = () => {
    //get element by id is our document method
    state.city = state.cityNameInput.value;
    state.cityHeader.textContent = state.city;
  }
  
  
  
  // wave 4 get realtime temp
  

  
  //WAVE 5 FUNCTION //////////////////////
  const skyView = (event) => {
    event.target.value
    let sky = '';
    let skyColor = '';
    if (state.inputSky === 'Cloudy') {
      sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      skyColor = 'cloudy';
    } else if (state.inputSky === 'Sunny') {
      sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
      skyColor = 'sunny';
    } else if (state.inputSky === 'Rainy') {
      sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      skyColor = 'rainy';
    } else if (state.inputSky === 'Snowy') {
      sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      skyColor = 'snowy';
    }
    state.skyContainer.textContent = sky;
    state.gardenContent.classList = `garden__content ${skyColor}`;
  };
  
  
  // WAVE 6 reset city name ////////////////////////
  
  //WAVE 6 FUNCTION /////////////////////
  
  const resetCity = () => {
    state.cityNameInput.value = '';
    state.cityHeader.textContent = '';
    //what kind of method is this called? effects html elements differently
  };

  const handleCurrentTempButtonClicked = () => {
    findLatAndLon()
      .then((location) => getWeather(location))
      .then((targetTemp) => {
        console.log(targetTemp)
        state.tempValue = targetTemp;
        // state.tempValue.textContent = targetTemp;
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
  

