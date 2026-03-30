import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getWeeksOfYear } from '../../utils/date-helper.util.js';

export const tagName = 'weeknumber-list';

@customElement(tagName)
export class WeeknumberList extends LitElement {
  @property()
  year!: string;

  render() {
    return html`
      <p>
        Datum van ieder weeknummer van het jaar weten? Hieronder vind je een compleet overzicht van alle weeknummers van
        het jaar ${this.year}:
      </p>
      <ul>
        ${getWeeksOfYear(this.year).map(
          (p) =>
            html`
              <li>
                Week ${p.weekNumber}&nbsp;&nbsp;&nbsp;&nbsp; ${p.startDate.toFormat('EEE dd-MM-yyyy')} t/m
                ${p.endDate.toFormat('EEE dd-MM-yyyy')}
              </li>
            `
        )}
      </ul>

      <br />
      Zie ook:<br />
      <ul>
        <li><a href="/handig/2008/06/huidig_weeknummer/">Weeknummer uitrekenen</a></li>
        <li><a href="/handig/weeknummers/2007/">Jaar weeknummers overzicht (2007)</a></li>
        <li><a href="/handig/weeknummers/2008/">Jaar weeknummers overzicht (2008)</a></li>
        <li><a href="/handig/weeknummers/2009/">Jaar weeknummers overzicht (2009)</a></li>
        <li><a href="/handig/weeknummers/2010/">Jaar weeknummers overzicht (2010)</a></li>
        <li><a href="/handig/weeknummers/2011/">Jaar weeknummers overzicht (2011)</a></li>
        <li><a href="/handig/weeknummers/2012/">Jaar weeknummers overzicht (2012)</a></li>
        <li><a href="/handig/weeknummers/2013/">Jaar weeknummers overzicht (2013)</a></li>
        <li><a href="/handig/weeknummers/2014/">Jaar weeknummers overzicht (2014)</a></li>
        <li><a href="/handig/weeknummers/2015/">Jaar weeknummers overzicht (2015)</a></li>
        <li><a href="/handig/weeknummers/2016/">Jaar weeknummers overzicht (2016)</a></li>
        <li><a href="/handig/weeknummers/2017/">Jaar weeknummers overzicht (2017)</a></li>
        <li><a href="/handig/weeknummers/2018/">Jaar weeknummers overzicht (2018)</a></li>
        <li><a href="/handig/weeknummers/2019/">Jaar weeknummers overzicht (2019)</a></li>
        <li><a href="/handig/weeknummers/2020/">Jaar weeknummers overzicht (2020)</a></li>
        <li><a href="/handig/weeknummers/2021/">Jaar weeknummers overzicht (2021)</a></li>
      </ul>
    `;
  }
}
