let temperature = document.getElementById("tempValue");

temperature.textContent = 420;

const incrementValue = (numberString) => {
  // cast currentTemp from string to int
  number = parseInt(numberString);

  console.log(parseInt(temperature.textContent));
  console.log("the function ran");
  // return a value
  return number + 1;
};

temperature.textContent = incrementValue(temperature.textContent);

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
