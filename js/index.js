/* --------------------------------- Navbar --------------------------------- */
// #region Navbar
// toggle menu for mobile
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// toggle the menu when the toggle button is clicked
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');  // toggle the 'show-menu' class to show/hide the menu

  // // update aria state for accessibility
  // toggleButton.setAttribute('aria-expanded', isOpen);
});

// close the menu when a link is clicked (for better UX on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show-menu');
    // toggleButton.setAttribute('aria-expanded', false);
  });
});


// active nav item when scrolling to that section
const sections = document.querySelectorAll('section[id]');  // select all sections with an id (to identify them for the nav links)

// event listener for scroll to update active nav link
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset + 20;  // current scroll position + navbar offset

  // loop through each section to check if it's in the viewport
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;  // height of the section
    const sectionTop = section.offsetTop - 50;  // top position of the section (adjusted for navbar height)
    const sectionId = section.getAttribute('id');  // id of the section

    // check if the current scroll position is within the section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active');  // add 'active' class to the corresponding nav link
    }
    else {
      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active');  // remove 'active' class when not in the section
    }
  });
});


// #endregion Navbar


