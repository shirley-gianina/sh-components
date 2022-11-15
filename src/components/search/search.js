import { LitElement, html } from 'lit-element';
import style from './search.style';

export class Search extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      result: { type: Array },
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.data = [
      {
        name: 'Iphone',
        value: 1000,
      },
      {
        name: 'Iphone X12',
        value: 1000,
      },
      {
        name: 'TV - Sansung',
        value: 1000,
      },
      {
        name: 'Tablet',
        value: 1000,
      },
      {
        name: 'Ordenador',
        value: 1000,
      },
    ];

    this.result = this.data;
    this.input = '';
  }

  render() {
    return html`
      <div class="search-box">
        <button @click=${this._filterData} class="btn-search">
          <img src="./assets/images/search-icon-2.png" alt="icon-arrow" />
        </button>
        <input
          @keyup=${this._filterData}
          type="text"
          id="form"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <ul class=${this.input.length === 0 ? 'hidden' : ''}>
        <li>
          ${this.result.map(
            item => html` <li>${item.name} - ${item.value}</li> `
          )}
        </li>
      </ul>
    `;
  }

  _filterData() {
    this.input = this.shadowRoot.querySelector('#form').value.toLowerCase();
    this.result = [];

    this.data.map(product => {
      const inputName = product.name.toLowerCase();

      if (inputName.indexOf(this.input) !== -1) {
        this.result = [...this.result, product];
      }
    });

    if (this.result.length === 0) {
      this.result = [{ name: 'Producto', value: 'No ha sido encontrado' }];
    }
  }
}

customElements.define('sh-search', Search);
