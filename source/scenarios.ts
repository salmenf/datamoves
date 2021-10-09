import {html, HTMLTemplateResult, ReactiveController, ReactiveControllerHost} from "lit"
import {PythonOperationSequenceEditor, PythonOperationNode, PRESETS} from "./editor"
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
    name: "stu",
    url: "static/de-studierende-faecher-fachsemester.csv",
    attributionName: "BMBFAttribution",
    attributionUrl: "https://www.datenportal.bmbf.de/portal/Tabelle-2.5.26.csv"
  },
  {
    name: "hau",
    url: "static/de-nrw-dortmund-hauptschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-hauptschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "rea",
    url: "static/de-nrw-dortmund-realschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-realschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "ges",
    url: "static/de-nrw-dortmund-gesamtschulen-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gesamtschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "gym",
    url: "static/de-nrw-dortmund-gymnasien-seit-1990.csv",
    attributionName: "openNRWDortmundAttribution",
    attributionUrl: "https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gymnasien_anzahl_klassen_schueler-innen_und_lehrkraefte_seit_1990/content"
  },
  {
    name: "bet",
    url: "static/de-bet-seit-1990.csv",
    attributionName: "BMBFAttribution",
    attributionUrl: "https://www.datenportal.bmbf.de/portal/Tabelle-2.3.25.csv"
  }
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
  },
  condition: {
    textPatternName: "condition",
    expressionPattern: /\[.*\]/gi,
    style: "background: #DCEDC8"
  },
  resultOfSelection: {
    textPatternName: "resultOfSelection",
    expressionPattern: /\w+\[/gi,
    style: "background: #B2DFDB"
  },
  func: {
    textPatternName: "func",
    expressionPattern: /.*/gi,
    style: "background: #E1BEE7"
  },
  funcApply: {
    textPatternName: "funcApply",
    expressionPattern: /split_year/gi,
    style: "background: #E1BEE7"
  },
  assign: {
    textPatternName: "assign",
    expressionPattern: /assign/gi,
    style: "background: #F8BBD0"
  },
  attributeMap: {
    textPatternName: "attribute",
    expressionPattern: /jahr/gi,
    style: "background: #B2EBF2"
  },
  identifierCalculate: {
    textPatternName: "identifier",
    expressionPattern: /bet/gi,
    style: "background: #FFECB3"
  },
  expressionCalculate: {
    textPatternName: "expression",
    expressionPattern: /D\.\w+\[.*\]/gi,
    style: "background: #D1C4E9"
  },
  aggAttributeAggregate: {
    textPatternName: "aggAttribute",
    expressionPattern: /\[.*\]/gi,
    style: "background: #FFECB3"
  },
  funcAggregate: {
    textPatternName: "func",
    expressionPattern: /'mean'/gi,
    style: "background: #E1BEE7"
  },
  groupbyAllAggregate: {
    textPatternName: "groupbyAll",
    expressionPattern: /groupby\(.*''\)/gi,
    style: "background: #B2DFDB"
  },
  groupingAttributeAggregate: {
    textPatternName: "groupingAttribute",
    expressionPattern: /'jahrzehnt'/gi,
    style: "background: #FFCCBC"
  },
  appendCombine: {
    textPatternName: "append",
    expressionPattern: /append/gi,
    style: "background: #FFCDD2"
  },
  dropDuplicatesCombine: {
    textPatternName: "dropDuplicates",
    expressionPattern: /\.drop_duplicates\(\)/gi,
    style: "background: #F8BBD0"
  },
  resetIndexCombine: {
    textPatternName: "resetIndex",
    expressionPattern: /reset_index\(drop=True\)/gi,
    style: "background: #FFCCBC"
  },
  mergeCombine: {
    textPatternName: "merge",
    expressionPattern: /merge/gi,
    style: "background: #FFE0B2"
  },
  datasetRelate: {
    textPatternName: "datasetOneTwo",
    expressionPattern: /bet_d(o|e)/gi,
    style: "background: #B2DFDB"
  },
  attributeRelate: {
    textPatternName: "attribute",
    expressionPattern: /'jahr'/gi,
    style: "background: #B2EBF2"
  }
}

const explainer = (sign: string, text: string) => html`
  <span class="sign">${sign}</span>
  <span class="text">${text}</span>
`

const introduceDataset = ({statement, labelPrefix, continueSelector=null, nodeStyle="color: rgba(0, 0, 0, 0.7)", hideHeader=false, i=0}: {statement: [string, string], labelPrefix: string, continueSelector?: string, nodeStyle?: string, hideHeader?: boolean, i?: number}): Scenario["program"] => [
  async host => {
    host.insertStatement(statement)
    await host.updateComplete
    if(!hideHeader) {
      host.operationNodes[i].header = LABELS[host.lang][`${labelPrefix}Header`]
    }
    host.operationNodes[i].info = LABELS[host.lang][`${labelPrefix}Info1-1`]
    host.operationNodes[i].setAttribute("style", nodeStyle) 
    return `run${i}`
  },
  host => {
    host.operationNodes[i].run()
    host.operationNodes[i].info = LABELS[host.lang][`${labelPrefix}Info1-2`]
    return continueSelector? continueSelector: `insert${i}`
  } 
]

const twoStepWithHeader = ({statement1, statement2, styles=null, labelPrefix, i, continueSelector = null, nodeStyle=""}: {statement1: [string, string], statement2: [string, string], styles?: ScenarioStyle[], labelPrefix: string, i: number, continueSelector?: string, nodeStyle?: string}): Scenario["program"] => [
  async host => {
    host.insertStatement(statement1)
    await host.updateComplete
    host.operationNodes[i].info = LABELS[host.lang][`${labelPrefix}Info${i}-1`]
    host.operationNodes[i].setAttribute("style", nodeStyle) 
    return `#expression${i}`
  },
  host => {
    host.setExpression(statement2[1], i)
    host.operationNodes[i].header = LABELS[host.lang][`${labelPrefix}Header${i}`]
    host.operationNodes[i].info = LABELS[host.lang][`${labelPrefix}Info${i}-2`]
    styles? host.operationNodes[i].dynamicStyles = styles: null
    return `#run${i}`
  },
  host => {
    host.operationNodes[i].run()
    return continueSelector? continueSelector: `#insert${i}`
  }
]

export const scenarios: Scenario[] = [

  new Scenario("basicScenario", [
    host => {
      host.explainer = explainer("", LABELS[host.lang]["basicExplainer1"])
      host.datasetsHidden = true
      host.availablePresets = [PRESETS.at(-1), PRESETS.at(1)]
      return "#explainer"
    },
    host => {
      host.datasetsHidden = false
      host.explainer = explainer("", LABELS[host.lang]["basicExplainer2-1"])
      return "dm-dataset-list"
    },
    host => {
      host.explainer = explainer("⌗", LABELS[host.lang]["basicExplainer2-2"])
      return "#insert0"
    },
    async host => {
      host.insertStatement(["", ""])
      await host.updateComplete
      host.operationNodes[0].dynamicStyles = [
        SCENARIO_STYLES.identifier,
        SCENARIO_STYLES.expression,
        SCENARIO_STYLES.variable,
        SCENARIO_STYLES.value
      ]
      host.operationNodes[0].header = LABELS[host.lang]["basicHeading1"]
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-1"]
      host.operationNodes[0].identifier = "mein_name"
      host.operationNodes[0].expression = "1 + 1"
      return "#main0"
    },
    host => {
      host.operationNodes[0].info = LABELS[host.lang]["basicInfo1-2"]
      return "#run0"
    },
    async host => {
      host.operationNodes[0].alwaysShowResult = true
      await host.operationNodes[0].run()
      return "#insert0"
    },
    async host => {
      host.insertStatement(["ansicht_studierende", "D.stu"])
      await host.updateComplete
      host.operationNodes[1].alwaysShowResult = true
      host.operationNodes[1].header = LABELS[host.lang]["basicHeading2"]
      host.operationNodes[1].info = LABELS[host.lang]["basicInfo2-1"]
      host.operationNodes[1].dynamicStyles = [SCENARIO_STYLES.dataset]
      return "#run1"
    },
    async host => {
      host.operationNodes[1].info = LABELS[host.lang]["basicInfo2-2"]
      await host.operationNodes[1].run()
      return null
    }
  ], [DATASETS[0]]),

  new Scenario("selectScenario", [
    async host => {
      host.availablePresets = [PRESETS.at(-1), PRESETS[1], PRESETS[2]]
      host.explainer = explainer("σ/π", LABELS[host.lang]["selectExplainer1"])
      await host.updateComplete
      return "#insert0"
    },
    ...introduceDataset({
      statement: ["studierende", "D.stu"],
      labelPrefix: "studentDataset"
    }),
    ...twoStepWithHeader({
      statement1: ["informatiker", "D.stu"],
      statement2: ["informatiker", "D.stu[D.stu['bereich'] == 'Informatik']"],
      styles: [SCENARIO_STYLES.condition],
      labelPrefix: "select",
      i: 1
    }),
    ...twoStepWithHeader({
      statement1: ["ersties", "D.stu"],
      statement2: ["ersties", "D.stu[['bereich', 'semester 1/2']]"],
      styles: [SCENARIO_STYLES.condition],
      labelPrefix: "select",
      i: 2
    }),
    ...twoStepWithHeader({
      statement1: ["info_ersties", "D.stu"],
      statement2: ["info_ersties", "D.stu[D.stu['bereich'] == 'Informatik'][['bereich', 'semester 1/2']]"],
      styles: [SCENARIO_STYLES.condition],
      labelPrefix: "select",
      i: 3
    }),
    ...twoStepWithHeader({
      statement1: ["info_ersties2", "D.stu"],
      statement2: ["info_ersties2", "informatiker[['bereich', 'semester 1/2']]"],
      styles: [SCENARIO_STYLES.resultOfSelection],
      labelPrefix: "select",
      i: 4,
      continueSelector: null
    }),
  ], [DATASETS[0]]),

  new Scenario("mapScenario", [
    async host => {
      host.availablePresets = [PRESETS.at(-1), ...PRESETS.slice(0, 4)]
      host.explainer = explainer("λ", LABELS[host.lang]["mapExplainer"])
      await host.updateComplete
      return "#insert0"
    },
    ...introduceDataset({
      statement: ["lerner_gym", "D.gym"],
      labelPrefix: "gymDataset"
    }),
    ...twoStepWithHeader({
      statement1: ["split_year", "lambda year: "],
      statement2: ["split_year", "lambda year: int(year.split('/')[0])"],
      styles: [SCENARIO_STYLES.func],
      labelPrefix: "map",
      i: 1
    }),
    ...twoStepWithHeader({
      statement1: ["gym_clean", "D.gym"],
      statement2: ["gym_clean", "D.gym.assign(jahr=D.gym['jahr'].apply(split_year))"],
      styles: [SCENARIO_STYLES.funcApply, SCENARIO_STYLES.assign, SCENARIO_STYLES.attributeMap],
      labelPrefix: "map",
      i: 2
    }),
    ...twoStepWithHeader({
      statement1: ["gym_nach_2000", "gym_clean"],
      statement2: ["gym_nach_2000", "gym_clean[gym_clean['jahr'] >= 2000]"],
      labelPrefix: "map",
      i: 3
    }),
  ], [DATASETS[4]]),

  new Scenario("calculateScenario", [
    async host => {
      host.availablePresets = [PRESETS.at(-1), ...PRESETS.slice(0, 6)]
      host.explainer = explainer("κ/γ", LABELS[host.lang]["calculateExplainer"])
      await host.updateComplete
      return "#insert0"
    },
    ...introduceDataset({
      statement: ["lerner_ges", "D.ges"],
      labelPrefix: "gesDataset"
    }),
    ...twoStepWithHeader({
      statement1: ["ges_bet", "D.ges"],
      statement2: ["ges_bet", "D.ges.assign(bet=D.ges['lerner'] / D.ges['lehrkräfte'])"],
      styles: [SCENARIO_STYLES.identifierCalculate, SCENARIO_STYLES.expressionCalculate],
      labelPrefix: "calculate",
      i: 1
    }),
    ...twoStepWithHeader({
      statement1: ["ges_mean", "D.ges"],
      statement2: ["ges_mean", "D.ges.groupby(lambda g:'')[['lehrkräfte']].agg('mean')"],
      styles: [SCENARIO_STYLES.aggAttributeAggregate, SCENARIO_STYLES.funcAggregate, SCENARIO_STYLES.groupbyAllAggregate],
      labelPrefix: "calculate",
      i: 2
    }),
    ...twoStepWithHeader({
      statement1: ["dec", "lambda schoolyear: "],
      statement2: ["dec", "lambda schoolyear: schoolyear[-2] + '0er'"],
      styles: [],
      labelPrefix: "calculate",
      i: 3
    }),
    ...twoStepWithHeader({
      statement1: ["ges_dec", "D.ges"],
      statement2: ["ges_dec", "D.ges.assign(jahrzehnt=D.ges['jahr'].apply(dec))"],
      styles: [],
      labelPrefix: "calculate",
      i: 4
    }),
    ...twoStepWithHeader({
      statement1: ["ges_dec_mean", "ges_dec"],
      statement2: ["ges_dec_mean", "ges_dec.groupby('jahrzehnt', as_index=False)[['lehrkräfte']].agg('mean')"],
      styles: [SCENARIO_STYLES.aggAttributeAggregate, SCENARIO_STYLES.funcAggregate, SCENARIO_STYLES.groupingAttributeAggregate],
      labelPrefix: "calculate",
      i: 5,
      continueSelector: null
    }),
  ], [DATASETS[3]]),

  new Scenario("combineScenario", [
    async host => {
      host.availablePresets = [PRESETS.at(-1), ...PRESETS.slice(0, 9)]
      host.explainer = explainer("⊝", LABELS[host.lang]["combineExplainer"])
      window.scrollTo(0, 0)
      await host.updateComplete
      return "#insert0"
    },
    ...introduceDataset({
      statement: ["lerner_rea", "D.rea"],
      labelPrefix: "reaDataset"
    }),
    ...twoStepWithHeader({
      statement1: ["split_year", "lambda year: "],
      statement2: ["split_year", "lambda year: int(year.split('/')[0])"],
      styles: [],
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      labelPrefix: "combine",
      i: 1
    }),
    ...twoStepWithHeader({
      statement1: ["rea", "D.rea"],
      statement2: ["rea", "D.rea.assign(jahr=D.rea['jahr'].apply(split_year))"],
      styles: [],
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      labelPrefix: "combine",
      i: 2
    }),
    ...twoStepWithHeader({
      statement1: ["rea_ab", "rea"],
      statement2: ["rea_ab", "rea[rea['jahr'] <= 2010]"],
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      styles: [],
      labelPrefix: "combine",
      i: 3
    }),
    ...twoStepWithHeader({
      statement1: ["rea_bc", "rea"],
      statement2: ["rea_bc", "rea[rea['jahr'] >= 2000]"],
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      styles: [],
      labelPrefix: "combine",
      i: 4
    }),
    ...twoStepWithHeader({
      statement1: ["rea_abc", "rea_ab"],
      statement2: ["rea_abc", "rea_ab.append(rea_bc).drop_duplicates().reset_index(drop=True)"],
      styles: [SCENARIO_STYLES.appendCombine, SCENARIO_STYLES.dropDuplicatesCombine, SCENARIO_STYLES.resetIndexCombine],
      labelPrefix: "combine",
      i: 5
    }),
    ...twoStepWithHeader({
      statement1: ["rea_b", "rea_ab"],
      statement2: ["rea_b", "rea_ab.merge(rea_bc)"],
      styles: [SCENARIO_STYLES.mergeCombine],
      labelPrefix: "combine",
      i: 6
    }),
    ...twoStepWithHeader({
      statement1: ["rea_c", "D.rea_bc"],
      statement2: ["rea_c", "rea_bc.merge(rea_ab, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)"],
      styles: [],
      nodeStyle: "font-stretch: 75%;",
      labelPrefix: "combine",
      i: 7
    }),
  ], [DATASETS[2]]),

  new Scenario("relateScenario", [
    async host => {
      host.availablePresets = PRESETS
      host.explainer = explainer("⋈", LABELS[host.lang]["relateExplainer"])
      await host.updateComplete
      return "#insert0"
    },
    ...introduceDataset({
      statement: ["bet_de", "D.bet"],
      labelPrefix: "betDataset",
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      i: 0
    }),
    ...introduceDataset({
      statement: ["lerner_hau", "D.hau"],
      labelPrefix: "hauDataset",
      nodeStyle: "color: rgba(0, 0, 0, 0.7)",
      hideHeader: true,
      i: 1
    }),
    ...twoStepWithHeader({
      statement1: ["split_year", "lambda year: "],
      statement2: ["split_year", "lambda year: int(year.split('/')[0])"],
      styles: [],
      labelPrefix: "relate",
      i: 2
    }),
    ...twoStepWithHeader({
      statement1: ["hau_clean", "D.hau"],
      statement2: ["hau_clean", "D.hau.assign(jahr=D.gym['jahr'].apply(split_year))"],
      styles: [],
      labelPrefix: "relate",
      i: 3
    }),
    ...twoStepWithHeader({
      statement1: ["hau_bet", "hau_clean"],
      statement2: ["hau_bet", "hau_clean.assign(bet=hau_clean['lerner'] / hau_clean['lehrkräfte'])"],
      styles: [],
      labelPrefix: "relate",
      i: 4
    }),
    ...twoStepWithHeader({
      statement1: ["bet_do", "hau_bet"],
      statement2: ["bet_do", "hau_bet[['jahr', 'bet']]"],
      styles: [],
      labelPrefix: "relate",
      i: 5
    }),
    ...twoStepWithHeader({
      statement1: ["bet_de", "D.bet"],
      statement2: ["bet_de", "D.bet[['jahr', 'hauptschule']]"],
      styles: [],
      labelPrefix: "relate",
      i: 6
    }),
    ...twoStepWithHeader({
      statement1: ["bet_vgl", "bet_do"],
      statement2: ["bet_vgl", "bet_do.merge(bet_de, on='jahr')"],
      styles: [SCENARIO_STYLES.datasetRelate, SCENARIO_STYLES.attributeRelate],
      labelPrefix: "relate",
      i: 7
    }),
    ...twoStepWithHeader({
      statement1: ["bet_diff", "bet_vgl"],
      statement2: ["bet_diff", "bet_vgl.assign(diff=bet_vgl['hauptschule'] - bet_vgl['bet'])"],
      styles: [],
      labelPrefix: "relate",
      i: 8
    })
  ], [DATASETS.at(1), DATASETS.at(-1)]),
  new Scenario("sandboxScenario", [], [...DATASETS], true),
]