// Enable Foundation Sites library
$(document).foundation();

// Scroll padding when nav scrolling to section
var navHeight = document.querySelector('.sticky-shrinknav-header').offsetHeight;
document.documentElement.style.setProperty('--scroll-pad', navHeight + 'px');

// Scroll to top button via id
let myButton = document.getElementById("scrollTop");

// Dynamic shrinking nav/header container + show/hide scroll to top button
$(function() {
  $(window).on('scroll', function() {
    var winTop = $(window).scrollTop();
    // User scrolled down
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
      myButton.style.display = "block";
    }
    // User scrolled to top
    else  {
      $("body").removeClass("sticky-shrinknav-wrapper");
      myButton.style.display = "none";
    }
  });
});

// Scrolling to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
