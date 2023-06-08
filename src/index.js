// actions for search/reset button for city input
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});


const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
const dropdownList = dropdownElementList.map((dropdownToggleEl) => {
  return new mdb.Dropdown(dropdownToggleEl);
});