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
const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");

cityNameInput.addEventListener("input", () => {
  headerCityName.textContent = cityNameInput.value;
});

const skySelect = document.getElementById("skySelect");
const gardenContent = document.getElementById("gardenContent");
const sky = document.getElementById("sky");

skySelect.addEventListener("change", () => {
  const selectedOption = skySelect.value;
  updateSky(selectedOption);
});

function updateSky(option) {
  gardenContent.className = ""; // Remove all existing classes from gardenContent
  gardenContent.classList.add(option); // Add the selected sky option as a class

  const skyEmoji = getSkyEmoji(option);
  sky.innerHTML = skyEmoji; // Use innerHTML instead of textContent to render the emojis
}

function getSkyEmoji(option) {
  switch (option) {
    case "sunny":
      return "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    case "cloudy":
      return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    case "rainy":
      return "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    case "snowy":
      return "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    default:
      return "";
  }
}
