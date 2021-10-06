import {html, HTMLTemplateResult, ReactiveController, ReactiveControllerHost} from "lit"
import {PythonOperationSequenceEditor, PythonOperationNode} from "./editor"
import {LABELS, PatternKey} from "./localization"


export interface Dataset {
  name: string
  url: string
  attributionName: string
  attributionUrl: string
}


type Task = (host: PythonOperationSequenceEditor) => string | Promise<string>

export class Scenario {
  
  constructor(
    readonly name: string,
    readonly program: Task[],
    readonly datasets: Dataset[] = [],
    readonly isSandbox: boolean = false
  ) {
  }
}

export const DATASETS = [
  {
    name: "studierendeFaecher",
    url: "static/de-studierende-faecher-fachsemester.csv",
    attributionName: "BMBFAttribution",
    attributionUrl: "https://www.datenportal.bmbf.de/portal/Tabelle-2.5.26.csv"
  },
  {
    name: "dortmundHauptschulen",
    url: "static/de-nrw-dortmund-hauptschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-hauptschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "dortmundRealschulen",
    url: "static/de-nrw-dortmund-realschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-realschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "dortmundGesamtschulen",
    url: "static/de-nrw-dortmund-gesamtschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gesamtschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "dortmundGymnasien",
    url: "static/de-nrw-dortmund-gymnasien-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gymnasien_anzahl_klassen_schueler-innen_und_lehrkraefte_seit_1990/content"
  },
]

export interface ScenarioStyle {
  identifierPattern?: RegExp
  expressionPattern?: RegExp
  textPatternName?: PatternKey
  style: string
}

const SCENARIO_STYLES: Record<string, ScenarioStyle> = {
  variable: {
    textPatternName: "variable",
    style: "font-weight: bold"
  },
  identifier: {
    identifierPattern: /.*/gi,
    textPatternName: "identifier",
    style: "background: #FFECB3"
  },
  expression: {
    expressionPattern: /.*/gi,
    textPatternName: "expression",
    style: "background: #D1C4E9",
  },
  value: {
    textPatternName: "value",
    style: "color: darkgreen;"
  },
  dataset: {
    textPatternName: "dataset",
    expressionPattern: /D\.\w+/gi,
    style: "font-weight: bold; background: #B2DFDB"
  }
}

export const scenarios: Scenario[] = [
  new Scenario("basicScenario", [
    host => {
      host.explainer = html`${LABELS[host.lang]["basicExplainer1"]}`
      host.datasetsHidden = true
      return "#explainer"
    },
    host => {
      host.datasetsHidden = false
      host.explainer = html`${LABELS[host.lang]["basicExplainer2-1"]}`
      return "dm-dataset-list"
    },
    host => {
      host.explainer = html`${LABELS[host.lang]["basicExplainer2-2"]}`
      return "#insert0"
    },
    async host => {
      host.insertStatement(["", ""])
      await host.updateComplete
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-1"]
      return "#main0"
    },
    host => {
      host.operationNodes[0].dynamicStyles = [
        SCENARIO_STYLES.identifier,
        SCENARIO_STYLES.expression,
        SCENARIO_STYLES.variable,
        SCENARIO_STYLES.value
      ]
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-2"]
      return "#identifier0"
    },
    host => {
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-3"]
      host.operationNodes[0].identifier = "mein_name"
      return "#expression0"
    },
    host => {
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-4"]
      host.operationNodes[0].expression = "1 + 1"
      return "#run0"
    },
    async host => {
      host.operationNodes[0].alwaysShowResult = true
      await host.operationNodes[0].run()
      return "#insert0"
    },
    async host => {
      host.insertStatement(["ansicht_studierende", "D.studierendeFaecher"])
      await host.updateComplete
      host.operationNodes[1].alwaysShowResult = true
      host.operationNodes[1].info = LABELS[host.lang]["basicInfo2-1"]
      host.operationNodes[1].dynamicStyles = [SCENARIO_STYLES.dataset]
      return "#run1"
    },
    async host => {
      await host.operationNodes[1].run()
      return "#insert1"
    }
  ], [DATASETS[0]]),
  new Scenario("selectScenario", [], [DATASETS[0]]),
  new Scenario("mapScenario", [], [DATASETS[0]]),
  new Scenario("calculateScenario", [], [DATASETS[0]]),
  new Scenario("aggregateScenario", [], [DATASETS[0]]),
  new Scenario("combineScenario", [], [DATASETS[0]]),
  new Scenario("relateScenario", [], DATASETS.slice(1)),
  new Scenario("sandboxScenario", [], [...DATASETS], true),
]
