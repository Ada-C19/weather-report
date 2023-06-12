'use strict';

// const cst = () => {
export let tempIncreaseButton = null;
export let tempDecreaseButton = null;
export let getRealTimeTemp = null;
export let tempValue = null;
export let gardenContent = null;
export let temperature = 79;
export let headerCity = null;
export let cityNameUserInput = null;
export let defaultCityName = 'Princeton';
export let skyTemplate = null;
export let skyOption = null;
export let skyInput = null;
export let resetCityName = null;
export let realTimeTemperature = null;
//     return tempDecreaseButton, tempIncreaseButton, getRealTimeTemp, tempValue, gardenContent, temperature, headerCity, cityNameUserInput, defaultCityName, skyTemplate, skyOption, skyInput, resetCityName, realTimeTemperature;
// }


export const sky = {
    Sunny: `☀️☀️☀️☀️☀️☀️☀️☀️`,
    Cloudy: `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`,
    Rainy: `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`,
    Snowy: `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`,
};

export const garden = {
    summer: '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂',
    spring: '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
    fall: '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
    winter: '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
};