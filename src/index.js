// `"use strict";`
const state = {
    increaseTempButton: null,
    tempNumberContainer: null,
    tempNumber: 1,
};

// const handleIncreaseTempButtonClicked = (event) => {
    
// };
const loadControls = () => {
    state.increaseTempButton = document.getElementById('increaseTempButton');
    state.tempNumber = parseInt(document.getElementById('tempNumberContainer').innerText);
    state.tempNumberContainer = document.getElementById('tempNumberContainer');
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = ++state.tempNumber;
    });
};

const onLoaded = () => {
    loadControls();
    registerEventHandlers();
}

onLoaded();