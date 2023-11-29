function myFunction(dropdownId) {
 
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.id !== dropdownId) {
        openDropdown.classList.remove("show");
      }
    }
  
    
    document.getElementById(dropdownId).classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var searchBoxes = document.getElementsByClassName("dropdown-search");
    for (var i = 0; i < searchBoxes.length; i++) {
      searchBoxes[i].addEventListener("keyup", function () {
        var searchQuery = this.value.toLowerCase();
        var dropdownContent = this.closest(".dropdown-content"); // Get the closest dropdown-content
        var dropdownItems = dropdownContent.getElementsByTagName("a");
        for (var j = 0; j < dropdownItems.length; j++) {
          var item = dropdownItems[j];
          var textValue = item.textContent || item.innerText;
          if (textValue.toLowerCase().indexOf(searchQuery) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        }
      });
    }
  });