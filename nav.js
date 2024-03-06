/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function showNavLinks() {
    var x = document.getElementById("topnav");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
}