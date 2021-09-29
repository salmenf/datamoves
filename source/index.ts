import {LitElement, html, css} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"

import "./editor"
import "./widgets"
import { getLabel, LabelKey, Language } from "./localization"
import {Scenario, scenarios} from "./scenarios"
import { ScenarioPicker } from "./widgets"
import { PythonOperationNode } from "./editor"


const PERSONALS = html`
  <span>© 2021 Frederic Salmen <a href="mailto:&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;">(&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;)</a></span>
`

const REPOSITORY = html`
<a title="GitHub" href="https://github.com/salmenf/datamoves">
  <ion-icon style="pointer-events: none" name="logo-github"></ion-icon>
</a>
`

@customElement("dm-app")
class App extends LitElement {

  @state()
  scenario: Scenario

  @state()
  scenarios: Scenario[] = scenarios

  @state()
  pyodide = null

  @property()
  lang: Language = "DE"

  constructor() {
    super()
    this.initializePyodide()
  }

  async initializePyodide() {
    // @ts-ignore
    let pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    })
    await pyodide.loadPackage("pandas")
    await pyodide.runPythonAsync("from pandas import *; from numpy import *")
    this.pyodide = pyodide
  }

  static styles = css`

    :host {
      height: 100vh;
      width: 100vw;
      overflow-x: hidden;
      display: grid;
      grid-template: auto 1fr auto / 1fr auto;
    }

    header {
      grid-row: 1;
      grid-column: 1 / 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 30px;
      user-select: none;
      gap: 1rem;
    }

    header h1 {
      flex-shrink: 0;
      margin: 0;
      color: #111;
      font-size: 1.75rem;
      line-height: 0.875;
    }

    header h2 {
      margin: 0;
      font-size: 1rem;
      
    }

    dm-language-picker {
      align-self: center;
    }

    header div {
      flex-shrink: 1;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem 0.75rem;
    }

    header div > * {
      height: 1.75rem;
    }


    header span {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 0.25rem;
    }

    main {
      grid-row: 2;
      grid-column: 1 / 3;
    }


    footer {
      grid-row: 3;
      grid-column: 1 / 3;
      height: 1.5rem;
      font-size: 0.625rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    footer a {
      color: inherit;
    }

    div.scenario {
      padding: 0.5rem 0rem;
      max-width: 100%;
      display: none;
    }

    div.scenario[data-active=true] {
      display: block;
    }
  `

  ScenarioView = (scenario: Scenario) => {
    return scenario? html`
      <div class="scenario" data-active=${scenario === this.scenario} id=${getLabel(this.lang, scenario.name as LabelKey)}>
        <dm-operation-sequence-editor .scenario=${!scenario.isSandbox? scenario: null} .lang=${this.lang} .pyodide=${this.pyodide} .nodeClass=${PythonOperationNode}>
        </dm-operation-sequence-editor>
      </div>
    `: null
  }

  render() {

    return html`
      <header>
        <div>
          <h1>${getLabel(this.lang, "heading")}</h1>
          <span>
            <h2>${getLabel(this.lang, "withPython")}</h2>
            <dm-pyodide-status lang=${this.lang} .pyodide=${this.pyodide}></dm-pyodide-status>
          </span>
        </div>
        <dm-scenario-picker
          lang=${this.lang}
          .scenarios=${this.scenarios}
          value=${this.lang}
          @change=${e => {this.scenario = e.currentTarget.value}}
        ></dm-scenario-picker>
        <dm-language-picker lang=${this.lang} @change=${e => {
          this.lang = e.currentTarget.value
        }}></dm-language-picker>
      </header>
      <main>
          ${this.scenarios.map(this.ScenarioView)}
      </main>
      <footer>
        ${PERSONALS}
        ${REPOSITORY}
      </footer>
      ${!this.pyodide? html`<dm-loading-overlay message="Python wird geladen..."></dm-loading-overlay>`: null}
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