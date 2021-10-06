import {LitElement, html, css, TemplateResult} from "lit"
import {customElement, property, query, queryAsync, state, queryAssignedNodes, queryAll} from "lit/decorators.js"
import {unsafeHTML} from "lit/directives/unsafe-html.js"
import {styleMap} from "lit/directives/style-map.js"
import {classMap} from 'lit/directives/class-map.js';
import { Language, LABELS, LabelKey, TEXT_PATTERNS } from "./localization"
import { Dataset, Scenario, ScenarioStyle } from "./scenarios"
import "@vaadin/vaadin-grid"

export const pythonIdentifierPattern = /\s*[a-zA-CE-Z_]\w*\s*/
export const anythingPattern = /.*/
export const nothingPattern = /a^/

const castValue = (value: any) => {
  if(value?.type === "DataFrame") {
    let records = JSON.parse(value.to_json(undefined, "records"))
    return records.map(entry => Object.fromEntries(Object.entries(entry)
      .map(([key, value]) => [key.replace(/\./g, "․"), value])
    ))
  }
  else {
    return value
  }
}



@customElement("dm-operation-sequence-editor")
export class PythonOperationSequenceEditor extends LitElement {

  @queryAll("dm-python-operation-node")
  operationNodes: NodeListOf<PythonOperationNode>

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

  @property()
  scenarioContinueSelector: string = null

  @property({type: Boolean})
  datasetsHidden = false

  @state()
  scenarioStep: number = -1

  @state()
  scenarioStopped: boolean = false

  querySelectorAllNodes = (query: string) => {
    return [
      ...this.shadowRoot.querySelectorAll(query),
      ...[...this.operationNodes].flatMap(n =>
        [...n.shadowRoot.querySelectorAll(query)])
    ]
  }


  async updated(changedProperties) {
    await Promise.all([...this.operationNodes].map(n => n.updateComplete))
    if(this.scenarioContinueSelector) {
      const continueElements = 
        this.querySelectorAllNodes(this.scenarioContinueSelector)
        .flatMap(el => ["identifier", "expression"].includes(el["name"])
          ? [el, el.nextElementSibling]
          : [el]
        )
      for(const continueElement of continueElements) {
        "disabled" in continueElement
          ? (continueElement as any).disabled = false
          : null
        continueElement.addEventListener("mousedown", this.stepScenario, true)
        continueElement.classList.add("continue")
      }
    }
    if(changedProperties.has("scenarioContinueSelector")) {
      const query = changedProperties.get("scenarioContinueSelector")
      const oldContinueElements = 
        this.querySelectorAllNodes(query)
        .flatMap(el => ["identifier", "expression"].includes(el["name"])
          ? [el, el.nextElementSibling]
          : [el]
        )
      for(const oldContinueElement of oldContinueElements) {
        "disabled" in oldContinueElement
          ? (oldContinueElement as any).disabled = true
          : null
        oldContinueElement.removeEventListener("mousedown", this.stepScenario, true)
        oldContinueElement.classList.remove("continue")
      }
    }
  }

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
    const [identifier] = statements.splice(i, 1)[0]
    try {
      this.pyodide.globals.delete(identifier)
    }
    catch(e) {}
    this.statements = statements
  }

  insertStatement(statement: [string, string], i: number = this.statements.length - 1) {
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
    this.scenarioStopped = false
    this.scenarioContinueSelector = null
  } 

  stepScenario = async () => {
    this.scenarioStep = this.scenarioStep + 1
    await Promise.all([...this.operationNodes].map(n => n.updateComplete))
    await this.updateComplete
    if(this.scenarioStep < this.scenario.program.length) {
      const task = this.scenario.program[this.scenarioStep]
      this.scenarioContinueSelector = await task(this)
    }
    else {
      this.stopScenario()
      this.requestUpdate()
    }
  }

  stopScenario = () => {
    this.scenarioStopped = true
    this.scenarioContinueSelector = null
  }

  skipScenario = async () => {
    for(let i = 0; i <= this.scenario.program.length; i++) {
      await this.stepScenario()
    } 
  }

  static styles = css`
    :host, #statements {
      display: flex;
      flex-direction: column;
    }

    :host {
      gap: 0.5rem;
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    }

    header {
      display: flex;
      margin-left: 32px;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 10px;
    }

    header > #explainer {
      flex-grow: 1;
    }

    header > dm-dataset-list {
      flex-grow: 1;
      justify-content: flex-end;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0;
      column-gap: 0.5rem;
      margin-left: 2rem;
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
      margin-left: 32px;
      width: 232.64px;
      display: inline-flex;
      opacity: 0;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      background: white;
    }

    #statements button:disabled {
      opacity: 0 !important;
      cursor: default;
    }

    #statements button:last-of-type:not(:first-child) {
      margin-top: 32px;
      height: 32px;
      opacity: 0.4;
    }

    #statements button:first-child {
      margin-top: 0;
      height: 32px;
      opacity: 0.4;
    }

    #statements button:not(:first-child):not(:last-of-type) {
      height: 32px;
      width: 40px;
      background: none;
    }

    button:hover:not(:disabled) {
      opacity: 1 !important;
      cursor: pointer;
      color: cornflowerblue;
    }

    button:active:not(:disabled) {
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
    }

    #play-or-skip {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    #play-or-skip button {
      font-size: 1rem;
      display: flex;
      align-items: center;
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
    }

    #play-or-skip ion-icon {
      font-size: 32px;
    }

    .continue {
      opacity: 1 !important;
      cursor: pointer !important;
      position: relative;
      animation: blinker 3s linear infinite !important; 
    }

    .continue * {
      cursor: pointer !important;
    }

    #explainer.continue {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: darkgreen;
    }

    #explainer.continue::before {
      display: none;
    }

    .continue::before {
      content: "";
      width: 8px;
      height: 8px;
      background: darkgreen;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 100;
    }

    @keyframes blinker {
      0% {color: inherit}
      50% {color: darkgreen}
      100% {color: inherit}
    }
  `

  insertStatementButton = (i: number = 0) => {
    return html`<button
      class="insert"
      id=insert${i}
      ?disabled=${!this.scenarioStopped || !this.scenario.isSandbox && (i < this.statements.length - 1)}
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
      ?disabled=${this.scenarioStep > -1 && !this.scenarioStopped}
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
    ${this.insertStatementButton(i)}
    `
  }

  get statementList() {
    return this.statements.length > 0
      ? this.statements.map(this.statementToNode)
      : this.insertStatementButton()
  }

  get resetButton() {
    return html`<button title=${LABELS[this.lang]["reset"]} ?disabled=${this.scenarioStep === -1} @click=${this.resetScenario}>
      <ion-icon style="pointer-events: none;" name="play-back-circle-outline"></ion-icon>
    </button>`
  }

  get stopButton() {
    return html`<button title=${LABELS[this.lang]["stop"]} ?disabled=${this.scenarioStopped || this.scenarioStep === -1} @click=${this.stopScenario}>
      <ion-icon style="pointer-events: none;" name="stop-circle-outline"></ion-icon>
    </button>`
  }

  skipButton = (showText=false, disabled=true) => {
    return html`<button title=${LABELS[this.lang]["skip"]} ?disabled=${!this.pyodide || disabled && (this.scenarioStopped || this.scenarioStep === -1)} @click=${this.skipScenario}>
      <ion-icon style="pointer-events: none;" name="play-forward-circle-outline"></ion-icon>
      ${showText? LABELS[this.lang]["choiceSkip"]: null}
    </button>`
  }

  playButton = (showText=false) => {
    return html`<button title=${LABELS[this.lang]["play"]} ?disabled=${!this.pyodide} @click=${this.stepScenario}>
      <ion-icon style="pointer-events: none;" name="play-circle-outline"></ion-icon>
      ${showText? LABELS[this.lang]["choicePlay"]: null}
    </button>`
  }

  render() {
    return html`
      <header>
        <span id="explainer">${this.explainer}</span>
        ${!this.datasetsHidden && this.scenarioStep > -1 || this.scenario.isSandbox? html`<dm-dataset-list .datasets=${this.scenario.datasets} lang=${this.lang}></dm-dataset-list>`: null}
        <nav>
          ${!this.scenario.isSandbox && this.scenarioStep > -1? this.resetButton: null}
          ${!this.scenario.isSandbox && this.scenarioStep > -1? this.stopButton: null}
          ${!this.scenario.isSandbox && this.scenarioStep > -1? this.skipButton(): null}
        </nav>
      </header>
      <div id="play-or-skip">
        ${this.scenarioStopped || this.scenario.isSandbox || this.scenarioStep > -1? null: this.playButton(true)}
        ${this.scenarioStopped || this.scenario.isSandbox || this.scenarioStep > -1? null: this.skipButton(true, false)}
      </div>
      <div id="statements">
        ${this.statementList}
      </div>
    `
  }
}

@customElement("dm-python-operation-node")
export class PythonOperationNode extends LitElement {

  static shadowRootOptions = {...LitElement.shadowRootOptions, mode: "open" as "open"}

  get identifierPlaceholder() {
    return LABELS[this.lang]["identifierPlaceholder"]
  }

  get expressionPlaceholder() {
    return LABELS[this.lang]["expressionPlaceholder"]
  }

  @property({type: String})
  identifier: string = ""

  @property({type: String})
  expression: string = ""

  @property({attribute: false})
  pyodide: any

  @property({type: String})
  lang: Language

  @property({attribute: false})
  info: string

  @property({type: Boolean})
  disabled: boolean

  @property({type: Boolean})
  alwaysShowResult: boolean = false

  @property({attribute: false})
  dynamicStyles: ScenarioStyle[] = []

  @state()
  expressionActive: boolean = false

  @state()
  pyodideError: string

  @state()
  selectedPresetName: Preset["name"] = "none"

  @state()
  recognizedPresetName: Preset["name"] = "none"
  
  @state()
  result: any

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
    if(this.expression && e.key === "ArrowDown") {
      this.emitSelectNext()
    }
    else if(this.expression && e.key === "ArrowUp") {
      this.emitSelectPrevious()
    }
    else if(!this.expression && ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)) {
      this.presetPickerJump(e)
    }
  }

  identifierFieldJump = (e: KeyboardEvent) => {
    if(!this.expression && (e.key === "ArrowRight" || e.key === "Enter") && (e.currentTarget as HTMLInputElement).selectionStart === this.identifier.length) {
      this.expressionElement.focus()
      this.expressionElement.setSelectionRange(0, 0)
    }
    else if(!this.expression && !this.identifier && e.key === "Backspace") {
      this.emitRemove()
    }
  }

  expressionFieldJump = (e: KeyboardEvent) => {
    if(e.key === "ArrowLeft" && (e.currentTarget as HTMLInputElement).selectionStart === 0) {
      this.identifierElement.focus()
      this.identifierElement.setSelectionRange(this.identifier.length, this.identifier.length)
    }
    else if(e.key === "Enter") {
      if(!this.expression) {
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
    if(e.key === "Escape") {
      (e.target as HTMLElement).blur()
    }
    else if(e.key === "ArrowDown" || e.key === "ArrowUp") {
      const oldIndex = this.presets.findIndex(p => p.name === this.selectedPresetName)
      const prevIndex = oldIndex > 0? oldIndex - 1: this.presets.length - 1
      const nextIndex = (oldIndex + 1) % this.presets.length
      this.selectedPresetName = this.presets[e.key === "ArrowDown"? nextIndex: prevIndex].name
    }
    else if(e.key === "Enter") {
      this.handlePresetChange({target: {value: this.selectedPresetName}})
    }
  }

  focus() {
    this.identifierElement.focus()
  }

  run = async () => {
    this.result = null
    if(!this.code) {return}
    try {
      this.pyodide.runPython(this.code)
      this.result = castValue(this.pyodide.globals.get(this.identifier))
    }
    catch(e) {
      this.pyodideError = /\w+Error:.*/.exec(e.message)?.at(0)
      
      if(!this.expression || !this.pyodideError) {
        this.expressionElement.setCustomValidity("")
      }
      else {
        this.expressionElement.setCustomValidity(this.pyodideError)
        window.browser.engine.name === "Gecko"? this.formElement: this.expressionElement.reportValidity()
      }
    }
  }



  handlePresetChange = (e: Event | {target: {value: string}}) => {
    this.selectedPresetName = (e.target as HTMLInputElement).value
    this.expression = this.presets.find(p => p.name === this.selectedPresetName).template
    this.emitExpressionChange()
    this.recognizedPresetName = this.matchingPreset.name
    this.pyodideError = null
    this.expressionElement.focus()
  }

  get matchingPreset() {
    return this.presets
      .filter(p => p.pattern.test(this.expression))
      .sort((a, b) => a.pattern.source.length - b.pattern.source.length)
      .at(-1)
  }

  @query("input.expression") expressionElement: HTMLInputElement
  @query("input.identifier") identifierElement: HTMLInputElement
  @query("form") formElement: HTMLFormElement


  static styles = css`

    :host {
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template-rows: minmax(36px, min-content) max-content;
      grid-template-columns: [buttons] 32px [input] max-content [output] 1fr;
      align-items: stretch;
      justify-content: flex-start;
    }

    :host(:not(:focus-within):not([alwaysShowResult])) .main {
      max-height: 32px;
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

    .main {
      box-sizing: border-box;
      border: 2px solid transparent;
      grid-row: 1;
      grid-column: input;
      background: white;
      width: fit-content;
      display: grid;
      min-height: 36px;
      max-height: 800px;
      overflow-x: hidden;
      overflow-y: hidden;
      transition: max-height 0.3s ease-out;
      justify-content: flex-start;
      align-items: center;
      grid-template-rows: 36px repeat(auto-fill, auto);
      grid-template-columns: 
        [preset] max-content
        [identifier] max-content
        [equals] max-content
        [expression] max-content
        [run] max-content
    }

    :host(:focus-within) .main {
      border: 2px solid cornflowerblue;
    }

    input {
      font-family: Inconsolata, Consolas, monospace;
      border: none;
      outline: none;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 10pt;
    }

    input:disabled {
      color: inherit;
    }

    input::placeholder {
      color: #777777;
    }

    code {
      grid-row: 1;
      grid-column: equals;
      font-family: Inconsolata, Consolas, monospace;
      user-select: none;
      display: flex;
      align-items: center;
    }

    input.identifier {
      grid-row: 1;
      grid-column: identifier;
      padding-left: 0.4rem;
      font-weight: bold;
    }

    label.identifier {
      grid-row: 1;
      grid-column: identifier;
    }

    input:invalid {
      color: darkred;
    }

    input:disabled {
      background: none;
    }

    input::placeholder {
      user-select: none;
    }


    .expression {
      grid-row: 1;
      grid-column: expression;
      padding-right: 0.2rem;
      padding-left: 0.4rem;
      word-wrap: break-word;
      word-break: break-all;
      overflow-x: hidden;
      font-family: Inconsolata, Consolas, monospace;
      font-size: 10pt;
      min-height: 32px;
      display: flex;
      align-items: center;
    }

    label.expression {
      grid-row: 1;
      grid-column: expression;
    }

    button.run {
      padding: 1px;
      padding-right: 6px;
      opacity: 0;
      grid-row: 1;
      grid-column: run;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    button.run.continue::before {
      top: 0px;
      right: 4px;
    }

    :host(:hover) button.run, :host(:focus-within) button.run {
      opacity: 1;
    }

    button.run:hover:not(:disabled) {
      color: cornflowerblue;
    }

    button.run:active:not(:disabled) {
      color: darkblue;
    }

    button.run:disabled {
      cursor: not-allowed;
    }


    #preset-sign {
      grid-row: 1;
      grid-column: preset;
      width: 32px;
      height: 100%;
      line-height: 100%;
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
      font-size: 10pt;
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
      font-family: Inconsolata, Consolas, monospace;
      font-weight: bold;
    }

    #preset-list .template {
      padding-left: 0.5rem;
      grid-column: expression;
      font-family: Inconsolata, Consolas, monospace;
    }

    .side-buttons {
      height: 100%;
      width: 32px;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .side-buttons button {
      opacity: 0;
      max-width: 32px;
      height: 36px;
      font-size: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
    }

    button.remove:disabled {
      cursor: not-allowed;
    }

    button.remove:hover:not(:disabled) {
      color: coral;
      cursor: pointer;
    }

    button.remove:active {
      color: darkred;
    }

    :host(:hover) .side-buttons button, :host(:focus-within) .side-buttons button {
      opacity: 1;
    }

    .message, .error-message {
      grid-row: 1 / -1;
      grid-column: output;
      display: inline-block;
      overflow-y: visible;
    }

    :host(:not(:focus-within)) .error-message {
      display: none;
    }

    :not(:host([alwaysShowResult])) .result {
      background: green important;
      max-height: 0px;
    }

    .result {
      grid-row: 2;
      grid-column: input;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      padding-left: 16px;
      padding-right: 16px;
      align-items: center;
      background: white;
      overflow-x: visible;
      overflow-y: hidden;
      font-size: 0.75rem;
      transition: max-height 0.3s ease-out;
    }

    .result.dataframe {
      padding: 0;
      grid-row: 2;
      grid-column: input / -1;
    }

    .result vaadin-grid {
      font-size: 0.7rem;
      width: 100%;
    }

    .result.empty {
      outline: none;
    }

    .result:not(.empty) .primitive-result {
      height: 32px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: darkgreen;
      font-family: Inconsolata, Consolas, monospace;
    }

    .result:not(.empty):not(.dataframe)::before {
      content: "⇒";
      font-size: 1.25rem;
      user-select: none;
      color: darkgreen;
      transform: translateY(-2px);
    }

    :host(:focus-within) .result, :host[alwaysShowResult] .result {
      max-height: 1080px;
    }

    .continue {
      position: relative;
      opacity: 1 !important;
      cursor: pointer !important;
      animation: blinker 3s linear infinite !important; 
    }
  
    .continue * {
      cursor: pointer !important;
    }

    .continue::before {
      content: "";
      width: 8px;
      height: 8px;
      background: darkgreen;
      border-radius: 50%;
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 100;
    }

    label.continue::before {
      top: -9px;
      right: 6px;
    }

    main.continue {
      border-color: darkgreen;
    }

    main.continue::before {
      display: none;
    }

    .identifier.continue, .expression.continue {
      text-decoration: underline;
      text-underline-position: below;
    }

    @keyframes blinker {
      0% {color: inherit}
      50% {color: darkgreen}
      100% {color: inherit}
    }

    .message mark {
      background: none;
      padding-left: 3px;
      padding-right: 3px;
    }

    .expression mark {
      font-weight: inherit !important;
    }
  `

  get PresetPicker() {

    const truePresets = this.presets.filter(preset => preset.name !== "none")
    const recognizedPreset = this.presets.find(preset => preset.name === this.recognizedPresetName)



    const presets = truePresets.map(preset => html`
      <input
        type="radio"
        name="radio"
        ?disabled=${this.disabled}
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
      <div id="preset-sign">${recognizedPreset.sign}</div>
      <ul id="preset-list">
          ${!this.expression? presets: null}
      </ul>`
  }

  get infoMessageTextStyled() {
    return unsafeHTML(this.dynamicStyles.reduce((result, s) => {
      const pattern = TEXT_PATTERNS[this.lang][s.textPatternName]
      return result.replaceAll(pattern ?? /a^/g, `<mark style="${s.style}">$&</mark>`)
    }, this.info))
  }


  get infoMessage() {
    return !this.info? null: html`<dm-message minimal class="message fade-in" id=${"message" + this.id}>
      ${this.infoMessageTextStyled}
    </dm-message>`
  }

  get resultView() {
    if(typeof this.result !== "object") {
      return html`<div class="primitive-result">${this.result}</div>`
    }
    else if(this.result === null) {
      return null
    }
    else {
      const columns = this.result.length? Object.keys(this.result[0])
      .map(key => html`<vaadin-grid-column path=${key} auto-width></vaadin-grid-column>`)
      : null
      return html`
      <vaadin-grid tabindex=-1 .items=${this.result}>
        ${columns}
      </vaadin-grid>
      `
    }
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

  emitRemove = () => {
    this.dispatchEvent(new CustomEvent("remove", {
      bubbles: true,
      composed: true
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

  get expressionInputTextStyled() {
    return unsafeHTML(this.dynamicStyles.reduce((result, s) => {
      return result.replaceAll(s.expressionPattern ?? /a^/g, `<mark style="${s.style}">$&</mark>`)
    }, this.expression))
  }

  expressionBlurTimeout: any = null

  get expressionInput() {    
    return this.dynamicStyles.length === 1 || this.expressionActive
      ? html`
        <input
          class="expression"
          id=${"expression" + this.id}
          name="expression"
          pattern=${(this.pyodideError? nothingPattern: anythingPattern).source}
          placeholder=${this.expressionPlaceholder}
          spellcheck=${false}
          autocomplete="off"
          ?disabled=${this.disabled}
          size=${this.expressionFieldSize}
          .value=${this.expression}
          @input=${e => {
            this.expression = e.currentTarget.value
            if(!this.expression) {
              this.selectedPresetName = "none"
            }
            this.recognizedPresetName = this.matchingPreset.name
            this.pyodideError = null
            this.expressionElement.setCustomValidity("")
            this.result = null
          }}
          @keydown=${this.expressionFieldJump}
          @change=${e => {
            this.expression = e.target.value
            this.emitExpressionChange()
          }}
        />
        <label class="expression" for="expression"></label>
      `
      : html`
        <span
          class="expression"
          id=${"expression" + this.id}
          name="expression"
          ?disabled=${this.disabled}
          tabIndex=0
          @focus=${() => {
            clearTimeout(this.expressionBlurTimeout);
            this.expressionActive = true
          }}
          style="width: calc(${this.expressionFieldSize }ch + 14.75px); color: ${this.expression? "inherit": "#777777"}"
        ><span class="expression-content">
          ${this.expression
            ? this.expressionInputTextStyled
            : this.expressionPlaceholder}
          </span>
        </span>
      `
  }

  get identifierInputStyles() {
    const s = this.dynamicStyles.find(s => s.identifierPattern)
    return s?.identifierPattern?.test(this.identifier)? s.style: {}
  }

  updated(diff: Map<string, any>) {
    diff.has("expressionActive") && this.expressionActive && this.expressionElement.focus()
  }

  render() {

    const resultClasses = {
      "result": true,
      "dataframe": Array.isArray(this.result),
      "empty": !this.result,
      "hidable": !this.alwaysShowResult,
      "primitive": typeof this.result !== "object"
    }

    const buttons = html`
      <button
        class="remove"
        id=${"remove" + this.id}
        ?disabled=${this.disabled}
        @focus=${e => e.preventDefault()}
        @mousedown=${this.emitRemove}>
        <ion-icon style="pointer-events: none;" name="close-circle-outline"></ion-icon>
      </button>
    `

    return html`
      <div class="side-buttons" id=${"side-buttons" + this.id}>
        ${buttons}
      </div>
      <form tabIndex=${this.disabled? -1: undefined} @submit=${e => e.preventDefault()} class="main" id=${"main" + this.id} @keydown=${this.jump} @focusout=${e => {e.relatedTarget?.click()}}>
        ${this.PresetPicker}
        <input
          class="identifier"
          id=${"identifier" + this.id}
          name="identifier"
          style=${this.identifierInputStyles}
          pattern=${pythonIdentifierPattern.source}
          placeholder=${this.identifierPlaceholder}
          spellcheck=${false}
          autocomplete="off"
          ?disabled=${this.disabled}
          size=${this.identifierFieldSize}
          .value=${this.identifier}
          @input=${e => {
            this.pyodideError = null
            this.identifier = this.identifierElement.value
            this.identifierElement.setCustomValidity(pythonIdentifierPattern.test(this.identifier)? "": LABELS[this.lang]["identifierInvalid"])
          }}
          @change=${e => {
            e.currentTarget.value = e.currentTarget.value.trim()
            this.emitIdentifierChange()
            if(this.identifier && !pythonIdentifierPattern.test(this.identifier)) {
              this.identifierElement.setCustomValidity(LABELS[this.lang]["identifierInvalid"])
              window.browser.engine.name === "Gecko"? this.formElement: this.identifierElement.reportValidity()
            }
            e.preventDefault()
            e.stopPropagation()
          }}
          @keydown=${this.identifierFieldJump}
        />
        <label class="identifier" for="identifier"></label>
        <code>=</code>
        ${this.expressionInput}
        <button
          class="run"
          id=${"run" + this.id}
          @mousedown=${this.run}
          ?disabled=${this.disabled || !this.code || !this.pyodide || !pythonIdentifierPattern.test(this.identifier)}
          title=${
            !this.code
            ? LABELS[this.lang]["noIdentifierOrExpression"]
            : !this.pyodide
              ? LABELS[this.lang]["loadingPyodide"]
              : LABELS[this.lang]["runCode"]
          }>
          <ion-icon style="pointer-events: none;" name="caret-forward-circle-outline"></ion-icon>
        </button>
        </form>
      ${this.infoMessage}
      <div class=${classMap(resultClasses)} id=${"result" + this.id}>
        ${this.resultView}
      </div>
    `
  }
}

interface Preset {
  pattern: RegExp
  sign: string
  name: string
  template: string
}

const PRESETS = [
/*  {
    name: "load",
    sign: "➞",
    pattern: /\s*read_(csv|excel|json)\((.*),?(.*)\)\s*$/,
    template: "read_csv(x)"
  },*/
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