import {LitElement, html, css} from "lit"
import {customElement, property, query, state} from "lit/decorators.js"
import {basicSetup, EditorView} from "@codemirror/basic-setup"
import {EditorState} from "@codemirror/state"
import {python} from "@codemirror/lang-python"



export interface OperationNode<R=string> extends Node {
  inputNodes: OperationNode<R>[]
  code: string
  result: R
  run(): R
}

@customElement("dm-operation-sequence-editor")
export class OperationSequenceEditor<N extends OperationNode> extends LitElement {

  selectedNode: N
  rootNode: N

  selectNode(node: N) {
    this.selectedNode = node
  }
  appendNode(node: N, toNode: N) {}
  removeNode(node: N) {}

  protected createRenderRoot() {
		return this
	}
}

@customElement("dm-python-operation-node")
export class PythonOperationNode extends LitElement implements OperationNode<string> {

  inputNodes: PythonOperationNode[]
  result: string
  code: string
  editorView: EditorView

  state: EditorState = EditorState.create({
    extensions: [basicSetup, python()]
  })

  constructor(code: string) {
    super()
    this.code = code
    this.editorView = new EditorView({parent: this})
  }

  run(...inputNodes: PythonOperationNode[]) {
    // pyodide.runPython(this.code)
    return ""
  }

  name() {}

  protected createRenderRoot() {
		return this
	}


}