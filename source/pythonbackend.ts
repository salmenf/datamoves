import "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"
// @ts-ignore
let pyodide = await loadPyodide({indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/"})

export {}

await pyodide.loadPackage("pandas")
pyodide.runPython(await (await fetch("static/main.py")).text())

pyodide.runPython("df=df.append(pd.DataFrame(data={'col1': [3], 'col2': [5]}))")
