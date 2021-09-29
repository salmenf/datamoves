import {LitElement, html, css, TemplateResult} from "lit"
import {customElement, property, query, queryAsync, state, queryAssignedNodes, queryAll} from "lit/decorators.js"
import { Language, getLabel, LabelKey } from "./localization"
import { Scenario } from "./scenarios"


export const pythonIdentifierPattern = /\s*[a-zA-Z_]\w*\s*/

export interface OperationNode<R=string> extends Node {
  expression: string
  identifier: R
  run(): R
}

@customElement("dm-operation-sequence-editor")
export class PythonOperationSequenceEditor extends LitElement {

  @property({attribute: false})
  pyodide: any

  @property()
  lang: Language

  @property({attribute: false})
  explainer: TemplateResult = html``

  @property({attribute: false})
  statements: [string, string][] = []

  @property({attribute: false})
  scenario: Scenario

  @state()
  scenarioStep: number = -1

  setIdentifier(identifier: string, i: number) {
    const statements = [...this.statements]
    statements[i] = [identifier, this.statements[i][1]]
    this.statements = statements
  }

  setExpression(expression: string, i: number) {
    const statements = [...this.statements]
    statements[i] = [this.statements[i][0], expression]
    this.statements = statements
  }

  removeStatement(i: number) {
    const statements = [...this.statements]
    statements.splice(i, 1)
    this.statements = statements
  }

  insertStatement(statement: [string, string], i: number) {
    const statements = [...this.statements]
    statements.splice(i + 1, 0, statement)
    this.statements = statements
  }

  getOperationNode = (i: number | string) => {
    return this.shadowRoot.querySelector(`[id='${i}']`) as HTMLElement
  }

  resetScenario = () => {
    this.explainer = null
    this.statements = []
    this.scenarioStep = -1
  } 

  stepScenario = () => {
    this.scenario.program[this.scenarioStep + 1](this)
    this.scenarioStep = this.scenarioStep + 1 
  }

  skipScenario = () => {
    this.scenario.program.slice(this.scenarioStep).forEach(task => task(this))
    this.scenarioStep = this.scenario.program.length - 1
  }

  static styles = css`
    :host, #statements {
      display: flex;
      flex-direction: column;
    }

    :host {
      gap: 0.5rem;
    }

    header {
      display: flex;
      margin-left: 40px;
      flex-direction: row;
      justify-content: space-between;
      padding-right: 30px;
    }

    span {
      max-width: 800px;
      font-size: 0.9rem;
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-left: 1rem;
    }

    #statements button {
      border: none;
      font-size: 24px;
      margin-left: 40px;
      width: 242.4px;
      display: inline-flex;
      opacity: 0;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      background: white;
    }

    #statements button:last-of-type:not(:first-child) {
      margin-top: 30px;
      height: 40px;
      opacity: 0.4;
    }

    #statements button:first-child {
      margin-top: 0;
      height: 40px;
      opacity: 0.4;
    }

    #statements button:not(:first-child):not(:last-of-type) {
      height: 30px;
      background: none;
    }

    button:hover {
      opacity: 1 !important;
      color: cornflowerblue;
    }

    button:active {
      color: darkblue;
    }

    nav button {
      display: inline-flex;
      font-size: 24px;
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    #play-or-skip {
      display: flex;
      justify-content: space-around;
    }

    #play-or-skip button {
      font-size: 1rem;
      display: flex;
      align-items: center;
      border: none;
      padding: 0;
      background: none;
      cursor: pointer
    }

    #play-or-skip ion-icon {
      font-size: 32px;
    }
  `

  insertStatementButton = (i: number = 0) => {
    return html`<button
      id="insert"
      @click=${async (e: Event) => {
        this.insertStatement(["", ""], i)
        await this.updateComplete;
        (this.getOperationNode(i + 1) ?? this.getOperationNode(0)).focus()
      }}>
      <ion-icon style="pointer-events: none;" name="add-circle-outline"></ion-icon>
    </button>`
  }

  statementToNode = (statement: [string,string], i: number) => {
    const [identifier, expression] = statement
    return html`<dm-python-operation-node
      class="fade-in"
      id=${i}
      .statement=${statement}
      identifier=${identifier}
      expression=${expression}
      .pyodide=${this.pyodide}
      .lang=${this.lang}
      @identifierChange=${e => this.setIdentifier(e.target.identifier, i)}
      @expressionChange=${e => this.setExpression(e.target.expression, i)}
      @selectPrevious=${e => this.getOperationNode(parseInt(e.target.id) - 1)?.focus()}
      @selectNext=${e => this.getOperationNode(parseInt(e.target.id) + 1)?.focus()}
      @remove=${e => this.removeStatement(i)}>
    </dm-python-operation-node>
    ${this.scenario? null: this.insertStatementButton(i)}
    `
  }

  get statementList() {
    return this.statements.length > 0
      ? this.statements.map(this.statementToNode)
      : this.scenario? null: this.insertStatementButton()
  }

  get resetButton() {
    return html`<button @click=${this.resetScenario}>
      <ion-icon style="pointer-events: none;" name="play-back-circle-outline"></ion-icon>
    </button>`
  }

  skipButton = (showText=false) => {
    return html`<button ?disabled=${!this.pyodide} @click=${this.skipScenario}>
      <ion-icon style="pointer-events: none;" name="play-forward-circle-outline"></ion-icon>
      ${showText? getLabel(this.lang, "choiceSkip"): null}
    </button>`
  }

  playButton = (showText=false) => {
    return html`<button ?disabled=${!this.pyodide} @click=${this.stepScenario}>
      <ion-icon style="pointer-events: none;" name="play-circle-outline"></ion-icon>
      ${showText? getLabel(this.lang, "choicePlay"): null}
    </button>`
  }

  render() {
    console.log(this.scenario)
    return html`
      <header>
        <span>${this.explainer}</span>
        <nav>
          ${this.scenarioStep === -1? null: this.resetButton}
          ${this.scenarioStep === -1? null: this.skipButton()}
        </nav>
      </header>
      <div id="play-or-skip">
        ${!this.scenario || this.scenarioStep > -1? null: this.playButton(true)}
        ${!this.scenario || this.scenarioStep > -1? null: this.skipButton(true)}
      </div>
      <div id="statements">
        ${this.statementList}
      </div>
    `
  }
}

@customElement("dm-python-operation-node")
export class PythonOperationNode extends LitElement implements OperationNode<string> {

  get identifierPlaceholder() {
    return getLabel(this.lang, "identifierPlaceholder")
  }

  get expressionPlaceholder() {
    return getLabel(this.lang, "expressionPlaceholder")
  }

  constructor() {
    super()
    this.addEventListener("focus", () => this.identifierElement.focus())
  }

  

  @property({type: String})
  identifier: string = ""

  @property({type: String})
  expression: string = ""

  @property({attribute: false})
  pyodide: any

  @property({type: String})
  lang: Language

  @property({type: String})
  info: string

  @state()
  pyodideError: string

  @state()
  selectedPresetName: Preset["name"] = "none"

  @state()
  recognizedPresetName: Preset["name"] = "none"

  @state()
  pickingPreset: boolean

  presets: Preset[] = PRESETS

  get code() {
    return this.identifier && this.expression
      ? this.identifier + " = " + this.expression
      : ""
  }

  get identifierFieldSize() {
    return Math.max(
        this.identifier.length,
        this.identifierPlaceholder.length, 
        ...this.presets.map(p => p.name.length)
      )
  }

  get expressionFieldSize() {
    return this.expression.length > this.expressionPlaceholder.length
      ? this.expression.length
      : this.expressionPlaceholder.length
  }

  jump = (e: KeyboardEvent) => {
    if(!this.pickingPreset && e.key === "ArrowDown") {
      this.emitSelectNext()
    }
    else if(!this.pickingPreset && e.key === "ArrowUp") {
      this.emitSelectPrevious()
    }
    else if(this.pickingPreset && ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)) {
      this.presetPickerJump(e)
    }
  }

  identifierFieldJump = (e: KeyboardEvent) => {
    if(!this.pickingPreset && (e.key === "ArrowRight" || e.key === "Enter") && (e.currentTarget as HTMLInputElement).selectionStart === this.identifier.length) {
      this.expressionElement.focus()
      this.expressionElement.setSelectionRange(0, 0)
    }
  }

  expressionFieldJump = (e: KeyboardEvent) => {
    if(e.key === "ArrowLeft" && (e.currentTarget as HTMLInputElement).selectionStart === 0) {
      this.identifierElement.focus()
      this.identifierElement.setSelectionRange(this.identifier.length, this.identifier.length)
    }
    else if(e.key === "Enter") {
      if(this.pickingPreset) {
        this.presetPickerJump(e)
      }
      else {
        this.run()
      }
      
    }
    else if(e.key == "Escape") {
      this.presetPickerJump(e)
    }
  }

  presetPickerJump = (e: KeyboardEvent) => {
    if(this.pickingPreset && e.key === "Escape") {
      this.pickingPreset = false
    }
    else if(!this.pickingPreset && e.key === "Escape") {
      (e.target as HTMLElement).blur()
    } 
    else if(this.pickingPreset && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      const oldIndex = this.presets.findIndex(p => p.name === this.selectedPresetName)
      const prevIndex = oldIndex > 0? oldIndex - 1: this.presets.length - 1
      const nextIndex = (oldIndex + 1) % this.presets.length
      this.selectedPresetName = this.presets[e.key === "ArrowDown"? nextIndex: prevIndex].name
    }
    else if(e.key === "Enter") {
      this.handlePresetChange({target: {value: this.selectedPresetName}})
    }
  }

  run = () => {
    if(!this.code) {return}
    this.pickingPreset = false
    try {
      this.pyodide.runPython(this.code)
    }
    catch(e) {
      this.pyodideError = /\w+Error:.*/.exec(e.message)?.at(0)
      this.expressionElement.setCustomValidity(this.pyodideError)
    }
    const result = this.pyodide.globals.get(this.identifier)
    return result
  }

  handlePresetChange = (e: Event | {target: {value: string}}) => {
    this.selectedPresetName = (e.target as HTMLInputElement).value
    this.expression = this.presets.find(p => p.name === this.selectedPresetName).template
    this.emitExpressionChange()
    this.recognizedPresetName = this.matchingPreset.name
    this.pickingPreset = false
    this.pyodideError = null
    this.expressionElement.focus()
  }

  get matchingPreset() {
    return this.presets
      .filter(p => p.pattern.test(this.expression))
      .sort((a, b) => a.pattern.source.length - b.pattern.source.length)
      .at(-1)
  }

  @query("input#expression") expressionElement: HTMLInputElement
  @query("input#identifier") identifierElement: HTMLInputElement


  static styles = css`

    :host {
      width: fit-content;
      height: fit-content;
      max-width: 80vw;
      display: flex;
      align-items: stretch;
    }

    :host(.fade-in) {
      opacity: 1;
      animation-name: fadeIn;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
    }

    @keyframes fadeIn {
      0% {opacity: 0}
      100% {opacity: 1}
    }

    main {
      background: white;
      width: fit-content;
      display: grid;
      max-width: 80vw;
      align-items: center;
      grid-template-rows: 40px repeat(auto-fill, auto);
      grid-template-columns: 
        [preset] max-content
        [identifier] max-content
        [equals] max-content
        [expression] max-content
        [run] max-content
    }

    main:focus-within {
      outline: 2px solid cornflowerblue;
    }

    input {
      min-height: 40px;
      font-family: Consolas, monospace;
      border: none;
      outline: none;
      padding-top: 0;
      padding-bottom: 0;
    }

    code {
      grid-row: 1;
      grid-column: equals;
      font-family: Consolas, monospace;
      user-select: none;
      display: flex;
      align-items: center;
    }

    input#identifier {
      grid-row: 1;
      grid-column: identifier;
      padding-left: 0.5rem;
      font-weight: bold;
    }

    input:invalid {
      text-decoration: underline;
      text-decoration-color: darkred;
    }

    input::placeholder {
      user-select: none;
    }

    input#expression {
      grid-row: 1;
      grid-column: expression;
      padding-right: 0.25rem;
      padding-left: 0.5rem;
      max-width: 80ch;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
    }

    button#run {
      opacity: 0;
      grid-row: 1;
      grid-column: run;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 1.75rem;
      cursor: pointer;
    }

    :host(:hover) button#run, :host(:focus-within) button#run {
      opacity: 1;
    }

    button#run:hover:not(:disabled) {
      color: cornflowerblue;
    }

    button#run:active:not(:disabled) {
      color: darkblue;
    }

    button#run:disabled {
      cursor: not-allowed;
    }


    #preset-sign {
      grid-row: 1;
      grid-column: preset;
      width: 30px;
      height: 100%;
      line-height: 40px;
      display: flex;
      color: cornflowerblue;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font: inherit;
      font-weight: bold;
      font-size: 0.9rem;
      user-select: none;
    }

    #preset-list {
      display: contents;
      background: white;
      font-size: 0.75rem;
    }

    #preset-list input[type="radio"] {
      position: absolute;
      width: 0;
      height: 0;
    }

    #preset-list label {
      display: contents;
      padding: 0;
      cursor: pointer;
      user-select: none;
      width: 100px;
    }

    #preset-list label[data-selected=true] > * {
      color: cornflowerblue;
    }

    #preset-list > *:hover {
      color: cornflowerblue;
    }

    #preset-list > *:active {
      color: darkblue;
    }

    #preset-list > * > * {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }

    #preset-list > *:last-child > * {
      margin-bottom: 0.5rem;
    }

    #preset-list .sign {
      grid-column: preset;
      font-weight: bold;
      text-align: center;
      font-size: 0.75rem;
    }

    #preset-list .name {
      padding-left: 0.5rem;
      grid-column: identifier;
      font-family: Consolas, monospace;
      font-weight: bold;
    }

    #preset-list .template {
      padding-left: 0.5rem;
      grid-column: expression;
      font-family: Consolas, monospace;
    }

    dm-message, dm-error-message {
      display: inline-block;
      height: 40px;
    }

    #side-buttons {
      height: 40px;
      width: 40px;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    #side-buttons button {
      opacity: 0;
      max-width: 40px;
      min-height: 40px;
      font-size: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
    }

    button#remove:hover {
      color: coral;
    }

    button#remove:active {
      color: darkred;
    }

    :host(:hover) #side-buttons button, :host(:focus-within) #side-buttons button {
      opacity: 1;
    }
  `

  get PresetPicker() {

    const truePresets = this.presets.filter(preset => preset.name !== "none")
    const recognizedPreset = this.presets.find(preset => preset.name === this.recognizedPresetName)



    const presets = truePresets.map(preset => html`
      <input
        type="radio"
        name="radio"
        value=${preset.name}
        id=${preset.name}
        ?data-checked=${preset.name === this.selectedPresetName}
        @change=${this.handlePresetChange}
      >
      <label data-selected=${preset.name === this.selectedPresetName} for=${preset.name}>
        <span class="sign" tabIndex=-1>${preset.sign}</span>
        <span class="name" tabIndex=-1>${preset.name}</span>
        <span class="template" tabIndex=-1>${preset.template}</span>
      </label>
    `)

    return html`
      <div tabIndex=-1 @click=${() => {this.identifierElement.focus(); this.pickingPreset = true}} id="preset-sign">${recognizedPreset.sign}</div>
      ${this.pickingPreset 
        ? html`<ul id="preset-list">
          ${presets}
        </ul>`
        : null
      }
    `
  }

  get errorMessage() {
    const {identifierElement} = this
    let message = null
    if(this.pyodideError) {
      message = this.pyodideError
    }
    else if(!identifierElement?.reportValidity() && identifierElement?.value) {
      message = getLabel(this.lang, "identifierInvalid")
    }
    return !message? null: html`<dm-error-message class="fade-in">
      ${message}
    </dm-error-message>`
  }

  get infoMessage() {
    return !this.info? null: html`<dm-message class="fade-in">
      ${this.info}
    </dm-message>`
  }

  get message() {
    return this.errorMessage? this.errorMessage: this.infoMessage
  }

  handleBlur = e => {
    const tagName = e.relatedTarget?.parentElement?.tagName
    if(e.relatedTarget?.id !== "preset-sign" && tagName !== "LABEL" && tagName !== "UL" && tagName !== "DIV") {
      this.pickingPreset = false
      this.active = false
    }
  }

  handleFocus = e => {
    this.active = true
  }

  emitIdentifierChange = () => {
    this.dispatchEvent(new CustomEvent("identifierChange", {
      bubbles: true,
      composed: true
    }))    
  }

  emitExpressionChange = () => {
    this.dispatchEvent(new CustomEvent("expressionChange", {
      bubbles: true,
      composed: true
    }))    
  }

  emitRemove = (index: number) => {
    this.dispatchEvent(new CustomEvent("remove", {
      bubbles: true,
      composed: true,
      detail: {index}
    }))
  }

  emitSelectPrevious = () => {
    this.dispatchEvent(new CustomEvent("selectPrevious", {
      bubbles: true,
      composed: true
    }))
  }

  emitSelectNext = () => {
    this.dispatchEvent(new CustomEvent("selectNext", {
      bubbles: true,
      composed: true
    }))
  }


  @state()
  active: boolean = false

  tabIndex = 0

  render() {

    const buttons = html`
      <button
        id="remove"
        @click=${this.emitRemove}>
        <ion-icon style="pointer-events: none;" name="close-circle-outline"></ion-icon>
      </button>
    `

    return html`
      <div id="side-buttons">
        ${buttons}
      </div>
      <main @keydown=${this.jump} @focusin=${this.handleFocus} @focusout=${this.handleBlur}>
        ${this.PresetPicker}
        <input
          id="identifier"
          pattern=${pythonIdentifierPattern.source}
          placeholder=${this.identifierPlaceholder}
          spellcheck=${false}
          autocomplete=${false}
          size=${this.identifierFieldSize}
          .value=${this.identifier}
          @input=${e => {
            this.pyodideError = null
            this.identifier = e.currentTarget.value
            e.currentTarget.setCustomValidity("")
            e.currentTarget.checkValidity()
            
          }}
          @change=${e => {
            e.currentTarget.value = e.currentTarget.value.trim()
            this.emitIdentifierChange()
          }}
          @invalid=${e => {
            e.currentTarget.setCustomValidity(getLabel(this.lang, "identifierInvalid"))
            e.preventDefault()
          }}
          @keydown=${this.identifierFieldJump}
          @focus=${() => this.pickingPreset = !this.expression}
        />
        <code>=</code>
        <input
          id="expression"
          placeholder=${this.expressionPlaceholder}
          spellcheck=${false}
          autocomplete=${false}
          size=${this.expressionFieldSize}
          .value=${this.expression}
          @input=${e => {
            e.currentTarget.setCustomValidity("")
            this.expression = e.currentTarget.value
            this.pickingPreset = !this.expression
            if(!this.expression) {
              this.selectedPresetName = "none"
            }
            this.recognizedPresetName = this.matchingPreset.name
            this.pyodideError = null
          }}
          @keydown=${this.expressionFieldJump}
          @focus=${() => this.pickingPreset = !this.expression}
          @change=${e => {
            this.expression = e.target.value
            this.emitExpressionChange()
          }}
        />
        <button
          id="run"
          @click=${this.run}
          ?disabled=${!this.code || !this.pyodide}
          title=${
            !this.code
            ? getLabel(this.lang, "noIdentifierOrExpression")
            : !this.pyodide
              ? getLabel(this.lang, "pythonLoading")
              : getLabel(this.lang, "runCode")
          }>
          <ion-icon style="pointer-events: none;" name="caret-forward-circle-outline"></ion-icon>
        </button>
      </main>
      <aside>
        ${this.message}
      </aside>
    `
  }
}

interface Preset {
  pattern: RegExp
  sign: string
  name: string
  template: string
//  template: (...args: string[]) => string
}

const PRESETS = [
  {
    name: "load",
    sign: "➞",
    pattern: /\s*read_(csv|excel|json)\(.*\)\s*$/,
    template: "a.read_csv(x)"
//    template: (filepath: string, filetype: "csv" | "excel" | "json") => ``
  },
  {
    name: "select",
    sign: "σ",
    pattern: /\s*([a-zA-Z_]\w*)(?:\[(.*)\])+\s*$/,
    template: "a[p][q]"
  },
  {
    name: "map",
    sign: "λ",
    pattern: /\s*([a-zA-Z_]\w*)(?:\[(.*)\])+\.apply\((.*)\)\s*$/,
    template: "a[p][q].apply(lambda x:f)"
  },
  {
    name: "calculate",
    sign: "κ",
    pattern: /\s*([a-zA-Z_]\w*)(?:\[(.*)\])?\.apply\((.*),\s*axis=1\)\s*$/,
    template: "a.apply(lambda x:f, axis=1)"
  },
  {
    name: "aggregate",
    sign: "γ",
    pattern: /\s*([a-zA-Z_]\w*)\.groupby\((.*)\)\.agg\((.*)\)\s*$/,
    template: "a.groupby(p).agg(lambda x:f)"
  },
  {
    name: "add",
    sign: "⋃",
    pattern: /\s*([a-zA-Z_]\w*)\.concat\(([a-zA-Z_]\w*)\)\s*$/,
    template: "a.concat(b)"
  },
 /* {
    name: "subtract",
    sign: "⎯",
    pattern: /([a-zA-Z_]\w*)\.merge\(([a-zA-Z_]\w*),\s*indicator=True,\s*how='left'\)\[lambda\s*x:\s*x\._merge=='left_only'\]\.drop\('_merge',\s*1\)$/,
    template: ".merge(, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)"
  },*/
  {
    name: "intersect",
    sign: "⋂",
    pattern: /\s*([a-zA-Z_]\w*)\[\(([a-zA-Z_]\w*)==([a-zA-Z_]\w*)\)\.values\.all\(axis=1\)\]\s*$/,
    template: "a[(a==b).values.all(axis=1)]"
  },
  {
    name: "relate",
    sign: "⋈",
    pattern: /\s*([a-zA-Z_]\w*)\.merge\(([a-zA-Z_]\w*),\s*how=('|")cross('|")\)(?:\[(.*)\])?\s*$/,
    template: "a.merge(b, how='cross')[p]"
  },
  {
    name: "none",
    sign: "",
    pattern: /.*/,
    template: ""
  }
]

/*
const DATA_MOVES = {
  loadCSV: read_csv(from_file)
  loadExcel: read_excel(from_file)
  loadJSON: read_json(from_file)
  select: d[condition][attrs]
  map: d[condition][attrs].apply(func)
  calculate: d.apply[attrs](func, axis=1)
  aggregate: d.groupby(attrs).agg(attr_func_pairs)
  add: d1.concat(d2)
  subtract: d1.merge(d2, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)
  intersect: d1[(d1==d2).values.all(axis=1)]
  relate: d1.merge(d2, how='cross')[condition]
}
*/