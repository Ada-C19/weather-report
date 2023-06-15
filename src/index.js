const state = {
  currentTemp: 70,
  backgroundColor: document.getElementById('buttom--left'),
  landscapeImg: document.getElementById('buttom--right'),
  cityInput: document.getElementById('city-input'),
  location: null,
  lat: null,
  lon: null,
  skyCondition: document.getElementById('sky--options'),
  skyImg: document.getElementById('top')
}
// changes the temp on the page
const changesTempDisplay = () => {
  const tempControl = document.getElementById('temperature');
  const tempValue = document.getElementById('temp-value');
  const tempUnit = document.getElementById('temp-unit');

  tempValue.textContent = Math.round(state.currentTemp);
  tempUnit.textContent = tempControl.dataset.unit;
};

// CHANGES TEMP
const increaseTemp = () => {
  state.currentTemp++;
  changesTempDisplay()
};

const decreaseTemp = () => {
  state.currentTemp--;
  changesTempDisplay()
};

// sky background change with sky option
const skyBackground = () => {
  console.log('skyBackground')
  const condition = state.skyCondition.value
  if(condition == 'sunny') {
      console.log('sunny')
      state.skyImg.style.backgroundImage = 'url(../assets/sky/mostlysunny.jpg)';
  } else if(condition == 'rainy') {
      state.skyImg.style.backgroundImage = 'url(../assets/sky/rain.jpg.webp)';
  } else if(condition == 'snowy'){
      state.skyImg.style.backgroundImage = 'url(../assets/sky/25935002bebf62806a58b18614084ab2.jpeg)'; 
  } else if(condition == 'cloudy') {
      state.skyImg.style.backgroundImage = 'url(../assets/sky/dark-sky-with-storm-clouds.jpg)';
  }

  }

// CHANGE BACKGROND COLOR  AND IMAGE WITH TEMP CHANGE
const changeBackgrounds = () => {
  if (state.currentTemp >= 80) {
      state.backgroundColor.style.backgroundColor = 'red';
      state.landscapeImg.style.backgroundImage = 'url(../assets/landscape/cactus-and-desert-landscape-with-bright-kencanning.jpg)';
  } else if (state.currentTemp >= 70) {
      state.backgroundColor.style.backgroundColor = 'orange';
      state.landscapeImg.style.backgroundImage = 'url(../assets/landscape/yellow-flowers-lotus-lotus-wallpaper-preview.jpg)';
  } else if (state.currentTemp >= 60) {
      state.backgroundColor.style.backgroundColor = 'yellow';
      state.landscapeImg.style.backgroundImage = 'url(../assets/landscape/dry-leaves-covering-ground-surrounded-by-trees-forest-autumn_181624-20780.jpg.avif)';
  } else if (state.currentTemp >= 50) {
      state.backgroundColor.style.backgroundColor = 'green';
      state.landscapeImg.style.backgroundImage = 'url(../assets/landscape/Roads_Mountains_Scenery_461891.jpg)';
  } else {
      state.backgroundColor.style.backgroundColor = 'teal';
  }
}




// DISPLAY CITY CHANGES ON INPUT
const updateCity = () => {
  document.getElementById('city-display--name').textContent = state.cityInput.value
}

// reset city
const resetCity = () => {
  state.cityInput.value = "";
  updateCity();
}

// calling API
// Convert from Kel to Fahren
const handleRealTemp = async (kelvin) => {
  state.currentTemp = Math.floor((kelvin - 273.15) * 9/5 + 32 );
  changesTempDisplay()
};

// activated by submit button
const submitLocationInput = () => {
  state.location = state.cityInput.value;
  getLatLon();
}

// API CALLS
// loaction api
const getLatLon = () => {
  axios.get('http://127.0.0.1:5000/location', {
      params: {
          q: state.location,
      },
  })
  .then((response) => {
      state.lon = response.data[0].lon;
      state.lat = response.data[0].lat;
  })
  .then(() => {
      getWeather()
  })
  .catch((error) => {
      console.log(error)
  })
}

// weather api call
const getWeather = () => {
  axios.get('http://127.0.0.1:5000/weather', {
      params: {
          lat: state.lat,
          lon: state.lon,
      },
  })
  .then((response) => {
      kelvin = response.data.main.temp;
      handleRealTemp(kelvin);
  })
  .then(() => {
      changeBackgrounds()
  })
  .catch((error) =>{
      console.log(error)
  })
}

const convertTemperature = () => {
  const tempControl = document.getElementById('temperature');
  const currentUnit = tempControl.dataset.unit;

  let convertedTemperature;
  let targetUnit;

  if (currentUnit === 'C') {
    convertedTemperature = (state.currentTemp * 9) / 5 + 32;
    targetUnit = 'F';
  } else {
    convertedTemperature = ((state.currentTemp - 32) * 5) / 9;
    targetUnit = 'C';
  }

  state.currentTemp = convertedTemperature;
  tempControl.dataset.unit = targetUnit;
  changesTempDisplay();
};




// REGISTER EVENT LISTENER
const registerEventHandler = () => {
  const tempDecrease = document.getElementById('decrease-t');
  tempDecrease.addEventListener('click', decreaseTemp);
  tempDecrease.addEventListener('click', changeBackgrounds);

  const tempIncrease = document.getElementById('increase-t');
  tempIncrease.addEventListener('click', increaseTemp);
  tempIncrease.addEventListener('click', changeBackgrounds);

  const inputCity = document.getElementById('city-input');
  inputCity.addEventListener('keyup', updateCity);

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', submitLocationInput);

  state.skyCondition.addEventListener('change', skyBackground);

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetCity);

  const convertButton = document.getElementById('convert-button');
  convertButton.addEventListener('click', convertTemperature);

}

document.addEventListener('DOMContentLoaded', registerEventHandler)

