import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';

export const tagName = 'search-widget';

@customElement(tagName)
export class SearchWidget extends LitElement {
  static styles = css`
    input {
      width: 120px;
      padding: 1px 2px;
    }

    button {
      margin-top: 0px;
      color: #666666;
      border: solid 1px #999999;
      width: 100px;
    }
  `;

  render() {
    return html`
      <form @submit=${this.submitForm}>
        <div>
          <input id="sbi2" name="sbi2" type="text" maxlength="255" aria-label="Voer uw zoekwoorden in" />
        </div>
        <div>
          <button type="submit" name="sbb" @click=${this.searchClick} aria-label="Zoekformulier verzenden">
            Zoeken
          </button>
        </div>
      </form>
    `;
  }

  @query('#sbi2')
  input!: HTMLInputElement;

  submitForm(event: Event) {
    event.preventDefault();
  }

  searchClick() {
    if (this.input.value === '') {
      return;
    }
    this.search();
  }

  search() {
    const targetUrl = 'http://www.google.nl/custom?';
    let params = '';

    params += 'domains=www.datkanikzelf.nl';
    params += '&q=' + encodeURIComponent(this.input.value);
    params += '&sitesearch=www.datkanikzelf.nl';
    params += '&sa=Zoeken';
    params += '&client=pub-9166294348244212';
    params += '&forid=1';
    params += '&channel=8004616750';
    params += '&ie=ISO-8859-1';
    params += '&oe=ISO-8859-1';
    params += '&safe=active';
    // prettier-ignore
    params += '&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23336699%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3A336699%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BFORID%3A1';
    params += '&hl=nl';

    window.location.href = targetUrl + params;
  }
}
