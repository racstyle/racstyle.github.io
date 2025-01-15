// component CSS
const headerChildStyle = document.createElement('style');
headerChildStyle.textContent = /*css*/ `
    p {
        color: blue;
    }
`;

// component HTML (to be able to nest into molecules)
const headerChildTemplate = document.createElement('template');
headerChildTemplate.innerHTML = /*html*/ `
    <p>Hi, I can be nested inside a parent component</p>
`;

// to use component
class Child extends HTMLElement {
    constructor() { super(); }

    // component JS
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });   // must be 'open' for dynamic content to work!
        shadowRoot.appendChild(headerChildStyle);
        shadowRoot.appendChild(headerChildTemplate.content);
    }
}

customElements.define('header-child-component', Child);