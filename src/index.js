// actions for search/reset button for city input
document.addEventListener("DOMContentLoaded", function () {
    // ------------- wave 2: increase and decrease temp ------------------
    // increase temperature 
    const increaseTemp = document.querySelector("#increase-temp");
    const decreaseTemp = document.querySelector("#decrease-temp");
    const displayTemp = document.querySelector("#display-temp");
    let temperature = 65;

    // landscape
    const landscape = document.querySelector("#landscape");
    let lands = "🌾🌾   🍃 🪨    🛤  🌾🌾🌾  🍃";

    const updateTemp = () =>  {
        
        displayTemp.textContent = temperature;
        landscape.textContent = lands;

        updateTempColor();
        updateLandscape();
    }

    const updateTempColor = () => {
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

    const updateLandscape = () => {
        if (temperature >= 80) {
        lands = "🌵   🐍 🦂 🌵🌵  🐍 🏜 🦂";
        } else if (temperature >= 70 && temperature <= 79) {
        lands = "🌸🌿🌼  🌷🌻🌿 ☘️🌱 🌻🌷";
        } else if (temperature >= 60 && temperature <= 69) {
        lands = "🌾🌾   🍃 🪨 🛤 🌾🌾🌾 🍃";
        } else if (temperature <= 59) {
        lands = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        } else {
        lands = "💀💀💀💀💀💀💀💀💀💀💀💀💀";
        }
    }

    const increaseTemperature = () => {
        temperature++;
        updateTemp();
    }

    const decreaseTemperature = () => {
        temperature--;
        updateTemp();
    }  

    increaseTemp.addEventListener("click", increaseTemperature);
    decreaseTemp.addEventListener("click", decreaseTemperature);

    updateTemp();


    
    // ------------- wave 3 naming the city ------------------
    const cityName = document.getElementById("city-name");
    const cityInput = document.getElementById("city-input");
    
    // Realtime Text City info will come from input value of cityInput
    const updateCityName = () => {
        cityName.textContent = cityInput.value;
    }
    
    // event listener to listen for input
    cityInput.addEventListener("input", updateCityName);
    
    // ------------- wave 5 selecting sky ------------------
    const selectSky = document.querySelector("#sky-dropdown");
    const result = document.querySelector("#sky");
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
    
    // -------- wave 6 reset button event listener ---------
    const resetButton = document.querySelector("#reset-button"); 
    const defaultCity = "Seattle"
    cityName.textContent = defaultCity

    resetButton.addEventListener("click", function () {
        cityInput.value = defaultCity; 
        cityName.textContent = defaultCity;
    } )
    
    // search button 
    const searchButton = document.querySelector("#search-button");

    // attempt to add event listener for search button 
    searchButton.addEventListener('keypress', checkIfEnter);

    const checkIfEnter = (event) => {
        if (event.keyCode === 13) {
            getResults(searchButton.value);
        }
    }

});

// -------- wave 4: calling api  ---------
const LOCATIONIQ_KEY = process.env['api_key'];

const findLatitudeAndLongitude = (query) => {
let latitude, longitude;
axios.get('https://us1.locationiq.com/v1/search.php',
{
    params: {
    key: LOCATIONIQ_KEY,
    q: 'Seattle, Washington, USA',
    format: 'json'
    }
})
.then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);
})
.catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
});

return {
    seattleLat: latitude,
    seattleLon: longitude
}
}

const findLocation = (latitude, longitude) => {
axios.get('https://us1.locationiq.com/v1/reverse.php',
{
    params: {
    key: LOCATIONIQ_KEY,
    format: 'json',
    lat: latitude,
    lon: longitude
    }
})
.then( (response) => {
    console.log('success in findLocation!', response.data);
    return response.data;
})
.catch( (error) => {
    console.log('error in findLocation!');
});
}

const seattleCoordinates = findLatitudeAndLongitude('Seattle, Washington, USA');

const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);

console.log(locations);



//     // SKY DROPDOWN ATTEMPT 2
//     //https://alvarotrigo.com/blog/drop-down-menu-javascript/
//     // get all dropdown from document
//     document.querySelectorAll('.dropdown-button').forEach(dropDownFunc);

// // drop down open and close
//     function dropDownFunc(dropDown) {
//     console.log(dropDown.classList.contains('click-dropdown'));

//     if(dropDown.classList.contains('click-dropdown')=== true){
//         dropDown.addEventListener('click', function (e) {
//         e.preventDefault();      

//     if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
//         // Close the clicked dropdown
//         this.parentElement.classList.remove('dropdown-open');
//         this.nextElementSibling.classList.remove('dropdown-active');
//     } else {
//         // Close the opened dropdown
//         closeDropdown();
        
//         // add the open and active class(Opening the DropDown)
//         this.parentElement.classList.add('dropdown-open');
//         this.nextElementSibling.classList.add('dropdown-active');
//     }
//     });
//     }

//     //hand
//     if(dropDown.classList.contains('hover-dropdown') === true){
//     dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;
//     function dropdownHover(e){
//         if(e.type == 'mouseover'){
//         // Close the opened dropdown
//         closeDropdown();

//         // add the open and active class(Opening the DropDown)
//         this.parentElement.classList.add('dropdown-open');
//         this.nextElementSibling.classList.add('dropdown-active');
//         }
//     }
//     }
//     };

//     //listen to the doc click
//     window.addEventListener('click', function(e) {

//     //close the menu if click happen outside of menu
//     if (e.target.closest('.dropdown') === null) {
//     //close the opend dropdown
//     closeDropdown();
//     }
//     });

//     // Close the opened Dropdowns
//     function closeDropdown() { 
//     // console.log('closed');

//     // remove the open and active class from other opened Dropdown (Closing the opened DropDown)
//     document.querySelectorAll('.dropdown').forEach(function (container) { 
//         container.classList.remove('dropdown-open');
//     });

//     document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
//         menu.classList.remove('dropdown-active');
//     });
//     }

//     // close the dropdown on mouse out from the dropdown list
//     document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
//     // close the dropdown after user leave the list
//     dropDownList.onmouseleave = closeDropdown;
//     });