
const API = "http://127.0.0.1:5000";
const locationURL = "/location";
const weatherURL = "/weather";


const state = {
    liveTemp : 68
};

const changeTempAndLand = () => {
    let temp = state.liveTemp;
    let color = 'yellow';
    let land = "🌾🌾_🍃_🪨_🛤_🌾🌾_🍃";
    if (temp >= 80) {
        color = 'hot';
        land = "🌵_🐍🌵🦂_🌵🌵__🐍🏜🦂";
    } else if (temp >= 70) {
        color = 'warm';
        land = "🌸🌿🌼🌱_🌷🌻🌿_🌱🌻🌷";
    } else if (temp >= 60) {
        color = 'moderate';
        land = "🌾🌾_🍃_🪨_🛤_🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'cool';
        land = "🌲⛄️🌲⛄️🍂🌲🍁🌲⛄️🍂🌲";
    } else {
        color = 'cold';
        land = "🌲⛄️🌲⛄️🍂🌲🍁🌲⛄️🍂🌲";
    }
    const temperature = document.getElementById('live_temp');
    temperature.textContent = state.liveTemp;
    temperature.className = color;
    const landscape = document.getElementById('garden_land');
    landscape.textContent = land;
};

const tempIncrease = () => {
    //temp behavior
    state.liveTemp += 1;
};

const tempDecrease = () => {
    //temp behavior
    state.liveTemp -= 1;
};

const displayCityInput = () => {
    let cityInput = document.getElementById("city_input").value;
    let cityDisplay = document.querySelector("h2");
    cityDisplay.textContent = `For the city of  ${cityInput}`;
}

const getCityInput = () => {
    let cityInput = document.getElementById("city_input").value;
    return cityInput;
}

const getCityCoord = () => {
    const cityName = document.getElementById("city_input").value;
    console.log(cityName);
    console.log("here!")
    const locationRoute = API + locationURL;
    const weatherRoute = API + weatherURL;
    // let cityCoords = {"lat": 0, "lon": 0 };
    let tempInKel = 0;
    axios
        .get(locationRoute, { params: { q : `${cityName}`, format: "json"} })
        .then((result) => {
            let coorLat = result.data[0]["lat"];
            let coorLon = result.data[0]["lon"];
            axios
                .get(weatherRoute, { params: { lat : `${coorLat}`, lon : `${coorLon}`, format: "json"} })
                .then((result) => {
                    tempInKel = result.data["main"]["temp"];
                    console.log(tempInKel);
        })
        })
}


const registerEventHandlers = () => {
    const tempIncButton = document.querySelector("#increase_button");
    tempIncButton.addEventListener('click', tempIncrease);
    tempIncButton.addEventListener('click', () =>{
        changeTempAndLand()
    });

    const tempDecButton = document.querySelector("#decrease_button");
    tempDecButton.addEventListener('click', tempDecrease);
    tempDecButton.addEventListener('click', () => {
        changeTempAndLand()
    })

    const cityDisplay = document.querySelector("#city_input");
    cityDisplay.addEventListener("input", displayCityInput);

    const searchCityButton = document.querySelector("#set_city");
    searchCityButton.addEventListener('click', getCityCoord);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


