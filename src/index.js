const cityNameInput = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');

cityNameInput.addEventListener('input', () => {
    headerCityName.textContent = cityNameInput.value;
});

const skySelect = document.getElementById('skySelect');
const sky = document.getElementById('sky');

skySelect.addEventListener('change', () => {
  const selectedOption = skySelect.value;
  sky.textContent = getSkyEmoji(selectedOption);
});

const getSkyEmoji = (option) => {
  switch (option) {
    case 'sunny':
      return '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    case 'cloudy':
      return '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    case 'rainy':
      return '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    case 'snowy':
      return '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    default:
      return '';
  }
};
