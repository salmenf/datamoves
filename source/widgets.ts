import "@vaadin/vaadin-grid"
import {LitElement, html, css, CSSResult, CSSResultArray} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import {unsafeSVG} from 'lit/directives/unsafe-svg.js'
import * as FLAGS from 'country-flag-icons/string/3x2'
import { Scenario } from "./scenarios"
import "ionicons"
import { getLabel, LabelKey, Language } from "./localization"

@customElement("dm-dataset-view")
export class DatasetView extends LitElement {}


@customElement("dm-code-input")
export class CodeInput extends LitElement {}


@customElement("dm-language-picker")
export class LanguagePicker extends LitElement {
  names = {"DE": "Deutsch", "GB": "English"}

  @property({type: String})
  value: keyof LanguagePicker["names"] = "DE"

  @query('input[name="radio"]:checked')
  private checkedElement: HTMLInputElement

  static styles = css`

    :root {
      display: flex;
    }

    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    label {
      display: inline-block;
      padding: 0;
      margin-left: 0.25rem;
      width: 1.5rem;
      height: 1rem;
      padding: 4px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      user-select: none;
    }

    label:hover {
      border-bottom: 3px dotted cornflowerblue;
    }

    label:active {
      border-bottom: 3px dotted darkblue;
    }

    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
    }

    input[type="radio"]:checked:active + label {
      border-bottom: 3px solid darkblue;
    }
  `

  handleChange(e: Event) {
    this.value = this.checkedElement.value as keyof LanguagePicker["names"]
    this.dispatchEvent(new Event("change", {bubbles: true, composed: true}))
  }

  render() {

    return Object.keys(this.names).map(lang => html`
      <input
        type="radio"
        name="radio"
        value=${lang}
        id=${lang}
        ?checked=${lang === this.value}
        @change=${this.handleChange}
      >
      <label for=${lang} title=${this.names[lang]}>${unsafeSVG(FLAGS[lang])}</label>
    `)

  }
}

@customElement("dm-scenario-picker")
export class ScenarioPicker extends LitElement {

  @property()
  lang: Language

  @property({attribute: false})
  scenarios: Scenario[]

  @state()
  selectedIndex: number = null

  get value() {
    return this.selectedIndex !== null? this.scenarios[this.selectedIndex]: null
  }

  @query('input[name="radio"]:checked')
  private checkedElement: HTMLInputElement

  static styles = css`

    :root {
      display: inline-flex;
    }

    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    label {
      display: inline-block;
      padding: 0;
      margin-left: 0.25rem;
      padding: 4px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      user-select: none;
    }

    label:hover {
      border-bottom: 3px dotted cornflowerblue;
    }

    label:active {
      border-bottom: 3px dotted darkblue;
    }


    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
    }

    input[type="radio"]:checked:active + label {
      border-bottom: 3px solid darkblue;
    }

    label.sandbox {
      font-style: italic;
    }
  `

  handleChange(e: Event) {
    this.selectedIndex = parseInt(this.checkedElement.value)
    this.dispatchEvent(new Event("change", {bubbles: true, composed: true}))
  }

  render() {
    return this.scenarios.map((scenario, i) => html`
      <input
        type="radio"
        name="radio"
        value=${i}
        id=${i}
        ?checked=${i === this.selectedIndex}
        @change=${this.handleChange}
      >
      <label class=${scenario.isSandbox? "sandbox": ""} for=${i}>
        ${getLabel(this.lang, scenario.name as LabelKey)}
      </label>
    `)

  }
}

@customElement("dm-message")
class Message extends LitElement {

  static styles: CSSResult | CSSResultArray = css`
    :host {
      overflow-wrap: break-word;
      background: lightblue;
      padding: 0.425rem;
      font-size: 0.6rem;
      max-width: 350px;
      position: relative;
      margin-left: 10px;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

    #triangle-left {
      position: absolute;
      top: calc(50% - 5px);
      left: -10px;
      width: 0;
      height: 0;
      margin-left: 2px;
      border-top: 5px solid transparent;
      border-right: 10px solid lightblue;
      border-bottom: 5px solid transparent;
    }
  `

  render() {
    return html`
      <slot></slot>
      <div id="triangle-left"></div>
    `
  }
}

@customElement("dm-error-message")
export class ErrorMessage extends Message {

  static styles = [Message.styles, css`
    :host {
      background: lightcoral;
    }
    #triangle-left {
      border-right: 10px solid lightcoral;
    }
  `]
}

@customElement("dm-pyodide-status")
class PyodideStatus extends LitElement {

  @property()
  lang: Language

  @property({attribute: false})
  pyodide: any

  static styles = css`

    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    ion-icon {
      font-size: 1.5rem;
    }

    ion-icon.loading {
      animation: blinker 2s linear infinite;
    }

    @keyframes blinker {
      50% {color: darkred}
    }
  `

  render() {
    this.title = getLabel(this.lang, !this.pyodide? "pythonLoading": "pythonReady")
    return html`<ion-icon 
      style="pointer-events: none"
      name="logo-python">
    </ion-icon>`
  }
}

@customElement("dm-spinner")
class Spinner extends LitElement {

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid seagreen;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: seagreen transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
  render() {
    return html`<div></div><div></div><div></div><div></div>`
  }
}

@customElement("dm-loading-overlay")
class LoadingOverlay extends LitElement {

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.5);
      color: darkgreen;
    }
  `

  @property()
  message: string

  render() {
    return html`
      <dm-spinner></dm-spinner>
      <span>${this.message}</span>
    `
  }
}