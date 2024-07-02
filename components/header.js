const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = /*html*/ `
    <style>
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

        a, p {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
        }

        a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
        }
    </style>

    <header>
        <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <!-- Dynamic content! -->
            <p></p>
        </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });   // must be 'open' for dynamic content to work!
    shadowRoot.appendChild(headerTemplate.content);

    // Dynamic content coming into component
    this.shadowRoot.querySelector('p').textContent = this.getAttribute('email') || 'Email';
  }
}

customElements.define('header-component', Header);