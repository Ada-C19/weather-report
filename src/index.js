class Temperature {
  constructor(name, tempRange, textColor, landscape) {
    this.name = name;
    this.tempRange = tempRange;
    this.textColor = textColor;
    this.landscape = landscape;
  }

  changeLandscape() {
    document.getElementById("landscape").innerHTML = this.landscape;
  }

  changeTempValueColor() {
    document.getElementById("tempValue").style.color = `${this.textColor}`;
  }
}

class Weather {
  constructor(name, sky, bgColor) {
    this.name = name;
    this.sky = sky;
    this.bgColor = bgColor;
  }

  changeBackgroundColor() {
    document.getElementById("gardenContent").style.backgroundColor =
      this.bgColor;
  }

  changeSky() {
    document.getElementById("sky").textContent = this.sky;
  }
}

const changeSky = (weather) => {
  weather.changeBackgroundColor();
  weather.changeSky();
};

const changeTempDisplay = (temp) => {
  temp.changeTempValueColor();
  temp.changeLandscape();
};

const hot = new Temperature(
  "Hot",
  [80, 100000],
  "red",
  "🌵🌾🌾🌾🌵💀🌾🌾🌵🌵🌵💀🌵"
);
const warm = new Temperature(
  "Warm",
  [70, 79],
  "orange",
  "🌸🌿🌼🌷🌻🌿_☘️🌱_🌻🌷"
);
const mild = new Temperature("Mild", [60, 69], "gray", "🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻");
const chilly = new Temperature(
  "Chilly",
  [50, 59],
  "blue",
  "🌾🌾_🍃_🪨__🛤_🌾🌾_🍃"
);
const cold = new Temperature(
  "Cold",
  [0, 49],
  "lightblue",
  "🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
);

const temperatureCollection = {
  hot: hot,
  warm: warm,
  mild: mild,
  chilly: chilly,
  cold: cold,
};

changeTempDisplay(cold);

const fullSunny = new Weather(
  "Full Sunny",
  "🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞",
  "red"
);
const sunny = new Weather(
  "Sunny",
  "☁️ ☁️ ☀️☀️☀️☀️☀️☀️☀️ ☁️ ☁️",
  "rgb(221, 255, 255)"
);
const cloudy = new Weather(
  "Cloudy",
  "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
  "lightgrey"
);
const rainy = new Weather(
  "Rainy",
  "🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧🌧",
  "lightblue"
);
const snowy = new Weather(
  "Snowy",
  "🌨❄️🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
  "lightsteelblue"
);
const apocalyptic = new Weather(
  "Apocalyptic",
  "🧟‍♀️🧟‍♂️🧟‍♀️🌫🧟‍♂️🌅🧟‍♂️🌫🧟‍♀️🧟‍♂️🧟‍♀️",
  "rgb(11, 247, 46)"
);

const skyCollection = {
  apocalyptic: apocalyptic,
  snowy: snowy,
  rainy: rainy,
  cloudy: cloudy,
  sunny: sunny,
  fullSunny: fullSunny,
};

const landscapeCollection = {
  apocalyptic: apocalyptic,
  snowy: snowy,
  rainy: rainy,
  cloudy: cloudy,
  sunny: sunny,
  fullSunny: fullSunny,
};

let tempNumber = 0;
const temperature = document.getElementById("tempValue");
temperature.textContent = `${tempNumber}° F`;

const increaseTempButton = document.getElementById("increaseTempControl");
increaseTempButton.addEventListener("click", () => {
  tempNumber++;
  temperature.textContent = `${tempNumber}° F`;
  updateWeatherBasedOnTemperature();
});

const decreaseTempButton = document.getElementById("decreaseTempControl");
decreaseTempButton.addEventListener("click", () => {
  tempNumber--;
  temperature.textContent = `${tempNumber}° F`;
  updateWeatherBasedOnTemperature();
});

const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");

cityNameInput.addEventListener("input", () => {
  headerCityName.textContent = cityNameInput.value;
});

const skySelect = document.getElementById("skySelect");
skySelect.addEventListener("input", (event) => {
  const selectedSky = skySelect.value;
  changeSky(skyCollection[selectedSky]);
});

const updateWeatherBasedOnTemperature = async () => {
  for (const temperatureKey in temperatureCollection) {
    const temperature = temperatureCollection[temperatureKey];
    if (
      tempNumber >= temperature.tempRange[0] &&
      tempNumber <= temperature.tempRange[1]
    ) {
      changeTempDisplay(temperature);
      break;
    }
  }
};

const resetButton = document.getElementById("cityNameReset");
resetButton.addEventListener("click", () => {
  cityNameInput.value = "Austin";
  headerCityName.textContent = "Austin";
});

const axiosGetWeather = async (cityName) => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/location", {
      params: {
        q: cityName,
      },
    });

    const { lat: latitude, lon: longitude } = response.data[0].coord;

    const weatherResponse = await axios.get("http://localhost:5000/weather", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    return weatherResponse.data.main.temp;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};


const handleGetRealtimeTemperatureButtonClick = async () => {
  try {
    const coordinates = await axiosGetCoordinates(cityNameInput.value);
    const temperatureValue = await axiosGetWeather(coordinates);
    tempNumber = Math.floor((temperatureValue - 273.15) * (9 / 5) + 32);
    temperature.textContent = `${tempNumber}° F`;
    updateWeatherBasedOnTemperature();
  } catch (error) {
    console.error("Error getting realtime temperature:", error);
  }
};

const getRealtimeTemperatureButton = document.getElementById("currentTempButton");
getRealtimeTemperatureButton.addEventListener(
  "click",
  handleGetRealtimeTemperatureButtonClick

);
window.addEventListener("DOMContentLoaded", () => {
  tempNumber = 72;
  temperature.textContent = `${tempNumber}° F`;
  updateWeatherBasedOnTemperature();
});
window.addEventListener("DOMContentLoaded", async () => {
  cityNameInput.value = "Austin";
  headerCityName.textContent = "Austin";
  
  
});