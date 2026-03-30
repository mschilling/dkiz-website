import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { inputStyles } from './styles/input-styles.js';
import './OutputResult.js';

export const tagName = 'age-calculator';

@customElement(tagName)
export class AgeCalculator extends LitElement {
  static styles = [buttonStyles, inputStyles];

  @property({ type: Boolean })
  hasResult = false;

  @property({ type: Number })
  calculatedAge: number = -1;

  render() {
    return html`
      <div>
        Geboortedatum: <br />
        <input id="newitem" aria-label="Invoer geboortedatum" type="date" />
      </div>
      <div>
        <button @click=${this.calculateAge}>Start</button>
      </div>

      <div ?hidden=${!this.hasResult}>
        <output-result>Leeftijd: ${this.calculatedAge}</output-result>
      </div>
    `;
  }

  @query('#newitem')
  input!: HTMLInputElement;

  calculateAge() {
    this.hasResult = false;

    const theDate = new Date(this.input.value);
    this.calculatedAge = _calculateAge(theDate);

    if (this.calculatedAge >= 0) {
      this.hasResult = true;
    }

    this.requestUpdate();
    this.input.value = '';
  }
}

function _calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  if (ageDifMs < 0) {
    return -1;
  }

  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
