const state = {
    temperature: 1,
    upButton: null,
    downButton: null,
    tempDisplay: 10,
    city: null,
    headerCity: null
    // tempColor: null
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
    // state.tempColor = changeTempColor
};

const registerEvents = () => {
  // reguster handlers for the button click
    
    state.upButton.addEventListener("click", (event) => {
        state.tempDisplay.innerText = ++state.temperature
        changeTempColor();
    });
    state.downButton.addEventListener("click", (event) => {
        state.tempDisplay.innerText = --state.temperature
        changeTempColor();
    });

    state.city.addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            e.preventDefault();  // Prevent form submission

            let cityValue = state.city.value;
            state.headerCity.textContent = cityValue;
            
            // Clear the input field after updating the header
            state.city.value = "";
        }
    })
};

const changeTempColor = () => {
    if (state.temperature >= 80) {
        state.tempDisplay.style.color = "red";
    } else if (state.temperature >= 70) {
        state.tempDisplay.style.color = "orange";
    } else if (state.temperature >= 60) {
        state.tempDisplay.style.color = "yellow";
    } else if (state.temperature >= 50) {
        state.tempDisplay.style.color = "green";
    } else {
        state.tempDisplay.style.color = "teal";
    }
};


const onLoaded = () => {
    // steps to carry out when the page is loaded
    loadControls();
    registerEvents();
    changeTempColor();
};

onLoaded();


// document.getElementById("up").addEventListener("click", change_temp_displayed)

// const change_temp_displayed = function() {
//     const temperature = document.getElementById("temperature-now");
//     temperature ++;
//     temperature.innerText = 
// };

// // const change_temp_displayed = () {
// //     const temperature = document.getElementById("temperature-now")
// // };