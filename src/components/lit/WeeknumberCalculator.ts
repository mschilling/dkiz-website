import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { inputStyles } from './styles/input-styles.js';
import { DateTime } from 'luxon';

export const tagName = 'weeknumber-calculator';

@customElement(tagName)
export class WeeknumberCalculator extends LitElement {
  static styles = [
    inputStyles,
    buttonStyles,
    css`
      .container {
        margin-top: 24px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .caption {
        text-transform: uppercase;
        font-size: 5rem;
        font-weight: 700;
        line-height: 1;
        border: 5px solid;
        padding: 2rem;

        width: min-content;
      }
    `,
  ];

  @property() labelText = 'Weeknummer deze week:';

  @property() date: DateTime = DateTime.now();

  render() {
    return html`
      <form onsubmit="event.preventDefault()">
        <strong>${this.labelText}</strong><br />

        <div class="container">
          <div class="caption">${this._formatDate(this.date, 'W')}</div>
          <div>${this._formatDate(this.date)}</div>
        </div>

        <div>
          <label for="newitem">Datum:</label><br />
          <input type="date" id="newitem" aria-label="Selecteer datum" required />
        </div>
        <div>
          <button @click=${this._calculate}>Start</button>
        </div>
      </form>
    `;
  }

  @query('#newitem')
  input!: HTMLInputElement;

  _calculate() {
    const isValid = this.input.checkValidity();
    if (!isValid) {
      return;
    }
    const utcDate = this.input.valueAsDate!;
    this.date = DateTime.fromISO(utcDate.toISOString());
    this.labelText = `Datum ${this._formatDate(this.date, 'D')} valt in week:`;

    this.requestUpdate();
  }

  _formatDate(date: DateTime, format: string = 'DDDD') {
    return date.setLocale('NL').toFormat(format);
  }
}
