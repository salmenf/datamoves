import "@vaadin/vaadin-grid"
import {LitElement, html, css} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import {unsafeSVG} from 'lit/directives/unsafe-svg.js'
import * as FLAGS from 'country-flag-icons/string/3x2'
import { Scenario } from "./scenarios"
import "ionicons"
import { LABELS, Language } from "./localization"

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

    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
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

  @property({attribute: false})
  scenarios: Scenario[]

  @state()
  selectedIndex: number

  get value() {
    return this.scenarios[this.selectedIndex]
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

    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
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
    const sandboxIcon = html`<ion-icon style="pointer-events: none;" name="easel-outline"></ion-icon>`

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
        ${scenario.name}
      </label>
    `)

  }
}

@customElement("dm-scenario-controls")
export class ScenarioControls extends LitElement {

  @property({type: String})
  lang: Language

  @property({type: Boolean})
  isPlaying: boolean

  static styles = css`
    :host {
      display: flex;
      justify-content: flex-end;
      gap: 0.6rem;
    }

    button {
      border: none;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      cursor: pointer;
    }

    button:hover {
      color: cornflowerblue;
    }

    button:active {
      color: darkblue;
    }
  `

  render() {
    return html`
      <button title=${LABELS[this.lang].reset}>
      <ion-icon name="arrow-undo" style="pointer-events: none;"></ion-icon>
      </button>
      <button title=${LABELS[this.lang].back}>
        <ion-icon name="play-skip-back" style="pointer-events: none;"></ion-icon>
      </button>
      <button title=${LABELS[this.lang].play}>
        <ion-icon name="play" style="pointer-events: none;"></ion-icon>
      </button>
      <button title=${LABELS[this.lang].forward}>
        <ion-icon name="play-skip-forward" style="pointer-events: none;"></ion-icon>
      </button>
      <button title=${LABELS[this.lang].stop}>
        <ion-icon name="stop" style="pointer-events: none;"></ion-icon>
      </button>
    `
  }
}