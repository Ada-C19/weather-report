
const state = {
    temperature: 1,
    upButton: null,
    downButton: null,
    tempDisplay: 10,
    city: null,
    headerCity: null,
    weatherGarden: null,
    skyDropDown: null,
    sky: null,
    defaultCity: null,
    realTimeTemp : null
};

const loadControls = () => {
    // retreive references to all of the html elements
    // we will need to access
    state.upButton = document.getElementById("up")
    state.downButton = document.getElementById("down")
    state.tempDisplay = document.getElementById("temperature-now")
    state.temperature = parseInt(document.getElementById("temperature-now").innerText)
    state.city = document.getElementById("city")
    state.headerCity = document.getElementById("header-city")
    state.weatherGarden = document.getElementById("weather-garden") 
    state.skyDropDown = document.getElementById("sky-drop-down")
    state.sky = document.getElementById("sky")
    state.defaultCity = document.getElementById("defaultCity")
    state.realTimeTemp = document.getElementById("real-time-temp")
};

const registerEvents = () => {
  // reguster handlers for the button click
    
    state.upButton.addEventListener("click", (event) => {
        state.tempDisplay.innerText = ++state.temperature
        changeTemp();
    });
    state.downButton.addEventListener("click", (event) => {
        state.tempDisplay.innerText = --state.temperature
        changeTemp();
    });
    state.skyDropDown.addEventListener("change", (e) => {
        changeSky()
        console.log(state.skyDropDown.value)
    });
    state.defaultCity.addEventListener("click", (e) =>{
        state.headerCity.textContent = "Atlanta"
        state.city.value = "Atlanta"
        accessLocation();
        changeTemp();
    })
    state.realTimeTemp.addEventListener("click", (e) =>{
        accessLocation();
        changeTemp();
    })
    state.city.addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            e.preventDefault();  // Prevent form submission
            console.log(state.city.value)
            accessLocation();
            let cityValue = state.city.value;
            state.headerCity.textContent = cityValue;
            
            // Clear the input field after updating the header
            //state.city.value = "";
        }
    })
};

const changeSky = () => {
    if (state.skyDropDown.value === "Sunny") {
        state.sky.textContent =  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    }else if(state.skyDropDown.value === "Cloudy"){
        state.sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }else if(state.skyDropDown.value === "Rainey"){
        state.sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    }else if(state.skyDropDown.value === "Snowy"){
        state.sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

const accessLocation = () => {
    axios.get(`http://127.0.0.1:5000/location?q=${state.city.value}`).then(resp => {
    let lat = resp.data[0]["lat"]
    let lon = resp.data[0]["lon"]
    accessWeather(lat, lon);
    })
};

const accessWeather = (lat, lon) => {
    console.log(lat, lon)
    axios.get(`http://127.0.0.1:5000/weather?lat=${lat}&lon=${lon}&units=imperial`).then(resp => {
            console.log(resp.data["main"]["temp"])
            state.temperature = kelvinToFarenheit(resp.data["main"]["temp"])
            state.tempDisplay.innerText = state.temperature
            changeTemp();
            console.log(state.temperature)
        })
};
const kelvinToFarenheit = (temp) =>{
    return Math.round((temp-273.15)*(9/5)+32);
}
const changeTemp = () => {
    if (state.temperature >= 80) {
        state.tempDisplay.style.color = "red";
        state.weatherGarden.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temperature >= 70) {
        state.tempDisplay.style.color = "orange";
        state.weatherGarden.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperature >= 60) {
        state.tempDisplay.style.color = "yellow";
        state.weatherGarden.textContent = 	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.temperature >= 50) {
        state.tempDisplay.style.color = "green";
        state.weatherGarden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempDisplay.style.color = "teal";
        state.weatherGarden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};


const onLoaded = () => {
    // steps to carry out when the page is loaded
    loadControls();
    registerEvents();
    changeTemp();
};

onLoaded();