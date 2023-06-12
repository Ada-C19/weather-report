
function resetSky() {
    const inputSky = document.getElementById('skySelect', this).value;
    const skyContainer = document.getElementById('sky-emotes');
    let sky = '';
    let skyColor = '';
    if (inputSky === 'Charcoal') {
        sky = '🌞🔥💥🌞💥🔥🌞🔥💥🌞💥🔥'
        skyColor = 'charcoal'
    } else if (inputSky === 'Cloudy') {
        sky = '🌤⛅🌥🌥⛅🌤⛅🌥🌥⛅🌤🌥'
        skyColor = 'cloudy'
    } else if (inputSky === 'Sunny') {
        sky = '☁☼☁☼☁☼☁☼☁☼☁☼☁'
        skyColor = 'sunny'
    } else if (inputSky === 'Rain') {
        sky = '☔🌦🌧⚡🌧🌦☔🌦🌧⚡🌦🌧'
        skyColor = 'rainy';
    } else if (inputSky === 'Snow') {
        sky = '🌥⛄🌨❄⛄🌨❄⛄🌥'
        skyColor = 'snowy'
    } else if (inputSky === 'Frosted') {
        sky = '☠☠☠☠☠☠☠☠☠☠☠☠☠☠'
        skyColor = 'frosted'
    }
skyContainer.textContent = sky;
const gardenContent = document.getElementById('garden_content');
gardenContent.classList = `garden ${skyColor}`;
};