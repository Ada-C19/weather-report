  // 👩🏻‍💻 Abby's section on 2023.6.7

let temperature = document.getElementById("tempValue");

const increaseTempButton = document.getElementById("increaseTempControl");

const decreaseTempButton = document.getElementById("decreaseTempControl");

temperature.textContent = 0;

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
  temperature.textContent = incrementValue(temperature.textContent);
});

decreaseTempButton.addEventListener("click", () => {
  temperature.textContent = decrementValue(temperature.textContent);
});

// 👩🏻‍💻 end of Abby's section on 2023.6.7

console.log("what's up world");

const cityNameInput = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');

cityNameInput.addEventListener('input', () => {
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
        return "☁️ ☁️  ☀️☀️☀️☀️☀️☀️☀️ ☁️ ☁️";
      case "cloudy":
        return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
      case "rainy":
        return "🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧🌧";
      case "snowy":
        return "🌨❄️🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
      case "apocalyptic":
        return "🧟‍♀️🧟‍♂️🧟‍♀️🌫🧟‍♂️🧟‍♀️🧟‍♂️🌫🧟‍♀️🧟‍♂️🧟‍♀️"
      default:
        return "";
    }
  };


  // Set the initial sky and garden content based on the default selected option
  const defaultOption = skySelect.value;
  updateSky(defaultOption);

// Optional:
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
