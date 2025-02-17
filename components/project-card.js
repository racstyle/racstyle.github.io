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
            /* card container */
            .card {
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                width: 100%;
                /* margin: 20px; */
            }
            
            /* card image */
            .card-img {
                width: 100%;
                height: auto;
            }
            
            /* card text */
            .card-content {
                padding: 16px;
            }
            
            /* card title */
            .card-title {
                font-size: 1.5em;
                margin: 0 0 10px;
            }
            
            /* card description */
            .card-description {
                font-size: 1em;
                color: #666;
            }
        `;


        // component HTML (to be able to nest into molecules)
        // clone the template content
        const compHtml = document.createElement('template');
        compHtml.innerHTML = /*html*/ `
            <div class="card">
                <img src="https://placehold.co/270x200" alt="Card Image" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">Card Title</h2>
                    <p class="card-description">This is a description of the card. It provides additional details about the content of the card.</p>
                </div>
                <slot></slot> <!-- enables nesting other components -->
            </div>
        `;


        // append cloned styles and template content to be able to get attributes
        this.shadowRoot.appendChild(compCss);
        this.shadowRoot.appendChild(compHtml.content.cloneNode(true));

        // get attributes
        // const attr = this.getAttribute('attr') || 'default';
        // this.shadowRoot.querySelector('div').textContent = attr;


        // component JS
        // other JS here
    }
}

// define the custom element name to be used in HTML
customElements.define('project-card-comp', Comp);