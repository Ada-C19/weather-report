const city = document.getElementById('city_name')
let inputCity = document.getElementById('city_input')

function changeCity(event) {
    if (event.key === 'Enter') {
        city.textContent = inputCity.value;
    }
}
inputCity.addEventListener('keydown', changeCity)
inputCity.addEventListener('keydown', updateWeather)



const increaseTempButton = document.getElementById('increase_temp')
const decreaseTempButton = document.getElementById('decrease_temp')


function increaseTemp() {
    const temperature = document.getElementById('temp_no');
    let current_temp = Number(temperature.textContent)

    temperature.textContent = current_temp + 1;
    tempColor(current_temp + 1);
    changeLandscape(current_temp + 1)
}

increaseTempButton.addEventListener('click', increaseTemp)

function decreaseTemp() {       
    const temperature = document.getElementById('temp_no');
    let current_temp = Number(temperature.textContent)

    temperature.textContent = current_temp - 1;
    tempColor(current_temp - 1);
    changeLandscape(current_temp + 1)
}
decreaseTempButton.addEventListener('click', decreaseTemp)

function changeLandscape(temp) {
    let landscape = document.getElementById('fashion_landscape');
    if (temp < 60) {
        landscape.src = "assets/cold_outfit.jpeg"
    } else if (temp >= 60 && temp < 70) {
        landscape.src = "assets/60_degree_outfit.jpeg"
    } else if (temp >= 70 && temp < 80) {
        landscape.src = "assets/cardigan_and_jeans.jpeg"
    } else {
        landscape.src = "assets/80_degree_outfit.jpeg"
    }

}

function tempColor(temp) {
    let temperature = document.getElementById('temp');
    if (temp <= 49) {
        temperature.className = 'freezing';
    } else if (temp > 49 && temp < 60) {
        temperature.className = 'cold';
    } else if (temp >= 60 && temp < 70) {
        temperature.className = 'chilly';
    } else if (temp >= 70 && temp < 80) {
        temperature.className = 'hot';
    } else {
        temperature.className = 'scorching';
    }
}

let skySelector = document.getElementById('sky_selector');
let skyImage = document.getElementById('pinterest-sky');

skySelector.addEventListener('change', changeSkyImage);

function changeSkyImage() {
    let selectedSky = skySelector.value;
    switch(selectedSky) {
        case 'skySunny':
            skyImage.src = 'assets/skies/sunny_sky.jpeg';
            break;
        
        case 'skyCloudy':
            skyImage.src = 'assets/skies/cloudy_sky.jpeg';
            break;

        case 'skyRainy':
            skyImage.src = 'assets/skies/rainy_sky.jpeg';
            break;

        case 'skySnowy':
            skyImage.src = 'assets/skies/snowy_sky.jpeg';
            break;

        case 'skyStarry':
            skyImage.src = 'assets/skies/starry_sky_blue.jpeg';
            break;
        
        default:
            skyImage.src= 'assets/skies/starry_purple_sky.jpeg';
}
}

async function getCoordinates(city) {
    try{
        const response = await axios.get('http://127.0.0.1:5000/location', {
            params: {"q": city}
    });

    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    return {latitude, longitude};

    }catch (error){
        console.error(error);
    }
}

async function getWeather(lat, lon) {
    try{
        const response = await axios.get('http://127.0.0.1:5000/weather', {
            params: {"lat": lat, "lon": lon}
        });

        const temp = Math.round(1.8 * (response.data.main.temp - 273) + 32)

        return temp;

    }catch (error){
        console.error(error);
    }
}

async function updateWeather() {
    const city = inputCity.value;
    const { latitude, longitude } = await getCoordinates(city);
    const temperature = await getWeather(latitude, longitude);
    document.getElementById('temp_no').textContent = temperature;
    tempColor(temperature)
    changeLandscape(temperature)

}

function resetCity(){
    const cityName = document.getElementById('city_name')
    cityName.textContent = 'Seattle';
    inputCity.value = 'Seattle';
    updateWeather()

}

const weather_button = document.getElementById('weather-button')
weather_button.addEventListener('click', updateWeather);

const reset_button = document.getElementById('reset-button')
reset_button.addEventListener('click', resetCity)




