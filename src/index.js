// actions for search/reset button for city input
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});


// SKY DROPDOWN ATTEMPT 2
//https://alvarotrigo.com/blog/drop-down-menu-javascript/
// get all dropdown from document
document.querySelectorAll('.dropdown-button').forEach(dropDownFunc);

// drop down open and close
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown')=== true){
      dropDown.addEventListener('click', function (e) {
        e.preventDefault();      

        if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
          // Close the clicked dropdown
          this.parentElement.classList.remove('dropdown-open');
          this.nextElementSibling.classList.remove('dropdown-active');
        } else {
          // Close the opened dropdown
          closeDropdown();
            
          // add the open and active class(Opening the DropDown)
          this.parentElement.classList.add('dropdown-open');
          this.nextElementSibling.classList.add('dropdown-active');
        }
      });
    }

    if(dropDown.classList.contains('hover-dropdown') === true){
    
    dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;

    function dropdownHover(e){
      if(e.type == 'mouseover'){
        // Close the opened dropdown
        closeDropdown();

        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add('dropdown-open');
        this.nextElementSibling.classList.add('dropdown-active');
      }
    }
  }
};

//listen to the doc click
window.addEventListener('click', function(e) {

  //close the menu if click happen outside of menu
  if (e.target.closest('.dropdown') === null) {
    //close the opend dropdown
    closeDropdown();
  }
});

// Close the opened Dropdowns
function closeDropdown() { 
  console.log('closed');
  
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document.querySelectorAll('.dropdown').forEach(function (container) { 
      container.classList.remove('dropdown-open')
  });

  document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
      menu.classList.remove('dropdown-active');
  });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
  // close the dropdown after user leave the list
  dropDownList.onmouseleave = closeDropdown;
});
