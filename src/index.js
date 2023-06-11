// actions for search/reset button for city input
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});


// const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
// const dropdownList = dropdownElementList.map((dropdownToggleEl) => {
//   return new mdb.Dropdown(dropdownToggleEl);
// });

// 
// Sky DROPDOWN BUTTON
const dropdownBtn = document.getElementsByClassName("dropdown-button");
const dropdownMenu = document.getElementsByClassName("dropdown-menu");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});