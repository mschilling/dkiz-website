import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

export const tagName = 'output-result';

@customElement(tagName)
export class OutputResult extends LitElement {
  static styles = css`
    .container {
      margin: 24px 0;
    }

    .output {
      padding: var(--padding-s, 8px);
      border: 1px solid #f0f0f0;
      color: #f00000;
    }

    .mt-24 {
      margin-top: 24px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div>Resultaat:</div>
        <div class="output"><slot></slot></div>
      </div>
    `;
  }
}
