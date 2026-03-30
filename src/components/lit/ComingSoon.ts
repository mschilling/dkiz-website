import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

export const tagName = 'coming-soon';

@customElement(tagName)
export class ComingSoon extends LitElement {
  render() {
    return html`
      <div>
        <h3>
          Deze feature is tijdelijk uitgeschakeld. <br />
          Kom snel nog eens terug.
        </h3>
      </div>
    `;
  }
}
