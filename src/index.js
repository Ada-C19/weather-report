"use strict";
import 'regenerator-runtime/runtime';
import axios from 'axios';

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
.get('', {
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

const getWeather = () => {
axios
    .get('', {
    params: {
        lat: state.lat,
        lon: state.long,
},
    })
    .then((response) => {
    const weather = response.data;
    state.temp = Math.round(convertKtoF(weather.main.temp));
    formatTempAndLandscape();
    })
    .catch((error) => {
    console.log('Error getting the weather:', error);
    });
};

