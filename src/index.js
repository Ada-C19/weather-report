const state = {
    left_arrow: null,
    right_arrow: null,
    degreeCountLabel: null,
    degreeCount: 70
}

const refreshUI = () => {
    state.degreeCountLabel.textContent = state.degreeCount;
}

const change_color = () => {
    if (state.degreeCountLabel.textContent >= 80) 
    {
        state.degreeCountLabel.style.color = 'red';
    } else if (state.degreeCountLabel.textContent >= 70) {
        state.degreeCountLabel.style.color = 'orange';
    } else if (state.degreeCountLabel.textContent >= 60) 
    {
        state.degreeCountLabel.style.color = 'yellow';
    } else if (state.degreeCountLabel.textContent >= 50) {
        state.degreeCountLabel.style.color = 'green';
        console.log('green')
    } else if (state.degreeCountLabel.textContent <= 49) {
        state.degreeCountLabel.style.color = 'teal';
        console.log('teal')
    }
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

const temperature_color = (event) => {
    if (state.degreeCount <= 49) {
        state.degreeCount.style.color = teal;
    }
}

const loadControls = () => {
    state.degreeCountLabel = document.getElementById('degrees')
    state.left_arrow = document.querySelector('.fa-chevron-left');
    state.right_arrow = document.querySelector('.fa-chevron-right');
}

const registerEvents = () => {
    state.left_arrow.addEventListener('click', decreaseDegree);
    state.right_arrow.addEventListener('click', increaseDegree);
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