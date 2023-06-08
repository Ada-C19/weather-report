// constants

//ask in office hours abt this
const increaseTemp = document.getElementById('increaseTempControl');
const decreaseTemp = document.getElementById('decreaseTempControl');
const tempValue = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');


// Wave 2
//changes color + landscape
const changeTemp = (temp = 60) => {
    let landscapeEmojis = '';
    if (temp >= 80) {
        tempValue.style.color = 'red';
        landscapeEmojis = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp< 80 && temp >= 70) {
        tempValue.style.color = 'orange';
        landscapeEmojis = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp < 70 && temp >= 60) {
        tempValue.style.color = 'yellow';
        landscapeEmojis = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (temp < 60 && temp >= 50) {
        tempValue.style.color = 'green';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        tempValue.style.color = 'teal';
        landscapeEmojis = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = landscapeEmojis;
};

// Function to handle temp increase
const incTempButton = () => {
    temp++;
    tempValue.textContent = `${temp}`;
};

// Function to handle temp decrease
const decTempButton = () => {
    temp--;
    tempValue.textContent = `${temp}`;
};

// Register events for buttons
const registerEvents = () => {
    increaseTemp.addEventListener('click', incTempButton);
    decreaseTemp.addEventListener('click', decTempButton);
    increaseTemp.addEventListener('click', changeTemp);
    decreaseTemp.addEventListener('click', changeTemp);
    
};

// On page load
const onLoad = () => {
    registerEvents();
    
};
onLoad();

// --- Wave 3 --- 

const cityNameInput = document.getElementById('cityNameInput');
const cityNameReset = document.getElementById('cityNameReset'); 
const headerCityName = document.getElementById('headerCityName');

cityNameInput.addEventListener('input', () => {
    headerCityName.textContent = cityNameInput.value;
});

cityNameReset.addEventListener('click', () => {
    cityNameInput.value = headerCityName.textContent = ''; 
}); 



// --- Wave 4 --- 

const BASE_URL = 'http://127.0.0.1:5000'

// Get button element for retrieving temp
const currentTempButton = document.getElementById('currentTempButton');

// Define function to convert temp from Kelvin to Fahrenheit
const kelvintoFahrenheit = (temp) => Math.floor((temp - 273.15) * 1.8 + 32); 

// Event listener for button click
currentTempButton.addEventListener('click', () => {
    // Get city name from input field
    const cityName = cityNameInput.value;

    // Make API call to fetch location information 
    axios.get(`${BASE_URL}/location?q=${cityName}`)
        .then(locationResponse => {
            // Retrieve lat and lon from location response
            const lat = locationResponse.data[0]['lat'];
            const lon = locationResponse.data[0]['lon'];

            // Make API call to fetch weather information
            axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}`)
                .then(tempResponse => {
                    // Retreive temp from weather response
                    const temp = tempResponse.data['main']['temp'];
                    // Convert temp from Kelvin to Fahrenheit
                    const fahrenheitTemp = kelvintoFahrenheit(temp);
                    // Display converted temp in UI 
                    tempValue.textContent = fahrenheitTemp;
                    // Change the temp color and display landscape
                    changeTemp(fahrenheitTemp);
                })

                .catch(tempError => {
                    console.log('Error retrieving temperature:', tempError);
                }); 
            })
        .catch(locationError => {
            console.log('Error retrieving location:', locationError);
        });

        }); 
    
    
