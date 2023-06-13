"use strict";
// import axios, { isCancel, AxiosError } from 'axios';

const state = {
    citySearchButton: null,
};

const handleSearchButtonClicked = () => {
    const cityHeader = document.getElementById('city-header');
    const searchInput = document.getElementById('search-input').value;
    cityHeader.textContent = `Real-time weather in lovely ${searchInput}`;
};

const registerEvents = () => {
    state.citySearchButton.addEventListener("click", handleSearchButtonClicked);
};

const loadControls = () => {
    state.citySearchButton = document.getElementById("city-search-btn");
};

const onLoad = () => {
    loadControls();
    registerEvents();
};

onLoad();

// axios
//     .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json')
//     .then((response) => {

//     })
//     .catch((error) => {

//     });


