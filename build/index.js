var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {LitElement, html, css} from "./_snowpack/pkg/lit.js";
import {customElement, property, state} from "./_snowpack/pkg/lit/decorators.js";
import "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js";
import "./editor.js";
import "./widgets.js";
import {LABELS} from "./localization.js";
import {DATASETS, scenarios} from "./scenarios.js";
import {PythonOperationNode} from "./editor.js";
import Bowser from "./_snowpack/pkg/bowser.js";
let BROWSER = Bowser.parse(window.navigator.userAgent);
window.browser = BROWSER;
const PERSONALS = html`
  <span>© 2021 Frederic Salmen <a href="mailto:&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;">(&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;)</a></span>
`;
const REPOSITORY = html`
<a title="GitHub" href="https://github.com/salmenf/datamoves">
  <ion-icon style="pointer-events: none" name="logo-github"></ion-icon>
</a>
`;
async function loadDatasetPythonCode(identifier, url) {
  const text = await (await fetch(url)).text();
  return (...args) => `${identifier} = read_csv(StringIO("""${text}"""),${args.join(",")})`;
}
let App = class extends LitElement {
  constructor() {
    super();
    this.scenario = scenarios[0];
    this.scenarios = scenarios;
    this.pyodide = null;
    this.pyodideStatus = "loadingPyodide";
    this.datasets = DATASETS;
    this.lang = "DE";
    this.ScenarioView = (scenario) => {
      return scenario ? html`
      <div class="scenario" data-active=${scenario === this.scenario} id=${LABELS[this.lang][scenario.name]}>
        <dm-operation-sequence-editor .scenario=${scenario} .lang=${this.lang} .pyodide=${this.pyodide} .nodeClass=${PythonOperationNode}>
        </dm-operation-sequence-editor>
      </div>
    ` : null;
    };
    this.initializePyodide().catch((e) => this.pyodideStatus = "pyodideError");
  }
  async initializePyodide() {
    let pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    });
    this.pyodideStatus = "loadingPandas";
    await pyodide.loadPackage("pandas");
    pyodide.runPython("from pandas import *");
    pyodide.runPython("from io import StringIO");
    this.pyodideStatus = "loadingDatasets";
    const datasets = await Promise.all(DATASETS.map(async (d, i) => {
      return (await loadDatasetPythonCode(d.name, d.url))();
    }));
    pyodide.runPython(`class D:__slots__ = (); ${datasets.join(";")}`);
    this.pyodide = pyodide;
    this.pyodideStatus = "pyodideReady";
  }
  render() {
    return html`
      <header>
        <div>
          <h1>${LABELS[this.lang]["heading"]}</h1>
          <span>
            <h2>${LABELS[this.lang]["withPython"]}</h2>
            <dm-pyodide-status-icon lang=${this.lang} pyodideStatus=${this.pyodideStatus}></dm-pyodide-status-icon>
          </span>
        </div>
        <dm-scenario-picker
          lang=${this.lang}
          .scenarios=${this.scenarios}
          selectedIndex=${0}
          @change=${(e) => {
      this.scenario = e.currentTarget.value;
    }}
        ></dm-scenario-picker>
        <dm-language-picker lang=${this.lang} @change=${(e) => {
      this.lang = e.currentTarget.value;
    }}></dm-language-picker>
      </header>
      <main>
          ${this.scenarios.map(this.ScenarioView)}
      </main>
      <footer>
        ${PERSONALS}
        ${REPOSITORY}
      </footer>
      ${!this.pyodide ? html`<dm-loading-overlay>
        ${LABELS[this.lang][this.pyodideStatus]}
      </dm-loading-overlay>` : null}
    `;
  }
};
App.styles = css`

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
  `;
__decorate([
  state()
], App.prototype, "scenario", 2);
__decorate([
  state()
], App.prototype, "scenarios", 2);
__decorate([
  state()
], App.prototype, "pyodide", 2);
__decorate([
  state()
], App.prototype, "pyodideStatus", 2);
__decorate([
  state()
], App.prototype, "datasets", 2);
__decorate([
  property()
], App.prototype, "lang", 2);
App = __decorate([
  customElement("dm-app")
], App);
