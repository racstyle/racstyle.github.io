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
// fetch('https://api.github.com/repos/ChocolateLoverRaj/canvideo/commits?per_page=1')
//   .then(res => res.json())
//   .then(res => {
//     document.getElementById('message').innerHTML = res[0].commit.message
//   })


/* ---------------- Filter by project type: add "show" class ---------------- */
function showProject(projectCardElement, showClass) {
    var i = 0;      // index for accessing classes in project card
    var projectClasses = projectCardElement.className.split(" ");   // list of classes in each project card
    var projectsToShow = showClass.split(" ");                      // "number" of projects we want to show as a list

    // Go through filtered projects to add the "show" class to them
    for (i=0; i<projectsToShow.length; i++) {
        // if the project is "filtered out", add the "show" class
        if (projectClasses.indexOf(projectsToShow[i]) == -1) projectCardElement.className += " " + projectsToShow[i];
    }
}


/* --------------- Filter by project type: remove "show" class -------------- */
function hideProject(projectCardElement, showClass) {
    var i = 0;      // index for accessing classes in project card
    var projectClasses = projectCardElement.className.split(" ");   // list of classes in each project card
    var projectsToHide = showClass.split(" ");                      // "number" of projects we want to hide as a list

    // Go through unfiltered projects to remove the "show" class from them
    for (i=0; i<projectsToHide.length; i++) {
        // 
        while (projectClasses.indexOf(projectsToHide[i]) > -1) projectClasses.splice(projectClasses.indexOf(projectsToHide[i]), 1);
    }
    projectCardElement.className = projectClasses.join(" ");
}


/* ------------------ Filter by project type: main function ----------------- */
function filterProjects(c) {
    var filtered, i;

    filtered = document.getElementsByClassName('projFilterHide');

    if (c == "Show-All") c = "";

    // Add "show" class to filtered projects + remove "show" class from unselected projects
    for (i=0; i<filtered.length; i++) {
        hideProject(filtered[i], "projFilterShow");
        if (filtered[i].className.indexOf(c) > -1) showProject(filtered[i], "projFilterShow");
    }
}
filterProjects("Show-All");


/* ------------------ Filter by project type: .active class ----------------- */
var btnContainer = document.getElementById("projCatContainer");     // get container element
var btns = btnContainer.getElementsByClassName("projFilters");      // get all buttons w/ .projFilters inside container

// set the first item in project category "list" (i.e. "Show All") to have .active class upon init page load
btns[0].className += " active";

// loop through nav links and add active class to current/clicked button
for (var i=0; i<btns.length; i++) {
    // when a category button is clicked/selected
    btns[i].addEventListener("click", function() {
        var selected = btnContainer.getElementsByClassName("active");   // make sure to use CONTAINER name instead of "document" to only look inside category container to prevent conflict w/ navbar

        // if there is no active class
        if (selected.length > 0) { selected[0].className = selected[0].className.replace(" active", ""); }

        // add active class to the current/clicked button
        this.className += " active";
    });
}