
const API = "http://127.0.0.1:5000";
const locationURL = "/location";
const weatherURL = "/weather";

//look more into State 
const state = {
    city: 'Seattle',
    liveTemp : 68,
    lon: -122.3300624,
    lat: 47.6038321
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
    state.liveTemp += 1;
};

const tempDecrease = () => {
    state.liveTemp -= 1;
};
changeTempAndLand();

const displayCityInput = () => {
    let cityInput = document.getElementById("city_input").value;
    let cityDisplay = document.querySelector("h2");
    cityDisplay.textContent = `For the city of  ${cityInput}`;
}

const getCityInput = () => {
    let cityInput = document.getElementById("city_input").value;
    return cityInput;
}
const tempConverter = (kelvin) => {
    return (kelvin - 273.15) * 1.8 + 32;

}
const getCityLiveWeather = () => {
    const cityName = document.getElementById("city_input").value;
    const locationRoute = API + locationURL;
    const weatherRoute = API + weatherURL;
    let tempInKel = 0;
    axios
        .get(locationRoute, { params: { q : `${cityName}`, format: "json"} })
        .then((result) => {
            let coorLat = result.data[0]["lat"];
            let coorLon = result.data[0]["lon"];
            axios
                .get(weatherRoute, { params: { lat : `${coorLat}`, lon : `${coorLon}`, format: "json", units: "imperial"} })
                .then((result) => {
                    tempInKel = result.data["main"]["temp"];
                    let resultFahr = Math.round(tempConverter(tempInKel));
                    let cityTemp = document.getElementById("live_temp");
                    cityTemp.innerHTML = resultFahr;
                    state.liveTemp = resultFahr;
                    changeTempAndLand();

                    
        })
        })
}

const resetCity = () => {
    let cityDisplay = document.querySelector("h2");
    cityDisplay.textContent = `For the city of  ${state.city}`;

    let cityInput = document.getElementById("city_input");
    cityInput.value = state.city;
    //getCityLiveWeather();
    state.liveTemp = 68;
    changeTempAndLand();
    //REFACTOR to have API calls in deparate functions. Call that function with Seattle coords. 


}
// const clearSearchBar = () => {

// }

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
    searchCityButton.addEventListener('click', getCityLiveWeather);

    const  resetButton = document.getElementById("reset_city");
    resetButton.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


