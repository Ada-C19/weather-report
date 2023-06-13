const state = {
    left_arrow: null,
    right_arrow: null,
    degreeCountLabel: null,
    landscape: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    degreeCount: 70,
    textBox: null,
    sky:  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    degreeCount: 70,
    sky_options: null,
    temp: 0,
    tempDisplay: null
}

const findCityLocation = (cityName) => {
    axios.get('http://localhost:5000/location', {
        params: {
<<<<<<< HEAD
            q: cityName
        }
    })
    .then((resp) => {
        axios.get('http://localhost:5000/weather', {
            params: {
                lat: resp.data[0].lat,
                lon: resp.data[0].lon
            }
        }).then(response => {
            console.log('response',response)

        })
    })
    .catch((error) => {
        console.log(error);
    })
}

// findCityLocation()
=======
            q: 'Atlanta'
        },
    })
    .then((resp) => {
        console.log(resp.data)
    )}
}
findCityLocationn()
>>>>>>> f5425e6fe1c52a3a91fb8d96be7e76274a11fab3
// city, name, latitude, longitude, temp (state - global variables)

const refreshUI = () => {
    state.degreeCountLabel.textContent = state.degreeCount;
}

const change_color = () => {
    if (state.degreeCountLabel.textContent >= 80) 
    {   
        state.degreeCountLabel.style.color = 'red';
        change_landscape("🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂")
    } else if (state.degreeCountLabel.textContent >= 70) {
        state.degreeCountLabel.style.color = 'orange';
        change_landscape("🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷")
    } else if (state.degreeCountLabel.textContent >= 60) 
    {
        state.degreeCountLabel.style.color = 'gold';
        change_landscape("🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃")
    } else if (state.degreeCountLabel.textContent >= 50) {
        state.degreeCountLabel.style.color = 'green';
        change_landscape("🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲")
    } else {
        state.degreeCountLabel.style.color = 'teal';
    }
}

const change_landscape = (garden) => {
    state.landscape.textContent = garden;
}

let decreaseDegree = (event) => {
    --state.degreeCount;
    change_color();
    refreshUI();
}

let increaseDegree = (event) => {
    ++state.degreeCount;
    change_color();
    refreshUI();
}

function updateCityName(event) {
    if (event.key === "Enter") {

        const cityNameInput = document.getElementById('textbox');
        const cityName = cityNameInput.value.trim(); 
    
        const cityElement = document.getElementById('city');
        cityElement.textContent = cityName;
        findCityLocation(cityName)
    }
  }
let changeSky = (event) => {
    console.log(event.target.value);
    if (event.target.value == 'sunny') {
        state.sky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️'
    } else if (event.target.value == 'cloudy') {
        state.sky.textContent = '☁️☁️ ☁️ ☁️ ☁️ 🌤 ☁️ ☁️☁️'
    } else if ( event.target.value == 'rainy') {
        state.sky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧'
    } else {
        state.sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
    }
}
 // Updatecity name - takes location and updates city 
    // city and state object 
const loadControls = () => {
    state.degreeCountLabel = document.getElementById('degrees')
    state.left_arrow = document.querySelector('.fa-chevron-left');
    state.right_arrow = document.querySelector('.fa-chevron-right');
    state.landscape = document.getElementById('landscape')
    state.textBox = document.getElementById('textbox')
    console.log(state)
    state.landscape = document.getElementById('landscape');
    state.sky_options = document.querySelector('.select-sky');
    state.sky = document.getElementById('sky');
}

const registerEvents = () => {
    state.left_arrow.addEventListener('click', decreaseDegree);
    state.right_arrow.addEventListener('click', increaseDegree);
    state.textBox.addEventListener('keypress',updateCityName)
    state.sky_options.addEventListener('change', changeSky);
}

const onLoaded = () => {
    // steps to carry out when the page has loaded
    loadControls();
    registerEvents();
    refreshUI();
};

  // we would usually run the onLoaded function in
  // response to the document finishing loading, but in
  // code sandbox, the page has already loaded by the
  // time our script is added to the page.
  // document.addEventListener("DOMContentLoaded", onLoaded);
onLoaded();