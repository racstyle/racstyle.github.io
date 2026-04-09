/* ------------------------------- Back to Top ------------------------------ */
// #region Back to Top
const backToTop = document.getElementById('topBtn');  // select the back to top button

// smooth scroll to top
backToTop.onclick = () => {
  // smoothly scroll to the top of the page when the button is clicked
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // update the URL to remove any hash/section ID (if present) without reloading the page
  history.replaceState(null, '', window.location.pathname);
};


// show the button when navbar sticks
const nav = document.getElementById('navbar');  // select the navbar to get when it sticks to the top of the page
window.addEventListener('scroll', () => {
  const rect = nav.getBoundingClientRect(); // get the position of the navbar relative to the viewport

  // show the back to top button when the navbar reaches the top of the viewport (i.e., when it becomes sticky)
  if (rect.top <= 0) { backToTop.classList.add('showTopButton'); }
  else { backToTop.classList.remove('showTopButton'); }
});

// #endregion Back to Top


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


/* ----------------------------- Skills section ----------------------------- */
// #region Skills section
document.addEventListener('DOMContentLoaded', () => {
  // get the skills data
  fetch('./_data/skills.json')
    // convert the response to JSON
    .then(response => response.json())
    
    // use the data to create the skill items dynamically
    .then(data => {
      // get the container where the skill items will be added
      const skillsContainer = document.querySelector('.skills-container');

      // loop through the skills data
      data.forEach(skillItem => {
        const skillCard = document.createElement('card-comp');  // create a new card component for each skill category

        const skillCat = skillItem['category'];  // get the skill category (e.g., "Programming Languages")
        const skillCatID = skillItem['cat_id'];  // get the skill category ID (e.g., "programming-languages")

        skillCard.setAttribute('id', skillCatID);  // set the ID of the skill card to the category ID for linking from nav
        
        // skill category title
        skillCard.innerHTML = /*html*/ `
          <h2>${skillCat}</h2>
        `;

        // put skills inside a div for reordering
        skillCard.innerHTML += /*html*/ `
          <div class="skills-list">
        `;

        // loop through each skill in the category and add it to the skill card
        skillItem['skills'].forEach(skill => {
          // console.log(skill);  // log each skill to the console (for debugging)
          skillCard.innerHTML += /*html*/ `
            <div class="skill-item">
              <!-- skill icon -->
              <img src="${skill.icon}" alt="${skill.skill_name} icon" class="skill-icon"> 
              <br>
              <!-- skill name -->
              <span>${skill.skill_name}</span>
            </div>
          `;  // add each skill as a new item in the skill card
        });
        
        // close the skills list div
        skillCard.innerHTML += /*html*/ `
          </div>
        `;
        
        skillsContainer.appendChild(skillCard);  // add the skill card to the container

        // add class to inner component div for styling
        skillCard.querySelector('.comp-content').classList.add('skills-card-content');
      });
    })

    // handle any errors that occur during the fetch operation
    .catch(error => console.error('Error fetching skills data:', error));
});

// #endregion Skills section