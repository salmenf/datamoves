export type Language = "DE" | "GB"
export type LabelKey = keyof typeof LABELS[Language]
export type PatternKey = keyof typeof TEXT_PATTERNS[Language]

export const TEXT_PATTERNS = {
  "DE": {
    "variable": /variables?/gi,
    "identifier": /namen?s?/gi,
    "oldIdentifier": /alten?r? namen?s?/gi,
    "newIdentifier": /neuen?r? namen?s?/gi,
    "expression": /(?:ausdrucks?)|(?:ausdrücke)/gi,
    "value": /werte?s?n?/gi,
    "dataset": /(?:datensatz(?:es)?)|(?:datensätzen?)/gi,
    "condition": /bedingung(?:en)?/gi,
    "resultOfSelection": /ergebnis des auswählens/gi,
    "func": /funktion(?:en)?/gi,
    "assign": /assign/gi,
    "funcApply": /funktion(?:en)?/gi,
    "attribute": /\s+attribute?s?[\s,]+/gi,
    "aggAttribute": /zusammenzufassendes?n? attribute?/gi,
    "groupbyAll": /\.groupby\(.*''\)/gi,
    "groupingAttribute": /Gruppierungs-Attribute?/gi,
    "append": /append/gi,
    "dropDuplicates": /\.drop_duplicates\(\)/gi,
    "resetIndex": /reset_index\(drop=True\)/gi,
    "merge": /merge/gi,
    "datasetOneTwo": /\s+(ersten)|(zweiten datensatz)\s+/gi
  },
  "GB": {
    "variable": /variables?/gi,
    "identifier": /names?/gi,
    "oldIdentifier": /old names?/gi,
    "newIdentifier": /new names?/gi,
    "expression": /expressions?/gi,
    "value": /values?/gi,
    "dataset": /datasets?/gi,
    "condition": /conditions?/gi,
    "resultOfSelection": /result of selecting/gi,
    "func": /functions?/gi,
    "assign": /assign/gi,
    "funcApply": /functions?/gi,
    "attribute": /\s+attributes?\s+/gi,
    "aggAttribute": /attributes? to summarize/gi,
    "groupbyAll": /\.groupby\(.*\)/gi,
    "groupingAttribute": /grouping attributes?/gi,
    "append": /append/gi,
    "dropDuplicates": /\.drop_duplicates\(\)/gi,
    "resetIndex": /reset_index\(drop=True\)/gi,
    "merge": /merge/gi,
    "datasetOneTwo": /\s+(first)|(second dataset)\s+/gi
  }
}


export const LABELS = {
  "DE": {
    "heading": "Data Moves",
    "welcomeMessage1": "Willkommen! Diese Seite bietet eine Übersicht und erste Einführung von Data Moves. Data Moves sind im Bereich der Datenanalyse Aktionen, die die Werte, den Inhalt und/oder die Struktur eines Datensatzes ändern.",
    "welcomeMessage2": "Es wird eine mögliche Auswahl von Data Moves interaktiv gezeigt, anhand der Programmiersprache Python und der zugehörigen Bibliothek Pandas. Grundkenntnisse in Python und Pandas werden vorausgesetzt.",
    "welcomeMessage3": "Alle Beispieldatensätze sind echte Daten, wurden in ihrer Form aber stellenweise aufbereitet und angepasst, um die Übersichtlichkeit zu verbessern.",

    "basicScenario": "Grundlagen",
    "importScenario": "laden",
    "selectScenario": "auswählen",
    "mapScenario": "abbilden",
    "calculateScenario": "berechnen",
    "aggregateScenario": "sammeln",
    "combineScenario": "verschmelzen",
    "relateScenario": "beziehen",
    "sandboxScenario": "frei erkunden",

    "stu": "Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",
    "hau": "Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "rea": "Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "ges": "Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "gym": "Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "bet": "Schüler-Lehrer-Relation (Betreuungsverhältnis) an allgemeinbildenden Schulen nach Bildungsbereichen, Schularten und Ländern seit 1990",
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
    "choiceExperiment": "Selbst experimentieren",
    "choiceExperimentElaborate": "Ermöglicht es, neue Variablen zu erstellen und bestehende zu verändern",
    "choiceNext": "Weiter",
    "withPython": "mit Python",
    "loadingPyodide": "Python wird geladen...",
    "loadingPandas": "Pandas wird geladen...",
    "loadingDatasets": "Beispiel-Datensätze werden geladen...",
    "pyodideReady": "Python ist bereit.",
    "pyodideError": "Fehler beim Laden von Python! Hinweis: Nutzen Sie Firefox und haben Sie die Seite mehrmals neu geladen? Dann ist wahrscheinlich ein bekannter Fehler von Firefox aufgetreten (Speicherleck). In dem Fall hilft, Firefox komplett zu schließen und neu zu starten.",
    
    "studentDatasetHeader": "Beispiel: Studierende",
    "studentDatasetInfo1-1": "Betrachten wir als einfaches Beispiel den Datensatz 'D.stu'.",
    "studentDatasetInfo1-2": "Betrachten wir als einfaches Beispiel den Datensatz 'D.stu'. Gegeben sind 15 Fälle, die die Anzahl von Studierenden in den 15 beliebtesten Fachbereichen an deutschen Universitäten 2019/2020 repräsentieren. Jeder Fall liefert zusätzlich die Studierendenzahlen aufgeteilt nach Fachsemester (Anzahl der Erst- und Zweitsemester, etc.).",

    "gymDatasetHeader": "Beispiel: Dortmunder Gymnasien",
    "gymDatasetInfo1-1": "Betrachten wir als Beispiel den Datensatz 'D.gym'.",
    "gymDatasetInfo1-2": "Betrachten wir als Beispiel den Datensatz 'D.gym'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Gymnasien von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",

    "gesDatasetHeader": "Beispiel: Dortmunder Gesamtschulen",
    "gesDatasetInfo1-1": "Betrachten wir als Beispiel den Datensatz 'D.ges'.",
    "gesDatasetInfo1-2": "Betrachten wir als Beispiel den Datensatz 'D.ges'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Gesamtschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",

    "reaDatasetHeader": "Beispiel: Dortmunder Realschulen",
    "reaDatasetInfo1-1": "Betrachten wir als Beispiel den Datensatz 'D.rea'.",
    "reaDatasetInfo1-2": "Betrachten wir als Beispiel den Datensatz 'D.rea'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Realschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",

    "hauDatasetHeader": "Beispiel: Dortmunder Hauptschulen",
    "hauDatasetInfo1-1": "Betrachten wir zusätzlich den Datensatz 'D.hau'.",
    "hauDatasetInfo1-2": "Betrachten wir zusätzlich den Datensatz 'D.hau'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Hauptschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",

    "betDatasetHeader": "Beispiel: Betreuungsverhältnis",
    "betDatasetInfo1-1": "Betrachten wir den Datensatz 'D.bet'.",
    "betDatasetInfo1-2": "Betrachten wir den Datensatz 'D.bet'. Gegeben sind 30 Fälle, die Auskunft über das durchschnittliche Betreuungsverhältnis (Lerner pro Lehrer) von 1990 bis 2018 bieten. Der Datensatz enthält für jede Schulform ein entsprechendes Attribut. Stellenweise fehlen Daten, was mit einem Wert von 0 vermerkt wurde.",

    "sandboxExplainer": "Hier kannst du beliebige Data Moves probieren.",

    "basicExplainer1": "Klick den grün markierten Teil der Seite an, um fortzufahren.",
    "basicExplainer2-1": "Rechts sehen wir verfügbare Datensätze.",
    "basicExplainer2-2": "Rechts sehen wir verfügbare Datensätze. Unten definieren wir Variablen, um Datensätze zu analysieren.",
    "basicHeader0": "Variablen",
    "basicInfo0-1": "Das ist eine Variable. Sie hat einen Namen und einen Ausdruck.",
    "basicInfo0-2": "Das ist eine Variable. Sie hat einen Namen und einen Ausdruck. Wenn beides gegeben ist, kann aus dem Ausdruck ein Wert berechnet werden. Solange die Variable ausgewählt ist, wird der berechnete Wert angezeigt.",
    "basicHeader1": "Datensätze",
    "basicInfo1-1": "Datensätze können betrachtet werden, indem sie einer Variable zugewiesen werden.",
    "basicInfo1-2": "Datensätze können betrachtet werden, indem sie einer Variable zugewiesen werden. Sie bestehen aus Fällen (angezeigt als Zeilen), Attributen (angezeigt als Spalten) und Werten (angezeigt als Zellen).",
    "basicHeader2": "Attribute umbenennen",
    "basicInfo2-1": "Die Attribute (Spalten) von Datensätzen können umbenannt werden.",
    "basicInfo2-2": "Die Attribute (Spalten) von Datensätzen können umbenannt werden. Dazu geben wir einfach die alten Namen an, außerdem die neuen Namen.",

    "selectHeader1": "Auswählen von Fällen nach Werten",
    "selectExplainer1": "Auswählen heißt, einen Datensatz auf diejenigen Fälle oder Attribute einzuschränken, die eine bestimmte Bedingung erfüllen.",
    "selectInfo1-1": "Auswählen erfordert immer eine Bedingung.",
    "selectInfo1-2": "Auswählen erfordert immer eine Bedingung. Hier wählen wir nach Fällen aus, erstellen also einen neuen Datensatz, der nur diejenigen Fälle enthält, die die Bedingung erfüllen.",
    "selectHeader2": "Auswählen von Attributen nach Namen",
    "selectInfo2-1": "Die Bedingung kann aus einer Liste von Attribut-Namen bestehen.",
    "selectInfo2-2": "Die Bedingung kann aus einer Liste von Attribut-Namen bestehen. Geben wir eine solche Liste an, wird ein neuer Datensatz erstellt, der nur die festgelegten Attribute enthält.",
    "selectHeader3": "Auswählen mit mehreren Bedingungen",
    "selectInfo3-1": "Es kann mehr als eine Bedingung angegeben werden.",
    "selectInfo3-2": "Es kann mehr als eine Bedingung angegeben werden. So können wir auch gleichzeitig Attribute und Fälle eingeschränken.",
    "selectHeader4": "Auswählen verketten",
    "selectInfo4-1": "Das Ergebnis des Auswählens ist ein Datensatz. ",
    "selectInfo4-2": "Das Ergebnis des Auswählens ist ein Datensatz. Deshalb lässt sich Auswählen auch wiederum auf das Ergebnis anwenden. Das können wir ausnutzen, um Analysen übersichtlicher zu machen.",

    "mapExplainer": "Abbilden heißt, bestimmte Werte eines Datensatzes mit einer gegebenen Funktion zu verändern.",
    "mapHeader1": "Funktion definieren",
    "mapInfo1-1": "Abbilden erfordert zunächst eine Funktion.",
    "mapInfo1-2": "Abbilden erfordert zunächst eine Funktion. Die Funktion wenden wir später auf ein bestimmtes Attribut an.",
    "mapHeader2": "Attribut abbilden",
    "mapInfo2-1": "Zum Abbilden muss eine Funktion und ein Attribut angegeben werden.",
    "mapInfo2-2": "Zum Abbilden muss eine Funktion und ein Attribut angegeben werden. In diesem Fall schreiben wir 'assign', um das vorhandene Attribut zu ersetzen und ein neuer Datensatz mit entsprechend verändertem Attribut zu erhalten.",
    "mapHeader3": "Bereinigung mittels Abbilden",
    "mapInfo3-1": "Abbilden kann zur Bereinigung von Daten genutzt werden.",
    "mapInfo3-2": "Abbilden kann zur Bereinigung von Daten genutzt werden. Dadurch können wir bestimmte Analysen sehr erleichtern.",

    "calculateExplainer": "Berechnen heißt, aus bestehenden Werten eines Datensatzes neue Werte zu bilden.",
    "calculateHeader1": "Attribut berechnen",
    "calculateInfo1-1": "Es kann ein neues Attribut aus den vorhandenen berechnet werden.",
    "calculateInfo1-2": "Es kann ein neues Attribut aus den vorhandenen berechnet werden. Dazu müssen wir dem neuen Attribut einen Namen geben und einen Ausdruck zur Berechnung des Werts angeben.",
    "calculateHeader2": "Zusammenfassenden Wert berechnen",
    "calculateInfo2-1": "Es können alle Werte eines bestimmten Attributs zu einem Gesamtwert zusammengefasst werden.",
    "calculateInfo2-2": "Es können alle Werte eines bestimmten Attributs zu einem Gesamtwert zusammengefasst werden. Dazu schreiben wir ein zusammenzufassendes Attribut und eine Funktion auf. Außerdem schreiben wir '.groupby(lambda g: '')', um festzulegen, dass keine Gruppierung stattfindet.",
    "calculateHeader3": "Gruppieren, dann zusammenfassen",
    "calculateInfo3-1":"Statt alle Werte eines Attributs zusammenfassen, lassen sich auch Gruppen von Fällen bilden, die dann einzeln zusammengefasst werden. Hier wollen wir zunächst ein Attribut erstellen, wonach gruppiert werden kann.",
    "calculateInfo3-2":"Statt alle Werte eines Attributs zusammenfassen, lassen sich auch Gruppen von Fällen bilden, die dann einzeln zusammengefasst werden. Hier wollen wir zunächst ein Attribut erstellen, wonach gruppiert werden kann. Dazu definieren wir hier eine entsprechende Funktion.",
    "calculateInfo4-1":"Dann wenden wir die vorige Funktion an.",
    "calculateInfo4-2":"Dann wenden wir die vorige Funktion an. Bei diesen beiden Schritten führen wir also wieder nur ein Abbilden durch.",
    "calculateInfo5-1": "Schließlich können die Gesamtwerte für die Gruppen berechnet werden.",
    "calculateInfo5-2": "Schließlich können die Gesamtwerte für die Gruppen berechnet werden. Dazu geben wir zusätzlich zum zusammenzufassenden Attribut und zur Funktion auch das Gruppierungs-Attribut an.",

    "combineExplainer": "Verschmelzen heißt, aus zwei gleichartigen Datensätzen einen neuen Datensatz zu bilden.",
    "combineInfo1-1": "Für dieses Beispiel bereinigen wir zuerst der Datensatz mittels Abbilden.",
    "combineInfo1-2": "Für dieses Beispiel bereinigen wir zuerst der Datensatz mittels Abbilden. Dazu definieren wir hier zuerst wieder eine Funktion.",
    "combineInfo2-1": "Anschließend wenden wir die Funktion an.",
    "combineInfo2-2": "Anschließend wenden wir die Funktion an. Nun ist das Auswählen bestimmter Fälle im Datensatz für uns leichter.",
    "combineInfo3-1":"Hier soll eine Teilmenge von Fällen ausgewählt werden.",
    "combineInfo3-2":"Hier soll eine Teilmenge von Fällen ausgewählt werden. Dazu wählen wir eine entsprechende Bedingung.",
    "combineInfo4-1":"Zusätzlich soll noch eine weitere Teilmenge von Fällen ausgewählt werden.",
    "combineInfo4-2":"Zusätzlich soll noch eine weitere Teilmenge von Fällen ausgewählt werden. Dazu wählen wir absichtlich eine Bedingung, dass diese Teilmenge mit der vorigen Teilmenge überlappt.",
    "combineHeader5": "Vereinigen zweier Datensätze",
    "combineInfo5-1":"Eine mögliche Art des Verschmelzens ist das Vereinigen.",
    "combineInfo5-2":"Eine mögliche Art des Verschmelzens ist das Vereinigen. Dazu bilden wir mittels 'append' zunächst ein Datensatz, der alle Fälle der Datensätze enthält, und dann entfernen wir mit '.drop_duplicates()' und 'reset_index(drop=True)' doppelt vorkommende Fälle. Das Ergebnis ist ein Datensatz, in dem alle Fälle aus beiden Datensätzen vorkommen.",
    "combineHeader6": "Schneiden zweier Datensätze",
    "combineInfo6-1":"Eine andere Art des Verschmelzens ist das Schneiden.",
    "combineInfo6-2":"Eine andere Art des Verschmelzens ist das Schneiden. Dabei übernehmen wir mittels 'merge' nur diejenigen Fälle in den Ergebnis-Datensatz, die in beiden Datensätzen vorkommen.",
    "combineHeader7": "Differenz zweier Datensätze bilden (fortgeschritten)",
    "combineInfo7-1":"Die letzte Art des Verschmelzens ist die Differenz.",
    "combineInfo7-2":"Die letzte Art des Verschmelzens ist die Differenz. Hier bilden wir einen neuen Datensatz, der nur genau die Fälle des ersten Datensatzes enthält, die nicht im zweiten Datensatz vorkommen (anders gesagt: Erster Datensatz ohne Fälle des zweiten Datensatzes).",

    "relateExplainer": "Beziehen heißt, verschiedenartige Datensätze zu verbinden und so neue Verknüpfungen herzustellen.",
    "relateHeader2": "Vorbereitung der Datensätze",
    "relateInfo2-1": "In diesem Beispiel wollen wir das durchschnittliche Betreuungsverhältnis zwischen den Dortmunder Hauptschulen und ganz Deutschland vergleichen.",
    "relateInfo2-2": "In diesem Beispiel wollen wir das durchschnittliche Betreuungsverhältnis zwischen den Dortmunder Hauptschulen und ganz Deutschland vergleichen. Dazu müssen wir, ähnlich wie zuvor, zuerst die Datensätze vorbereiten. Hier definieren wir dafür wieder eine Funktion.",
    "relateInfo3-1": "Nun wenden wir die Funktion an.",
    "relateInfo3-2": "Nun wenden wir die Funktion an. Wir erhalten einen bereinigter Datensatz, der weitere Berechnungen vereinfacht.",
    "relateInfo4-1": "Als nächstes wollen wir durch Berechnen das Betreuungsverhältnis pro Jahr feststellen.",
    "relateInfo4-2": "Als nächstes wollen wir durch Berechnen das Betreuungsverhältnis pro Jahr feststellen. Nun haben wir dem Datensatz ein neues Attribut 'bet' mit dem Betreuungsverhältnis hinzugefügt.",
    "relateInfo5-1": "Schließlich wollen wir den Datensatz noch auf die für uns wichtigen Attribute beschränken.",
    "relateInfo5-2": "Schließlich wollen wir den Datensatz noch auf die für uns wichtigen Attribute beschränken. Das erreichen wir mit Auswählen.",
    "relateInfo6-1": "Entsprechend wollen wir auch den anderen Datensatz beschränken.",
    "relateInfo6-2": "Entsprechend wollen wir auch den andere Datensatz beschränken. Das geschieht wieder durch Auswählen.",
    "relateHeader7": "Beziehen zweier Datensätze",
    "relateInfo7-1": "Jetzt sollen beide vorbereiteten Datensätze verknüpft werden.",
    "relateInfo7-2": "Jetzt sollen beide vorbereiteten Datensätze verknüpft werden. Dazu geben wir den ersten und zweiten Datensatz an, außerdem noch ein Attribut, das den Zusammenhang herstellt. Wir erhalten einen Datensatz, der Fälle mit Attributen aus beiden Datensätzen enthält.",
    "relateInfo8-1": "Der verknüpfte Datensatz kann wiederum neue Analysen ermöglichen.",
    "relateInfo8-2": "Der verknüpfte Datensatz kann wiederum neue Analysen ermöglichen. Zum Beispiel können wir nun die Entwicklung des Betreuungsverhältnisses von 1990 bis 2018 im Verhältnis zum Bundesdurchschnitt betrachten.",
  },



  "GB": {
    "heading": "Data Moves",
    "welcomeMessage1": "Welcome! This page is an overview of data moves. In data analysis, data moves are actions that change the values, content and/or structure of a dataset.",
    "welcomeMessage2": "This cheat sheet presents some possible data moves in an interactive manner, using the programming language Python and the Python library Pandas.",
    "welcomeMessage3": "All example datasets consist of real data, but were cleaned and renamed to improve readability.",

    "basicScenario": "Basics",
    "importScenario": "loading",
    "selectScenario": "selecting",
    "mapScenario": "mapping",
    "calculateScenario": "calculating",
    "aggregateScenario": "aggregating",
    "combineScenario": "combining",
    "relateScenario": "relating",
    "sandboxScenario": "free exploring",

    "stu": "Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",
    "hau": "Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "rea": "Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "ges": "Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "gym": "Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",
    "bet": "Schüler-Lehrer-Relation (Betreuungsverhältnis) an allgemeinbildenden Schulen nach Bildungsbereichen, Schularten und Ländern seit 1990",
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
    "choiceExperiment": "experiment yourself",
    "choiceExperimentElaborate": "Allows you to add your own variables and change existing ones",
    "choiceNext": "next",
    "loadingPyodide": "Loading Python...",
    "loadingPandas": "Loading Pandas...",
    "loadingDatasets": "Loading example datasets...",
    "pyodideReady": "Python is ready.",
    "pyodideError": "Error loading Python! Hint: Do you use Firefox and reloaded the page multiple times? Then it is likely a common error in Firefox occured (memory leak). To solve this, completely close and restart Firefox.",

    "studentDatasetHeader": "Example dataset (students)",
    "studentDatasetInfo1-1": "As an easy example, let us look at the dataset 'D.stu'.",
    "studentDatasetInfo1-2": "As an easy example, let us look at the dataset 'D.stu'. It contains 15 cases representing the number of students in the 15 most popular subjects at German universities 2019/2020. Each case also has the number of students by semester (students in the first or second semester, etc.).",

    "gymDatasetHeader": "Example: Higher secondary schools",
    "gymDatasetInfo1-1": "As an example, consider the dataset 'D.gym'.",
    "gymDatasetInfo1-2": "As an example, consider the dataset 'D.gym'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",

    "gesDatasetHeader": "Example: Combined secondary schools",
    "gesDatasetInfo1-1": "As an example, consider the dataset 'D.ges'.",
    "gesDatasetInfo1-2": "As an example, consider the dataset 'D.ges'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",

    "reaDatasetHeader": "Example: Middle secondary schools",
    "reaDatasetInfo1-1": "As an example, consider the dataset 'D.rea'.",
    "reaDatasetInfo1-2": "As an example, consider the dataset 'D.rea'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",

    "hauDatasetHeader": "Example: Lower secondary schools",
    "hauDatasetInfo1-1": "As an example, consider the dataset 'D.hau'.",
    "hauDatasetInfo1-2": "Additionally, consider the dataset 'D.hau'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",

    "betDatasetHeader": "Example: Student-teacher-ratio",
    "betDatasetInfo1-1": "Consider the dataset 'D.bet'.",
    "betDatasetInfo1-2": "Consider the dataset 'D.bet'. It has 30 cases with information about the average student-teacher-ratio from 1990 to 2018. For each type of school, there is a matching attribute. At some points, data is missing, which is noted with a value of 0.",

    "sandboxExplainer": "Try any data move below.",
    
    "basicExplainer1": "Click the part of the site marked in green to continue.",
    "basicExplainer2-1": "On the right side is a list of available datasets.",
    "basicExplainer2-2": "On the right side is a list of available datasets. Below, variables can be defined to analyze the datasets.",
    "basicHeader0": "Variables",
    "basicInfo0-1": "This is a variable. It has a name, and an expression.",
    "basicInfo0-2": "This is a variable. It has a name, and an expression. Once both are written, the expression can be resolved to a value. As long as the variable is focused, the computed value is shown.",
    "basicHeader1": "Datasets",
    "basicInfo1-1": "Datasets can be viewed by assigning them to a variable.",
    "basicInfo1-2": "Datasets can be viewed by assigning them to a variable. They consist of cases (displayed as rows), attributes (displayed as columns) und values (displayed as cells).",
    "basicHeader2": "Renaming attributes",
    "basicInfo2-1": "The attributes (columns) of datasets can be renamed.",
    "basicInfo2-2": "The attributes (columns) of datasets can be renamed. For this, note the old names and the new names.",

    "selectExplainer1": "Selecting means reducing a dataset to those cases or attributes which match a certain condition.",
    "selectHeader1": "Select cases by value",
    "selectInfo1-1": "Selecting always requires a condition.",
    "selectInfo1-2": "Selecting always requires a condition. This kind of selection is per case, making a new dataset only containing those cases matching the condition.",
    "selectHeader2": "Select attributes by name",
    "selectInfo2-1": "The condition may also specify attribute names.",
    "selectInfo2-2": "The condition may also specify attribute names. In that instance, a new dataset only containing the specified columns is created.",
    "selectHeader3": "Selecting with multiple conditions",
    "selectInfo3-1": "More than one condition can be added.",
    "selectInfo3-2": "More than one condition can be added. That way, for example, selections can be done both by attribute and by case.",
    "selectHeader4": "Chain selecting",
    "selectInfo4-1": "The result of selection is a dataset.",
    "selectInfo4-2": "The result of selection is a dataset. Because of that, selecting may also be applied to that result. That way, analyses can be made more readable.",

    "mapExplainer": "Mapping means changing certain values of a dataset with a function.",
    "mapHeader1": "Defining a function",
    "mapInfo1-1": "First, mapping requires a function.",
    "mapInfo1-2": "First, mapping requires a function. The function will be applied to an attribute later.",
    "mapHeader2": "Mapping an attribute",
    "mapInfo2-1": "For mapping, a function and an attribute must be specified.",
    "mapInfo2-2": "For mapping, a function and an attribute must be specified. Here, 'assign' is used to replace the existing attribute and return the changed dataset.",
    "mapHeader3": "Data cleaning by mapping",
    "mapInfo3-1": "Mapping can be used to clean data.",
    "mapInfo3-2": "Mapping can be used to clean data. This can simplify many analyses.",

    "calculateExplainer": "Calculating means creating new values out of existing ones.",
    "calculateHeader1": "Calculating an attribute",
    "calculateInfo1-1": "New attributes can be calculated based on existing values.",
    "calculateInfo1-2": "New attributes can be calculated based on existing values. For this, the new attribute needs a name and an expression to calculate the value.",
    "calculateHeader2": "Calculate a summarizing value",
    "calculateInfo2-1": "The entire values of an attribute can be summarized as a single value.",
    "calculateInfo2-2": "The entire values of an attribute can be summarized as a single value. For this, an attribute to summarize and a function to summarize with must be specified. To note that no grouping should happen, '.groupby(lambda g: '')' can be used.",
    "calculateHeader3": "Grouping, then summarizing",
    "calculateInfo3-1":"Instead of summarizing all values of an attribute, cases can be grouped first and then summarized separately. Often, this requires calculating an attribute to group by first.",
    "calculateInfo3-2":"Instead of summarizing all values of an attribute, cases can be grouped first and then summarized separately. Often, this requires calculating an attribute to group by first. For this, a function is defined here.",
    "calculateInfo4-1":"Then, that function is applied.",
    "calculateInfo4-2":"Then, that function is applied. These steps are simply a calculating move again.",
    "calculateInfo5-1": "Finally, summarizing values for each group can be calculated.",
    "calculateInfo5-2": "Finally, summarizing values for each group can be calculated. In addition to the attribute to summarize and a function, a grouping attribute must also be specified.",

    "combineExplainer": "Combining means creating a new dataset out of two similar ones.",
    "combineInfo1-1": "Again, for this example, the dataset will first be cleaned by mapping.",
    "combineInfo1-2": "Again, for this example, the dataset will first be cleaned by mapping. For this, a function is defined.",
    "combineInfo2-1": "Next, the function is applied.",
    "combineInfo2-2": "Next, the function is applied. Now, selecting specific cases in the dataset is easier.",
    "combineInfo3-1":"Here, we want to select a subset of cases.",
    "combineInfo3-2":"Here, we want to select a subset of cases. For this, we choose a fitting condition.",
    "combineInfo4-1":"Additionally, we need another subset of cases.",
    "combineInfo4-2":"Additionally, we need another subset of cases. Note that the condition is chosen such that both subsets overlap.",
    "combineHeader5": "Uniting two datasets",
    "combineInfo5-1":"One kind of combining is uniting.",
    "combineInfo5-2":"One kind of combining is uniting. To do this, we first form a dataset containing all cases of both datasets with 'append', and then we remove duplicates with '.drop_duplicates()' and 'reset_index(drop=True)'. The result is a dataset containing all unique cases from both datasets.",
    "combineHeader6": "Intersecting two datasets",
    "combineInfo6-1":"Another kind of combining is intersecting.",
    "combineInfo6-2":"Another kind of combining is intersecting. Here, using 'merge', we only keep those cases which appear in both datasets.",
    "combineHeader7": "Getting the difference of two datasets (advanced)",
    "combineInfo7-1":"The last kind of combining is getting the difference.",
    "combineInfo7-2":"The last kind of combining is getting the difference. This forms a new dataset with only those cases which appear in the first dataset, but not in the second (getting the first dataset without the cases of the second).",

    "relateExplainer": "Relating means connecting different kinds of datasets for new insights.",
    "relateHeader2": "Preparing the datasets",
    "relateInfo2-1": "In this example we want to compare the average teacher-student ratio in Dortmund with the average for all of Germany, over time.",
    "relateInfo2-2": "In this example we want to compare the average teacher-student ratio in Dortmund with the average for all of Germany, over time. To do this, we need to prepare the datasets like before. Here, we define a function for this.",
    "relateInfo3-1": "Now we apply that function.",
    "relateInfo3-2": "Now we apply that function. The result is a cleaned dataset making computations easier.",
    "relateInfo4-1": "Next, we calculate the student-teacher-ratio per year.",
    "relateInfo4-2": "Next, we calculate the student-teacher-ratio per year. The dataset now contains an attribute 'bet' with the ratio.",
    "relateInfo5-1": "Finally, we want to limit the dataset to the attributes relevant for our question.",
    "relateInfo5-2": "Finally, we want to limit the dataset to the attributes relevant for our question. This is achieved by selecting.",
    "relateInfo6-1": "Likewise, we want to limit the attributes of the other dataset.",
    "relateInfo6-2": "Likewise, we want to limit the attributes of the other dataset. Again, this is done by selecting.",
    "relateHeader7": "Relating two datasets",
    "relateInfo7-1": "Now we can relate both prepared datasets.",
    "relateInfo7-2": "Now we can relate both prepared datasets. For this we need the first and the second dataset, and additionally a connecting attribute. The result is a dataset containing cases with attributes from both datasets.",
    "relateInfo8-1": "This connected dataset can allow for new analyses.",
    "relateInfo8-2": "This connected dataset can allow for new analyses, for example the relation between local student-teacher-ratio and the national average.",
  }
}