let tempValueInt = 65;
const tempValue = document.getElementById("tempValue");
const landscapeEmoji = document.getElementById("landscapeEmoji");

const checkTemp = function(tempValue) {
    if (tempValueInt < 49) {
        tempValue.className = "blue";
        landscapeEmoji.textContent = "🏔 ❄ 🏂 ☃ ⛄ 😓 🌨 🏔";
    } else if (tempValueInt >= 50 && tempValueInt <= 59) {
        tempValue.className = "green";
        landscapeEmoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (tempValueInt >= 60 && tempValueInt <= 69) {
        tempValue.className = "yellow";
        landscapeEmoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempValueInt >= 70 && tempValueInt <= 79) {
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
                    return result.data['main']['temp'];
                    // return temp;
                });
        });
};

goButton.addEventListener("click", () => {
    cityHolder = document.getElementById("siteSearch").value;
    headerLocation.textContent = cityHolder;
    tempValue.innerHTML = callAPI(cityHolder);
    console.log(tempValue);
});

