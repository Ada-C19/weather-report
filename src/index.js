// const so 72 is not hard coded, used in increaseTemp & decreaseTemp functions
const tempValue = document.getElementById('tempValue');


// assign a constant state for temp
const state = {
    tempCount : tempValue.innerText, 
    city: "Seattle",
    lat: "",
    lon: "",
}

// assign variable for landscape and sky image icons
const landscapeEmojis = {
    "1" : "🌞🌵___🐍🦂__🌵🌞",
    "2" : "🌸🌿__🌷🌻🌷__🌿🌸",
    "3" : "🦚__🍄🌳🪷🌳🍄__🦚",
    "4" : "__🍂🍂🍁🍁🍁🍂🍂__",
    "5" : "⛄️🌲______🌲⛄️",
};

const skyEmojis = {
    "0" : "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    "1": "🌞🌞🌞🌤🌞🌞🌞",
    "2" : "🌧🌈🌧💧🌈🌈💧🌧🌈🌧",
    "3" : "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
};

// add 1 degree to temp
// had to transform str to int to +1 properly, otherwise it was 721
// innerText is a key on the element span with id "tempValue"
// go to dev tools console and click the up and down arrows, see the console!
const increaseTemperature = () => {
    state.tempCount = Number(state.tempCount) + 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// subtract 1 degree to temp
// had to transform str to int to -1 properly
// innerText is a key on the element span with id "tempValue"
const decreaseTemperature = () => {
    state.tempCount = Number(state.tempCount) - 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// function to set ranges for temperature and change colors
// of the temperature number & print emojis for landscape
// const tempRange = () => {
//     if (state.tempCount <= 49){
//         const temp = document.getElementById("temperature-id")
//         temp.className="teal";
//         const landscape = document.getElementById("landscape")
//         landscape.textContent = landscapeEmojis["5"];
//     }
//     else if (state.tempCount <= 59 && state.tempCount >= 50){
//         const temp = document.getElementById("temperature-id")
//         temp.className="green";
//         const landscape = document.getElementById("landscape")
//         landscape.textContent = landscapeEmojis["4"];
//     }
//     else if (state.tempCount <= 69 && state.tempCount >= 60){
//         const temp = document.getElementById("temperature-id")
//         temp.className="yellow";
//         const landscape = document.getElementById("landscape")
//         landscape.textContent = landscapeEmojis["3"];
//     }
//     else if (state.tempCount >=70 && state.tempCount <= 79){
//         const temp = document.getElementById("temperature-id")
//         temp.className="orange";
//         const landscape = document.getElementById("landscape")
//         landscape.textContent = landscapeEmojis["2"];
//     }
//     else if (state.tempCount >= 80){
//         const temp = document.getElementById("temperature-id")
//         temp.className ="red";
//         const landscape = document.getElementById("landscape")
//         landscape.textContent = landscapeEmojis["1"];
//     }
// }


// Ariel's changes
// declared const temp and const landscape outside of if checks 
// reduces repetition, makes it more dry, improves readability 

// class reassignment does not work
// need a differnet value, need to switch className to classList, classList has an API to add, use, replace
// classList has the ability to run functions on it
// classList is JUST a string and we cannot do those things ^
// check this out: https://stackoverflow.com/questions/69361432/difference-between-classname-and-classlist#:~:text=Using%20%22classList%22%2C%20you%20can,wipe%20out%20all%20of%20them).
const tempRange = () => {

    const temp = document.getElementById("tempValue")
    const landscape = document.getElementById("landscape")

    console.log( {temp} );

    if (state.tempCount <= 49){
        
        temp.className="teal";
        landscape.textContent = landscapeEmojis["5"];
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        temp.className="green";
        landscape.textContent = landscapeEmojis["4"];
    }
    else if (state.tempCount <= 69 && state.tempCount >= 60){
        temp.className="yellow";
        landscape.textContent = landscapeEmojis["3"];
    }
    else if (state.tempCount >=70 && state.tempCount <= 79){
        temp.className="orange";
        landscape.textContent = landscapeEmojis["2"];
    }
    else if (state.tempCount >= 80){
        temp.className ="red";
        landscape.textContent = landscapeEmojis["1"];
    }
}


// updates sky according to drop down menu selection
const updateSky = () => {
    const inputSky = document.getElementById('skySelect').value;
    const skyContainer = document.getElementById('sky');
    let sky = '';
    let skyColor = '';
    if (inputSky === 'Cloudy') {
        sky = skyEmojis[0];
        skyColor = 'cloudy';
    } else if (inputSky === 'Sunny') {
        sky = skyEmojis[1];
        skyColor = 'sunny';
    } else if (inputSky === 'Rainy') {
        sky = skyEmojis[2];
        skyColor = 'rainy';
    } else if (inputSky === 'Snowy') {
        sky = skyEmojis[3];
        skyColor = 'snowy';
    }
    skyContainer.textContent = sky;
};
// function to get reset city name
const resetCityName = () => {
    const header = document.getElementById('headerCityName');
    const citySearch = document.getElementById('cityNameInput')
    state.city = "Seattle";
    header.textContent = state.city;
    citySearch.value = state.city;
    getLocationandTemp();
}

//function to change header city name based on search input
const updateCity = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const header = document.getElementById("headerCityName");
    state.city = inputName;
    header.textContent = state.city;
}

// function for calling APIs
// const searchLocation = () => {
//     const axios = require('axios');
//     const key = process.env['key'];

//     axios
//     .get('http://127.0.0.1:5000/location', {
//         params: {
//             q: state.cityName,
//         },
//     })
//     .then((response) => {
//     console.log('success!' + JSON.stringify(response.data[0]));
//     state.late = response.data[0].lat;
//     state.lon = response.data[0].lon;
//     searchTemperature();
//         })
//     .catch((error) => {
//         console.log('searchLocation error: ' +
//         error.response);
//     });
// };

// const searchTemperature = () => {
//     axios
//     .get('http://localhost:5000/weather', {
//         params: {
//         lat: state.lat,
//         lon: state.lon,
//         },
//     })
//     .then((response) => {
//         console.log('success!' + JSON.stringify(response.data.current.temp));
//         state.temp = convertKtoC(response.data.current.temp);
//         changeLandscapeTemp();
//     })
//     .catch((error) => {
//         console.log('searchTemperature error: ' + error.response);
//     });
// };

const registerEventHandlers = () => {

// assigns upTempArrow to that specific button. Document keyword grabs everything in index.html
// then you run func on document called querySelector. Then you are grabbing the id of increaseTempControl
// Do not need # in front of decreaseTempControl bc .getElementById does it automatically
const downTempArrow = document.getElementById("decreaseTempControl");
downTempArrow.addEventListener("click", decreaseTemperature);

const upTempArrow = document.getElementById("increaseTempControl");
upTempArrow.addEventListener("click", increaseTemperature);

const skySelector = document.getElementById("skySelect");
skySelector.addEventListener("change",updateSky);

updateCity();
const updateCityName = document.getElementById("cityNameInput");
updateCityName.addEventListener('input', updateCity)
};

// previously didn't exist, calls function here to register events
registerEventHandlers();



// registercityName and change location functions
// inputElement.addEventListener("input", function () {
//     const cityName = inputElement.tempValue;
//     const cityNameInput = document.querySelector("h3");
//     cityName.textContent = "For the lovely city of " + cityName;

// const changeLocation = document.querySelector('cityNameInput');
// changeLocation.addEventListener('click', searchLocation);
// });