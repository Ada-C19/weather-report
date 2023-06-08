// const temperatureContent = document.getElementById("temperature__content");

// let temperature = document.getElementById("tempValue").textContent;

// document.getElementById("tempValue").textContent = 420;

let temperature = document.getElementById("tempValue");

temperature.textContent = 420;

// temperature.textContent += 1;

const increaseTemp = (currentTemp) => {
  // console.log(temperature.textContent);
  currentTemp = parseInt(currentTemp);
  console.log(parseInt(temperature.textContent));
  console.log("the function ran");
  return currentTemp + 1;
};

temperature.textContent = increaseTemp(temperature.textContent);

console.log("what's up world");
const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");

cityNameInput.addEventListener('input', () => {
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
