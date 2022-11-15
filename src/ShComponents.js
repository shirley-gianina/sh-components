import { LitElement, html, css } from 'lit';
import './components/multi-select/multi-select.js';
import './components/dropdown/dropdown.js';
import './components/search/search.js';

export class ShComponents extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .container {
        margin: 0 auto;
        max-width: 600px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My components';
    this.items = [
      { title: 'Español', value: 'es', selected: true },
      { title: 'English', value: 'en', selected: false },
      { title: 'Portuguese', value: 'por', selected: false },
      { title: 'Francais', value: 'fr', selected: false },
      { title: 'Magyar', value: 'ma', selected: true },
    ];
  }

  render() {
    return html`
      <div class="container">
        <h1>${this.title}</h1>
        <!--       <sh-multi-select
          @event-changed=${this._handleChanged}
          .items=${this.items}
          title="Idiomas"
          placeholder="Selecciona los idiomas"
        ></sh-multi-select> -->

        <!--        <sh-dropdown placeholder="test">
          <sh-dropdown-item> españa </sh-dropdown-item>
          <sh-dropdown-item> portugal </sh-dropdown-item>
          <sh-dropdown-item> Brasil </sh-dropdown-item>
          <sh-dropdown-item> Argetina </sh-dropdown-item>
        </sh-dropdown> -->

        <sh-search></sh-search>
      </div>
    `;
  }

  _handleChanged(event) {
    this.items = event.detail;
    console.log(event.detail, 'event desde el padre');
  }
}
