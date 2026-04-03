/* --------------------------------- Navbar --------------------------------- */
// #region Navbar
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

// #endregion Navbar


