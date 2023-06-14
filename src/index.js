state = {
    temp: 50,
    city: "Atlanta",
    latitude: 0,
    longitude: 0
};

PATH = "http://127.0.0.1:5000/weather"
const findWeather = () => {
    
    axios.get(PATH,
        {
            params: {
                "lat": state.latitude,
                "lon": state.longitude
            }
        })
        .then((response) => {
            let tempK = response.data.main.temp
            state.temp = Math.round(((tempK-273.15)*1.8) + 32)
            console.log(response.data.main.temp)
            const tempNumContainer = document.querySelector("#currentTemp")
            tempNumContainer.textContent = `${state.temp}°`;
            colorChanging();
            changeGround();
        })
        .catch((error) => {
            console.log('error in findWeather for', state.city);
            throw error;
        })
    }

WeatherPATH = "http://127.0.0.1:5000/location"
const findLatitudeAndLongitude = () => {
    
    axios.get(WeatherPATH,
        {
            params: {
                "q": state.city
            },
        })
        .then((response) => {
            state.latitude = response.data[0].lat;
            state.longitude = response.data[0].lon;
            console.log('success', state.city, state.latitude, state.longitude);
            findWeather();
            colorChanging();   
            changeGround();
         })
        .catch((error) => {
            console.log('error in findLatitudeAndLongitude for', state.city);
            throw error;
        })
    }


const changeGround = function () {
    if (state.temp <= 39) {
        document.querySelector("#currentTemp")
        const tempGroundContainer = document.querySelector("#groundChange")
        tempGroundContainer.textContent = `❄️🌲❄️☃️❄️🏂❄️🌲❄️`
    }

    else if (state.temp >= 40 && state.temp <= 59) {
        document.querySelector("#currentTemp")
        const tempGroundContainer = document.querySelector("#groundChange")
        tempGroundContainer.textContent = `🌬️🍂🦃🌾🍂🌰🐿️🌾🍂`
    }

    else if (state.temp >= 60 && state.temp <= 69){
        document.querySelector("#currentTemp")
        const tempGroundContainer = document.querySelector("#groundChange")
        tempGroundContainer.textContent = `🌱🐾🌱🌷🌱🐝🌱🍃🌱`

    }
    else if (state.temp >= 70 && state.temp <= 89){
        document.querySelector("#currentTemp")
        const tempGroundContainer = document.querySelector("#groundChange")
        tempGroundContainer.textContent = `🌺🏖️🌴🌺🧉🐠🌺🦋🍔`

    }
    else if (state.temp >= 90){
        document.querySelector("#currentTemp")
        const tempGroundContainer = document.querySelector("#groundChange")
        tempGroundContainer.textContent = `🔥😈💦🔥🌭🥵❤️‍🔥🧑🏼‍🚒🦂`
    }
}

const colorChanging = function () {
    if (state.temp <= 39) {
        document.querySelector("#currentTemp").className = 'purple'
        console.log(document.querySelector("#currentTemp").className)
    }

    else if (state.temp >= 40 && state.temp <= 59) {
        document.querySelector("#currentTemp").className = 'green'
        console.log(document.querySelector("#currentTemp").className)

    }

    else if (state.temp >= 60 && state.temp <= 69){
        document.querySelector("#currentTemp").className = 'blue'
        console.log(document.querySelector("#currentTemp").className)

    }
    else if (state.temp >= 70 && state.temp <= 89){
        document.querySelector("#currentTemp").className = 'orange'
        console.log(document.querySelector("#currentTemp").className)

    }
    else if (state.temp >= 90){
        document.querySelector("#currentTemp").className = 'red'
        console.log(document.querySelector("#currentTemp").className)

    }
}

const displayCity = function(){
    const inputNow = document.querySelector("input").value
    console.log(inputNow)
    state.city = inputNow
    const tempCityContainer = document.querySelector('#city')
    tempCityContainer.textContent = `For the lovely city of ${state.city}`
}

const incrementTemp = function() {
    state.temp +=1;
    const tempNumContainer = document.querySelector("#currentTemp")
    tempNumContainer.textContent = `${state.temp}°`;
    colorChanging();
    changeGround();
};

const decrementTemp = function() {
    state.temp -=1
    const tempNumContainer = document.querySelector("#currentTemp")
    tempNumContainer.textContent = `${state.temp}°`;
    colorChanging();
    changeGround();
};

const getRealTimeTemp = function (){
    findLatitudeAndLongitude();
    colorChanging();
    changeGround();
}

const resetCityName = function () {
    state.city = "Atlanta"
    const resetNowContainer = document.querySelector("#city")
    console.log(resetNowContainer)
    resetNowContainer.textContent = `For the lovely city of ${state.city}`
    colorChanging();
}

const newSKySelect = function () {
    const skyOption = document.querySelector(".sky_selecting").value
    const newSkyContainer = document.querySelector("#skyChange")
    newSkyContainer.textContent = skyOption
}

const registerEventHandlers = () => {
    const upArrow = document.querySelector("#up_arrow");
    upArrow.addEventListener('click', incrementTemp);

    const DownArrow = document.querySelector("#down_arrow");
    DownArrow.addEventListener('click', decrementTemp);
    
    const cityInput = document.getElementById("inputCity")
    cityInput.addEventListener('input', displayCity)

    const calculateTemp = document.querySelector("#getTemp");
    calculateTemp.addEventListener('click', findLatitudeAndLongitude)

    const resetNowButton = document.querySelector("#reset");
    resetNowButton.addEventListener('click', resetCityName)

    const newSkyDropDown = document
    newSkyDropDown.addEventListener("change", newSKySelect)

    // const colorChangeEffect = document.querySelector("currentTemp")
    // colorChangeEffect.addEventListener("click", colorChangeEffect)   
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);