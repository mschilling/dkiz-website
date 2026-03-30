import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { inputStyles } from './styles/input-styles.js';
import './OutputResult.js';

export const tagName = 'link-generator';

@customElement(tagName)
export class LinkGenerator extends LitElement {
  static styles = [buttonStyles, inputStyles];

  @property({ type: Boolean })
  hasResult = false;

  @property()
  linkText: string = ' ';

  @property()
  linkUrl!: string;

  render() {
    return html`
      <div>
        URL: <br />
        <input id="inputUrl" aria-label="New url" type="text" />
        <div><small>Bijvoorbeeld: www.datkanikzelf.nl</small></div>
      </div>

      <div>
        <button @click=${this.generateLink}>Start</button>
      </div>

      <div ?hidden=${!this.hasResult}>
        <output-result>
          <a href="${this.linkUrl}" target="_blank">${this.linkText}</a>
        </output-result>
        <small>Tip: gebruik 'doel opslaan als..' om het bestand op je computer op te slaan</small>
      </div>
    `;
  }

  @query('#inputUrl')
  input!: HTMLInputElement;

  generateLink() {
    this.hasResult = false;
    this.linkText = this.input.value;
    if (this.linkText && this.linkText.length > 0) {
      if (!this.validateUrl('https://' + this.linkText)) {
        return;
      }
      this.linkUrl = `https://${this.input.value}`;
      this.hasResult = true;
    }
    this.requestUpdate();
  }

  validateUrl(value: string) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }
}
