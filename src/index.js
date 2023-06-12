

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
    } else if (temp > 60 && temp < 75) {
        landscape.src = "assets/60_degree_outfit.jpeg"
    } else {
        landscape.src = "assets/80_degree_outfit.jpeg"
    }

}

function tempColor(temp) {
    let temperature = document.getElementById('temp');
    if (temp < 60) {
        temperature.className = 'cold';
    } else if (temp > 60 && temp < 75) {
        temperature.className = 'mild';
    } else {
        temperature.className = 'hot';
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