// select the hml element the event has to occur on 
// make function to run when it occurs
//register function in event list

state = {
    temp: 50,
    city: "Atlanta",
    latitude: 0,
    longitude: 0
};

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
};
const decrementTemp = function() {
    state.temp -=1
    const tempNumContainer = document.querySelector("#currentTemp")
    tempNumContainer.textContent = `${state.temp}°`
    
};

const registerEventHandlers = () => {
    const upArrow = document.querySelector("#up_arrow");
    upArrow.addEventListener('click', incrementTemp);

    const DownArrow = document.querySelector("#down_arrow");
    DownArrow.addEventListener('click', decrementTemp);
    
    const cityInput = document.getElementById("inputCity")
    cityInput.addEventListener('input', displayCity)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

PATH = "http://127.0.0.1:5000/location"
const findLatitudeAndLongitude = () => {
    
    axios.get(PATH,
        {
            params: {
                "q": state.city
            }
        })
        .then((response) => {
            state.latitude = response.data[0].lat;
            state.longitude = response.data[0].lon;
            console.log('success', state.city, state.latitude, state.longitude);
                })
        .catch((error) => {
            console.log('error in findLatitudeAndLongitude for', state.city);
            throw error;
        })
    }

findLatitudeAndLongitude()
console.log(state.latitude, state.longitude)

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
            state.temp = response.data.main.temp
            console.log(response.data.main.temp)
            })
        .catch((error) => {
            console.log('error in findWeather for', state.city);
            throw error;
        })
    }

findWeather()