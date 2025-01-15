import myJSON from './../data/menu.json' with {type: 'json'};
import molecule_child from './header-child-molecule.js';

// component CSS
const headerStyle = document.createElement('style');
headerStyle.textContent = /*css*/`
    nav {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #0a0a23;
    }

    ul {
        padding: 0;
    }

    ul li {
        list-style: none;
        display: inline;
    }

    a, .nav-p {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #fff;
    }

    /* I override even the nested molecule components */
    p {
        color: green;
    }
`;

// component HTML (to be able to nest into molecules)
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = /*html*/ `
    <header>
        <nav>
            <!-- Looping, menu items dynamically added -->
            <ul id="menu"></ul>

            <!-- Dynamic content! -->
            <p class="nav-p"></p>
        </nav>

        <div>
            Nisi cupidatat esse nisi id do mollit. Do Lorem aute reprehenderit dolore occaecat. Commodo amet magna cupidatat dolore ad do sit proident cillum irure ipsum enim occaecat. Proident Lorem aliquip ad. Officia mollit aliqua dolor dolore pariatur sint dolor mollit veniam laborum aliqua ea. Adipisicing laborum labore quis nisi amet ullamco est qui sint quis officia cupidatat cupidatat officia sit.
        </div>
    </header>

    <!-- IMPORTANTE lol!!!! To allow nesting -->
    <slot></slot>
    <p>After slot</p>

    <!-- Nested component for molecules -->
    <p>Before nested</p>
    <div id="nest"></div>
    <p>After nested</p>

    <!-- No <script> tag here since using backticks for formatting makes everything weird -->
`;

class Header extends HTMLElement {
    constructor() { super(); }

    // component JS
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });   // must be 'open' for dynamic content to work!
        shadowRoot.appendChild(headerStyle);
        shadowRoot.appendChild(headerTemplate.content);

        // *** CUSTOM JS HERE ***
        // Dynamic content coming into component
        this.shadowRoot.querySelector('p').textContent = this.getAttribute('email') || 'Email';
        // this.shadowRoot.querySelector('#loop').textContent = 'Beef';

        // Looping though data: local JSON file style
        for (var key in myJSON) {
            var item = document.createElement('li');
            item.setAttribute('id', `${key}`);
            item.innerHTML = /*html*/ `
                <a href=${myJSON[key]}>${key}</a>
            `;
            this.shadowRoot.querySelector('#menu').appendChild(item);
        }

        // using imported child component
        console.log(molecule_child);
        var nested = this.shadowRoot.getElementById('nest');
        nested.innerHTML = molecule_child;
        console.log(nested);
        // *** END CUSTOM JS ***
    }
}

customElements.define('header-component', Header);