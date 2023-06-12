//STATES
const state = {
    city: 'Seattle',
    lat: 47.6038321,
    long: -122.3300624,
    temp: 72,
    increaseTempControl: null,
    decreaseTempControl: null,
    resetButton: null,
    skyUpdate: null,
    gardenContent: null,
    skyContainer: null,
    landscapeElement: null,
  
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
  state.inputSky = document.getElementById('skySelect').value;
  state.cityHeader = document.getElementById('headerCityName');
  state.cityBox = document.getElementById('cityNameInput').value;
  state.tempContainer = document.querySelector("#tempValue");
  state.landscapeElement = document.querySelector("#landscape");

};

const convertKtoF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

//WAVE 4 AXIOS CALLING APIS ////////////////////

// const findLatAndLong = () => {
//   //let lat, long;
//   axios
//     .get('localhost:5000/location', {
//       params: {
//         q: state.city,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//       state.lat = response.data[0].lat;
//       state.long = response.data[0].lon;
//       getWeather();
//     })
//     .catch((error) => {
//       console.log('Unknown latitude and longitude:', error.response);
//     });
// };

// const getWeather = () => {
//   axios
//     .get('localhost:5000/weather', {
//       params: {
//         lat: state.lat,
//         lon: state.long,
//       },
//     })
//     .then((response) => {
//       const weather = response.data;
//       state.temp = Math.round(convertKtoF(weather.main.temp));
//       formatTempAndGarden();
//     })
//     .catch((error) => {
//       console.log('Error getting the weather:', error);
//     });
//   };
  
  // WAVE 2 HELPER FUNCTION //////////////////////
  const applyColorAndGarden = (element, temperature) => {
    element.classList.remove('red', 'orange', 'yellow', 'green', 'teal', 'ice');
    
    let landscape = '';
    if (temperature < 0 || temperature > 120) {
      element.classList.add('red');
      element.textContent = 'DANGER'
      landscape = '🚫🚫🚫🚫🚫🚫'; 
    } else if (temperature >= 80) {
      element.classList.add('red');
      landscape = '🌵🏜️🌵🐍🦂🌋👹🌋🦂🐍🌵🏜️🌵';
    } else if (temperature >= 70) {
      element.classList.add('orange');
      landscape = '🌞🌞🌻🌻🏖️🏝️👙🏝️🏖️🌻🌻🌞🌞';
    } else if (temperature >= 60) {
      element.classList.add('yellow');
      landscape = '🌹🌸🎋🌹🌸🌱🪺🌱🌸🌹🎋🌸🌹';
    } else if (temperature >= 50) {
      element.classList.add('green');
      landscape = '🌳🌾🍂🪵🌳🐿️🧣🐿️🌳🪵🍂🌾🌳';
    } else if (temperature >= 40) {
      element.classList.add('teal');
      landscape = '🌲🌳🌨️🪵🌲🌳🧤🌳🌲🪵🌨️🌳🌲';
    } else if (temperature < 40) {
      element.classList.add('ice');
      landscape = '🎄❄️🌨️🌲⛄️🌨️❄️🌨️⛄️🌲🌨️❄️🎄'; 
    }
    
    
    state.landscapeElement.textContent = landscape;
  };
  
  
  // WAVE 2 increase and decrease temp buttons change number///////
  
  // line 24  <span id="increaseTempControl">⬆️</span>
  // line 25  <span id="tempValue"></span>
  // line 26  <span id="decreaseTempControl">⬇️</span>
  
  const increaseTemp = () => {
    state.temp++;
    console.log(state.temp);
    tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };
  
  const decreaseTemp = () => {
    // query selector is our document method
    state.temp--;
    console.log(state.temp);
    state.tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };
  
  
  //WAVE 3 grab the value of the text input elemen.//////////////////////
  
  // THIS IS THE NAME INPUT BOX   
  //input: line 40 "cityNameInput"
  
  //THIS IS THE HEADER WITH THE STARS CSS
  //output: line 18 id="headerCityName"
  
  // WAVE 3 FUNCTION ////////////////////////////
  const updateCity = () => {
    //get element by id is our document method
    state.city = state.cityBox;
    cityHeader.textContent = state.city;
  }
  
  
  
  // wave 4 get realtime temp
  

  
  //WAVE 5 FUNCTION //////////////////////
  const skyView = () => {
    let sky = '';
    let skyColor = '';
    if (inputSky === 'Cloudy') {
      sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      skyColor = 'cloudy';
    } else if (inputSky === 'Sunny') {
      sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
      skyColor = 'sunny';
    } else if (inputSky === 'Rainy') {
      sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      skyColor = 'rainy';
    } else if (inputSky === 'Snowy') {
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
    cityHeader.textContent = '';
    //what kind of method is this called? effects html elements differently
  };
  
  
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


  };
  document.addEventListener("DOMContentLoaded", registerEventHandlers);
  

