// 👩🏻‍💻 Abby's section on 2023.6.8

class Weather {
  constructor(name, sky, landscape, tempRange, textColor, bgColor) {
    this.name = name;
    this.sky = sky;
    this.landscape = landscape;
    this.tempRange = tempRange;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }

  changeTempValueColor() {
    document.getElementById("tempValue").style.color = `${this.textColor}`;
  }
}

// weathers
// these could maybe be separated into another file? along with the class definition
const hot = new Weather(
  "Hot",
  "🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞",
  "🌵🌵🌵🌾🌾🌾🌵💀🌾🌾🌵🌵🌵💀🌵",
  [80, 100000],
  "red",
  "red"
);
const sunny = new Weather(
  "Sunny",
  "☁️ ☁️ ☀️☀️☀️☀️☀️☀️☀️ ☁️ ☁️",
  "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
  [70, 79],
  "yellow",
  "rgb(221, 255, 255)"
);
const cloudy = new Weather(
  "Cloudy",
  "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
  [60, 69],
  "gray",
  "lightgrey"
);
const rainy = new Weather(
  "Rainy",
  "🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧🌧",
  "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
  [50, 59],
  "blue",
  "lightblue"
);
const snowy = new Weather(
  "Snowy",
  "🌨❄️🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
  "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
  [0, 49],
  "lightblue",
  "lightsteelblue"
);
const apocalyptic = new Weather(
  "Apocalyptic",
  "🧟‍♀️🧟‍♂️🧟‍♀️🌫🧟‍♂️🌅🧟‍♂️🌫🧟‍♀️🧟‍♂️🧟‍♀️",
  "⛰️⛰️⛰️⛰️🛣️🛣️🛣️⛰️⛰️⛰️⛰️",
  [-10000000, -1],
  "black",
  "rgb(11, 247, 46)"
);

const weathers = [apocalyptic, snowy, rainy, cloudy, sunny, hot];

const changeWeather = (weather) => {
  // set the temp value color
  document.getElementById("tempValue").style.color = `${weather.textColor}`;

  // set the garden content background color
  document.getElementById("gardenContent").style.backgroundColor =
    weather.bgColor;

  //set the sky content
  document.getElementById("sky").textContent = weather.sky;

  // set the landscape content
  document.getElementById("landscape").textContent = weather.landscape;
};

changeWeather(snowy);

let temperature = document.getElementById("tempValue");

const increaseTempButton = document.getElementById("increaseTempControl");

const decreaseTempButton = document.getElementById("decreaseTempControl");

let tempNumber = 0;

temperature.textContent = `${tempNumber}° F`;

// the two helper functions below can maybe get condensed into one by using callback functions

const incrementValue = (numberString) => {
  // cast numberString from string to int
  number = parseInt(numberString);

  // return incremented value
  return number + 1;
};

const decrementValue = (numberString) => {
  number = parseInt(numberString);

  return number - 1;
};

increaseTempButton.addEventListener("click", () => {
  tempNumber = incrementValue(tempNumber);
  temperature.textContent = `${tempNumber}° F`;
});

decreaseTempButton.addEventListener("click", () => {
  tempNumber = decrementValue(tempNumber);
  temperature.textContent = `${tempNumber}° F`;
});

// 👩🏻‍💻 end of Abby's section on 2023.6.8

const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");

cityNameInput.addEventListener("input", () => {
  headerCityName.textContent = cityNameInput.value;

  cityNameReset.addEventListener("click", () => {
    cityNameInput.value = "";
    headerCityName.textContent = "";
  });
});

const skySelect = document.getElementById("skySelect");
const gardenContent = document.getElementById("gardenContent");
const sky = document.getElementById("sky");

skySelect.addEventListener("change", () => {
  const selectedOption = skySelect.value;
  updateSky(selectedOption);
});

const updateSky = (option) => {
  const skyClassName = getSkyClassName(option);
  const skyEmoji = getSkyEmoji(option);

  gardenContent.className = `garden__content ${skyClassName}`;
  sky.innerHTML = skyEmoji;
};

const getSkyClassName = (option) => {
  switch (option) {
    case "":
    case "sunny":
      return "sunny";
    case "cloudy":
      return "cloudy";
    case "rainy":
      return "rainy";
    case "snowy":
      return "snowy";
    case "apocalyptic":
      return "apocalyptic";
    default:
      return "";
  }
};

const getSkyEmoji = (option) => {
  switch (option) {
    case "":
    case "sunny":
      document.getElementById("tempValue").style.color = "red";
      return "☁️ ☁️  ☀️☀️☀️☀️☀️☀️☀️ ☁️ ☁️";
    case "cloudy":
      document.getElementById("tempValue").style.color = "gray";
      return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    case "rainy":
      return "🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧🌧";
    case "snowy":
      return "🌨❄️🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    case "apocalyptic":
      return "🧟‍♀️🧟‍♂️🧟‍♀️🌫🧟‍♂️🧟‍♀️🧟‍♂️🌫🧟‍♀️🧟‍♂️🧟‍♀️";
    default:
      return "";
  }
};

// Set the initial sky and garden content based on the default selected option
const defaultOption = skySelect.value;
updateSky(defaultOption);

/* Optional:
// add color change to the background if the temperature is at a certain level.

const tempValue = document.getElementById('tempValue');
const body = document.body;

tempValue.addEventListener('input', () => {
  const temperature = parseInt(tempValue.textContent);

  if (temperature >= 80) {
    body.style.backgroundColor = 'red';
  } else if (temperature >= 60 && temperature < 40) {
    body.style.backgroundColor = 'orange';
  } else if (temperature >= 40 && temperature < 32) {
    body.style.backgroundColor = 'yellow';
  } else if (temperature >= 32 && temperature < 0) {
    body.style.backgroundColor = 'green';
  } else {
    body.style.backgroundColor = 'blue';
  }
});

const tempValue = document.getElementById('tempValue');
const tempConversionButton = document.getElementById('tempConversionButton');

let temperatureUnit = "K"; // Variable to track the current temperature unit


tempConversionButton.addEventListener('click', () => {
  const currentTemp = parseFloat(tempValue.textContent);
  let convertedTemp;

  if (temperatureUnit === "K") {
    // Convert from Kelvin to Fahrenheit 
    convertedTemp = (currentTemp - 273.15) * (9/5) + 32;
    tempValue.textContent = convertedTemp.toFixed(2) + "°F";
    tempConversionButton.textContent = "Convert to Celsius";
    temperatureUnit = "F";
  } else if (temperatureUnit === "F") {
    // Convert from Fahrenheit to Celsius 
    convertedTemp = (currentTemp - 32) * (5/9);
    tempValue.textContent = convertedTemp.toFixed(2) + "°C";
    tempConversionButton.textContent = "Convert to Kelvin";
    temperatureUnit = "C";
  } else {
    // Convert from Celsius  to Kelvin 
    convertedTemp = currentTemp + 273.15;
    tempValue.textContent = convertedTemp.toFixed(2) + "K";
    tempConversionButton.textContent = "Convert to Fahrenheit";
    temperatureUnit = "K";
  }
}); */
