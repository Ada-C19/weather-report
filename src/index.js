"use strict";

const state = {
    city: 'Seattle',
    temp: 0,
    latitude: 0,
    longitude: 0,
};

const getCoordinates = (city) => {
    axios.get('http://127.0.0.1:5000/location', {
        params: {
            q: state.city,
            format: 'json'
        },
    })
    .then((response) => {
        state.lat = response.data[0].lat;
        state.lon = response.data[0].lon;
        getRealtimeTemp();
    })
    .catch((error) => {
        console.log(error)
        console.log('Oh haiil no, this does not exist.');
        console.log(error.response);
    });
};

const tempChange = () => {
    let temp = state.temp;
    let landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    let color = 'red';
    if (temp > 80) {
        color = 'red';
        landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp > 70) {
        color = 'orange';
        landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp > 60) {
        color = 'green';
        landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (temp > 50) {
        color = 'green';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        color = 'teal';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } 

    const changeLandscape = document.getElementById('groundFloor');
    changeLandscape.textContent  = landscape;

    const temperature = document.getElementById('tempValue');
    // temperature.className = color;
    temperature.style.color = color;
    temperature.textContent = String(state.temp);
};

const upTemp = (event) => {
    state.temp += 1;
    const tempCount = document.querySelector('#tempValue');
    // tempCount.textContent = state.temp; 
    // Here we can call our function from above instead
    tempChange();
};

const downTemp = (event) => {
    state.temp -= 1;
    const tempCount = document.querySelector('#tempValue');
    // tempCount.textContent = state.temp;
    tempChange();
};

const updateSky = () => {
    const inputSky = document.getElementById('skySelection').value;
    const skyContainer = document.getElementById('topFloor');
    let topFloor = '';

    if (inputSky === 'Cloudy') {
        topFloor = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (inputSky === 'Sunny') {
        topFloor = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
    } else if (inputSky === 'Rainy') {
        topFloor = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (inputSky === 'Snowy') {
        topFloor = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        
    }

    skyContainer.textContent = topFloor;

const bodyElement = document.body;
if (inputSky === 'Cloudy') {
    bodyElement.style.backgroundImage = 'url(https://media0.giphy.com/media/l0HlQdk8kI9KIOjBe/giphy.gif?cid=ecf05e47tdvaqul8z4avun6incmh2v34qjuorye20130a0vy&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
} else if (inputSky === 'Sunny') {
    bodyElement.style.backgroundImage = 'url(https://media4.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif?cid=ecf05e475z9rbrmtvyoou4ffri87qsowg8c2y2quecifglu7&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
} else if (inputSky === 'Rainy') {
    bodyElement.style.backgroundImage = 'url(https://media3.giphy.com/media/vu6iWBm9OJGQE/giphy.gif?cid=ecf05e476e1lqf8yvjrh6fvhqa4fxhl3e6pft0xxag0f5x4o&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
} else if (inputSky === 'Snowy') {
    bodyElement.style.backgroundImage = 'url(https://media2.giphy.com/media/retvoxFEjdK40dNg0n/giphy.gif?cid=ecf05e47jelf40lmq0yqvc25xi6dzp569i0iosv8x61h5wm6&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
} else {
    bodyElement.style.backgroundImage = 'url(https://media4.giphy.com/media/3oEduEcLBYfkoEi2TS/giphy.gif?cid=ecf05e47yhcnmd9q0u17z1qmfr6oc94lexikkbc9ofcs6vyg&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
}   
};


const changeCityName = () => {
    const inputName = document.getElementById('nameInput').value;
    const headerName = document.getElementById('cityHeader');
    state.city = inputName;
    headerName.textContent = state.city;
};

const resetCityBtn = () => {
    const cityName = document.getElementById('nameInput');
    cityName.value = 'Seattle';
    changeCityName();
}



const registerEventHandlers = (event) => {
    tempChange();

    const upTempButton = document.querySelector('#increaseTempControl');
    upTempButton.addEventListener('click', upTemp);

    const downTempButton = document.querySelector('#decreaseTempControl');
    downTempButton.addEventListener('click', downTemp);

    updateSky();
    const skySelection = document.getElementById('skySelection');
    skySelection.addEventListener('change', updateSky);

    const dropdown = document.getElementById("skySelection");
    dropdown.addEventListener("change", updateSky);

    changeCityName();
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('input', changeCityName);

    const resetBtn = document.getElementById('nameReset');
    resetBtn.addEventListener('click', resetCityBtn);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);