import { LitElement, html } from 'lit';

import style from './checkbox.style';

export class Checkbox extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean },
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`<div
      class="${this.checked ? 'checkbox checked' : 'checkbox'}"
    ></div> `;
  }
}

customElements.define('sh-checkbox', Checkbox);
