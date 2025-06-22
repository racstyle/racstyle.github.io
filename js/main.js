/* ----------------------------- Skills section ----------------------------- */
// send the skills data to the skill-card component
document.addEventListener('DOMContentLoaded', () => {
    // fetch the skills data
    fetch('./_data/skills.json')
        // convert the response to JSON
        .then(response => response.json())

        // send the data to the skill-card component
        .then(data => {
            // get the skills section
            const skillsSection = document.querySelector('.skills-container');

            // loop through the data
            data.forEach(skill => {
                const category = skill.category;    // get the skill category
                const skillCard = document.createElement('skill-card');   // create a new skill-card element for each category
                skillCard.setAttribute('category', category);   // send the category to the skill-card element
                skillCard.setAttribute('skills-data', JSON.stringify(skill.skills));  // send the skills to the skill-card element (need to stringify it first)
                skillsSection.appendChild(skillCard);   // append the skill-card element to the skills section
            });

        })

        // catch any errors and log them to the console
        .catch(error => console.error('Error fetching skills:', error));
});

/* ---------------------------- Projects section ---------------------------- */
// send the projects data to the project-card component
document.addEventListener('DOMContentLoaded', () => {
    // fetch the projects data
    fetch('./_data/projects.json')
        // convert the response to JSON
        .then(response => response.json())

        // send the data to the project-card component
        .then(data => {
            // get the projects section
            const projSection = document.querySelector('.projects-container');

            // loop through the data
            data.forEach(project => {
                console.log(project);

                const projCard = document.createElement('project-card');   // create a new project-card element for each project
                projCard.setAttribute('proj-data', JSON.stringify(project));  // send the project data to the project-card element (need to stringify it first)
                projSection.appendChild(projCard);   // append the project-card element to the projects section
            });

        })

        // catch any errors and log them to the console
        .catch(error => console.error('Error fetching skills:', error));
});