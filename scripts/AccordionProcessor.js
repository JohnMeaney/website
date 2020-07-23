// transform wide-view horizontal navbar with invisible hamburger icon
// to visible hamburger with dropdown links
// and vice versa
// depending on screen width

// toggling works by renaming the element's class
// the element is identified by ID


var hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0]; // assume there's only one hamburger
var i;
var detail;

// click handler for hamburger icon
// reveal/conceal the vertical menu by toggling the class name of the DIV that is the navbar

// CSS logic related to the class name:
// (display width < 700px) && (class-name = .navbar) => only first <a> and hamburger are shown
// (display width < 700px) && (class-name = .navbar.responsive) => all <a>s are shown, one per line
 
hamburgerIcon.addEventListener("click", function(){
    var x = document.getElementById("button_panel");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    } 
});


 

