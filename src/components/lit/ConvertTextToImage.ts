import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { buttonStyles } from './styles/button-styles.js';
import { textareaStyles } from './styles/textarea-styles.js';
import './OutputResult.js';

export const tagName = 'convert-text-to-image';

@customElement(tagName)
export class ConvertTextToImage extends LitElement {
  static styles = [
    buttonStyles,
    textareaStyles,
    css`
      #image-wrapper {
        margin: 4px 0;
      }
    `,
  ];

  @property({ type: Boolean })
  hasResult = false;

  @property()
  linkUrl!: string;

  render() {
    return html`
      <div>
        Typ hier je tekst: <br />
        <textarea id="text-input" rows="4" aria-label="Input text"></textarea>
      </div>

      <div>
        <button @click=${this.submit}>Start</button>
      </div>

      <div ?hidden=${!this.hasResult}>
        <div id="image-wrapper">
          <canvas id="image-canvas" height="100" width="200" style="display:none"></canvas>
          <img id="image" alt="Generated image" />
        </div>
        <small>Tip: gebruik 'afbeelding opslaan als..' om de afbeelding op je computer op te slaan</small>
      </div>
    `;
  }

  @query('#text-input')
  input!: HTMLInputElement;

  @query('#image-canvas')
  canvas!: HTMLCanvasElement;

  @query('#image')
  image!: HTMLImageElement;

  async submit() {
    this.hasResult = false;

    const success = await this.generateImage();
    if (success) {
      this.hasResult = true;
    }
  }

  async generateImage() {
    const ctx = this.canvas.getContext('2d')!;
    const imageElem = this.image;
    const inputText = this.input.value;

    if (!inputText) {
      return false;
    }

    const lines = inputText.split('\n');
    ctx.font = '30px Verdana';
    const longest = lines.reduce((r, e) => (r.length < e.length ? e : r), '');
    ctx.canvas.width = ctx.measureText(longest).width + 90;
    ctx.font = '30px Verdana';
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], 20, 40 * i + 40);
    }
    imageElem.src = ctx.canvas.toDataURL();

    return true;
  }
}
