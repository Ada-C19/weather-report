const state = {
    lat: 33.7488,
    lon: 84.3877,
    city: "Seattle"
};
document.addEventListener("DOMContentLoaded", function () {
    // ------------- wave 2: increase and decrease temp ------------------
    const increaseTemp = document.querySelector("#increase-temp");
    const decreaseTemp = document.querySelector("#decrease-temp");
    const displayTemp = document.querySelector("#display-temp");
    const resetButton = document.querySelector("#reset-button"); 
    const searchButton = document.querySelector("#search-button");
    const cityName = document.getElementById("city-name");
    const cityInput = document.getElementById("city-input");
    const selectSky = document.querySelector("#sky-dropdown");
    const result = document.querySelector("#sky");
    const landscape = document.querySelector("#landscape");

    
    // ----- changes temp(converted to fahr) -> landscape -> text color ------
    let temperature = 65;
    let lands = "🌾🌾   🍃 🪨    🛤  🌾🌾🌾  🍃";

    const convert = () => {
        temperature = (temperature - 273.15) * 9/5 + 32
    }
    const updateTemp = (temperature) =>  {
        displayTemp.textContent = temperature;
        updateTempColor(temperature);
        updateLandscape(temperature);
        landscape.textContent = lands;
    }
    const updateTempColor = (temperature) => {
        if (temperature >= 80) {
        displayTemp.style.color = "red";
        } else if (temperature >= 70 && temperature <= 79) {
        displayTemp.style.color = "orange";
        } else if (temperature >= 60 && temperature <= 69) {
        displayTemp.style.color = "yellow";
        } else if (temperature >= 50 && temperature <= 59) {
        displayTemp.style.color = "green";
        } else {
        displayTemp.style.color = "teal";
        }
    }
    const updateLandscape = (temperature) => {
        if (temperature >= 80) {
        lands = "🌵   🐍 🦂 🌵🌵  🐍 🏜 🦂";
        } else if (temperature >= 70 && temperature <= 79) {
        lands = "🌸🌿🌼  🌷🌻🌿 ☘️🌱 🌻🌷";
        } else if (temperature >= 60 && temperature <= 69) {
        lands = "🌾🌾   🍃 🪨 🛤 🌾🌾🌾 🍃";
        } else if (temperature <= 59) {
        lands = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        }
    }
    const increaseTemperature = () => {
        temperature++;
        updateTemp(temperature);
    }
    const decreaseTemperature = () => {
        temperature--;
        updateTemp(temperature);
    }  

    increaseTemp.addEventListener("click", increaseTemperature);
    decreaseTemp.addEventListener("click", decreaseTemperature);
    updateTemp(temperature);
    
    // ------------- wave 3 naming the city ------------------
    // Realtime Text City info will come from input value of cityInput
    const updateCityName = () => {
        cityName.textContent = cityInput.value;
    }
    
    // event listener to listen for input
    cityInput.addEventListener("input", updateCityName);
    
    // ------------- wave 5 selecting sky ------------------
    result.textContent = "🌦 🌈  ☁️☁️☁️  ❄️ 🌨 ☁️"
    selectSky.addEventListener("change", (event) => {
        let newSky = event.target.value
        if (newSky == 'sunny') {
            result.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        } else if (newSky == 'cloudy'){
            result.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
        } else if (newSky == 'rainy'){
            result.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
        } else if (newSky == 'snowy'){
            result.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
        } else {
            result.textContent = "🧨 🧨 🧨 🧨 🧨 🧨"
        }
    })
    
    // -------- wave 6    reset button event listener ---------
    cityName.textContent = state.city
    resetButton.addEventListener("click", function () {
        cityInput.value = state.city; 
        cityName.textContent = state.city;
        updateTemp("65")
    } )

    // -------- wave 4    calls API  ---------
    const findLatitudeAndLongitude = async () => {
        // let latitude, longitude;
        await axios.get('http://127.0.0.1:5000/location',
        {
            params: {
                q:cityInput.value,
                format: 'json'
            }
        })
        .then( (response) => {
            state.lat= response.data[0].lat;
            state.lon= response.data[0].lon;
        })
        .catch( (error) => {
            console.log('error in findLatitudeAndLongitude!');
        });
        return {
            cityLat: state.lat,
            cityLon: state.lon
        }
    }

    const findTemp = async (latitude, longitude) => {
        await axios.get('http://127.0.0.1:5000/weather',
        {
            params: {
                format: 'json',
                lat: latitude,
                lon: longitude
            }
        })
        .then( (response) => {
            temperature = response.data.main.temp;
            return temperature;
        })
        .catch( (error) => {
            console.log('error in findLocation!');
        });
    }

    const findWeather = async () => {
        const cityCoordinates = await findLatitudeAndLongitude();
        await findTemp(cityCoordinates.cityLat, cityCoordinates.cityLon);
    }

// -------------------    search button    ---------------------
    searchButton.addEventListener("click", async (event) => {
        await findWeather();
        convert()
        temperature = Math.round(temperature)
        updateTemp(temperature)

    });

});
