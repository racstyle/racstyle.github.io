$(document).foundation();var navHeight=document.querySelector(".sticky-shrinknav-header").offsetHeight;document.documentElement.style.setProperty("--scroll-pad",navHeight+"px");let myButton=document.getElementById("scrollTop");function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}$((function(){$(window).on("scroll",(function(){$(window).scrollTop()>=30?($("body").addClass("sticky-shrinknav-wrapper"),myButton.style.display="block"):($("body").removeClass("sticky-shrinknav-wrapper"),myButton.style.display="none")}))}));