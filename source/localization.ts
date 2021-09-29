export type Language = keyof typeof LABELS
export type LabelKey = keyof (typeof LABELS)[Language]

export function getLabel(lang: Language, key: LabelKey) {
  return LABELS[lang][key]
}

const LABELS = {
  "DE": {
    "heading": "Data Moves",
    "basicScenario": "Grundlagen",
    "importScenario": "laden",
    "selectScenario": "auswählen",
    "mapScenario": "abbilden",
    "calculateScenario": "berechnen",
    "aggregateScenario": "sammeln",
    "combineScenario": "verschmelzen",
    "relateScenario": "beziehen",
    "sandboxScenario": "frei erkunden",
    "reset": "zurücksetzen",
    "back": "zurück",
    "play": "abspielen",
    "pause": "pausieren",
    "forward": "weiter",
    "stop": "stoppen",
    "identifierPlaceholder": "Name",
    "expressionPlaceholder": "Ausdruck",
    "pythonLoading": "Python wird geladen...",
    "pythonReady": "Python ist bereit.",
    "identifierInvalid": "Ungültiger Name: Der Name darf nur die Buchstaben a/A - z/Z, den Unterstrich _ und die Ziffern 0 - 9. Das erste Zeichen darf keine Ziffer sein.",
    "noIdentifierOrExpression": "Kann Code nicht ausführen, zuerst muss ein Name und ein Ausdruck eingegeben werden.",
    "runCode": "Code ausführen",
    "basicExplainer": "Willkommen! Diese Seite soll eine Übersicht von Data Moves bieten. Data Moves sind bestimmte Methoden, um Datensätze zu verändern.",
    "choicePlay": "Erklärung Schritt für Schritt",
    "choiceSkip": "sofort zur Übersicht",
    "withPython": "mit Python"
  },
  "GB": {
    "heading": "Data Moves",
    "basicScenario": "Basics",
    "importScenario": "loading",
    "selectScenario": "selecting",
    "mapScenario": "mapping",
    "calculateScenario": "calculating",
    "aggregateScenario": "aggregating",
    "combineScenario": "combining",
    "relateScenario": "relating",
    "sandboxScenario": "free exploring",
    "reset": "reset",
    "back": "back",
    "play": "play",
    "pause": "pause",
    "forward": "forward",
    "stop": "stop",
    "identifierPlaceholder": "name",
    "expressionPlaceholder": "expression",
    "pythonLoading": "Python is loading...",
    "pythonReady": "Python is ready.",
    "identifierInvalid": "Invalid name: name may only contain the letters a/A - z/Z, underscore _ , and numbers 0 - 9. The first character must not be a number.",
    "noIdentifierOrExpression": "Can't run code, enter an identifier and expression first.",
    "runCode": "run code",
    "basicExplainer": "Welcome! This page is an overview of Data Moves. Data Moves are certain methods for changing datasets.",
    "choicePlay": "step-by-step explanation",
    "choiceSkip": "skip to summary",
    "withPython": "with Python"
  }
}