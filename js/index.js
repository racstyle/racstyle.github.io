/* ---------------------------- Global functions ---------------------------- */
// #region Global functions
// render data from JSON file into the page for a section (i.e., skills, projects)
function renderFromData({ url, containerSelector, renderFunction }) {
  // get the skills/projects data
  fetch(url)
    // if found, convert the response to JSON
    .then(res => res.json())

    // use the data to create the items dynamically and add them to the page
    .then(data => {
      // get the container where the items will be added
      const container = document.querySelector(containerSelector);

      // loop through the skills/projects data
      data.forEach(item => {
        const element = renderFunction(item);
        container.appendChild(element);
      });
    })

    // otherwise, log any errors
    .catch(err => console.error(`Error fetching ${url}:`, err));

  return;
}

// fetch data
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) { throw new Error(`Response status: ${res.status}`); }
    return await res.json();
  }
  catch(err) {
    return console.error(`Error fetching ${url}:`, err);
  }
}

// #endregion Global functions


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
// function to render the skills section
function createSkillCard(skillItem) {
  const skillCard = document.createElement('card-comp');  // create a new card component for each skill category

  const skillCat = skillItem['category'];  // get the skill category (e.g., "Programming Languages")
  const skillCatID = skillItem['cat_id'];  // get the skill category ID (e.g., "programming-languages")

  skillCard.setAttribute('id', skillCatID);  // set the ID of the skill card to the category ID for linking from nav
  
  // skill category title
  skillCard.innerHTML = /*html*/ `
    <h2 class="card-title">${skillCat}</h2>
  `;

  // put skills inside a div for reordering
  const skillsList = document.createElement('div');
  skillsList.classList.add('skills-list');

  // loop through each skill in the category and add it to the skill card
  skillItem['skills'].forEach(skill => {
    // add each skill as a new item in the skill card
    skillsList.innerHTML += /*html*/ `
      <!-- skill link -->
      <div class="skill-item">
        <a href="${skill.skill_page}" target="_blank" rel="noopener noreferrer">
          <!-- skill icon -->
          <img src="${skill.icon}" alt="${skill.skill_name} icon, taken from ${skill.icon_source}" class="skill-icon">
          <br>
          <!-- skill name -->
          <span>${skill.skill_name}</span>
        </a>
      </div>
    `;

    // add the skills list to the skill card
    skillCard.appendChild(skillsList);
  });
  
  return skillCard;
}

// put the ^skills data into the page itself
document.addEventListener('DOMContentLoaded', () => {
  renderFromData({
    url: './_data/skills.json',
    containerSelector: '.skills-container',
    renderFunction: createSkillCard
  });
});

// #endregion Skills section


/* ---------------------------- Projects section ---------------------------- */
// #region Projects section
// function to render the projects section
function createProjectCard(projectItem) {
  const projectCard = document.createElement('card-comp');  // create a new card component for each project
  projectCard.classList.add('project-card');  // add a class for styling

  // project title + image
  projectCard.innerHTML = /*html*/ `
    <h2 class="card-title">${projectItem['proj_name']}</h2>
    <img src="${projectItem['screenshot']}" alt="${projectItem['screenshot_desc']}" class="project-image">
  `;

  // skills used in the project (as icons)
  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('project-skills-used-container');
  const getSkills = async () => {
    const skills = await fetchData('./_data/skills.json');
    const skillsFlat = skills.reduce((acc, category) => acc.concat(category.skills), []);  // flatten the skills data to get an array of all skills
    projectItem['skills_used'].forEach(skill => {
      const skillUsedObj = Object.entries(skillsFlat).find(([key, value]) => value.skill_name === skill);
      if (skillUsedObj) {  // check if the skill used in the project is in the skills data (to get the icon)
        const skillIcon = document.createElement('img');
        skillIcon.src = skillUsedObj[1].icon;
        skillIcon.alt = `${skill} icon, taken from ${skill}`;
        skillIcon.classList.add('project-skill-icon');
        skillsContainer.appendChild(skillIcon);
      }
    });
  };
  getSkills();
  projectCard.appendChild(skillsContainer); // add the skills container to the project card

  // project description (create new paragraph for each item in the description array)
  const projectDescContainer = document.createElement('div');
  projectDescContainer.classList.add('project-description');
  projectItem['description'].forEach(desc => {
    const projectDescElem = document.createElement('p');  // create new p tag for each paragraph
    projectDescElem.innerHTML += /*html*/ `${desc}`;  // add each paragraph to the project description
    projectDescContainer.appendChild(projectDescElem); // add that paragraph to the project description container
  });
  projectCard.appendChild(projectDescContainer); // add the project description container to the project card

  // project buttons (e.g., GitHub, live demo)
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('project-buttons');
  
  // GitHub button
  if (projectItem['github']) {
    const githubButton = document.createElement('a');
    githubButton.href = projectItem['github'];
    githubButton.target = '_blank';
    githubButton.rel = 'noopener noreferrer';
    githubButton.classList.add('button', 'github-button');
    githubButton.textContent = 'GitHub';
    buttonsContainer.appendChild(githubButton);
  }

  // Demo button
  if (projectItem['demo']) {
    const demoButton = document.createElement('a');
    demoButton.href = projectItem['demo'];
    demoButton.target = '_blank';
    demoButton.rel = 'noopener noreferrer';
    demoButton.classList.add('button', 'demo-button');
    demoButton.textContent = 'Demo';
    buttonsContainer.appendChild(demoButton);
  }

  projectCard.appendChild(buttonsContainer); // add the buttons container to the project card

  return projectCard;
}

// put the ^projects data into the page itself
document.addEventListener('DOMContentLoaded', () => {
  renderFromData({
    url: './_data/projects.json',
    containerSelector: '.projects-container',
    renderFunction: createProjectCard
  });
});

// show the filtered projects
function showProject(project, filter) {
  let projectClasses = project.className.split(' ');  // get the classes of the project card as an array
  let filters = filter.split(' ');  // split the filter into an array (in case there are multiple categories in the filter)

  // loop through filter categories and check if the project card has a class that matches any of the filter categories
  for (let i=0; i<filters.length; i++) {
    if (projectClasses.indexOf(filters[i]) == -1) {  // if the project card has a class that matches the filter category
      project.className += ' ' + filters[i];  // add that category as a class to the project card (to show it)
    }
  }

  return;
}

// hide the projects that don't match the filter
function hideProject(project, filter) {
  let projectClasses = project.className.split(' ');  // get the classes of the project card as an array
  let filters = filter.split(' ');  // split the filter into an array (in case there are multiple categories in the filter)

  // loop through filter categories and check if the project card has a class that matches any of the filter categories
  for (let i=0; i<filters.length; i++) {
    // while the project card has a class that matches the filter category (in case there are multiple instances of the same category in the class list)
    while (projectClasses.indexOf(filters[i]) > -1) {
        projectClasses.splice(projectClasses.indexOf(filters[i]), 1);  // remove that instance of the category from the class list
      }
  }
  project.className = projectClasses.join(' ');  // update the project card's classes with the modified class list

  return;
}

// filter projects by category when the category buttons are clicked
function filterProjects(category) {
  let projectCards = document.querySelectorAll('.project-card');  // select all project cards

  if (category === 'all') {
    category = '';  // show all projects if "All" is selected (i.e., no category filter)
    for (let i=0; i<projectCards.length; i++) {
      hideProject(projectCards[i], 'show-filtered-projects');  // remove the 'all' class to show all projects
      if (projectCards[i].className.indexOf(category) > -1) {
        showProject(projectCards[i], 'show-filtered-projects');  // add the 'show' class to show the project card
      }
    }
  }

  return;
}

// #endregion Projects section