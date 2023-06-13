const state = {
  tempValue: null,
  increaseTempControl: null,
  decreaseTempControl: null,
  gardenLandscape: null,
  tempValueEl: null,
  cityLocation: {lat:  39.2776156 , lon: -74.574600}
};

const loadControls = () => {
  state.tempValueEl = document.getElementById('tempValue');
  state.increaseTempControl = document.getElementById('increaseTempControl');
  state.decreaseTempControl = document.getElementById('decreaseTempControl');
  state.tempValue = parseInt(state.tempValueEl.textContent);
  state.gardenLandscape = document.getElementById('landscape');
  state.gardenLandscapeValue = state.gardenLandscape.textContent;
  state.cityLocation = document.getElementById('cityNameInput');
};

const increaseTemp = () => {
const increaseTempControl = state.increaseTempControl;
const currentTemp = document.getElementById('currentTempButton');
state.tempValue += 1;
state.tempValueEl.textContent = `${state.tempValue}`;
changeColorAndEmoji();
};

const decreaseTemp = () => {
const decreaseTempControl = state.decreaseTempControl;
const currentTemp = document.getElementById('currentTempButton');
state.tempValue -= 1;
state.tempValueEl.textContent = `${state.tempValue}`;
changeColorAndEmoji();
};

const changeColorAndEmoji = () => {
let temp = state.tempValue;
  if (temp >= 80){
  state.tempValueEl.classList = 'red';
  state.gardenLandscape.textContent = ("🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂");
} else if (temp < 80 && temp >= 70) {
  state.tempValueEl.classList = 'orange';
  state.gardenLandscape.textContent = ("🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷");
} else if (temp < 70 && temp >= 60) {
  state.tempValueEl.classList = 'yellow';
  state.gardenLandscape.textContent = ("🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃");
} else if (temp < 60 && temp >= 50) {
  state.tempValueEl.classList = 'green';
  state.gardenLandscape.textContent = ("🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲");
} else {
  state.tempValueEl.classList = 'teal';
  state.gardenLandscape.textContent = ("🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲");
}
};

const updateCity = () => {
const cityNameInput = document.getElementById('cityNameInput');
const cityNameReset = document.getElementById('cityNameReset'); 
const headerCityName = document.getElementById('headerCityName');
}

const getLocationInfo = () => {
return axios.get('https://genesis-weather-report-proxy-server.onrender.com/location',
// return axios.get('http://localhost:5000/location',
{
  params: {
    q: state.cityLocation.value
  }
})
.then( (response) => {
  state.cityLocation['lat'] = response.data[0].lat;
  state.cityLocation['lon']= response.data[0].lon;
  return state.cityLocation
})
.catch( (error) => {
  console.error(error);
})
};

const convertKToF = k => (k-273.15) * (9/5) + 32
const getWeatherInfo = (location) => {
return axios.get('https://genesis-weather-report-proxy-server.onrender.com/weather',
// return axios.get('http://localhost:5000/weather',
{
  params: {
    lat: state.cityLocation['lat'], 
    lon: state.cityLocation['lon']
    }
})
.then( (response) => {
  const cityTemp = convertKToF(response.data.main.temp);
  state.tempValue = Math.round(cityTemp);
  return(state.tempValue)
})
.catch( (error) => {
  console.log('weather error');
  console.error(error)
})
};

const updateCurrentTemp = () => {
const currentTemp = document.getElementById('currentTempButton');
getLocationInfo().then((getWeatherInfo)).then((temp) => {state.tempValueEl.textContent = `${state.tempValue}`})
};

const changeVideo = () => {
  const video = document.querySelector('#default-video');
  const select = document.querySelector('select');
  video.src = select.value;
  console.log(video.src);
};


const resetCity = () => {  
  document.getElementById('cityNameReset').reset()}; 


const setUp = () => {
loadControls();
registerEvents();
changeColorAndEmoji();
}

const registerEvents = () => {
  state.increaseTempControl.addEventListener('click', increaseTemp);
  state.decreaseTempControl.addEventListener('click', decreaseTemp);
  cityNameReset.addEventListener('click', () => {
    cityNameInput.value = headerCityName.textContent = ''
  });
  cityNameInput.addEventListener('input', () => {
    headerCityName.textContent = cityNameInput.value
  });
  // const dropDownOptions = document.querySelector("#Sky_Choices");
  // const result = document.querySelector("#sky");
  // dropDownOptions.addEventListener("change", (event) => {
  //   result.textContent = `${event.target.value}`;
  // });
  const updateTemp = document.querySelector("#currentTempButton");
  updateTemp.addEventListener("click", updateCurrentTemp);
  };
  
  document.addEventListener("DOMContentLoaded", setUp)
