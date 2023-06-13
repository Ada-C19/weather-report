const state = {
    left_arrow: null,
    right_arrow: null,
    degreeCountLabel: null,
    landscape: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
<<<<<<< HEAD
    degreeCount: 70,
    textBox: null
=======
    sky:  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    degreeCount: 70,
    sky_options: null
>>>>>>> dcac1bda678f772c450789021c4a8d074c4a9a67
}

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

<<<<<<< HEAD
function updateCityName(event) {
    if (event.key === "Enter") {

        const cityNameInput = document.getElementById('textbox');
        const cityName = cityNameInput.value.trim(); 
    
        const cityElement = document.getElementById('city');
        cityElement.textContent = cityName;
    }
  }
=======
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
>>>>>>> dcac1bda678f772c450789021c4a8d074c4a9a67

const loadControls = () => {
    state.degreeCountLabel = document.getElementById('degrees')
    state.left_arrow = document.querySelector('.fa-chevron-left');
    state.right_arrow = document.querySelector('.fa-chevron-right');
<<<<<<< HEAD
    state.landscape = document.getElementById('landscape')
    state.textBox = document.getElementById('textbox')
    console.log(state)
=======
    state.landscape = document.getElementById('landscape');
    state.sky_options = document.querySelector('.select-sky');
    state.sky = document.getElementById('sky');
>>>>>>> dcac1bda678f772c450789021c4a8d074c4a9a67
}

const registerEvents = () => {
    state.left_arrow.addEventListener('click', decreaseDegree);
    state.right_arrow.addEventListener('click', increaseDegree);
<<<<<<< HEAD
    state.textBox.addEventListener('keypress',updateCityName)
=======
    state.sky_options.addEventListener('change', changeSky);
>>>>>>> dcac1bda678f772c450789021c4a8d074c4a9a67
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