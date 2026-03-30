import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { inputStyles } from './styles/input-styles.js';
import './OutputResult.js';
import { newDateTimeInstance } from '../../utils/date-helper.util.js';
import { DateTime } from 'luxon';

export const tagName = 'weekday-calculator';

@customElement(tagName)
export class WeekdayCalculator extends LitElement {
  static styles = [buttonStyles, inputStyles];

  @property()
  weekday: string = ' ';

  @property({ type: Boolean })
  hasResult = false;

  @property({ type: Boolean })
  showMoreYears = false;

  @property({ type: Array })
  dates: DateTime[] = [];

  render() {
    return html`
      <div>
        <div>
          Datum: <br />
          <input id="input-date" aria-label="Invoer datum" type="date" />
        </div>
        <div>
          <input id="chk-multiple-years" type="checkbox" style="display: inline" />
          <label for="chk-multiple-years" style="display: inline"> Inclusief de 10 daarop volgende jaren</label>
        </div>
      </div>
      <div>
        <button @click=${this.calculate}>Start</button>
      </div>

      <div ?hidden=${!this.hasResult}>
        <output-result>
          Weekdag: ${this.weekday}
          <br ?hidden=${!this.showMoreYears} />
          ${this.dates.map((item) => html`${this._formatDate(item, 'yyyy cccc')}<br /> `)}
        </output-result>
      </div>
    `;
  }

  @query('#input-date')
  input!: HTMLInputElement;

  @query('#chk-multiple-years')
  chkMultiple!: HTMLInputElement;

  calculate() {
    if (!this.input.value) {
      return;
    }
    this.showMoreYears = this.chkMultiple.checked;

    const startDate = newDateTimeInstance(new Date(this.input.value));
    this.weekday = this._formatDate(startDate);

    this.dates = [];
    if (this.showMoreYears) {
      this.dates = this._calculateNextYears(startDate);
    }

    this.hasResult = true;

    this.requestUpdate();
  }

  _formatDate(date: DateTime, format: string = 'cccc') {
    return date.setLocale('NL').toFormat(format);
  }

  _calculateNextYears(startDate: DateTime, numberOfAdditionalYears = 10) {
    const data = [];

    for (let i = 1; i <= numberOfAdditionalYears; i++) {
      const nextYear = startDate.plus({ years: i });
      data.push(nextYear);
    }

    return data;
  }
}
