'use strict';
const baseURL = 'https://weather-report-proxy-server-zc1j.onrender.com/'
const state = {
  city: 'las vegas', //default city
  weather: {},
}
const temperatureMappings = [
  { range: [90, Infinity], color: 'red', landscape: 'It\'s scorching hot outside!' },
  { range: [80, 89], color: 'orange', landscape: 'It\'s almost too hot to handle!' },
  { range: [70, 79], color: 'gold', landscape: 'Enjoy the pleasantly warm weather!' },
  { range: [60, 69], color: 'green', landscape: 'Feel the gentle breeze on your skin!' },
  { range: [50, 59], color: 'teal', landscape: 'Feel the chill in the air!' },
  { range: [-Infinity, 49], color: 'blue', landscape: 'Bundle up, it\'s cold outside!' },
  ];

const loadControls = () => {
  const elementsWithId = document.querySelectorAll('[id')
  elementsWithId.forEach(element => state[element.id] = element);
};

const registerEvents = () => {
  state.increaseTempControl.addEventListener('click', handleIncrease);
  state.decreaseTempControl.addEventListener('click', handleDecrease);
  state.cityNameInput.addEventListener('input', handleCityNameUpdate);
  state.currentTempButton.addEventListener('click', handleGetCurrentTemp);
  state.skySelect.addEventListener('change',handleSkySelect);
  state.cityNameReset.addEventListener('click', handleOptionsReset);
};

const handleGetCurrentTemp = async () => {
  const locationURL = `${baseURL}location?q=${state.city}`;
  const locationResponse = await axios.get(locationURL);
  const { lat, lon } = locationResponse.data[0];

  const weatherURL = `${baseURL}weather?lat=${lat}&lon=${lon}`;
  const weatherResponse = await axios.get(weatherURL);

  // unpack weather data from response
  const { temp, feels_like, humidity, pressure } = weatherResponse.data['main'];
  const { description, icon } = weatherResponse.data['weather'][0];
  const { sunrise, sunset } = weatherResponse.data['sys'];

  // update state variables
  state.weather.humidity = humidity;
  state.weather.pressure = pressure;
  state.weather.temp = convertKelvinToFahrenheit(temp);
  state.weather.feelsLike = convertKelvinToFahrenheit(feels_like);
  state.weather.wind = convertMStoMPH( weatherResponse.data['wind']['speed']);
  state.weather.sunrise = convertTimestampToTime(sunrise);
  state.weather.sunset = convertTimestampToTime(sunset);
  state.lastUpdated = convertTimestampToTime(weatherResponse.data['dt']);

  // update UI
  handleTempChange();
  handleDetailsUpdate();
  handleSkyUpdate(icon, description);
  state.skySelect.selectedIndex = 0;
};

const convertKelvinToFahrenheit = (temp) => Math.floor((temp - 273.15) * 9/5 +32);

const convertMStoMPH = (speed) => Math.floor(speed * 2.237);

const convertTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const time = date.toLocaleTimeString('en-US', 
    { hour: 'numeric', minute: 'numeric', hour12: true });
  return time;
}

const handleDetailsUpdate = () => {
  state.humidityValue.innerText = state.weather.humidity;
  state.pressureValue.innerText = state.weather.pressure;
  state.windValue.innerText = state.weather.wind;
  state.feelsLikeValue.innerText = state.weather.feelsLike;
  state.sunriseValue.innerText = state.weather.sunrise;
  state.sunsetValue.innerText = state.weather.sunset;
  state.lastUpdatedValue.innerText = state.lastUpdated;
};

const handleSkySelect = (option) => {
  const icon = option.target.value + state.timePeriod;
  const description = option.target.options[option.target.selectedIndex].text;
  handleSkyUpdate(icon, description)
};

const handleSkyUpdate = (icon=`01${state.timePeriod}`, desc='Clear Sky') => {
  state.weather.icon = icon;
  state.weather.description = desc;

  state.sky.src = `./icons/${state.weather.icon}.svg`;
  state.sky.alt = state.weather.description;
  state.descriptionValue.innerText = state.weather.description;
}

const handleOptionsReset = () => {
  // reset options UI
  state.cityNameInput.value = '';
  state.skySelect.selectedIndex = 0;

  handleCityNameUpdate();

  // reset sky
  state.descriptionValue.innerText = 'Clear Sky';
  state.sky.src =`./icons/01${state.timePeriod}.svg`;
  state.sky.alt = 'Clear Sky';
}

const handleCityNameUpdate = () => {
  state.city = state.cityNameInput.value || 'Las Vegas';
  state.headerCityName.innerText = state.city
};

const handleTempChange = (adj=0) => {
  if (!state.weather.temp) {
      state.weather.temp = parseInt(state.tempValue.innerText);
  }
  state.weather.temp += adj;
  state.tempValue.innerText = state.weather.temp;
  updateColorLandscape();
};

const handleIncrease = () => handleTempChange(1);
const handleDecrease = () => handleTempChange(-1);

const setTimePeriod = () => {
  const date = new Date();
  const hour = date.getHours();

  // 6am - 6pm is day, 6pm - 6am is night
  state.timePeriod = hour < 6 || hour >= 18 ? 'n' : 'd';

  // set current date
  state.date = date.toLocaleString('en-US', 
      { weekday: 'short', month: 'long', day: 'numeric' });
  state.dateValue.innerText = state.date;

  // set background image, color, and sky based on time period
  document.documentElement.style.
      setProperty('--bgImage', `var(--${state.timePeriod}BgImage)`);
  document.documentElement.style.
      setProperty('--bgColor', `var(--${state.timePeriod}BgColor)`);
  state.sky.src = `./icons/01${state.timePeriod}.svg`;
};

const updateColorLandscape = () => {
  const { temp } = state.weather;
  const { color, landscape } = temperatureMappings.find(mapping =>
      temp >= mapping.range[0] && temp <= mapping.range[1]
  );
  state.landscape.innerText = landscape;
  state.tempValue.style.color = `var(--${color})`;
};
  
const onLoaded = () => {
  loadControls();
  registerEvents();
  setTimePeriod();
};

document.addEventListener('DOMContentLoaded', onLoaded);


