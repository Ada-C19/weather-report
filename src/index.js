`"use strict";`
const state = {
    increaseTempButton: null,
    tempNumberLabel: null,
    tempNumber: 0,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById('increaseTempButton');

};

const registerEventHandler = () => {
    state.increaseTempButton.addEventListener('click', (handleIncreaseTempButtonClicked) => {
        ++state.tempNumber;
        state.tempNumberLabel.textContent = state.tempNumber;
    });
}

const onLoaded = () => {
    loadControls();
    registerEventHandler();
}

onLoaded();