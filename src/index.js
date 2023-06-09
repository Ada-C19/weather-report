// require('dotenv').config();
// console.log(process.env.LOCATION_IQ_TOKEN);

const state = {
    city: 'Seattle',
    lat: 47.6038321,
    long: -122.3300624,
    temp: 72,
};

const convertKtoF = (temp) => {
    return (temp - 273.15) * (9 / 5) + 32;
};


const findLatAndLong = () => {
    //let lat, long;
    axios
        .get('https://eu1.locationiq.com/v1/search.php', {
            params: {
            "key": process.env.LOCATION_IQ_TOKEN,
            q: state.city,
            },
        })
        .then((response) => {
            console.log(response.data);
            state.lat = response.data[0].lat;
            state.long = response.data[0].lon;
            getWeather();
        })
        .catch((error) => {
            console.log('Error finding the latitude and longitude:', error.response);
        });
};


const getWeather = () => {
    axios
        .get('https://ada-weather-report-proxy-server.onrender.com/weather', {
            params: {
            lat: state.lat,
            lon: state.long,
            },
        })
        .then((response) => {
            const weather = response.data;
            state.temp = Math.round(convertKtoF(weather.main.temp));
            formatTempAndGarden();
        })
        .catch((error) => {
            console.log('Error getting the weather:', error);
        });
};

const updateCityName = () => {
    const inputName = document.getElementById('cityNameTypeBox').value;
    const headerCityName = document.getElementById('city');
    state.city = inputName;
    headerCityName.textContent = state.city;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById('cityNameTypeBox');
    cityNameInput.value = 'Seattle';
    updateCityName();
};

const landscapeType = {
    summer: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    spring: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    autumn: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    winter: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

const formatTempAndGarden = () => {

    let temp = state.temp;
    let landscape = landscapeType.summer;
    let color = 'red';

    if (temp <= 49) {
        landscape = landscapeType.winter;
        color = 'teal';
    } else if (temp <= 59) {
        landscape = landscapeType.winter;
        color = 'green';
    } else if (temp <= 69) {
        landscape = landscapeType.autumn;
        color = 'yellow'
    } else if (temp <= 79) {
        landscape = landscapeType.spring;
        color = 'orange';
    } else {
        landscape = landscapeType.summer;
        color = 'red';
    }

    const newLandscape = document.getElementById('landscape');
    newLandscape.textContent = landscape;
    const temperature = document.getElementById('real-time-temp');
    temperature.className = color;
    temperature.textContent = String(state.temp);
    console.log("garden poked");
};


const handleTempUp = () => {
    state.temp += 1;
    formatTempAndGarden();
}

const handleTempDown = () => {
    state.temp -= 1;
    formatTempAndGarden();
}

const registerEventHandlers = () => {
    formatTempAndGarden();

    const realTimeTemp = document.getElementById('real-time-temp');
    realTimeTemp.addEventListener('click', findLatAndLong);

    const changeTempUp = document.getElementById("temp-button-up");
    changeTempUp.addEventListener("click", handleTempUp);

    const changeTempDown = document.getElementById("temp-button-down");
    changeTempDown.addEventListener("click", handleTempDown);
    console.log("handler initiated");

    updateCityName();
    const cityNameInput = document.getElementById('cityNameTypeBox');
    cityNameInput.addEventListener('input', updateCityName);

    const cityNameResetBtn = document.getElementById('cityNameReset');
    cityNameResetBtn.addEventListener('click', resetCityName);
};
    document.addEventListener("DOMContentLoaded", registerEventHandlers);