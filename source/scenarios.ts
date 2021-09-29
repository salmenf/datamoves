import {html, HTMLTemplateResult, ReactiveController, ReactiveControllerHost} from "lit"
import {PythonOperationSequenceEditor, PythonOperationNode} from "./editor"
import {getLabel, LabelKey, Language} from "./localization"


type Task = (host: PythonOperationSequenceEditor) => void

export class Scenario {
  
  constructor(
    readonly name: string,
    readonly program: Task[],
    readonly isSandbox: boolean = false,
  ) {
  }

  reset() {

  }

  step() {

  }

  finish() {

  }
}



export const scenarios: Scenario[] = [
  new Scenario("basicScenario", [
    host => host.explainer = html`${getLabel(host.lang, "basicExplainer")}`
  ]),
  new Scenario("importScenario", []),
  new Scenario("selectScenario", []),
  new Scenario("mapScenario", []),
  new Scenario("calculateScenario", []),
  new Scenario("aggregateScenario", []),
  new Scenario("combineScenario", []),
  new Scenario("relateScenario", []),
  new Scenario("sandboxScenario", [], true),
]
