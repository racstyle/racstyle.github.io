// to use component
class Comp extends HTMLElement {
    // constructor is called when the element is created (called 1x)
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });   // must be 'open' for dynamic content to work!
    }
    
    // connectedCallback is called when the element is added to the DOM (called multiple times)
    connectedCallback() {
        // component CSS
        // create a new style element per instance
        const compCss = document.createElement('style');
        compCss.textContent = /*css*/`
            /* each category */
            .category {
                background: #ffffff;
                padding: 15px 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: background 0.3s ease;
                width: 100%;
                box-sizing: border-box; /* Include padding and border in the element's total width */
            }
            .category:hover {   /* change BG color on hover */
                background: var(--color-secondary);
            }
            @media screen and (min-width: 1024px) { /* desktop */
                .category {
                    width: 24vw;
                }
            }
            @media screen and (min-width: 1440px) { /* desktop XL */
                .category {
                    width: 20vw;
                }
            }

            /* category header */
            .category-header span {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: bold;
            }

            /* each skill item inside each category */
            .category-skills {
                /* responsive */
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                flex-wrap: wrap;
                
                /* other */
                align-items: center;
                opacity: 0;
                max-height: 0;
                overflow: hidden;
                transition: opacity 0.3s ease, max-height 0.3s ease;
            }

            /* show skills on category hover */
            .category:hover .category-skills {
                opacity: 1;
                max-height: 200px;
            }

            /* each skill item */
            .skill-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                padding: 5px 10px;
                border-radius: 5px;
            }

            /* skill icon */
            img {
                width: 55px;
                height: auto;
            }

            /* skill name */
            a {
                text-decoration: none;
                color: #333;
            }

            /* Icon style */
            .expand-icon {
                font-size: 1.5em;
                transition: transform 0.3s ease;
            }
            .category:hover .expand-icon {  /* rotate icon on category hover */
                transform: rotate(90deg);
            }
        `;
        
        
        // get attributes here ONLY (don't add to HTML below (yet))
        const category = this.getAttribute('category') || 'default';
        const skills = JSON.parse(this.getAttribute('skills-data')) || 'default';    // parse the JSON string to an object


        // component HTML (to be able to nest into molecules)
        // clone the template content
        const compHtml = document.createElement('template');
        compHtml.innerHTML = /*html*/ `
            <div class="category">
                <div class="category-header">
                    <span>${category} <span class="expand-icon">&#9205;</span></span>
                </div>
                <div class="category-skills">
                    <!-- skills will be added here -->
                </div>
            </div>
        `;


        // append cloned styles and template content to be able to get attributes
        this.shadowRoot.appendChild(compCss);
        this.shadowRoot.appendChild(compHtml.content.cloneNode(true));


        // component JS
        // get the list element
        const list = this.shadowRoot.querySelector('.category-skills');

        // loop through skills list + add them to the .category-skills element
        skills.forEach(skill => {
            const div = document.createElement('div');
            div.innerHTML = `
                <a href="${skill.skill_page}" target="_blank" rel="noopener">
                    <img src="${skill.icon}" alt="${skill.skill_name} icon">
                    <div>${skill.skill_name}</div>
                </a>
            `;
            div.classList.add('skill-item');
            list.appendChild(div);
        });
    }
}

// define the custom element name to be used in HTML
customElements.define('skill-card', Comp);