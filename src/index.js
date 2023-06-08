import 'regenerator-runtime/runtime';
import axios from "axios";

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
        .get('https://ada-weather-report-proxy-server.onrender.com/location', {
            params: {
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

const landscape = {
    summer: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    spring: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    autumn: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    winter: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

const formatTempAndGarden = (temperature) => {
    let temperature = state.temp;
    let landscape = landscape.summer;
    let color = red;
    
    if (temperature <= 49) {
        landscape = landscape.winter;
        color = 'teal';
    } else if (temperature <= 59) {
        landscape = landscape.winter;
        color = 'green';
    } else if (temperature <= 69) {
        landscape = landscape.autumn;
        color = 'yellow'
    } else if (temperature <= 79) {
        landscape = landscape.spring;
        color = 'orange';
    } else {
        landscape = landscape.summer;
        color = 'red';
    }
}


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

const changeTempUp = () => {
    state.temp += 1;
}

const changeTempDown = () => {
    state.temp -=1;
}

const registerEventHandlers = () => {
    const realTimeTemp = document.getElementById('real-time-temp');
    realTimeTemp.addEventListener('click', findLatAndLong);

    const changeTempUp = document.getElementById("temp-button-up");
    changeTempUp.addEventListener("click", changeTempUp);

    const changeTempDown = document.getElementById("temp-button-down");
    changeTempDown.addEventListener("click", changeTempDown);
};
    document.addEventListener("DOMContentLoaded", registerEventHandlers);