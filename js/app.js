// Enable Foundation Sites library
$(document).foundation();

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


