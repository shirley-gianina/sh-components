import { LitElement, html, css } from 'lit';
import styles from './dropdown.style.js';

export class DropdownItem extends LitElement {
  static get styles() {
    return styles.dropdownItem;
  }
  render() {
    return html`<li><slot></slot></li> `;
  }
}

export class Dropdown extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return styles.dropdown;
  }

  constructor() {
    super();
    this.open = true;
  }

  render() {
    return html`
      <p>dropdown</p>
      <div class="dropdown">
        <div @click="${this._handleOpenClick}" class="select">
          <p>placeholder</p>
          <img src="./assets/images/dropdown-arrow.png" alt="icon-arrow" />
        </div>
        <div class=${this.open ? 'select-list open' : 'select-list'}>
          <ul>
            <slot></slot>
          </ul>
        </div>
      </div>
    `;
  }

  _handleOpenClick() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }

    this.requestUpdate();
    console.log('he clackado', this.open);
  }
}

customElements.define('sh-dropdown', Dropdown);
customElements.define('sh-dropdown-item', DropdownItem);
