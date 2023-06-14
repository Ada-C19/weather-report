const state = {
    lat: 33.7488,
    lon: 84.3877,
    defaultTemp: 65
};
document.addEventListener("DOMContentLoaded", function () {
    // ------------- wave 2: increase and decrease temp ------------------
    // increase temperature 
    const increaseTemp = document.querySelector("#increase-temp");
    const decreaseTemp = document.querySelector("#decrease-temp");
    const displayTemp = document.querySelector("#display-temp");
    const resetButton = document.querySelector("#reset-button"); 
    const searchButton = document.querySelector("#search-button");
    const cityName = document.getElementById("city-name");
    const cityInput = document.getElementById("city-input");
    const selectSky = document.querySelector("#sky-dropdown");
    const result = document.querySelector("#sky");
    const landscape = document.querySelector("#landscape");

    const defaultCity = "Seattle"
    let temperature = 65;
    let lands = "🌾🌾   🍃 🪨    🛤  🌾🌾🌾  🍃";

    const convert = () => {
        temperature = (temperature - 273.15) * 9/5 + 32
    }
    const updateTemp = (temperature) =>  {
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
        updateTemp(temperature);
    }
    const decreaseTemperature = () => {
        temperature--;
        updateTemp(temperature);
    }  

    increaseTemp.addEventListener("click", increaseTemperature);
    decreaseTemp.addEventListener("click", decreaseTemperature);
    updateTemp(temperature);
    
    // ------------- wave 3 naming the city ------------------
    
    // Realtime Text City info will come from input value of cityInput
    const updateCityName = () => {
        cityName.textContent = cityInput.value;
    }
    
    // event listener to listen for input
    cityInput.addEventListener("input", updateCityName);
    
    // ------------- wave 5 selecting sky ------------------
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
    cityName.textContent = defaultCity
    resetButton.addEventListener("click", function () {
        cityInput.value = defaultCity; 
        cityName.textContent = defaultCity;
        updateTemp(state.defaultTemp)
        console.log("reset temp: ", temperature)

    } )
    
    // search button 


    const findLatitudeAndLongitude = async () => {
        // let latitude, longitude;
        await axios.get('http://127.0.0.1:5000/location',
        {
            params: {
                q:cityInput.value,
                format: 'json'
            }
        })
        .then( (response) => {
            state.lat= response.data[0].lat;
            state.lon= response.data[0].lon;
            console.log('success in findLatitudeAndLongitude!', state);
        })
        .catch( (error) => {
            console.log('error in findLatitudeAndLongitude!');
        });

        return {
            cityLat: state.lat,
            cityLon: state.lon
        }
    }

    const findTemp = async (latitude, longitude) => {
        await axios.get('http://127.0.0.1:5000/weather',
        {
            params: {
                format: 'json',
                lat: latitude,
                lon: longitude
            }
        })
        .then( (response) => {
            console.log('success in findLocation!', response.data);
            temperature = response.data.main.temp;
            console.log("temperature inside findTemp: ", temperature)
            return temperature;
        })
        .catch( (error) => {
            console.log('error in findLocation!');
        });
    }

    const findWeather = async () => {
        const cityCoordinates = await findLatitudeAndLongitude();
        await findTemp(cityCoordinates.cityLat, cityCoordinates.cityLon);
        console.log("temperature returned from findWeather: ", temperature)
    }

    // attempt to add event listener for search button 
    searchButton.addEventListener("click", async (event) => {
        await findWeather();
        convert()
        temperature = parseFloat(temperature).toFixed(2)
        updateTemp(temperature)

});

});
// -------- wave 4: calling api  ---------
// //     // SKY DROPDOWN ATTEMPT 2
// //     //https://alvarotrigo.com/blog/drop-down-menu-javascript/
// //     // get all dropdown from document
// //     document.querySelectorAll('.dropdown-button').forEach(dropDownFunc);
// // // drop down open and close
// //     function dropDownFunc(dropDown) {
// //     console.log(dropDown.classList.contains('click-dropdown'));
// //     if(dropDown.classList.contains('click-dropdown')=== true){
// //         dropDown.addEventListener('click', function (e) {
// //         e.preventDefault();      
// //     if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
// //         // Close the clicked dropdown
// //         this.parentElement.classList.remove('dropdown-open');
// //         this.nextElementSibling.classList.remove('dropdown-active');
// //     } else {
// //         // Close the opened dropdown
// //         closeDropdown();
    
// //         // add the open and active class(Opening the DropDown)
// //         this.parentElement.classList.add('dropdown-open');
// //         this.nextElementSibling.classList.add('dropdown-active');
// //     }
// //     });
// //     }
// //     //hand
// //     if(dropDown.classList.contains('hover-dropdown') === true){
// //     dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;
// //     function dropdownHover(e){
// //         if(e.type == 'mouseover'){
// //         // Close the opened dropdown
// //         closeDropdown();
// //         // add the open and active class(Opening the DropDown)
// //         this.parentElement.classList.add('dropdown-open');
// //         this.nextElementSibling.classList.add('dropdown-active');
// //         }
// //     }
// //     }
// //     };
// //     //listen to the doc click
// //     window.addEventListener('click', function(e) {
// //     //close the menu if click happen outside of menu
// //     if (e.target.closest('.dropdown') === null) {
// //     //close the opend dropdown
// //     closeDropdown();
// //     }
// //     });
// //     // Close the opened Dropdowns
// //     function closeDropdown() { 
// //     // console.log('closed');
// //     // remove the open and active class from other opened Dropdown (Closing the opened DropDown)
// //     document.querySelectorAll('.dropdown').forEach(function (container) { 
// //         container.classList.remove('dropdown-open');
// //     });
// //     document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
// //         menu.classList.remove('dropdown-active');
// //     });
// //     }
// //     // close the dropdown on mouse out from the dropdown list
// //     document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
// //     // close the dropdown after user leave the list
// //     dropDownList.onmouseleave = closeDropdown;
// //     });