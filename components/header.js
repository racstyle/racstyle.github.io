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
    </style>

    <header>
        <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>

            <!-- Dynamic content! -->
            <p class="nav-p"></p>
        </nav>

        <!-- Looping -->
        <div id="loop">
            Nisi cupidatat esse nisi id do mollit. Do Lorem aute reprehenderit dolore occaecat. Commodo amet magna cupidatat dolore ad do sit proident cillum irure ipsum enim occaecat. Proident Lorem aliquip ad. Officia mollit aliqua dolor dolore pariatur sint dolor mollit veniam laborum aliqua ea. Adipisicing laborum labore quis nisi amet ullamco est qui sint quis officia cupidatat cupidatat officia sit.
        </div>
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
    // this.shadowRoot.querySelector('#loop').textContent = 'Beef';

    // Looping through data
    const obj = {
        "company": 'GeeksforGeeks',
        "contact": '+91-9876543210',
        "city": 'Noida'
    };
    
    Object.keys(obj).forEach(key => {
        var item = document.createElement('p');
        item.setAttribute('id', `${key}`);
        item.innerHTML = /*html*/ `
            <p>${obj[key]}</p>
        `;
        this.shadowRoot.querySelector('#loop').appendChild(item);
    });

    const reader = new FileReader();
    console.log(reader);
    // reader.onload = (evt) => {
    //     console.log(evt.target.result);
    // };
    // reader.readAsText('./../data/menu.json');
  }
}

customElements.define('header-component', Header);