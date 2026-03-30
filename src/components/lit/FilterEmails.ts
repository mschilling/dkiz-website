import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { textareaStyles } from './styles/textarea-styles.js';

export const tagName = 'emailaddress-filter';

@customElement(tagName)
export class FilterEmails extends LitElement {
  static styles = [buttonStyles, textareaStyles];

  @property({ type: Boolean })
  hasResult = false;

  @property()
  resultText: string = ' ';

  @property({ type: Array })
  emailAddresses: string[] = [];

  render() {
    return html`
      <div>
        Invoer: <br />
        <textarea id="inputText" aria-label="Bulk emails input" rows="4" cols="40"></textarea>
      </div>

      <div>
        <button @click=${this.submit}>Start</button>
      </div>

      <div ?hidden=${!this.hasResult}>
        <output-result> ${this.resultText} </output-result>
      </div>
    `;
  }

  @query('#inputText')
  input!: HTMLInputElement;

  submit() {
    if (!this.input.value) {
      return;
    }
    this.emailAddresses = this.#extractEmails(this.input.value);

    if (this.emailAddresses.length === 0) {
      this.resultText = '';
      this.hasResult = false;
      this.requestUpdate();
      return;
    }

    this.resultText = this.emailAddresses.join(',\r ');
    this.hasResult = true;

    this.requestUpdate();
  }

  #extractEmails(text: string) {
    const matches: string[] | null = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (!matches || matches.length === 0) {
      return [];
    }
    return [...new Set(matches.sort())];
  }
}
