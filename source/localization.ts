import { CSSResult, html, css } from "lit"

export type Language = "DE" | "GB"
export type LabelKey = keyof typeof LABELS[Language]
export type PatternKey = keyof typeof TEXT_PATTERNS[Language]

export const TEXT_PATTERNS = {
  "DE": {
    "variable": /variables?/gi,
    "identifier": /namen?s?/gi,
    "expression": /(?:ausdrucks?)|(?:ausdrücke)/gi,
    "value": /werte?s?n?/gi,
    "dataset": /(?:datensatz(?:es)?)|(?:datensätzen?)/gi
  },
  "GB": {
    "variable": /variables?/gi,
    "identifier": /names?/gi,
    "expression": /expressions?/gi,
    "value": /values?/gi,
    "dataset": /datasets?/gi
  }
}


export const LABELS = {
  "DE": {
    "heading": "Data Moves",
    "welcomeMessage": "Willkommen! Diese Seite soll eine Übersicht von Data Moves bieten.",

    "basicScenario": "Grundlagen",
    "importScenario": "laden",
    "selectScenario": "auswählen",
    "mapScenario": "abbilden",
    "calculateScenario": "berechnen",
    "aggregateScenario": "sammeln",
    "combineScenario": "verschmelzen",
    "relateScenario": "beziehen",
    "sandboxScenario": "frei erkunden",

    "studierendeFaecher": "Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",
    "dortmundHauptschulen": "Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundRealschulen": "Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundGesamtschulen": "Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundGymnasien": "Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "BMBFAttribution": "Daten extrahiert aus Original-Datensatz vom Bundesministerium für Bildung und Forschung (BMBF), Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",
    "openNRWDortmundAttribution": "Daten extrahiert aus Original-Datensatz von open.NRW Dortmund, Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",

    "reset": "zurücksetzen",
    "back": "zurück",
    "play": "abspielen",
    "pause": "pausieren",
    "skip": "zum Ende springen",
    "stop": "stoppen",
    "identifierPlaceholder": "Name",
    "expressionPlaceholder": "Ausdruck",
    "identifierInvalid": "Ungültiger Name: Der Name darf nur die Buchstaben a/A - z/Z, den Unterstrich _ und die Ziffern 0 - 9 enthalten. Das erste Zeichen darf keine Ziffer sein. Außerdem ist der Großbuchstabe 'D' reserviert.",
    "noIdentifierOrExpression": "Kann Code nicht ausführen, zuerst muss ein Name und ein Ausdruck eingegeben werden.",
    "runCode": "Code ausführen",
    "choicePlay": "Erklärung Schritt für Schritt",
    "choiceSkip": "sofort zur Übersicht",
    "withPython": "mit Python",
    "loadingPyodide": "Python wird geladen...",
    "loadingPandas": "Pandas wird geladen...",
    "loadingDatasets": "Beispiel-Datensätze werden geladen...",
    "pyodideReady": "Python ist bereit.",
    "pyodideError": "Fehler beim Laden von Python! Hinweis: Nutzen Sie Firefox und haben Sie die Seite mehrmals neu geladen? Dann ist wahrscheinlich ein bekannter Fehler von Firefox aufgetreten (Speicherleck). In dem Fall hilft, Firefox komplett zu schließen und neu zu starten.",
    
    "basicExplainer1": "Den grün markierten Teil der Seite anklicken, um fortzufahren.",
    "basicExplainer2-1": "Rechts werden verfügbare Datensätze aufgelistet.",
    "basicExplainer2-2": "Rechts werden verfügbare Datensätze aufgelistet. Unten können Variablen definiert werden, um Datensätze zu analysieren.",
    "basicInfo1-1": "Das ist eine Variable.",
    "basicInfo1-2": "Das ist eine Variable. Sie hat einen Namen.",
    "basicInfo1-3": "Das ist eine Variable. Sie hat einen Namen und einen Ausdruck.",
    "basicInfo1-4": "Das ist eine Variable. Sie hat einen Namen und einen Ausdruck. Wenn beides gegeben ist, kann aus dem Ausdruck ein Wert berechnet werden.",
    "basicInfo2-1": "Datensätze können betrachtet werden, indem sie einer Variable zugewiesen werden."
  },



  "GB": {
    "heading": "Data Moves",
    "welcomeMessage": "Welcome! This page is an overview for data moves.",

    "basicScenario": "Basics",
    "importScenario": "loading",
    "selectScenario": "selecting",
    "mapScenario": "mapping",
    "calculateScenario": "calculating",
    "aggregateScenario": "aggregating",
    "combineScenario": "combining",
    "relateScenario": "relating",
    "sandboxScenario": "free exploring",

    "studierendeFaecher": "Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",
    "dortmundHauptschulen": "Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundRealschulen": "Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundGesamtschulen": "Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "dortmundGymnasien": "Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "BMBFAttribution": "Data extracted from original dataset by Bundesministerium für Bildung und Forschung (BMBF), Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",
    "openNRWDortmundAttribution": "Data extracted from original dataset by open.NRW Dortmund, Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",

    "reset": "reset",
    "back": "back",
    "play": "play",
    "pause": "pause",
    "skip": "skip to end",
    "stop": "stop",
    "identifierPlaceholder": "name",
    "expressionPlaceholder": "expression",
    "identifierInvalid": "Invalid name: name may only contain the letters a/A - z/Z, underscore _ , and numbers 0 - 9. The first character must not be a number. Also, the capital letter 'D' is reserved.",
    "noIdentifierOrExpression": "Can't run code, enter an identifier and expression first.",
    "runCode": "run code",
    "choicePlay": "step-by-step explanation",
    "choiceSkip": "skip to summary",
    "withPython": "with Python",
    "loadingPyodide": "Loading Python...",
    "loadingPandas": "Loading Pandas...",
    "loadingDatasets": "Loading example datasets...",
    "pyodideReady": "Python is ready.",
    "pyodideError": "Error loading Python! Hint: Do you use Firefox and reloaded the page multiple times? Then it is likely a common error in Firefox occured (memory leak). To solve this, completely close and restart Firefox.",
    
    "basicExplainer1": "Click the part of the site marked in green to continue.",
    "basicExplainer2-1": "On the right side is a list of available datasets.",
    "basicExplainer2-2": "On the right side is a list of available datasets. Below, variables can be defined to analyze the datasets.",
    "basicInfo1-1": "This is a variable.",
    "basicInfo1-2": "This is a variable. It has a name.",
    "basicInfo1-3": "This is a variable. It has a name, and an expression.",
    "basicInfo1-4": "This is a variable. It has a name, and an expression. Once both are written, the expression can be resolved to a value.",
    "basicInfo2-1": "Datasets can be viewed by assigning them to a variable."
  }
}