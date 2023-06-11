"use strict";


const changeTextColor = function(tempValue) {
    
    tempValueElement.classList.remove("red", "orange", "green", "teal", "yellow")
    if (tempValue >= 80) {
        tempValueElement.classList.add("red");
    } else if ((69 < tempValue) && (tempValue < 80)) {
        tempValueElement.classList.add("orange");
    } else if ((59 < tempValue) && (tempValue < 70)) {
        tempValueElement.classList.add("yellow");
    } else if ((49 < tempValue) && (tempValue < 60)) {
        tempValueElement.classList.add("green");
    } else {
        tempValueElement.classList.add("teal");
    }
}

document.getElementById('increaseTempButton').addEventListener('click', increaseTemperature);
document.getElementById('decreaseTempButton').addEventListener('click', decreaseTemperature);


function increaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp + 1;
    changeTextColor(currentTemp)
}

function decreaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp - 1;
    changeTextColor(currentTemp)
}


document.getElementById('tempValue').addEventListener('click', changeTextColor);

const tempValueElement = document.getElementById('tempValue');


// CHANGE SKY FUNCTION //
const skyElementSelector = document.getElementById('skySelect');
const skyElementWithEmojis = document.getElementById('sky');


const changeSky = function(event) {
    const value = event.target.value;

    skyElementSelector.classList.remove("cloudy", "sunny", "rainy", "snowy")
    if (value === "Cloudy") {
        skyElementSelector.classList.add("cloudy");
        skyElementWithEmojis.innerText = "☁️☁️☁️☁️☁️"
    } 
    else if (value === "Sunny") {
        skyElementSelector.classList.add("sunny");
        skyElementWithEmojis.innerText = "☀️☀️☀️☀️☀️"
    } 
    else if (value === "Rainy") {
        skyElementSelector.classList.add("rainy");
        skyElementWithEmojis.innerText = "🌧️🌧️🌧️🌧️🌧️"
    } 
    else if (value === "Snowy") {
        skyElementSelector.classList.add("snowy");
        skyElementWithEmojis.innerText = "❄️❄️❄️❄️❄️"
    } 
}
document.getElementById('skySelect').addEventListener('change', changeSky);
// END OF SKY CHANGE FUNCTION //



// Changing the city name in the header to input city name

const inputName = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');
    

const updateCityName = function(event) {
    headerCityName.textContent = event.target.value 
    
    // state.city = inputName;
    // headerCityName.textContent = state.city;
};
document.getElementById('cityNameInput').addEventListener('input', updateCityName)
// END OF CHANGING CITY IN HEADER //



// RESET THE HEADER BACK TO SEATTLE //
const cityNameInput = document.getElementById('cityNameInput');
const cityNameResetBtn = document.getElementById('cityNameReset'); 

const resetCityName = function (event) {
    headerCityName.textContent = "Seattle";
};
document.getElementById('cityNameReset').addEventListener('click', resetCityName);
// END OF HEADER RESET //





// // API CALLS : //
document.getElementById('cityNameInput').addEventListener('change', changeSky);
document.getElementById('cityNameReset').addEventListener('click', changeSky);


// const LOCATION_KEY = process.env['api_key']
// const WEATHER_KEY = process.env['api_key']


// const findLatitudeAndLongitude = (cityNameInput) => {
//     let latitude, longitude;
//     axios.get('127.0.0.1:5000',
//     {
//         params: {
//             key: LOCATION_KEY,
//             q: cityNameInput,
//             format: 'json'
//         }
//     })
//     .then((response) => {
//         latitude = response.data[0].lat;
//         longitude = response.data[0].lon;
//         console.log('success in findLatitudeAndLongitude!', latitude, longitude)
//         return response.data

//     })
//     .catch((error) => {
//         console.log('error in findLatitudeAndLongitude!');
//     });
//     return {
//         seattleLat: latitude,
//         seattleLon: longitude
//     }
//     };

// const findLocation = (latitude, longitude) => {
//     axios.get('127.0.0.1:5000',
//     {
//         params: {
//             key: LOCATION_KEY,
//             format: 'json',
//             lat: latitude,
//             lon: longitude
//         }
//     })
//     .then( (response) => {
//     console.log('success in findLocation!', response.data);
//     return response.data;
//     })
//     .catch( (error) => {
//     console.log('error in findLocation!');
//     });
//     }
// const seattleCoordinates = findLatitudeAndLongitude('Seattle, Washington, USA');
    
// const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);
    
// console.log(locations);


// // END OF API CALL //


// FROM HOMEWORK
document.getElementById('cityNameInput').addEventListener('change', changeSky);
document.getElementById('cityNameReset').addEventListener('click', changeSky);
// const axios = require('axios');

const LOCATION_KEY = process.env['LOCATION_API_KEY'];
const WEATHER_KEY = process.env['WEATHER_API_KEY'];

const findLatitudeAndLongitude = (query) => {
let latitude, longitude;
axios.get('127.0.0.1:5000',
{
    params: {
    key: LOCATION_KEY,
    q: query,
    format: 'json'
    }
})
.then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);
})
.catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
});

return {
    cityLat: latitude,
    cityLon: longitude
}
}

const findTemperature = (latitude, longitude) => {
axios.get('127.0.0.1:5000',
{
    params: {
    key: 'LOCATION_KEY',
    format: 'json',
    lat: 'latitude',
    lon: 'longitude'
    }
})
.then( (response) => {
    console.log('success in findTemperature!', response.data);
    return response.data;
})
.catch( (error) => {
    console.log('error in findTemperature!');
});
}

const cityCoordinates = findLatitudeAndLongitude('cityNameInput.textContent');

const locations = findTemperature(cityCoordinates.cityLat, cityCoordinates.cityLon);

console.log(locations);

// // // making an api call
// // // .get to 127.0.0.1:5000


// FROM HW MANAGING ASYN CALLS
const axios = require('axios');

const LOCATIONIQ_KEY = process.env['api_key'];

const findLatitudeAndLongitude = (query) => {
let latitude, longitude;
axios.get('https://us1.locationiq.com/v1/search.php',
{
    params: {
    key: LOCATIONIQ_KEY,
    q: 'Seattle, Washington, USA',
    format: 'json'
    }
})
.then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);

    // make the next API call here!
    findLocation(latitude, longitude);
})
.catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
});
}

const findLocation = (latitude, longitude) => {
axios.get('https://us1.locationiq.com/v1/reverse.php',
{
    params: {
    key: LOCATIONIQ_KEY,
    format: 'json',
    lat: latitude,
    lon: longitude
    }
})
.then( (response) => {
    console.log('success in findLocation!', response.data);
})
.catch( (error) => {
    console.log('error in findLocation!');
});
}

findLatitudeAndLongitude('Seattle, Washington, USA');
// END OF HW EXAMPLE