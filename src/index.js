"use strict";
import axios, { isCancel, AxiosError } from 'axios';

const addCity = () => {
    document.getElementById('city-name').innerText = "Real-time weather in lovely " + document.getElementById('search-text-box').value
}

const registerCitySearchEvent = () => {
    const citySearchButton = document.querySelector("#city-search");
    citySearchButton.addEventListener("click", addCity);
};

document.addEventListener("DOMContentLoaded", registerCitySearchEvent);

axios
    .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json')
    .then((response) => {
        
    })
    .catch((error) => {
        
    });


