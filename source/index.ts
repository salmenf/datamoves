import {LitElement, html, css} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import "./editor"
import "./widgets"
import { LABELS, Language } from "./localization"
import {scenarios} from "./scenarios"


const PERSONALS = html`
  <span>© 2021 Frederic Salmen <a href="mailto:&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;">(&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;)</a></span>
`

const REPOSITORY = html`
<a title="Github" href="https://github.com/salmenf/datamoves">
  <ion-icon style="pointer-events: none" name="logo-github"></ion-icon>
</a>
`

@customElement("dm-app")
class App extends LitElement {

  @state()
  lang: Language = "DE"

  static styles = css`

    :host {
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template: auto 1fr auto / 1fr auto;
    }

    header {
      grid-row: 1;
      grid-column: 1 / 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      user-select: none;
      gap: 1.5rem;
    }

    header h1 {
      flex-shrink: 0;
      margin: 0;
      color: #111;
      font-size: 1.75rem;
      line-height: 0.9;
    }

    dm-language-picker {
      align-self: center;
    }

    header div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem 2rem;
    }

    main {
      grid-row: 2;
      grid-column: 1 / 3;
    }


    footer {
      grid-row: 3;
      grid-column: 1 / 3;
      height: 1rem;
      font-size: 0.625rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    footer a {
      color: inherit;
    }
  `

  render() {
    return html`
      <header>
        <div>
          <h1>${LABELS[this.lang].heading}</h1>
          <dm-scenario-controls lang=${this.lang}></dm-scenario-controls>
        </div>
        <dm-scenario-picker .scenarios=${scenarios(null, this.lang)}></dm-scenario-picker>
        <dm-language-picker @change=${e => {this.lang = e.target.value}}></dm-language-picker>
      </header>
      <main>
        <dm-operation-sequence-editor></dm-operation-sequence-editor>
      </main>
      <footer>
        ${PERSONALS}
        ${REPOSITORY}
      </footer>
    `
  }

}


/* POLYTREE OF OPERATIONS

SELECT-MAP-DERIVE requires a tree.
SELECT-MAP-DERIVE-COMBINE(SELF) requires an arborescence.
SELECT-MAP-DERIVE-COMBINE-RELATE requires a polytree.

root is a dataset

D --> SELECT COND --> PROJECT ATTRS
  --> PROJECT ATTRS

*/

/* SEQUENCE OF OPERATIONS
  SELECT-MAP-DERIVE-COMBINE-RELATE as a sequence with backwards references.
*/