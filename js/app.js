// Enable Foundation Sites library
$(document).foundation();


// Scroll to top button via id
let myButton = document.getElementById("scrollTop");


// Main script
$(function() {
  // Show/hide scroll to top button
  $(window).on('scroll', function() {
    // Viewport position on scroll
    var winTop = $(window).scrollTop();

    // User scrolled down
    if (winTop >= 30) {
      myButton.style.display = "block";                   // show "scroll to top" button
    }
    // User scrolled to top
    else  {
      myButton.style.display = "none";                    // hide "scroll to top" button
    }
  });

  // 
});

// Scrolling to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
