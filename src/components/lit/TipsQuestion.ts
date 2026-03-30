import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

export const tagName = 'tips-question';

@customElement(tagName)
export class TipsQuestion extends LitElement {
  render() {
    return html`
      <div>
      Weet jij nog een leuke toevoeging? Laat het weten via <a href="mailto:tips@datkanikzelf.nl">
      tips@datkanikzelf.nl</a>.<br />
      </div>
    `;
  }
}
