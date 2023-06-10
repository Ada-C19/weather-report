// Constants
const BASE_URL = 'http://127.0.0.1:5000';
const DEFAULT_CITY = 'Los Angeles';
const increaseTemp = document.getElementById('increaseTempControl');
const decreaseTemp = document.getElementById('decreaseTempControl');
const tempValue = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');
const cityNameInput = document.getElementById('cityNameInput');
const cityNameReset = document.getElementById('cityNameReset'); 
const headerCityName = document.getElementById('headerCityName');
const currentTempButton = document.getElementById('currentTempButton');

// Changes color + landscape by Temperature
let temp = 60;
const changeTemp = () => {
    let landscapeEmojis = '';
    if (temp >= 80) {
        tempValue.style.color = 'red';
        landscapeEmojis = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp< 80 && temp >= 70) {
        tempValue.style.color = 'orange';
        landscapeEmojis = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp < 70 && temp >= 60) {
        tempValue.style.color = 'yellow';
        landscapeEmojis = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (temp < 60 && temp >= 50) {
        tempValue.style.color = 'green';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        tempValue.style.color = 'teal';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = landscapeEmojis;
};

// Changes sky by selection
const changeSky = () => {
    const selectedSky = document.getElementById('skySelect').value;
    const theSky = document.getElementById('sky');
    let sky = '🌞😎🌞';
    if (selectedSky === 'sunny') {
        sky = '🌞😎🌞';
    } else if (selectedSky === 'cloudy') {
        sky = '🌥️🌥️🌥️';
    } else if (selectedSky === 'rainy') {
        sky = '🌧️🌧️🌧️';
    } else if (selectedSky === 'snowy') {
        sky = '🌨️🌨️🌨️';
    }
    theSky.textContent = sky;
};

// Event Handler Functions
const kelvintoFahrenheit = (temp) => Math.floor((temp - 273.15) * 1.8 + 32);

const incTempButton = () => {
   temp++;
   tempValue.textContent = `${temp}`; 
};

const decTempButton = () => {
    temp--;
    tempValue.textContent = `${temp}`;
};

const updateHeaderCityName = () => {
    headerCityName.textContent = cityNameInput.value;
};

const resetCityName = () => {
    startUI();
};

const getTemp = () => {
    // Get city name from input field
    const cityName = cityNameInput.value;

    // Make API call to fetch location information 
    axios.get(`${BASE_URL}/location?q=${cityName}`)
        .then(locationResponse => {
            // Retrieve lat and lon from location response
            const lat = locationResponse.data[0]['lat'];
            const lon = locationResponse.data[0]['lon'];

            // Make API call to fetch weather information
            axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}`)
                .then(tempResponse => {
                    // Extract Kelvin temp and convert to Fahrenheit
                    const fahrenheitTemp = kelvintoFahrenheit(tempResponse.data['main']['temp']);
                    // Display converted temp in UI 
                    tempValue.textContent = fahrenheitTemp;
                    // Change the temp color and display landscape
                    temp = fahrenheitTemp;
                    changeTemp();
                })

                .catch(tempError => {
                    console.log('Error retrieving temperature:', tempError);
                }); 
            })
        .catch(locationError => {
            console.log('Error retrieving location:', locationError);
        });
};

const registerEvents = () => {
    increaseTemp.addEventListener('click', incTempButton);
    decreaseTemp.addEventListener('click', decTempButton);
    increaseTemp.addEventListener('click', changeTemp);
    decreaseTemp.addEventListener('click', changeTemp);
    skySelect.addEventListener('change', changeSky);
    cityNameInput.addEventListener('input', updateHeaderCityName);
    cityNameReset.addEventListener('click', resetCityName);
    currentTempButton.addEventListener('click', getTemp);
};

// Set the default UI for webpage
const startUI = () => {
    cityNameInput.value = DEFAULT_CITY;
    updateHeaderCityName();
    getTemp();
    changeSky();
}

const onLoad = () => {
    registerEvents();
    startUI();
};

onLoad();
