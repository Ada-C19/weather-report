
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


