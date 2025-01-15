// component CSS
const headerChildMoleculeStyle = document.createElement('style');
headerChildMoleculeStyle.textContent = /*css*/`
  p {
    color: red !important;
  }
`;

// component HTML (to be able to nest into molecules)
const headerChildMoleculeTemplate = document.createElement('template');
headerChildMoleculeTemplate.innerHTML = /*html*/ `
  <p>Hi, I am to be nested inside a molecule component</p>
  <p>Why are styles not working in here lol</p>
  <p>Hmm, my styles do not apply in the child here but rather in the parent molecule component....</p>
`;

// to use component
class ChildMolecule extends HTMLElement {
  constructor() { super(); }

  // component JS
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });   // must be 'open' for dynamic content to work!
    shadowRoot.appendChild(headerChildMoleculeStyle);
    shadowRoot.appendChild(headerChildMoleculeTemplate.content);
  }
}
export default headerChildMoleculeTemplate.innerHTML;

customElements.define('header-child-molecule-component', ChildMolecule);