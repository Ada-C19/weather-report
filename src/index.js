const state = {
    temp: 72,
    city: "Seattle",
    lat: 47.608013,
    long: -122.335167,
};


const convertKtoF = (temp) => {
    return (temp - 273.15) * (9 / 5) + 32;
};

const getWeather = () => {
    let lat, long;
    axios.get('http://127.0.0.1:5500/weather',
        {
            params: {
                q: state.city,
            }
        })
        .then((response) => {
            const weather = response.data;
            state.temp = Math.round(convertKtoF(weather.main.temp));
            changeTempAndLandscape();
        })
        .catch((error) => {
            console.log('error in getting the weather!');

        });
};

const findLatitudeAndLongitude = () => {
    let lat, long;
    axios.get('http://127.0.0.1:5500/location',
        {
            params: {
                q: state.city,
            }
        })
        .then((response) => {
            console.log(response.data);
            state.lat = response.data[0].lat;
            state.long = response.data[0].lon;
            getWeather();
        })
        .catch((error) => {
            console.log('error in finding latitude and longitude!');

        });
};



const changeTempAndLandscape = () => {
    let temp = state.temp;
    let color = 'red';
    let landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜';
    if (temp > 80) {
        color = 'red';
        landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜';
    } else if (temp > 70) {
        color = 'orange';
        landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻';
    } else if (temp > 60) {
        color = 'yellow';
        landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾';
    } else if (temp > 50) {
        color = 'yellow-green';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️';
    } else {
        color = 'blue';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️';
    }

    const newLandscape = document.getElementById('landscape');
    newLandscape.textContent = landscape;
    const temperature = document.getElementById('defaultTemp');
    temperature.className = color;
    temperature.textContent = String(state.temp);
};
const increaseTemp = () => {
    state.temp += 1;
    changeTempAndLandscape();
};
const decreaseTemp = () => {
    state.temp -= 1;
    changeTempAndLandscape();

};

const registerEventHandlers = () => {
    changeTempAndLandscape();
    const increaseButton = document.getElementById('increaseTempButton');
    increaseButton.addEventListener("click", increaseTemp);
    const decreaseButton = document.getElementById('decreaseTempButton');
    decreaseButton.addEventListener("click", decreaseTemp);
    const currentTempButton = document.getElementById('realTimeTempButton');
    currentTempButton.addEventListener('click', findLatitudeAndLongitude);

    resetSky();
    const skySelect = document.getElementById('skySelect');
    skySelect.addEventListener('change', updateSky);
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);

