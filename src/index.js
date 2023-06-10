const state = {
    temp:69,
    city: 'Seattle',
    lat: 47.4810022,
    lon: -122.459696,
};

const updateTempLandscape = () => {
    const tempElement = document.querySelector("#temp");
    const landscapeElement = document.querySelector("#landscape")
    tempElement.textContent = `${state.temp}`;
    if (tempElement.textContent >= 80) {
        tempElement.style.color = 'red';
        landscapeElement.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (tempElement.textContent >= 70) {
        tempElement.style.color = 'orange';
        landscapeElement.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (tempElement.textContent >= 60) {
        tempElement.style.color = 'yellow';
        landscapeElement.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'
    } else if (tempElement.textContent >= 50) {
        tempElement.style.color = 'green';
        landscapeElement.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        tempElement.style.color = 'teal';
        landscapeElement.textContent = '🌲🌲⛄️🌲⛄️⛄️🌲⛄️🌲🌲⛄️⛄️🌲';
    }
}


const upTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp += 1;
    updateTempLandscape();
}


const downTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp -= 1;
    updateTempLandscape();
}


const nameInput = document.querySelector("#citynameinput")
const currentName = document.querySelector("#cityname")

const changeCity = () => {
    currentName.textContent = nameInput.value;
    state.city = nameInput.value;
}


const resetCity = () => {
    currentName.textContent = "Seattle";
    nameInput.value = "";
}


const changeSky = (event) => {
    const currentSky = document.getElementById('changeSky').value;
    const skyContainer = document.getElementById('sky');
    const skyElement = document.querySelector("#whole_garden");
    if (currentSky === 'Sunny') {
        skyContainer.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
        skyElement.style.backgroundColor = '#f7f3a0';
    } else if (currentSky === 'Cloudy') {
        skyContainer.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
        skyElement.style.backgroundColor = '#adadb8';
    } else if (currentSky === 'Rainy') {
        skyContainer.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
        skyElement.style.backgroundColor = '#5f5f63';
    } else if (currentSky === 'Snowy') {
        skyContainer.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        skyElement.style.backgroundColor = '#699bab';
    }
}


const findLocation = () => {
    axios.get('http://127.0.0.1:5000/location', {params: {q: state.city,},})
        .then((response) => {
            console.log(response.data);
            state.lat = response.data[0].lat;
            state.lon = response.data[0].lon;
            findLocalWeather();
        })
        .catch((error) => {
            console.log('Error finding location:', error.response);
        });
    };


const findLocalWeather = () => {
    axios.get('http://127.0.0.1:5000/weather', {
        params: {
            lat: state.lat,
            lon: state.lon,
        },
    })
    .then((response) => {
        state.temp = Math.round((response.data.main.temp - 273.15) * 1.8 + 32);
        updateTempLandscape();
    })
    .catch((error) => {
        console.log('Error finding weather:', error);
    });
};


const registerEventHandlers = () => {
    // findLocalWeather();
    const realtimeTempButton = document.getElementById('realTimeTemp');
    realtimeTempButton.addEventListener('click', findLocation);


    // upTemp();
    const increaseTemp = document.querySelector("#upTempControl")
    increaseTemp.addEventListener("click",upTemp);

    // downTemp();
    const decreaseTemp = document.querySelector("#downTempControl");
    decreaseTemp.addEventListener("click",downTemp);

    // changeCity();
    const enterCityName = document.querySelector("#enter");
    enterCityName.addEventListener("click",changeCity);

    // resetCity();
    const resetCityName = document.querySelector("#reset");
    resetCityName.addEventListener("click",resetCity);

    // changeSky();
    const selectSky = document.getElementById('changeSky');
    selectSky.addEventListener("change", changeSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);