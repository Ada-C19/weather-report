// select the hml element the event has to occur on 
// make function to run when it occurs
//register function in event list

state = {
    temp: 50,
    city: "Atlanta",
    latitude: 0,
    longitude: 0
};

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
            let tempK = response.data.main.temp
            state.temp = Math.round(((tempK-273.15)*1.8) + 32)
            console.log(response.data.main.temp)
            const tempNumContainer = document.querySelector("#currentTemp")

            tempNumContainer.textContent = `${state.temp}°`;
            })
        .catch((error) => {
            console.log('error in findWeather for', state.city);
            throw error;
        })
    }

WeatherPATH = "http://127.0.0.1:5000/location"
const findLatitudeAndLongitude = () => {
    
    axios.get(WeatherPATH,
        {
            params: {
                "q": state.city
            },
        })
        .then((response) => {
            state.latitude = response.data[0].lat;
            state.longitude = response.data[0].lon;
            console.log('success', state.city, state.latitude, state.longitude);
            findWeather();   
         })
    
        .catch((error) => {
            console.log('error in findLatitudeAndLongitude for', state.city);
            throw error;
        })
    }




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

const getRealTimeTemp = function (){
    findLatitudeAndLongitude()
}






// findLatitudeAndLongitude()
// console.log(state.latitude, state.longitude)



const registerEventHandlers = () => {
    const upArrow = document.querySelector("#up_arrow");
    upArrow.addEventListener('click', incrementTemp);

    const DownArrow = document.querySelector("#down_arrow");
    DownArrow.addEventListener('click', decrementTemp);
    
    displayCity()
    const cityInput = document.getElementById("inputCity")
    cityInput.addEventListener('input', displayCity)

    const calculateTemp = document.querySelector("#getTemp");
    calculateTemp.addEventListener('click', findLatitudeAndLongitude)
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);
