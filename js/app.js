// Enable Foundation Sites library
$(document).foundation();

// Scroll padding when nav scrolling to section
var navHeight = document.querySelector('.sticky-shrinknav-header').offsetHeight;
document.documentElement.style.setProperty('--scroll-pad', navHeight + 'px');

// Dynamic shrinking nav/header container
$(function() {
  $(window).on('scroll', function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    }
    else  {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});
