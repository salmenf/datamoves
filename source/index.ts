import "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"
// @ts-ignore
let pyodide = await loadPyodide({indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/"})

pyodide.runPython(await (await fetch("python/main.py")).text())