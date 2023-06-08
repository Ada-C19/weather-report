const state = {
	tempValueCount: 0,
	tempValue: null,
	increaseTempControl: null,
	decreaseTempControl: null,
	skyContainer: null,
	landscapeContainer: null,
};

const increaseTemp = (event) => {
	++state.tempValueCount;
	state.tempValue.textContent = state.tempValueCount;
	handleTempColors();
};
const decreaseTemp = (event) => {
	--state.tempValueCount;
	state.tempValue.textContent = state.tempValueCount;
	handleTempColors();
};

const handleTempColors = () => {
	if (state.tempValueCount >= 80) {
		state.tempValue.style.color = "red";
	} else if (state.tempValueCount >= 70 && state.tempValueCount <= 79) {
		state.tempValue.style.color = "orange";
	} else if (state.tempValueCount >= 60 && state.tempValueCount <= 69) {
		state.tempValue.style.color = "yellow";
	} else if (state.tempValueCount >= 50 && state.tempValueCount <= 59) {
		state.tempValue.style.color = "green";
	} else if (state.tempValueCount <= 49) {
		state.tempValue.style.color = "teal";
	}
};

const registerEvents = () => {
	state.increaseTempControl.addEventListener("click", increaseTemp);
	state.decreaseTempControl.addEventListener("click", decreaseTemp);
};

const loadControls = () => {
	state.tempValue = document.getElementById("tempValue");
	state.increaseTempControl = document.getElementById("increaseTempControl");
	state.decreaseTempControl = document.getElementById("decreaseTempControl");
	state.skyContainer = document.getElementById("sky");
	state.landscapeContainer = document.getElementById("landscape");
};

const onLoaded = () => {
	loadControls();
	registerEvents();
	handleTempColors();
};

onLoaded();
