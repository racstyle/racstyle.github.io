// to use component
class Comp extends HTMLElement {
    // called when the component is added to the DOM (only called once)
    connectedCallback() {
        // Step 1: capture child nodes safely
        const fragment = document.createDocumentFragment();
        while (this.firstChild) {
            fragment.appendChild(this.firstChild);
        }
        
        // Step 2: render base component content
        this.innerHTML = /*html*/ `
            <!-- content -->
            <div class="comp-content"></div>
        `;
        
        // Step 3: insert original content into the slot area
        this.querySelector('.comp-content').appendChild(fragment);
    }
}

// define the custom element name to be used in HTML (can only be hyphenated words)
customElements.define('card-comp', Comp);