// TODO: Import just what we need (see MChapel components later)
//       https://getbootstrap.com/docs/5.3/customize/optimize/

// import '../node_modules/bootstrap/js/dist/alert';
// import '../node_modules/bootstrap/js/dist/button';
// import '../node_modules/bootstrap/js/dist/carousel';
// import '../node_modules/bootstrap/js/dist/collapse';
// import '../node_modules/bootstrap/js/dist/dropdown';
// import '../node_modules/bootstrap/js/dist/modal';
// import '../node_modules/bootstrap/js/dist/offcanvas';
// import '../node_modules/bootstrap/js/dist/popover';
// import '../node_modules/bootstrap/js/dist/scrollspy';
// import '../node_modules/bootstrap/js/dist/tab';
// import '../node_modules/bootstrap/js/dist/toast';
// import '../node_modules/bootstrap/js/dist/tooltip';


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
  window.history.pushState(null, '', '/');
}


// /* ------------------------------ Theme picker ------------------------------ */
// TODO: update once more/better tutorials for v5.3 come out
let picker = document.getElementById("themePicker");

// Function to set theme to the user's preferred color scheme
function setTheme(newValue) {
    document.querySelector("html").setAttribute("data-bs-theme", newValue);     // change website theme
    picker.value = newValue.toString();                                         // reflect ^said theme in dropdown
}

// Set preferred theme on load
setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Update theme when the user selects something
picker.addEventListener('change', function() {
    setTheme(picker.value);
});


/* ---------------------------- Site last updated --------------------------- */
// fetch('https://api.github.com/repos/ChocolateLoverRaj/canvideo/commits?per_page=1')
//     .then(res => res.json())
//     .then(res => {
//         document.getElementById('updated').innerHTML = res[0].commit.message;
//     })
fetch('https://api.github.com/repos/ChocolateLoverRaj/canvideo/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
  })
