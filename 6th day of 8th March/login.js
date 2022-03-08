function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}
function profile() {
    document.getElementById("myDropdown").classList.toggle("shoow");
  }
  function cacle(){
      document.getElementsByClassName("cancle").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(evetn) {
    if (!evetn.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName;("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('shoow')) {
          openDropdown.classList.remove('shoow');
        }
      }
    }
  }