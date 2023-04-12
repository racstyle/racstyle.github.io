// Enable Foundation Sites library
$(document).foundation();

// Scroll padding-top values when nav scrolling to section
const navHeightHero = 396;
const navHeightMenu = 70;

// Scroll to top button via id
let myButton = document.getElementById("scrollTop");


// Main script
$(function() {
  // TODO: TEMP To keep main content's padding-top constant to maintain nav position when scrolling (see TODO below)
  var navHeight = document.querySelector('.sticky-shrinknav-header').offsetHeight;
  document.documentElement.style.setProperty('--scroll-pad', navHeight + 'px');
  
  // Dynamic shrinking nav/header container + show/hide scroll to top button
  $(window).on('scroll', function() {
    // Viewport position on scroll
    var winTop = $(window).scrollTop();
    console.log(winTop);

    // TODO: dynamic padding-top when scrolling via 'document.documentElement.style....' in if-else statements is conflicting with scroll nav positioning (just need to change the conditions?)
    // User scrolled down
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");     // hide the header/hero, menu bar only
      // document.documentElement.style.setProperty('--scroll-pad', navHeightMenu + 'px');    // set content small padding-top
      myButton.style.display = "block";                   // show "scroll to top" button
    }
    // User scrolled to top
    else  {
      $("body").removeClass("sticky-shrinknav-wrapper");  // show the header/hero
      // document.documentElement.style.setProperty('--scroll-pad', navHeightHero + 2 + 'px');  // set content big padding-top
      myButton.style.display = "none";                    // hide "scroll to top" button
    }
  });
});

// Scrolling to top function
function topFunction() {
  document.documentElement.style.setProperty('--scroll-pad', navHeightHero + 'px');
  document.body.classList.remove("sticky-shrinknav-wrapper");  // show the header/hero
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
