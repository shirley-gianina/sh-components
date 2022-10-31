import { LitElement, html, css } from 'lit';

export class DropdownComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
      }

      .multi-select .title {
        font-size: 17px;
        color: #808b96;
        margin: 0px;
      }

      .multi-select .select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1.5px solid #808b96;
      }

      .multi-select .select p {
        font-size: 18px;
        margin: 5px 0px;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .multi-select .select img {
        width: 10px;
        height: 10px;
      }

      .multi-select.open .select img {
        transform: rotate(180deg);
      }

      .multi-select .select-list ul {
        background-color: #fff;
        padding: 10px;
      }

      .multi-select .select-list ul li {
        display: flex;
        align-items: center;
      }

      .multi-select .checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
        width: 15px;
        height: 15px;
        background-color: #fff;
        border: 1px solid black;
        margin-right: 10px;
      }

      .multi-select .checkbox.checked {
        background-color: green;
      }
      .multi-select .checkbox.checked::before {
        color: #fff;
        content: '🗸';
        display: block;
      }
      .multi-select .select-list {
        display: none;
      }

      .multi-select.open .select-list {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.items = [];
    this.open = true;
  }

  render() {
    return html`
      <div class="container">
        <div class=${this.open ? 'multi-select open' : 'multi-select'}>
          <p class="title">${this.title}</p>
          <div class="select" @click="${this._handleClick}">
            <p>${this._getSelected()}</p>
            <img src="./assets/images/dropdown-arrow.png" alt="icon-arrow" />
          </div>
          <div class="select-list">
            <ul>
              ${this.items.map(
                (item, idx) => html`
                  <li @click="${e => this._handleItemClick(idx)}">
                    <div
                      class="${item.selected ? 'checkbox checked' : 'checkbox'}"
                    ></div>
                    <p>${item.title}</p>
                  </li>
                `
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  _handleClick() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }

    this.requestUpdate();
    console.log('click', this.open);
  }

  _handleItemClick(idx) {
    const item = this.items[idx];

    if (item.selected) {
      item.selected = false;
    } else {
      item.selected = true;
    }

    this.dispatchEvent(
      new CustomEvent('event-changed', {
        bubbles: true,
        composed: true,
        detail: this.items,
      })
    );

    this.requestUpdate();
  }

  _getSelected() {
    const selectedItems = this.items.filter(item => item.selected === true);
    const titles = selectedItems.map(item => item.title);
    const result = titles.join(', ');
    return result;
  }
}

customElements.define('dropdown-component', DropdownComponent);
