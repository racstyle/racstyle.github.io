$(document).foundation();

// // For auto hiding nav bar when scrolling
// var prev = 0;
// var $window = $(window);
// var nav = $('.scroll-hide-nav');
// // When scrolling browser window
// $window.on('scroll', function(){
//   var scrollTop = $window.scrollTop();
//   nav.toggleClass('hidden', scrollTop > prev);
//   prev = scrollTop;
// });


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


