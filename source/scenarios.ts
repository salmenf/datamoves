import { OperationSequenceEditor, PythonOperationNode } from "./editor"
import { LABELS, Language } from "./localization"


export class Scenario {
  constructor(
    readonly name: string,
    readonly editor: OperationSequenceEditor<PythonOperationNode>,
    readonly program: (editor: Scenario["editor"]) => void,
    readonly isSandbox: boolean = false
  ) {

  }
}


export const scenarios = (editor: Scenario["editor"], lang: Language = "DE") => [
  new Scenario(LABELS[lang].basicScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].importScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].selectScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].mapScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].calculateScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].aggregateScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].combineScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].relateScenario, editor, editor => {

  }),

  new Scenario(LABELS[lang].sandboxScenario, editor, editor => {

  }, true),
] 


const DATA_MOVES = {
  loadCSV: new PythonOperationNode("read_csv(from_file)"),
  loadExcel: new PythonOperationNode("read_excel(from_file)"),
  loadJSON: new PythonOperationNode("read_json(from_file)"),
  select: new PythonOperationNode("{d}[condition][attrs]"),
  map: new PythonOperationNode("{d}[condition][attrs].apply(func)"),
  calculate: new PythonOperationNode("{d}.apply[attrs](func, axis=1)"),
  aggregate: new PythonOperationNode("{d}.groupby(attrs).agg(attr_func_pairs)"),
  add: new PythonOperationNode("{d1}.concat({d2})"),
  subtract: new PythonOperationNode("{d1}.merge({d2}, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)"),
  intersect: new PythonOperationNode("{d1}[({d1}=={d2}).values.all(axis=1)]"),
  cross: new PythonOperationNode("{d1}.merge({d2}, how='cross')")
}
