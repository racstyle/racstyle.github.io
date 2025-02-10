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
            p {
                color: red !important;
            }
        `;


        // component HTML (to be able to nest into molecules)
        // clone the template content
        const compHtml = document.createElement('template');
        compHtml.innerHTML = /*html*/ `
            <p>Hi, I am a reusable component</p>
            <div></div>   <!-- get data passed into to component via attributes -->
            <slot></slot> <!-- enables nesting other components -->
        `;


        // append cloned styles and template content to be able to get attributes
        this.shadowRoot.appendChild(compCss);
        this.shadowRoot.appendChild(compHtml.content.cloneNode(true));

        // get attributes
        const attr = this.getAttribute('attr') || 'default';
        this.shadowRoot.querySelector('div').textContent = attr;


        // component JS
        // other JS here
    }
}

// define the custom element name to be used in HTML
customElements.define('comp-name', Comp);