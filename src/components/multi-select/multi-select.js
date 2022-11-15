import { LitElement, html } from 'lit';
import style from './multi-select.style';

import '../checkbox/checkbox.js';

export class MultiSelect extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      placeholder: { type: String },
      items: { type: Array },
    };
  }

  static get styles() {
    return style;
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
                    <sh-checkbox .checked=${item.selected}></sh-checkbox>
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
    if (titles.length === 0) {
      return this.placeholder;
    } else {
      const result = titles.join(', ');
      return result;
    }
  }
}

customElements.define('sh-multi-select', MultiSelect);
