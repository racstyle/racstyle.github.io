/* ------------------------------ Scroll to top ----------------------------- */
// Scroll to top button via id
let myButton = document.getElementById("scrollTop");

// Showing/hiding scroll to top button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

// Check if to show scroll to top button on user scroll
window.onscroll = function() {
    scrollFunction();
};

// Event listener when user clicks on button
myButton.addEventListener("click", topFunction);

// Scrolling to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
