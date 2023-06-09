const state = {
    left_arrow: null,
    right_arrow: null,
    degreeCountLabel: null,
    degreeCount: 70
  }
  
  const refreshUI = () => {
    state.degreeCountLabel.textContent = state.degreeCount;
  }
  
  let decreaseDegree = (event) => {
    --state.degreeCount;
    refreshUI();
  }
  
  let increaseDegree = (event) => {
    ++state.degreeCount;
    refreshUI();
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