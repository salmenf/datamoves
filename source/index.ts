import {LitElement, html, css} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"

import "./editor"
import "./widgets"
import { LABELS, LabelKey, Language } from "./localization"
import {Dataset, DATASETS, Scenario, scenarios} from "./scenarios"
import { PythonOperationNode } from "./editor"

import Bowser from "bowser"

let BROWSER = Bowser.parse(window.navigator.userAgent)

declare global {
  interface Window {browser: typeof BROWSER}
}

window.browser = BROWSER

export type PyodideStatus = "loadingPyodide" | "loadingPandas" | "loadingDatasets" | "pyodideReady" | "pyodideError" 

const PERSONALS = html`
  <span>© 2021 Frederic Salmen <a href="mailto:&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;">(&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;)</a></span>
`

const REPOSITORY = html`
<a title="GitHub" href="https://github.com/salmenf/datamoves">
  <ion-icon style="pointer-events: none" name="logo-github"></ion-icon>
</a>
`

async function loadDatasetPythonCode(identifier: string, url: string) {
  const text = await (await fetch(url)).text()
  return (...args: any[]) => `${identifier} = read_csv(StringIO("""${text}"""),${args.join(",")})`
}


@customElement("dm-app")
class App extends LitElement {

  @state()
  scenario: Scenario = scenarios[0]

  @state()
  scenarios: Scenario[] = scenarios

  @state()
  pyodide = null

  @state()
  pyodideStatus: PyodideStatus = "loadingPyodide"

  @state()
  datasets: Dataset[] = DATASETS

  @property()
  lang: Language = "DE"

  constructor() {
    super()
    this.initializePyodide().catch(e => this.pyodideStatus = "pyodideError")
  }

  async initializePyodide() {
    // @ts-ignore
    let pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    })
    this.pyodideStatus = "loadingPandas"
    await pyodide.loadPackage("pandas")
    pyodide.runPython("from pandas import *")
    pyodide.runPython("from io import StringIO")
    this.pyodideStatus = "loadingDatasets"
    const datasets = await Promise.all(DATASETS.map(async (d, i) => {
      return (await loadDatasetPythonCode(d.name, d.url))()
    }))
    pyodide.runPython(`class D:__slots__ = (); ${datasets.join(";")}`)
    this.pyodide = pyodide
    this.pyodideStatus = "pyodideReady"
  }

  static styles = css`

    :host {
      height: 100vh;
      width: min(100%, 1920px);
      margin-left: auto;
      margin-right: auto;
      overflow-x: hidden;
      display: grid;
      grid-template: auto 1fr auto / 1fr auto;
      overflow-y: scroll;
      position: relative;
    }

    header {
      background: rgba(236, 239, 241, 0.85);
      grid-row: 1;
      grid-column: 1 / 3;
      display: flex;
      position: sticky;
      top: 0;
      left: 0;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 30px;
      user-select: none;
      gap: 1rem;
      z-index: 1000;
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
      flex-grow: 1;
      display: flex;
      align-self: center;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    dm-scenario-picker {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-grow: 4;
    }

    header > div {
      flex-shrink: 1;
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
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
      height: 100%;
      overflow-y: auto;
      margin-right: 30px;
    }

    div.scenario[data-active=true] dm-operation-sequence-editor {
      height: 100%;
    }
  `

  ScenarioView = (scenario: Scenario) => {
    return scenario? html`
      <div class="scenario" data-active=${scenario === this.scenario} id=${LABELS[this.lang][scenario.name as LabelKey]}>
        <dm-operation-sequence-editor .scenario=${scenario} .lang=${this.lang} .pyodide=${this.pyodide} .nodeClass=${PythonOperationNode} @nextScenario=${() => {
          const currentIndex = this.scenarios.indexOf(this.scenario)
          this.scenario = this.scenarios[currentIndex + 1]
        }}>
        </dm-operation-sequence-editor>
      </div>
    `: null
  }

  render() {

    return html`
      <header>
        <div>
          <h1>${LABELS[this.lang]["heading"]}</h1>
          <span>
            <h2>${LABELS[this.lang]["withPython"]}</h2>
            <dm-pyodide-status-icon lang=${this.lang} pyodideStatus=${this.pyodideStatus}></dm-pyodide-status-icon>
            <dm-about-tooltip>
              <p>${LABELS[this.lang]["welcomeMessage1"]}</p>
              <p>${LABELS[this.lang]["welcomeMessage2"]}</p>
              <p>${LABELS[this.lang]["welcomeMessage3"]}</p>
            </dm-about-tooltip>
          </span>
        </div>
        <dm-scenario-picker
          lang=${this.lang}
          .scenarios=${this.scenarios as Scenario[]}
          selectedIndex=${this.scenarios.indexOf(this.scenario)}
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
      ${!this.pyodide? html`<dm-loading-overlay>
        ${LABELS[this.lang][this.pyodideStatus]}
      </dm-loading-overlay>`: null}
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