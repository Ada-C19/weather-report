let tempValueInt = 65;
const tempValue = document.getElementById("tempValue");
const landscapeEmoji = document.getElementById("landscapeEmoji");

const checkTemp = function(tempValue) {
    const temp = Number(tempValue.textContent);
    if (temp < 49) {
        tempValue.className = "blue";
        landscapeEmoji.textContent = "🏔 ❄ 🏂 ☃ ⛄ 😓 🌨 🏔";
    } else if (temp >= 50 && temp <= 59) {
        tempValue.className = "green";
        landscapeEmoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (temp >= 60 && temp <= 69) {
        tempValue.className = "yellow";
        landscapeEmoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 70 && temp <= 79) {
        tempValue.className = "orange";
        landscapeEmoji.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else {
        tempValue.className = "red";
        landscapeEmoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
};

const increaseButton = document.getElementById("topButton");
increaseButton.addEventListener("click", () => {
    tempValueInt++;
    tempValue.innerHTML = tempValueInt;
    checkTemp(tempValue);
});

const decreaseButton = document.getElementById("bottomButton");
decreaseButton.addEventListener("click", () => {
    tempValueInt--;
    tempValue.innerHTML = tempValueInt;
    checkTemp(tempValue);
});

const headerLocation = document.getElementById("cityLocation");
const goButton = document.getElementById("citySearch");
let cityHolder = '';

const locationAPI = "http://127.0.0.1:5000/location";
const weatherAPI = "http://127.0.0.1:5000/weather";

const callAPI = (location) => {
    axios
        .get(locationAPI, {params: {q: location, format: 'json'}})
        .then((result) => {
            const lon = result.data[0].lon;
            const lat = result.data[0].lat;
            axios
                .get(weatherAPI, {params: {lat: lat, lon: lon, format: 'json'}})
                .then((result) => {
                    tempValue.innerHTML = Math.floor(1.8 * (result.data['main']['temp'] - 273.15) + 32);
                    checkTemp(tempValue);
                });
        });
};

goButton.addEventListener("click", () => {
    cityHolder = document.getElementById("siteSearch").value;
    headerLocation.textContent = cityHolder;
    callAPI(cityHolder);
});

const skyEmoji = document.getElementById("skyEmoji");
const weather = document.getElementById("weatherChoice");
const skyOption = {
    Sunny: "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    Cloudy: "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
    Rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
    Snowy: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
};

weather.addEventListener("change", (event) => {
    skyEmoji.textContent = skyOption[`${event.target.value}`];
});

const resetPage = document.getElementById("reset");
resetPage.addEventListener("click", () => {
    tempValue.innerHTML = 65;
    headerLocation.innerHTML = 'Seattle';
    checkTemp(tempValue);
});
