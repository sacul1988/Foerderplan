/**
 * Digitaler Lern-Förderplan - Kernfunktion (Professional Edition)
 * Anwendungslogik mit Firebase-Auth (Login/Rollen), Firestore-Persistenz pro Schule, Vollbild-Workspace und Bewertungsskala
 */

// --- Default Goals Database ---
const defaultGoals = {
allgemein: [
    { type: 'header', text: 'Arbeitsverhalten' },
    { type: 'subheader', text: '1. Anstrengungsbereitschaft und Ausdauer' },
    { type: 'goal', id: 'A1.1', text: '1.1 Anstrengungsbereit sein, ausdauernd arbeiten' },
    { type: 'goal', id: 'A1.2', text: '1.2 Interesse an neuen Lerninhalten entwickeln' },
    { type: 'goal', id: 'A1.3', text: '1.3 Beiträge zu Unterrichtsinhalten leisten und sich an Unterrichtsgesprächen beteiligen' },
    { type: 'goal', id: 'A1.4', text: '1.4 Pünktlich zum Unterricht erscheinen' },
    { type: 'goal', id: 'A1.5', text: '1.5 Regelmäßig zum Unterricht erscheinen' },
    { type: 'subheader', text: '2. Konzentration und Arbeitstempo' },
    { type: 'goal', id: 'A2.1', text: '2.1 Aufmerksamkeit gezielt auf eine Aufgabe lenken' },
    { type: 'goal', id: 'A2.2', text: '2.2 Bei Anforderungen genau hinsehen' },
    { type: 'goal', id: 'A2.3', text: '2.3 Aufmerksam zuhören' },
    { type: 'goal', id: 'A2.4', text: '2.4 In angemessenem Tempo arbeiten' },
    { type: 'goal', id: 'A2.5', text: '2.5 Flüchtigkeitsfehler vermeiden' },
    { type: 'subheader', text: '3. Selbstständigkeit' },
    { type: 'goal', id: 'A3.1', text: '3.1 Zeitliche Abläufe im Schulalltag wahrnehmen und umsetzen' },
    { type: 'goal', id: 'A3.2', text: '3.2 Aufgaben selbstständig bearbeiten' },
    { type: 'goal', id: 'A3.3', text: '3.3 Hilfe nur dann holen, wenn erforderlich' },
    { type: 'goal', id: 'A3.4', text: '3.4 Lernstrategien anwenden' },
    { type: 'goal', id: 'A3.5', text: '3.5 Sich erreichbare Ziele setzen' },
    { type: 'goal', id: 'A3.6', text: '3.6 Zielstrebig vorgehen' },
    { type: 'goal', id: 'A3.7', text: '3.7 Eigene Ergebnisse bewerten' },
    { type: 'subheader', text: '4. Sorgfalt' },
    { type: 'goal', id: 'A4.1', text: '4.1 Arbeitsmaterialien regelmäßig mitbringen' },
    { type: 'goal', id: 'A4.2', text: '4.2 Arbeitsmittel und -materialien sachgerecht nutzen' },
    { type: 'goal', id: 'A4.3', text: '4.3 Arbeitsplatz organisieren' },
    { type: 'goal', id: 'A4.4', text: '4.4 Sorgfältig und vollständig arbeiten' },
    { type: 'goal', id: 'A4.5', text: '4.5 Hausaufgaben sorgfältig und vollständig erledigen' },
    { type: 'goal', id: 'A4.6', text: '4.6 Mappen und Hefte ordentlich führen' },
    { type: 'header', text: 'Sozialverhalten' },
    { type: 'subheader', text: '1. Kooperation' },
    { type: 'goal', id: 'S1.1', text: '1.1 Mit anderen Schülerinnen und Schülern gut zusammenarbeiten' },
    { type: 'goal', id: 'S1.2', text: '1.2 Kompromisse schließen' },
    { type: 'goal', id: 'S1.3', text: '1.3 Gemeinsame Ziele verfolgen' },
    { type: 'subheader', text: '2. Selbstwahrnehmung' },
    { type: 'goal', id: 'S2.1', text: '2.1 Eigene Stärken und Schwächen realistisch einschätzen' },
    { type: 'goal', id: 'S2.2', text: '2.2 Eigene Gefühle wahrnehmen' },
    { type: 'goal', id: 'S2.3', text: '2.3 Folgen eigenen Handelns realistisch einschätzen' },
    { type: 'subheader', text: '3. Selbstkontrolle' },
    { type: 'goal', id: 'S3.1', text: '3.1 Impulsives Verhalten kontrollieren' },
    { type: 'goal', id: 'S3.2', text: '3.2 Eigene Bedürfnisse aufschieben' },
    { type: 'goal', id: 'S3.3', text: '3.3 Angemessene Frustrationstoleranz entwickeln' },
    { type: 'goal', id: 'S3.4', text: '3.4 Mit Kritik angemessen umgehen' },
    { type: 'subheader', text: '4. Einfühlungsvermögen und Hilfsbereitschaft' },
    { type: 'goal', id: 'S4.1', text: '4.1 Die Perspektive anderer einnehmen' },
    { type: 'goal', id: 'S4.2', text: '4.2 Verantwortung in einer Gemeinschaft übernehmen' },
    { type: 'goal', id: 'S4.3', text: '4.3 Verantwortungsvoll mit Hilfestellungen bei sich selbst und anderen umgehen' },
    { type: 'subheader', text: '5. Angemessene Selbstbehauptung' },
    { type: 'goal', id: 'S5.1', text: '5.1 Selbstvertrauen entwickeln' },
    { type: 'goal', id: 'S5.2', text: '5.2 Mit Konflikten angemessen umgehen' },
    { type: 'goal', id: 'S5.3', text: '5.3 Auf unangebrachtes Verhalten anderer angemessen reagieren' },
    { type: 'goal', id: 'S5.4', text: '5.4 Eigene Meinungen, Kritik und Wünsche angemessen äußern' },
    { type: 'subheader', text: '6. Sozialkontakt und Regelbewusstsein' },
    { type: 'goal', id: 'S6.1', text: '6.1 Gefühle angemessen zeigen' },
    { type: 'goal', id: 'S6.2', text: '6.2 Angemessenen Kontakt aufnehmen' },
    { type: 'goal', id: 'S6.3', text: '6.3 Mitschülerinnen, Mitschüler und Erwachsene respektvoll behandeln' },
    { type: 'goal', id: 'S6.4', text: '6.4 Sich an Regeln und Vereinbarungen halten' }
  ],
  mathe: [
    // 1. Mathematisches Kommunizieren
    { type: 'header', text: '1. Mathematisches Kommunizieren' },
    { type: 'goal', id: '1.1', text: '1.1 Einfache mathematische Sachverhalte beschreiben' },
    { type: 'goal', id: '1.2', text: '1.2 In einen Dialog über mathematische Aufgaben und Sachverhalte treten/Argumentieren' },
    { type: 'goal', id: '1.3', text: '1.3 Mathematische (Fach-)Begriffe und Zeichen sachgerecht nutzen' },
    
    // 2. Mathematisches Darstellen
    { type: 'header', text: '2. Mathematisches Darstellen' },
    { type: 'goal', id: '2.1', text: '2.1 Mathematische Darstellungen nutzen' },
    { type: 'goal', id: '2.2', text: '2.2 Mathematische Sachverhalte darstellen' },
    { type: 'goal', id: '2.3', text: '2.3 Eine mathematische Darstellung in eine andere umsetzen' },
    { type: 'goal', id: '2.4', text: '2.4 Mathematische Zeichen sachgerecht zur Darstellung von Aussagen nutzen und Dokumentationen vornehmen' },
    
    // 3. Mathematisches Problemlösen
    { type: 'header', text: '3. Mathematisches Problemlösen' },
    { type: 'goal', id: '3.1', text: '3.1 Zusammenhänge erkennen und nutzen' },
    { type: 'goal', id: '3.2', text: '3.2 Mathematische Problemstellungen erkennen, beschreiben, präzisieren und Lösungsstrategien anwenden' },
    { type: 'goal', id: '3.3', text: '3.3 Prozess und Ergebnis der Problemlösung beurteilen' },
    
    // 4. Mathematisches Modellieren
    { type: 'header', text: '4. Mathematisches Modellieren' },
    { type: 'goal', id: '4.1', text: '4.1 Relevante Informationen in vertrauten Alltagssituationen beschreiben' },
    { type: 'goal', id: '4.2', text: '4.2 Sachprobleme in der Sprache der Mathematik beschreiben' },
    { type: 'goal', id: '4.3', text: '4.3 Mathematische Modelle zuordnen und überprüfen' },
    
    // 5. Mit symbolischen, formalen und technischen Elementen der Mathematik umgehen
    { type: 'header', text: '5. Mit symbolischen, formalen und technischen Elementen der Mathematik umgehen' },
    { type: 'goal', id: '5.1', text: '5.1 Mathematische Werkzeuge verwenden' },
    { type: 'goal', id: '5.2', text: '5.2 Symbolische Ausdrücke sachgerecht verwenden' },
    { type: 'goal', id: '5.3', text: '5.3 Lösungs- und Kontrollverfahren verwenden' },
    
    // 6. Zahlen und Operationen
    { type: 'header', text: '6. Zahlen und Operationen' },
    { type: 'subheader', text: '6.1 Im Zahlenraum bis 100 rechnen' },
    { type: 'goal', id: '6.1.1', text: '6.1.1 Zehnerzahlen strukturiert darstellen, Zahlbeziehungen formulieren und mit Zehnerzahlen rechnen' },
    { type: 'goal', id: '6.1.2', text: '6.1.2 Zahlen strukturiert darstellen und Zahlbeziehungen formulieren im Zahlenraum bis 100' },
    { type: 'goal', id: '6.1.3', text: '6.1.3 Additions- und Subtraktionsaufgaben im Zahlenraum bis 100 lösen und Strukturen nutzen' },
    { type: 'goal', id: '6.1.4', text: '6.1.4 Multiplikations- und Divisionsaufgaben des kleinen Einmaleins im Zahlenraum bis 100 lösen und Strukturen nutzen' },
    { type: 'goal', id: '6.1.5', text: '6.1.5 Rechnungen im Zahlenraum bis 100 mithilfe des Taschenrechners lösen' },
    
    { type: 'subheader', text: '6.2 Im Zahlenraum bis 1000 und darüber hinaus rechnen' },
    { type: 'goal', id: '6.2.1', text: '6.2.1 Zahlen strukturiert darstellen and Zahlbeziehungen formulieren im Zahlenraum bis 1000 und darüber hinaus' },
    { type: 'goal', id: '6.2.2', text: '6.2.2 Die Grundrechenarten im Zahlenraum bis 1000 und darüber hinaus anwenden und Strukturen nutzen' },
    { type: 'goal', id: '6.2.3', text: '6.2.3 Rechnungen im Zahlenraum bis 1000 und darüber hinaus mithilfe des Taschenrechners lösen' },
    
    { type: 'goal', id: '6.3', text: '6.3 Sachsituationen und Mathematik in Beziehung setzen' },
    { type: 'goal', id: '6.4', text: '6.4 Sinntragende Vorstellungen von Zahlbereichen erwerben, Rechenverfahren anwenden und Ergebnisse überprüfen' },
    { type: 'goal', id: '6.5', text: '6.5 Besonderheiten der Zahldarstellung erkennen' },
    { type: 'goal', id: '6.6', text: '6.6 Inhaltliche Vorstellungen und Darstellungen für Operationen in unterschiedlichen Zahlbereichen nutzen' },
    
    // 7. Größen und Messen
    { type: 'header', text: '7. Größen und Messen' },
    { type: 'subheader', text: '7.1 Geld' },
    { type: 'goal', id: '7.1.1', text: '7.1.1 Geld im Alltag entdecken' },
    { type: 'goal', id: '7.1.2', text: '7.1.2 Geld strukturieren' },
    { type: 'goal', id: '7.1.3', text: '7.1.3 Mit Geldbeträgen rechnen' },
    { type: 'goal', id: '7.1.4', text: '7.1.4 Mit Geld in Sachsituationen umgehen und Größenvorstellungen nutzen' },
    
    { type: 'subheader', text: '7.2 Zeit' },
    { type: 'goal', id: '7.2.1', text: '7.2.1 Im Alltag Zeitspannen wahrnehmen und Zeitmesser entdecken' },
    { type: 'goal', id: '7.2.2', text: '7.2.2 Den Lauf des Tages/der Woche/des Jahres strukturieren' },
    { type: 'goal', id: '7.2.3', text: '7.2.3 Uhrzeiten bestimmen' },
    { type: 'goal', id: '7.2.4', text: '7.2.4 Mit Zeitpunkt und Zeitdauer rechnen' },
    { type: 'goal', id: '7.2.5', text: '7.2.5 Mit Zeitangaben in Sachsituationen umgehen und Größenvorstellungen nutzen' },
    
    { type: 'subheader', text: '7.3 Längen' },
    { type: 'goal', id: '7.3.1', text: '7.3.1 Längenangaben im Alltag entdecken' },
    { type: 'goal', id: '7.3.2', text: '7.3.2 Längen messen' },
    { type: 'goal', id: '7.3.3', text: '7.3.3 Mit Längenangaben rechnen' },
    { type: 'goal', id: '7.3.4', text: '7.3.4 Mit Längenangaben in Sachsituationen umgehen und Größenvorstellungen nutzen' },
    
    { type: 'subheader', text: '7.4 Gewicht' },
    { type: 'goal', id: '7.4.1', text: '7.4.1 Gewichtsangaben im Alltag entdecken' },
    { type: 'goal', id: '7.4.2', text: '7.4.2 Gewicht bestimmen' },
    { type: 'goal', id: '7.4.3', text: '7.4.3 Mit Gewichtsangaben rechnen' },
    { type: 'goal', id: '7.4.4', text: '7.4.4 Mit Gewichtsangaben in Sachsituationen umgehen und Größenvorstellungen nutzen' },
    
    { type: 'subheader', text: '7.5 Hohlmaße' },
    { type: 'goal', id: '7.5.1', text: '7.5.1 Literangaben im Alltag entdecken' },
    { type: 'goal', id: '7.5.2', text: '7.5.2 Literangaben bestimmen' },
    { type: 'goal', id: '7.5.3', text: '7.5.3 Mit Literangaben in Sachsituationen umgehen und Größenvorstellungen nutzen' },
    
    { type: 'goal', id: '7.6', text: '7.6 Größen mithilfe eines direkten Größenvergleichs sortieren' },
    
    // 8. Raum und Form
    { type: 'header', text: '8. Raum und Form' },
    { type: 'goal', id: '8.1', text: '8.1 Orientierung im Raum' },
    { type: 'goal', id: '8.2', text: '8.2 Größen, Einheiten und Figuren' },
    { type: 'goal', id: '8.2.1', text: '8.2.1 Geometrische Flächen' },
    { type: 'goal', id: '8.2.2', text: '8.2.2 Geometrische Körper' },
    { type: 'goal', id: '8.3', text: '8.3 Symmetrie' },
    { type: 'goal', id: '8.4', text: '8.4 Geometrische Muster' },
    { type: 'goal', id: '8.5', text: '8.5 Geraden, Strecken und Kreise' },
    { type: 'goal', id: '8.6', text: '8.6 Winkel' },
    { type: 'goal', id: '8.7', text: '8.7 Koordinatensystem' },
    { type: 'goal', id: '8.8', text: '8.8 Innermathematische und realitätsbezogene geometrische Probleme lösen' },
    
    // 9. Funktionaler Zusammenhang
    { type: 'header', text: '9. Funktionaler Zusammenhang' },
    { type: 'goal', id: '9.1', text: '9.1 Muster, Beziehungen und Funktionen beschreiben' },
    { type: 'goal', id: '9.2', text: '9.2 Sich mit proportionalen und antiproportionalen Zuordnungen auseinandersetzen' },
    
    // 10. Daten und Zufall
    { type: 'header', text: '10. Daten und Zufall' },
    { type: 'goal', id: '10.1', text: '10.1 Informationen in einfachen Darstellungen benennen' },
    { type: 'goal', id: '10.2', text: '10.2 Einfache Verfahren der Datenerhebung umsetzen und die Ergebnisse darstellen' },
    { type: 'goal', id: '10.3', text: '10.3 Zufallsexperimente durchführen und Wahrscheinlichkeiten beschreiben' }
  ],
  englisch: [
    { type: 'header', text: "1. Hör- und Hör-Seh-Verstehen" },
    { type: 'subheader', text: "1.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '1.1.1', text: "1.1.1 Die englische Sprache in authentischen Situationen von anderen Sprachen unterscheiden" },
    { type: 'goal', id: '1.1.2', text: "1.1.2 Vertraute Wörter und ausgewählte grundlegende Satzmuster wiedererkennen und verstehen" },
    { type: 'goal', id: '1.1.3', text: "1.1.3 Fragen, einfache Aufforderungen und Anweisungen sowie kurze Erklärungen und Mitteilungen verstehen" },
    { type: 'goal', id: '1.1.4', text: "1.1.4 Den groben Handlungsverlauf von (einfachen) Dialogen und Geschichten verstehen" },
    { type: 'goal', id: '1.1.5', text: "1.1.5 (Einfachen) Hörtexten wesentliche Informationen entnehmen" },
    { type: 'goal', id: '1.1.6', text: "1.1.6 (Vorhersehbare) einfache Informationen aus kurzen, langsam und deutlich gesprochenen Film- und Tonaufnahmen entnehmen" },
    { type: 'goal', id: '1.1.7', text: "1.1.7 Detaillierte Informationen über vertraute Themen einfachen Filmen, Radio-/Fernsehsendungen entnehmen" },
    { type: 'goal', id: '1.1.8', text: "1.1.8 Wesentliche Merkmale (Figuren und Handlungsabläufe) einfacher Geschichten oder Spielszenen erfassen" },
    { type: 'goal', id: '1.1.9', text: "1.1.9 (Kurze und einfache) mediengestützte Präsentationen verstehen" },
    { type: 'subheader', text: "1.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '1.2.1', text: "1.2.1 Eine Frage- und Erwartungshaltung zu Hörtexten entwickeln" },
    { type: 'goal', id: '1.2.2', text: "1.2.2 Verschiedene Hörstrategien anwenden (global understanding, listening for detail)" },
    { type: 'header', text: "2. Sprechen – Zusammenhängendes Sprechen" },
    { type: 'subheader', text: "2.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '2.1.1', text: "2.1.1 Bekannte kurze Lieder/Texte singen/sprechen" },
    { type: 'goal', id: '2.1.2', text: "2.1.2 Über die eigene Person sprechen" },
    { type: 'goal', id: '2.1.3', text: "2.1.3 (Vertraute) Gegenstände, Personen und Bilder benennen und beschreiben" },
    { type: 'goal', id: '2.1.4', text: "2.1.4 Einfache classroom phrases verwenden" },
    { type: 'goal', id: '2.1.5', text: "2.1.5 Sprechanlässe zu kreativem und produktivem sprachlichem Handeln nutzen (Umsetzung des generativen Prinzips)" },
    { type: 'subheader', text: "2.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '2.2.1', text: "2.2.1 Stichwörter und einzelne kurze Modellsätze und -texte für die mündliche Sprachproduktion nutzen" },
    { type: 'goal', id: '2.2.2', text: "2.2.2 Unterschiedliche Medien zur Sprachproduktion nutzen" },
    { type: 'goal', id: '2.2.3', text: "2.2.3 Eigene Texte für Präsentationen nutzen" },
    { type: 'goal', id: '2.2.4', text: "2.2.4 Texte mithilfe von Stichworten und Gliederungen vortragen" },
    { type: 'header', text: "3. Sprechen – An Gesprächen teilnehmen" },
    { type: 'subheader', text: "3.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '3.1.1', text: "3.1.1 Sich oder andere Personen in elementarer Form vorstellen" },
    { type: 'goal', id: '3.1.2', text: "3.1.2 Gespräche beginnen und beenden" },
    { type: 'goal', id: '3.1.3', text: "3.1.3 Kurze Fragen mithilfe einfacher Redemittel stellen und beantworten" },
    { type: 'goal', id: '3.1.4', text: "3.1.4 (Geübte und gefestigte) Dialoge gestalten" },
    { type: 'goal', id: '3.1.5', text: "3.1.5 (Einfache) Sprechsituationen zu kreativem und produktivem sprachlichem Handeln nutzen (Umsetzung des generativen Prinzips)" },
    { type: 'subheader', text: "3.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '3.2.1', text: "3.2.1 Die Fremdsprache in kooperativen Lernformen verwenden" },
    { type: 'goal', id: '3.2.2', text: "3.2.2 Grundlegende Regeln des Gesprächsablaufs beachten" },
    { type: 'goal', id: '3.2.3', text: "3.2.3 In der Klasse und in Alltagssituationen Kontakt aufnehmen, auf Ansprache reagieren und sich in Kommunikationsprozesse einbringen" },
    { type: 'header', text: "4. Leseverstehen" },
    { type: 'subheader', text: "4.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '4.1.1', text: "4.1.1 Unterschiede in der Laut-Buchstaben-Zuordnung zwischen Fremdsprache und deutscher Sprache erkennen" },
    { type: 'goal', id: '4.1.2', text: "4.1.2 Das Wortbild vertrauter Wörter, Sätze und Texte dem Lautbild zuordnen" },
    { type: 'goal', id: '4.1.3', text: "4.1.3 (Kurze,) einfache, alltags- und unterrichtsbezogene Anweisungen, Anleitungen, Fragen und Aussagen lesen und verstehen" },
    { type: 'goal', id: '4.1.4', text: "4.1.4 (Kurze,) einfache (persönliche) Mitteilungen lesen und verstehen" },
    { type: 'goal', id: '4.1.5', text: "4.1.5 Einfachen Alltagstexten konkrete wesentliche Informationen entnehmen" },
    { type: 'goal', id: '4.1.6', text: "4.1.6 Wesentliche Aussagen kurzer, (einfacher) fiktionaler Texte erfassen" },
    { type: 'goal', id: '4.1.7', text: "4.1.7 Schriftliche Satzstrukturen als Hilfe zum Sprechen nutzen" },
    { type: 'goal', id: '4.1.8', text: "4.1.8 Kombinierte Hör- und Lesetechniken anwenden" },
    { type: 'goal', id: '4.1.9', text: "4.1.9 Sprache hörend und lesend verstehen" },
    { type: 'subheader', text: "4.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '4.2.1', text: "4.2.1 Medien zum Nachschlagen als Hilfsmittel nutzen" },
    { type: 'goal', id: '4.2.2', text: "4.2.2 Verschiedene Lesetechniken anwenden" },
    { type: 'goal', id: '4.2.3', text: "4.2.3 Sich einen groben Überblick über Struktur und Inhalt eines Textes verschaffen" },
    { type: 'goal', id: '4.2.4', text: "4.2.4 Wichtige Details und Textstellen identifizieren" },
    { type: 'goal', id: '4.2.5', text: "4.2.5 Informationen ergebnisorientiert erarbeiten und verwenden" },
    { type: 'header', text: "5. Schreiben" },
    { type: 'subheader', text: "5.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '5.1.1', text: "5.1.1 Einzelne englische Wörter schreiben" },
    { type: 'goal', id: '5.1.2', text: "5.1.2 Wörter und einfache Wendungen vom Smartboard oder aus Textvorlagen übertragen" },
    { type: 'goal', id: '5.1.3', text: "5.1.3 Einzelne bekannte Wörter und kurze Sätze (unter Zuhilfenahme von Vorlagen) schreiben" },
    { type: 'goal', id: '5.1.4', text: "5.1.4 Einzelne kurze bekannte Texte (unter Zuhilfenahme von Vorlagen) schreiben" },
    { type: 'goal', id: '5.1.5', text: "5.1.5 Einfache, kurze persönliche Texte verfassen" },
    { type: 'subheader', text: "5.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '5.2.1', text: "5.2.1 Die lernunterstützende Funktion des Schriftbilds als Merkhilfe für den eigenen Lernprozess und als Gedächtnisstütze für Sprechanlässe nutzen" },
    { type: 'goal', id: '5.2.2', text: "5.2.2 Medien zur Erstellung kurzer Texte verwenden" },
    { type: 'goal', id: '5.2.3', text: "5.2.3 Ein orthografisches Bewusstsein für die englische Sprache entwickeln" },
    { type: 'goal', id: '5.2.4', text: "5.2.4 Die Phasen des Schreibprozesses (Entwerfen, Schreiben, Überarbeiten) zunehmend selbstständig durchführen" },
    { type: 'header', text: "6. Sprachmittlung" },
    { type: 'subheader', text: "6.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '6.1.1', text: "6.1.1 Das Wesentliche von Gehörtem und zum Teil auch Gelesenem in der eigenen Sprache wiedergeben" },
    { type: 'goal', id: '6.1.2', text: "6.1.2 Zunehmend adressaten- und situationsgerechte Strategien und Hilfsmittel einsetzen" },
    { type: 'subheader', text: "6.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '6.2.1', text: "6.2.1 Medien und einfache Techniken zum Vermitteln zwischen zwei Sprachen nutzen" },
    { type: 'header', text: "7. Sprachliche Mittel" },
    { type: 'subheader', text: "7.1 Wortschatz" },
    { type: 'subheader', text: "7.1.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '7.1.1.1', text: "7.1.1.1 Den zentralen Wortschatz und einfache Strukturen im Unterrichtsgespräch und in kommunikativen Situationen verstehen und verwenden" },
    { type: 'goal', id: '7.1.1.2', text: "7.1.1.2 Wortfelder zu bekannten Themen erarbeiten und den englischen Wortschatz erweitern" },
    { type: 'goal', id: '7.1.1.3', text: "7.1.1.3 Wortschatz trainieren und festigen" },
    { type: 'goal', id: '7.1.1.4', text: "7.1.1.4 Sprachliche Mittel einsetzen" },
    { type: 'goal', id: '7.1.1.5', text: "7.1.1.5 Sprache mündlich und schriftlich verwenden" },
    { type: 'subheader', text: "7.1.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '7.1.2.1', text: "7.1.2.1 Sprachliche Mittel erwerben" },
    { type: 'goal', id: '7.1.2.2', text: "7.1.2.2 Unterschiedliche Materialien, Medien und Verfahren zur Festigung und Erweiterung des Wortschatzes nutzen" },
    { type: 'goal', id: '7.1.2.3', text: "7.1.2.3 In Einzelarbeit und in kooperativen Lernformen üben" },
    { type: 'goal', id: '7.1.2.4', text: "7.1.2.4 Den eigenen Lernfortschritt wahrnehmen, beschreiben und dokumentieren und zur Förderung des eigenen Lernfortschritts beitragen" },
    { type: 'goal', id: '7.1.2.5', text: "7.1.2.5 Englische Formen und Funktionen verwenden" },
    { type: 'subheader', text: "7.2 Grammatik" },
    { type: 'subheader', text: "7.2.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '7.2.1.1', text: "7.2.1.1 (Einfache) Aussagen, Fragen und Aufforderungen in bejahter und verneinter Form verstehen" },
    { type: 'goal', id: '7.2.1.2', text: "7.2.1.2 Anzahl, Art und Zugehörigkeit von Gegenständen, Lebewesen und Sachverhalten verstehen und sie (mit einfachen Satzmustern) beschreiben" },
    { type: 'goal', id: '7.2.1.3', text: "7.2.1.3 Einfache räumliche Beziehungen verstehen und verwenden" },
    { type: 'goal', id: '7.2.1.4', text: "7.2.1.4 Bekannte Handlungen, Ereignisse und Sachverhalte als gegenwärtig, vergangen, zukünftig oder zeitlos erkennen, verstehen und ansatzweise selbst ausdrücken" },
    { type: 'goal', id: '7.2.1.5', text: "7.2.1.5 Einfache Bedingungen und Bezüge verstehen und verwenden" },
    { type: 'goal', id: '7.2.1.6', text: "7.2.1.6 Handlungsperspektiven (einschließlich passiver Satzkonstruktionen) erkennen und verstehen" },
    { type: 'goal', id: '7.2.1.7', text: "7.2.1.7 Dauer, Wiederholung und Abfolge von Handlungen und Sachverhalten ausdrücken" },
    { type: 'subheader', text: "7.2.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '7.2.2.1', text: "7.2.2.1 Sprachliche Regelmäßigkeiten erkennen und daraus Regeln ableiten" },
    { type: 'goal', id: '7.2.2.2', text: "7.2.2.2 Hilfsmittel zum Nachschlagen und Lernen (u. a. Online- Wörterbücher, Grammatiken) selbstständig nutzen" },
    { type: 'header', text: "8. Aussprache und Intonation" },
    { type: 'subheader', text: "8.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '8.1.1', text: "8.1.1 Typische Aussprache- und Intonationsmuster erkennen und imitieren" },
    { type: 'goal', id: '8.1.2', text: "8.1.2 Häufig geübte Wörter und Redewendungen verständlich aussprechen" },
    { type: 'goal', id: '8.1.3', text: "8.1.3 Regelmäßigkeiten in vertrauten Klang- und Betonungsmustern erkennen" },
    { type: 'subheader', text: "8.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '8.2.1', text: "8.2.1 Unterschiedliche Medien zur Übung der Aussprache und Intonation nutzen" },
    { type: 'header', text: "9. Interkulturelle (kommunikative) und landeskundliche Kompetenzen" },
    { type: 'subheader', text: "9.1 Angestrebte inhaltsbezogene Kompetenzen" },
    { type: 'goal', id: '9.1.1', text: "9.1.1 Landeskundliche Kompetenzen erwerben" },
    { type: 'goal', id: '9.1.2', text: "9.1.2 Bereitschaft zeigen, interkulturelle Erfahrungen zu sammeln und sich auf fremde Situationen einzulassen" },
    { type: 'goal', id: '9.1.3', text: "9.1.3 Interkulturelle Kompetenzen erwerben" },
    { type: 'goal', id: '9.1.4', text: "9.1.4 Die kulturelle Gebundenheit von Intonation, Gestik und Mimik erleben" },
    { type: 'subheader', text: "9.2 Angestrebte methodenbezogene Kompetenzen" },
    { type: 'goal', id: '9.2.1', text: "9.2.1 Den Nutzen der Fremdsprache zur Pflege von persönlichen und beruflichen Kontakten erkennen" },
    { type: 'header', text: "10. Lernfortschritte reflektieren" },
    { type: 'goal', id: '10.1', text: "10.1 Schriftliche Aufgaben kontrollieren" },
    { type: 'goal', id: '10.2', text: "10.2 Eigene Lernfortschritte wahrnehmen" },
  ],
deutsch: [
    { type: 'header', text: '1. Mit anderen kommunizieren' },
    { type: 'goal', id: '1.1', text: '1.1 In kommunikativen Alltagssituationen sprachlich angemessen reagieren' },
    { type: 'goal', id: '1.2', text: '1.2 Durch bekannte Gesprächssituationen führen' },
    { type: 'header', text: '2. Vor anderen sprechen / sich mitteilen' },
    { type: 'goal', id: '2.1', text: '2.1 Anliegen, Gefühle, Meinungen, Fragen und Lösungsideen vortragen' },
    { type: 'goal', id: '2.2', text: '2.2 Zu anderen sprechen' },
    { type: 'goal', id: '2.3', text: '2.3 Personen, Gegenstände und Sachverhalte beschreiben' },
    { type: 'goal', id: '2.4', text: '2.4 Reime und Sprechverse erarbeiten und präsentieren' },
    { type: 'goal', id: '2.5', text: '2.5 Lernen reflektieren und Arbeitsergebnisse präsentieren' },
    { type: 'header', text: '3. Aufmerksamkeit richten und verstehend zuhören' },
    { type: 'goal', id: '3', text: '3. Aufmerksamkeit richten und verstehend zuhören' },
    { type: 'header', text: '4. Szenisch spielen' },
    { type: 'goal', id: '4.1', text: '4.1 Den eigenen Körper mit seinen Bewegungs- und Ausdrucksmöglichkeiten wahrnehmen' },
    { type: 'goal', id: '4.2', text: '4.2 Personenbezogene Ausdrucks- und Darstellungsformen erfassen' },
    { type: 'goal', id: '4.3', text: '4.3 Alltägliche Handlungen und Handlungsabläufe imitieren und darstellen' },
    { type: 'goal', id: '4.4', text: '4.4 Vorgegebene Rollen und Inhalte darstellen' },
    { type: 'header', text: '5. Über Lesefertigkeiten verfügen' },
    { type: 'subheader', text: '5.1 Wörter, Sätze und kurze Texte erlesen' },
    { type: 'goal', id: '5.1.1', text: '5.1.1 Auf der alphabetischen Stufe lesen' },
    { type: 'goal', id: '5.1.2', text: '5.1.2 Auf der orthografischen und integrativ-automatisierten Stufe lesen' },
    { type: 'goal', id: '5.2', text: '5.2 Die Bedeutung des Gelesenen erfassen' },
    { type: 'goal', id: '5.3', text: '5.3 Lesestrategien anwenden' },
    { type: 'goal', id: '5.4', text: '5.4 Die Lesefertigkeit erhöhen und beurteilen' },
    { type: 'header', text: '6. Über Leseerfahrungen verfügen' },
    { type: 'goal', id: '6.1', text: '6.1 Den Gebrauchswert des Lesens erfahren und die Lesefertigkeit in Alltagssituationen nutzen' },
    { type: 'goal', id: '6.2', text: '6.2 Lesefreude entwickeln' },
    { type: 'goal', id: '6.3', text: '6.3 Analoge und digitale Medienangebote nutzen und interessengeleitet auswählen' },
    { type: 'header', text: '7. Texte erschließen und präsentieren' },
    { type: 'goal', id: '7.1', text: '7.1 Texte erschließen' },
    { type: 'goal', id: '7.1.1', text: '7.1.1 Literarische Texte erschließen, verstehen und nutzen' },
    { type: 'goal', id: '7.1.2', text: '7.1.2 Sach- und Gebrauchstexte erschließen, verstehen und nutzen' },
    { type: 'goal', id: '7.2', text: '7.2 Texte und Medienprodukte präsentieren' },
    { type: 'goal', id: '7.3', text: '7.3 Medien verstehen und nutzen' },
    { type: 'header', text: '8. Über Schreibfertigkeiten verfügen' },
    { type: 'goal', id: '8.1', text: '8.1 Eine unverbundene Schrift ausgehend von den Richtformen der Druckschrift schreiben' },
    { type: 'goal', id: '8.2', text: '8.2 Eine verbundene Schrift ausgehend von den Richtformen der Vereinfachten Ausgangsschrift oder der Schulausgangsschrift schreiben' },
    { type: 'goal', id: '8.3', text: '8.3 Schreibprodukte strukturiert gestalten' },
    { type: 'header', text: '9. Richtig schreiben' },
    { type: 'goal', id: '9.1', text: '9.1 Phonologisches und silbisches Prinzip nutzen' },
    { type: 'goal', id: '9.2', text: '9.2 Morphologisches Prinzip nutzen' },
    { type: 'goal', id: '9.3', text: '9.3 Grammatisches Prinzip nutzen' },
    { type: 'goal', id: '9.4', text: '9.4 Rechtschreibhilfen, -techniken und -strategien anwenden' },
    { type: 'goal', id: '9.5', text: '9.5 Rechtschreibkenntnisse in unterschiedlichen Diktatformen festigen' },
    { type: 'goal', id: '9.6', text: '9.6 Rechtschreibbewusstsein zeigen und Rechtschreibung überprüfen' },
    { type: 'header', text: '10. Texte planen und schreiben' },
    { type: 'goal', id: '10.1', text: '10.1 Eigene Texte verfassen' },
    { type: 'goal', id: '10.2', text: '10.2 Eigene Schreibideen entwickeln' },
    { type: 'goal', id: '10.3', text: '10.3 Einen Schreibprozess eigenverantwortlich gestalten' },
    { type: 'goal', id: '10.3.1', text: '10.3.1 Zentrale Schreibformen sachgerecht nutzen: Gestaltendes Schreiben' },
    { type: 'goal', id: '10.3.2', text: '10.3.2 Zentrale Schreibformen sachgerecht nutzen: Informierendes Schreiben' },
    { type: 'goal', id: '10.3.3', text: '10.3.3 Zentrale Schreibformen sachgerecht nutzen: Argumentierendes und appellierendes Schreiben' },
    { type: 'goal', id: '10.3.4', text: '10.3.4 Zentrale Schreibformen sachgerecht nutzen: Untersuchendes Schreiben' },
    { type: 'goal', id: '10.4', text: '10.4 Eigene Texte überarbeiten' },
    { type: 'header', text: '11. Einsicht in sprachliche Strukturen und Prozesse gewinnen' },
    { type: 'goal', id: '11.1', text: '11.1 Kommunikationssituationen unterscheiden' },
    { type: 'goal', id: '11.2', text: '11.2 Verständigungsprobleme in Kommunikationssituationen erkennen und bewältigen' },
    { type: 'goal', id: '11.3', text: '11.3 Differenzierten und adressatenbezogenen Einsatz von Sprache unterscheiden' },
    { type: 'goal', id: '11.4', text: '11.4 Gemeinsamkeiten und Unterschiede von Sprachen erkennen' },
    { type: 'goal', id: '11.5', text: '11.5 Sprachgebrauch und Sprache untersuchen und reflektieren' },
    { type: 'goal', id: '11.6', text: '11.6 Textbeschaffenheit analysieren und reflektieren' },
    { type: 'goal', id: '11.7', text: '11.7 Leistungen von Wortarten und Sätzen kennen und sie für Sprechen, Schreiben und Textuntersuchung nutzen' }
  ]
};

// --- Application State ---
const state = {
  students: [],
  // Angemeldete Lehrkraft: { uid, email, name, role: 'admin'|'lehrer', schoolId }
  currentUser: null,
  // In-Memory-Cache der Zeitraum-Daten (aus Firestore geladen)
  zeitraum: null,
  selectedStudentId: null,
  selectedSubject: null,
  mode: null, // 'default' | 'einsehen'
  // Session storage for custom goals added by user
  sessionCustomGoals: {
    allgemein: [],
    mathe: [],
    englisch: [],
    deutsch: []
  },
  // Selected goal strings for Step 1
  selectedGoals: [],
  // Temporary map used during editing in the workspace (goal: level)
  editingPlans: {},
  // Stammdaten edit mode
  stammdatenEditMode: false,
  // Whether stammdaten were confirmed/saved in current erstellen session
  stammdatenConfirmed: false
};

// Subject Config
const subjectConfig = {
  allgemein: { name: 'Allgemeine Entwicklung' },
  mathe: { name: 'Mathematik' },
  englisch: { name: 'Englisch' },
  deutsch: { name: 'Deutsch' }
};

// --- DOM Elements ---
const DOM = {
  homeView: document.getElementById('home-view'),
  homeTileVerwaltung: document.getElementById('btn-verwaltung-header'),
  homeTileErstellen: document.getElementById('home-tile-erstellen'),
  homeTileEinsehen: document.getElementById('home-tile-einsehen'),
  verwaltungView: document.getElementById('verwaltung-view'),
  verwaltungTileSchueler: document.getElementById('verwaltung-tile-schueler'),
  verwaltungTileZeitraum: document.getElementById('verwaltung-tile-zeitraum'),
  verwaltungTileUebersicht: document.getElementById('verwaltung-tile-uebersicht'),
  verwaltungTileArchiv: document.getElementById('verwaltung-tile-archiv'),
  verwaltungTileExport: document.getElementById('verwaltung-tile-export'),
  uebersichtView: document.getElementById('uebersicht-view'),
  btnBackFromUebersicht: document.getElementById('btn-back-from-uebersicht'),
  archivView: document.getElementById('archiv-view'),
  btnBackFromArchiv: document.getElementById('btn-back-from-archiv'),
  schuelerVerwaltungView: document.getElementById('schueler-verwaltung-view'),
  schuelerTileAnlegen: document.getElementById('schueler-tile-anlegen'),
  schuelerTileVerwalten: document.getElementById('schueler-tile-verwalten'),
  btnBackFromSchuelerVerwaltung: document.getElementById('btn-back-from-schueler-verwaltung'),
  schuelerAnlegenView: document.getElementById('schueler-anlegen-view'),
  btnBackFromSchuelerAnlegen: document.getElementById('btn-back-from-schueler-anlegen'),
  btnSaveNeuerSchueler: document.getElementById('btn-save-neuer-schueler'),
  schuelerDetailVerwaltungView: document.getElementById('schueler-detail-verwaltung-view'),
  schuelerDetailVerwaltungTitle: document.getElementById('schueler-detail-verwaltung-title'),
  btnBackFromSchuelerDetail: document.getElementById('btn-back-from-schueler-detail'),
  btnBackFromList: document.getElementById('btn-back-from-list'),
  zeitraumView: document.getElementById('zeitraum-view'),
  btnBackFromZeitraum: document.getElementById('btn-back-from-zeitraum'),
  zeitraumSjName: document.getElementById('schuljahr-name'),
  zeitraumSjVon: document.getElementById('schuljahr-von'),
  zeitraumSjBis: document.getElementById('schuljahr-bis'),
  zeitraumFpVon: document.getElementById('foerderplan-von'),
  zeitraumFpBis: document.getElementById('foerderplan-bis'),
  zeitraumEgVon: document.getElementById('elterngespraeche-von'),
  zeitraumEgBis: document.getElementById('elterngespraeche-bis'),
  btnSaveZeitraum: document.getElementById('btn-save-zeitraum'),
  zeitraumStatus: document.getElementById('zeitraum-status'),
  homeTileErstellenDesc: document.getElementById('home-tile-erstellen-desc'),
  homeTileErstellenHint: document.getElementById('home-tile-erstellen-hint'),
  logoHomeBtn: document.getElementById('logo-home-btn'),
  verwaltungTileLehrer: document.getElementById('verwaltung-tile-lehrer'),
  lehrerVerwaltungView: document.getElementById('lehrer-verwaltung-view'),
  btnBackFromLehrerVerwaltung: document.getElementById('btn-back-from-lehrer-verwaltung'),
  studentForm: document.getElementById('student-form'),
  studentNameInput: document.getElementById('student-name'),
  studentList: document.getElementById('student-list'),
  emptyState: document.getElementById('empty-state'),
  searchEmptyState: document.getElementById('search-empty-state'),
  studentSearch: document.getElementById('student-search'),
  dashboardGrid: document.getElementById('dashboard-grid'),
  
  // Subject Selection Modal
  subjectModal: document.getElementById('subject-modal'),
  closeModalBtn: document.getElementById('btn-close-modal'),
  subjectButtons: document.querySelectorAll('.subject-btn'),
  
  // Goals Workspace View
  goalsWorkspaceView: document.getElementById('goals-workspace-view'),
  workspaceTitle: document.getElementById('workspace-title'),
  workspaceGoalsChecklistStep1: document.getElementById('workspace-goals-checklist-step1'),
  workspaceGoalsChecklistStep2: document.getElementById('workspace-goals-checklist-step2'),
  workspaceGoalsChecklistStep3: document.getElementById('workspace-goals-checklist-step3'),
  workspaceStep1: document.getElementById('workspace-step-1'),
  workspaceStep2: document.getElementById('workspace-step-2'),
  workspaceStep3: document.getElementById('workspace-step-3'),
  stepNode1: document.getElementById('step-node-1'),
  stepNode2: document.getElementById('step-node-2'),
  stepNode3: document.getElementById('step-node-3'),
  customGoalInput: document.getElementById('custom-goal-input'),
  btnAddCustomGoal: document.getElementById('btn-add-custom-goal'),
  btnBackToDashboard: document.getElementById('btn-back-to-dashboard'),
  btnGoToStep2: document.getElementById('btn-go-to-step2'),
  btnBackToStep1: document.getElementById('btn-back-to-step1'),
  btnGoToStep3: document.getElementById('btn-go-to-step3'),
  btnBackToStep2: document.getElementById('btn-back-to-step2'),
  btnSaveWorkspace: document.getElementById('btn-save-workspace'),
  
  // Subject Detail View
  subjectDetailView: document.getElementById('subject-detail-view'),
  subjectDetailTitle: document.getElementById('subject-detail-title'),
  subjectDetailContent: document.getElementById('subject-detail-content'),
  btnBackFromDetail: document.getElementById('btn-back-from-detail'),

  // Student Dashboard View
  studentDashboardView: document.getElementById('student-dashboard-view'),
  studentDashboardName: document.getElementById('student-dashboard-title'),
  btnBackFromStudentDashboard: document.getElementById('btn-back-from-student-dashboard'),
  btnNewFoerderplan: document.getElementById('btn-new-foerderplan'),
  // Speicher-Status & Offline
  saveStatus: document.getElementById('save-status'),
  offlineBanner: document.getElementById('offline-banner'),
  // Toast Container
  toastContainer: document.getElementById('toast-container')
};

// --- Firestore Datenschicht ---
// `db` wird in init() nach dem Firebase-Init gesetzt.
let db = null;

// Collection der Schüler der aktuell angemeldeten Schule.
function studentsCollection() {
  return db.collection('schools').doc(state.currentUser.schoolId).collection('students');
}

// Zeitraum-Dokument der aktuellen Schule.
function zeitraumDocRef() {
  return db.collection('schools').doc(state.currentUser.schoolId).collection('meta').doc('zeitraum');
}

// Normalisiert ein Schüler-Objekt und migriert Alt-Formate der Pläne.
function normalizeStudent(student) {
  if (!student.plans) student.plans = {};
  ['allgemein', 'mathe', 'englisch', 'deutsch'].forEach(sub => {
    if (Array.isArray(student.plans[sub])) {
      // Backward compatibility: Convert string array to level 3 (hoher)
      const obj = {};
      student.plans[sub].forEach(goal => {
        obj[goal] = 3;
      });
      student.plans[sub] = obj;
    } else if (typeof student.plans[sub] === 'string') {
      student.plans[sub] = {};
    } else if (typeof student.plans[sub] === 'object' && student.plans[sub] !== null) {
      // Normalize to new structure { level, measures } and clean up legacy levels
      Object.keys(student.plans[sub]).forEach(goal => {
        const val = student.plans[sub][goal];
        if (typeof val === 'number') {
          const cleanLvl = val === 1 ? 0 : val;
          student.plans[sub][goal] = { level: cleanLvl, measures: [] };
        } else if (val && typeof val === 'object') {
          if (val.level === 1) val.level = 0;
          if (!Array.isArray(val.measures)) val.measures = [];
        } else {
          student.plans[sub][goal] = { level: 0, measures: [] };
        }
      });
    } else {
      student.plans[sub] = {};
    }
  });
  if (!student.history) student.history = [];
  return student;
}

// Zeigt den Speicher-Status oben im Header an ('saving' | 'saved' | 'error').
function setSaveStatus(status) {
  const el = DOM.saveStatus;
  if (!el) return;
  clearTimeout(el._hideTimer);
  el.classList.remove('is-saving', 'is-saved', 'is-error');
  el.style.display = '';
  if (status === 'saving') {
    el.textContent = 'Speichern …';
    el.classList.add('is-saving');
  } else if (status === 'saved') {
    el.textContent = 'Gespeichert ✓';
    el.classList.add('is-saved');
    el._hideTimer = setTimeout(() => { el.style.display = 'none'; }, 2500);
  } else if (status === 'error') {
    el.textContent = 'Nicht gespeichert';
    el.classList.add('is-error');
  }
}

// Verfolgt einen Firestore-Schreibvorgang und aktualisiert den Speicher-Status.
function trackSave(promise) {
  setSaveStatus('saving');
  return promise
    .then(() => { setSaveStatus('saved'); })
    .catch(e => {
      console.error('Fehler beim Speichern:', e);
      setSaveStatus('error');
      showToast('Änderung konnte nicht gespeichert werden.', 'error');
    });
}

const storage = {
  // Lädt alle Schüler der aktuellen Schule aus Firestore.
  async loadData() {
    try {
      const snap = await studentsCollection().get();
      return snap.docs.map(doc => normalizeStudent({ ...doc.data(), id: doc.id }));
    } catch (e) {
      console.error('Fehler beim Laden:', e);
      showToast('Fehler beim Laden der Schülerdaten.', 'error');
      return [];
    }
  },
  // Speichert (Upsert) einen einzelnen Schüler.
  saveStudent(student) {
    return trackSave(studentsCollection().doc(student.id).set(student));
  },
  // Löscht einen Schüler endgültig.
  deleteStudent(id) {
    return trackSave(studentsCollection().doc(id).delete());
  },
  // Kompatibilitäts-Wrapper: schreibt alle übergebenen Schüler (Batch-Upsert).
  saveData(data) {
    try {
      const col = studentsCollection();
      const batch = db.batch();
      data.forEach(s => batch.set(col.doc(s.id), s));
      return trackSave(batch.commit());
    } catch (e) {
      console.error('Fehler beim Speichern:', e);
      setSaveStatus('error');
      showToast('Änderung konnte nicht gespeichert werden.', 'error');
    }
  },
};

// --- UI Toast Feedback ---
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
  toast.innerHTML = `<span>${message}</span>`;
  
  DOM.toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateY(15px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}


// --- Render Student List ---
function renderStudents() {
  const cards = DOM.studentList.querySelectorAll('.student-card');
  cards.forEach(card => card.remove());
  
  if (state.students.filter(s => !s.archived).length === 0) {
    DOM.emptyState.style.display = 'flex';
    return;
  }
  
  DOM.emptyState.style.display = 'none';

  state.students.filter(s => !s.archived).forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.className = 'student-card';
    studentCard.dataset.id = student.id;

    studentCard.innerHTML = `
      <div class="student-info">
        <div class="student-name">${escapeHTML(student.name)}</div>
      </div>
    `;
    
    studentCard.addEventListener('click', () => {
      openStudentDashboard(student.id);
    });
    
    DOM.studentList.appendChild(studentCard);
  });
}

function filterStudents(query) {
  const q = query.trim().toLowerCase();
  const cards = DOM.studentList.querySelectorAll('.student-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const student = state.students.find(s => s.id === card.dataset.id);
    const matches = !q || (student && student.name.toLowerCase().includes(q));
    card.style.display = matches ? '' : 'none';
    if (matches) visibleCount++;
  });

  const activeCount = state.students.filter(s => !s.archived).length;
  DOM.emptyState.style.display = activeCount === 0 ? 'flex' : 'none';
  DOM.searchEmptyState.style.display = (q && visibleCount === 0 && activeCount > 0) ? 'flex' : 'none';
}

function addStudent(name) {
  const trimmedName = name.trim();
  if (!trimmedName) return;
  
  const newStudent = {
    id: Date.now().toString(),
    name: trimmedName,
    archived: false,
    plans: {
      allgemein: {},
      mathe: {},
      englisch: {},
      deutsch: {}
    },
    history: []
  };
  
  state.students.push(newStudent);
  storage.saveStudent(newStudent);
  renderStudents();

  showToast(`Schüler/in "${trimmedName}" wurde angelegt.`);
}

function deleteStudent(id) {
  state.students = state.students.filter(s => s.id !== id);
  storage.deleteStudent(id);
  renderStudents();

  if (state.selectedStudentId === id) {
    DOM.goalsWorkspaceView.classList.remove('active');
    DOM.studentDashboardView.classList.remove('active');
    DOM.dashboardGrid.classList.remove('hidden');
    state.selectedStudentId = null;
    state.selectedSubject = null;
    state.selectedGoals = [];
    state.editingPlans = {};
  }

  showToast('Schüler/in wurde gelöscht.');
}

// --- Modal: Subject Selection ---
function openSubjectModal(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  
  state.selectedStudentId = studentId;
  DOM.subjectModal.classList.add('active');
}

function closeSubjectModal() {
  DOM.subjectModal.classList.remove('active');
}

// --- Full Screen Workspace Operations ---
let hasShownLimitWarning = false;
function checkGoalsCountLimit() {
  if (state.selectedGoals.length > 4) {
    if (!hasShownLimitWarning) {
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          title: 'Hinweis',
          text: 'Fokussiere dich auf wenige Ziele und achte dabei auf die wichtigsten.',
          icon: 'warning',
          confirmButtonColor: '#3b82f6',
          confirmButtonText: 'Verstanden'
        });
      } else {
        alert('Fokussiere dich auf wenige Ziele und achte dabei auf die wichtigsten.');
      }
      hasShownLimitWarning = true;
    }
  } else {
    hasShownLimitWarning = false;
  }
}

function openWorkspace(subject) {
  const student = state.students.find(s => s.id === state.selectedStudentId);
  if (!student) return;

  const subName = subjectConfig[subject].name;
  DOM.workspaceTitle.textContent = `${student.name} · ${subName}`;

  // Resume unsaved draft when re-opening the same subject
  const resumingDraft = state.selectedSubject === subject && state.selectedGoals.length > 0;

  if (!resumingDraft) {
    state.selectedSubject = subject;
    const studentSelectedGoalsObj = student.plans[subject] || {};
    state.selectedGoals = Object.keys(studentSelectedGoalsObj).filter(g => {
      const val = studentSelectedGoalsObj[g];
      return val && (typeof val === 'object' ? val.level > 0 : val > 0);
    });

    state.editingPlans = {};
    Object.keys(studentSelectedGoalsObj).forEach(g => {
      const val = studentSelectedGoalsObj[g];
      if (val && typeof val === 'object') {
        state.editingPlans[g] = JSON.parse(JSON.stringify(val));
      } else if (typeof val === 'number') {
        state.editingPlans[g] = { level: val, measures: [] };
      }
    });

    hasShownLimitWarning = (state.selectedGoals.length > 4);
  } else {
    state.selectedSubject = subject;
  }

  DOM.workspaceStep1.classList.add('active');
  DOM.workspaceStep2.classList.remove('active');
  DOM.workspaceStep3.classList.remove('active');
  DOM.stepNode1.classList.add('active');
  DOM.stepNode2.classList.remove('active');
  DOM.stepNode3.classList.remove('active');

  renderStep1(student, subject);
  DOM.customGoalInput.value = '';

  closeSubjectModal();
  DOM.dashboardGrid.classList.add('hidden');
  DOM.studentDashboardView.classList.remove('active');
  DOM.goalsWorkspaceView.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeWorkspace(preserveDraft = false) {
  DOM.goalsWorkspaceView.classList.remove('active');

  if (!preserveDraft) {
    state.selectedSubject = null;
    state.selectedGoals = [];
    state.editingPlans = {};
  }

  const student = state.students.find(s => s.id === state.selectedStudentId);
  if (student) {
    renderStudentDashboardTiles(student);
    DOM.studentDashboardView.classList.add('active');
  } else {
    DOM.studentDashboardView.classList.remove('active');
    state.selectedStudentId = null;
    DOM.dashboardGrid.classList.remove('hidden');
  }
}

function renderStep1(student, subject) {
  DOM.workspaceGoalsChecklistStep1.innerHTML = '';
  
  const subjectGoalsData = defaultGoals[subject] || [];
  const sessionCustomSubjectGoals = state.sessionCustomGoals[subject] || [];
  
  // Normalize goals structure into a unified array of objects
  const structuredGoals = subjectGoalsData.map(item => {
    if (typeof item === 'string') {
      return { type: 'goal', text: item };
    }
    return item;
  });
  
  // Add custom session goals at the top
  sessionCustomSubjectGoals.forEach(g => {
    if (!structuredGoals.some(item => item.type === 'goal' && item.text === g)) {
      structuredGoals.unshift({ type: 'goal', text: g });
    }
  });
  
  // Add student selected goals if they are missing
  Object.keys(state.editingPlans).forEach(g => {
    const val = state.editingPlans[g];
    const isGoalActive = val && (typeof val === 'object' ? val.level > 0 : val > 0);
    if (isGoalActive && !structuredGoals.some(item => item.type === 'goal' && item.text === g)) {
      structuredGoals.unshift({ type: 'goal', text: g });
    }
  });

  // Render list elements dynamically
  structuredGoals.forEach(item => {
    if (item.type === 'header') {
      const headerEl = document.createElement('div');
      headerEl.className = 'goals-group-header';
      headerEl.textContent = item.text;
      DOM.workspaceGoalsChecklistStep1.appendChild(headerEl);
    } else if (item.type === 'subheader') {
      const subheaderEl = document.createElement('div');
      subheaderEl.className = 'goals-group-subheader';
      subheaderEl.textContent = item.text;
      DOM.workspaceGoalsChecklistStep1.appendChild(subheaderEl);
    } else {
      // Goal Checkbox item
      const checkboxLabel = document.createElement('label');
      checkboxLabel.className = 'goal-checkbox-item';
      
      // Indent sub-sub-goals slightly if they start with three numbers (e.g. 6.1.1)
      const hasDeepNesting = /^\d+\.\d+\.\d+/.test(item.text);
      if (hasDeepNesting) {
        checkboxLabel.style.marginLeft = '16px';
      } else {
        const hasNesting = /^\d+\.\d+/.test(item.text);
        if (hasNesting) {
          checkboxLabel.style.marginLeft = '8px';
        }
      }
      
      const isChecked = state.selectedGoals.includes(item.text);
      const goalName = item.text;
      
      checkboxLabel.innerHTML = `
        <input type="checkbox" data-goal="${escapeHTML(item.text)}" ${isChecked ? 'checked' : ''}>
        <span class="goal-checkbox-text">${escapeHTML(item.text)}</span>
      `;
      
      const checkbox = checkboxLabel.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          if (!state.selectedGoals.includes(goalName)) {
            state.selectedGoals.push(goalName);
          }
        } else {
          state.selectedGoals = state.selectedGoals.filter(g => g !== goalName);
        }
        checkGoalsCountLimit();
      });
      
      DOM.workspaceGoalsChecklistStep1.appendChild(checkboxLabel);
    }
  });
}

function renderStep2(student, subject) {
  DOM.workspaceGoalsChecklistStep2.innerHTML = '';
  
  const subjectGoalsData = defaultGoals[subject] || [];
  const sessionCustomSubjectGoals = state.sessionCustomGoals[subject] || [];
  
  // Combine all goals to preserve layout order
  const structuredGoals = subjectGoalsData.map(item => {
    if (typeof item === 'string') {
      return { type: 'goal', text: item };
    }
    return item;
  });
  
  // Add custom session goals at the top
  sessionCustomSubjectGoals.forEach(g => {
    if (!structuredGoals.some(item => item.type === 'goal' && item.text === g)) {
      structuredGoals.unshift({ type: 'goal', text: g });
    }
  });
  
  // Add student selected goals if they are missing
  Object.keys(state.editingPlans).forEach(g => {
    const val = state.editingPlans[g];
    const isGoalActive = val && (typeof val === 'object' ? val.level > 0 : val > 0);
    if (isGoalActive && !structuredGoals.some(item => item.type === 'goal' && item.text === g)) {
      structuredGoals.unshift({ type: 'goal', text: g });
    }
  });
  
  // Filter structure: keep headers/subheaders only if they contain at least one selected goal
  const selectedStructuredGoals = [];
  let currentHeader = null;
  let currentSubheader = null;
  
  structuredGoals.forEach(item => {
    if (item.type === 'header') {
      currentHeader = item;
      currentSubheader = null;
    } else if (item.type === 'subheader') {
      currentSubheader = item;
    } else {
      if (state.selectedGoals.includes(item.text)) {
        if (currentHeader) {
          selectedStructuredGoals.push(currentHeader);
          currentHeader = null;
        }
        if (currentSubheader) {
          selectedStructuredGoals.push(currentSubheader);
          currentSubheader = null;
        }
        selectedStructuredGoals.push(item);
      }
    }
  });
  
  // Render Step 2 items
  selectedStructuredGoals.forEach(item => {
    if (item.type === 'header') {
      const headerEl = document.createElement('div');
      headerEl.className = 'goals-group-header';
      headerEl.textContent = item.text;
      DOM.workspaceGoalsChecklistStep2.appendChild(headerEl);
    } else if (item.type === 'subheader') {
      const subheaderEl = document.createElement('div');
      subheaderEl.className = 'goals-group-subheader';
      subheaderEl.textContent = item.text;
      DOM.workspaceGoalsChecklistStep2.appendChild(subheaderEl);
    } else {
      // Goal rating row
      const goalRow = document.createElement('div');
      goalRow.className = 'goal-row';
      
      // Indent sub-sub-goals slightly if they start with three numbers (e.g. 6.1.1)
      const hasDeepNesting = /^\d+\.\d+\.\d+/.test(item.text);
      if (hasDeepNesting) {
        goalRow.style.marginLeft = '16px';
      } else {
        const hasNesting = /^\d+\.\d+/.test(item.text);
        if (hasNesting) {
          goalRow.style.marginLeft = '8px';
        }
      }
      
      const plan = state.editingPlans[item.text];
      const currentLevel = plan ? (typeof plan === 'object' ? plan.level : plan) : 0;
      const goalName = item.text;
      
      goalRow.innerHTML = `
        <span class="goal-row-text">${escapeHTML(item.text)}</span>
        <div class="rating-container" data-goal="${escapeHTML(item.text)}">
          <button type="button" class="rating-btn-circle ${currentLevel === 2 ? 'active' : ''}" data-level="2" title="Mittlerer Förderbedarf"></button>
          <button type="button" class="rating-btn-circle ${currentLevel === 3 ? 'active' : ''}" data-level="3" title="Hoher Förderbedarf"></button>
        </div>
      `;
      
      const buttons = goalRow.querySelectorAll('.rating-btn-circle');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const clickedLevel = parseInt(btn.dataset.level);
          const isCurrentlyActive = btn.classList.contains('active');
          
          buttons.forEach(b => b.classList.remove('active'));
          
          if (!state.editingPlans[goalName]) {
            state.editingPlans[goalName] = { level: 0, measures: [] };
          }
          
          if (isCurrentlyActive) {
            state.editingPlans[goalName].level = 0;
          } else {
            btn.classList.add('active');
            state.editingPlans[goalName].level = clickedLevel;
          }
        });
      });
      
      DOM.workspaceGoalsChecklistStep2.appendChild(goalRow);
    }
  });
}

function addCustomGoal() {
  const customGoalText = DOM.customGoalInput.value.trim();
  if (!customGoalText || !state.selectedSubject) return;
  
  const subject = state.selectedSubject;
  
  if (!state.sessionCustomGoals[subject].includes(customGoalText)) {
    state.sessionCustomGoals[subject].push(customGoalText);
  }
  
  if (!state.selectedGoals.includes(customGoalText)) {
    state.selectedGoals.push(customGoalText);
  }
  
  // Set default level to 2 (mittlerer) in editingPlans if not already set
  if (state.editingPlans[customGoalText] === undefined) {
    state.editingPlans[customGoalText] = { level: 2, measures: [] };
  } else if (typeof state.editingPlans[customGoalText] === 'number') {
    state.editingPlans[customGoalText] = { level: state.editingPlans[customGoalText], measures: [] };
  } else if (state.editingPlans[customGoalText].level === 0) {
    state.editingPlans[customGoalText].level = 2;
  }
  
  checkGoalsCountLimit();
  
  const student = state.students.find(s => s.id === state.selectedStudentId);
  renderStep1(student, subject);
  
  DOM.customGoalInput.value = '';
  DOM.customGoalInput.focus();
  showToast('Eigenes Ziel zur Liste hinzugefügt und ausgewählt.');
}

function renderStep3(student, subject) {
  DOM.workspaceGoalsChecklistStep3.innerHTML = '';
  DOM.workspaceGoalsChecklistStep3.dataset.subject = subject;
  
  // Ensure editing plans are normalized for all selected goals
  state.selectedGoals.forEach(g => {
    if (!state.editingPlans[g]) {
      state.editingPlans[g] = { level: 0, measures: [] };
    } else if (typeof state.editingPlans[g] === 'number') {
      state.editingPlans[g] = { level: state.editingPlans[g], measures: [] };
    } else if (!Array.isArray(state.editingPlans[g].measures)) {
      state.editingPlans[g].measures = [];
    }
  });
  
  const genericFallbackMeasures = [
    {
      subGoal: "Allgemeine Maßnahmen",
      measures: [
        "Gezielte Einzelbetreuung und Hilfestellungen im Unterricht anbieten.",
        "Differenzierte Aufgabenstellungen und angepasste Übungsmaterialien bereitstellen.",
        "Visualisierungshilfen und strukturierende Hilfsmittel verwenden.",
        "Lernfortschritte regelmäßig besprechen und konstruktives Feedback geben.",
        "Kooperative Lernformen wie Partnerarbeit oder Helfersysteme einsetzen."
      ]
    }
  ];

  state.selectedGoals.forEach(goalName => {
    // Find matching measures
    let measuresList = [];
    if (defaultGoals[subject]) {
      const goalObj = defaultGoals[subject].find(item => item.type === 'goal' && item.text === goalName);
      if (goalObj) {
        const id = goalObj.id;
        measuresList = (typeof defaultMeasures !== 'undefined' && defaultMeasures[subject] && defaultMeasures[subject][id]) || [];
      }
    }
    
    // Fallback to generic measures if none found or other subjects
    if (measuresList.length === 0) {
      measuresList = genericFallbackMeasures;
    }
    
    // Render group
    const groupEl = document.createElement('div');
    groupEl.className = 'goal-measures-group';
    
    groupEl.innerHTML = `
      <h4 class="goal-measures-title">${escapeHTML(goalName)}</h4>
      <div class="measures-checkboxes-list"></div>
    `;
    
    const listContainer = groupEl.querySelector('.measures-checkboxes-list');
    
    measuresList.forEach(subGoalObj => {
      // Render sub-goal title if it has a value
      if (subGoalObj.subGoal) {
        const subGoalHeader = document.createElement('div');
        subGoalHeader.className = 'measure-subgoal-header';
        subGoalHeader.textContent = subGoalObj.subGoal;
        listContainer.appendChild(subGoalHeader);
      }
      
      subGoalObj.measures.forEach(measureText => {
        const isChecked = state.editingPlans[goalName].measures.includes(measureText);
        
        const label = document.createElement('label');
        label.className = 'measure-checkbox-item';
        label.style.paddingLeft = '12px';
        
        label.innerHTML = `
          <input type="checkbox" ${isChecked ? 'checked' : ''}>
          <span class="measure-checkbox-text">${escapeHTML(measureText)}</span>
        `;
        
        const checkbox = label.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            if (!state.editingPlans[goalName].measures.includes(measureText)) {
              state.editingPlans[goalName].measures.push(measureText);
            }
          } else {
            state.editingPlans[goalName].measures = state.editingPlans[goalName].measures.filter(m => m !== measureText);
          }
        });
        
        listContainer.appendChild(label);
      });
    });

    // --- Eigene Maßnahmen (für alle Fächer) ---
    const predefinedTexts = new Set();
    measuresList.forEach(sg => sg.measures.forEach(m => predefinedTexts.add(m)));

    const customHeader = document.createElement('div');
    customHeader.className = 'measure-subgoal-header';
    customHeader.textContent = 'Eigene Maßnahmen';
    listContainer.appendChild(customHeader);

    const customItemsBox = document.createElement('div');
    customItemsBox.className = 'custom-measures-items';
    listContainer.appendChild(customItemsBox);

    const renderCustomMeasures = () => {
      customItemsBox.innerHTML = '';
      const customs = state.editingPlans[goalName].measures.filter(m => !predefinedTexts.has(m));
      customs.forEach(measureText => {
        const item = document.createElement('div');
        item.className = 'measure-checkbox-item custom-measure-item';
        item.style.paddingLeft = '12px';
        item.innerHTML = `
          <input type="checkbox" checked>
          <span class="measure-checkbox-text">${escapeHTML(measureText)}</span>
          <button type="button" class="btn-custom-measure-remove" title="Entfernen" aria-label="Entfernen">&times;</button>
        `;
        const removeIt = () => {
          state.editingPlans[goalName].measures = state.editingPlans[goalName].measures.filter(m => m !== measureText);
          renderCustomMeasures();
        };
        item.querySelector('input[type="checkbox"]').addEventListener('change', removeIt);
        item.querySelector('.btn-custom-measure-remove').addEventListener('click', removeIt);
        customItemsBox.appendChild(item);
      });
    };
    renderCustomMeasures();

    const addRow = document.createElement('div');
    addRow.className = 'custom-measure-add-row';
    addRow.innerHTML = `
      <input type="text" class="form-input custom-measure-input" placeholder="Eigene Fördermaßnahme eingeben …" autocomplete="off">
      <button type="button" class="btn-custom-measure-add">Hinzufügen</button>
    `;
    const cInput = addRow.querySelector('.custom-measure-input');
    const cBtn = addRow.querySelector('.btn-custom-measure-add');
    const addCustom = () => {
      const text = cInput.value.trim();
      if (!text) return;
      if (!state.editingPlans[goalName].measures.includes(text)) {
        state.editingPlans[goalName].measures.push(text);
      }
      cInput.value = '';
      renderCustomMeasures();
      cInput.focus();
    };
    cBtn.addEventListener('click', addCustom);
    cInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addCustom(); }
    });
    listContainer.appendChild(addRow);

    DOM.workspaceGoalsChecklistStep3.appendChild(groupEl);
  });
}

function saveWorkspaceGoals() {
  const studentIndex = state.students.findIndex(s => s.id === state.selectedStudentId);
  if (studentIndex === -1 || !state.selectedSubject) return;
  
  const subject = state.selectedSubject;
  
  // Filter out goals where rating level is 0 or NOT in selectedGoals
  const finalPlansObj = {};
  state.selectedGoals.forEach(g => {
    const plan = state.editingPlans[g];
    if (plan) {
      const hasActiveRating = typeof plan === 'object' ? plan.level > 0 : plan > 0;
      const hasMeasures = typeof plan === 'object' && Array.isArray(plan.measures) && plan.measures.length > 0;
      if (hasActiveRating || hasMeasures) {
        finalPlansObj[g] = {
          level: typeof plan === 'object' ? plan.level : plan,
          measures: (typeof plan === 'object' && Array.isArray(plan.measures)) ? plan.measures : []
        };
      }
    }
  });
  
  state.students[studentIndex].plans[subject] = finalPlansObj;

  const historyEntry = saveHistorySnapshot(studentIndex, subject);
  storage.saveStudent(state.students[studentIndex]);
  renderStudents();

  try {
    const doc = generateFoerderplan(state.students[studentIndex], historyEntry.date, historyEntry.erstelltVon);
    const safeName = state.students[studentIndex].name.replace(/\s+/g, '_');
    const safeFach = subjectConfig[subject].name.replace(/\s+/g, '_');
    const safeDate = historyEntry.date.replace(/\./g, '-');
    showPDFPreview(doc, `Förderplan_${safeName}_${safeFach}_${safeDate}.pdf`);
  } catch (e) {
    console.error('PDF-Fehler:', e);
    showToast('PDF konnte nicht erstellt werden.', 'error');
  }

  showToast(`Förderplan für "${state.students[studentIndex].name}" gespeichert.`);
  closeWorkspace();
}

// --- HTML Escaper ---
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Einfache E-Mail-Formatprüfung (nicht-leer, ein @, ein Punkt danach).
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- PDF Preview ---
let pdfPreviewUrl = null;
let pdfPreviewFilename = null;

function showPDFPreview(doc, filename) {
  const blob = doc.output('blob');
  if (pdfPreviewUrl) URL.revokeObjectURL(pdfPreviewUrl);
  pdfPreviewUrl = URL.createObjectURL(blob);
  pdfPreviewFilename = filename;
  document.getElementById('pdf-preview-frame').src = pdfPreviewUrl;
  document.getElementById('pdf-preview-modal').classList.add('active');
}

function closePDFPreview() {
  document.getElementById('pdf-preview-modal').classList.remove('active');
  document.getElementById('pdf-preview-frame').src = '';
  if (pdfPreviewUrl) {
    URL.revokeObjectURL(pdfPreviewUrl);
    pdfPreviewUrl = null;
  }
  pdfPreviewFilename = null;
}

// --- PDF Generation & History ---
function saveHistorySnapshot(studentIndex, subject) {
  const student = state.students[studentIndex];
  const now = new Date();
  const dateStr = now.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  if (!student.history) student.history = [];
  // Remove any existing entry for this subject — only one PDF per subject
  if (subject) student.history = student.history.filter(e => e.subject !== subject);
  const entry = {
    id: Date.now().toString(),
    date: dateStr,
    subject: subject || null,
    label: `Förderplan ${dateStr}`,
    erstelltVon: (state.currentUser && state.currentUser.name) || '',
    plans: JSON.parse(JSON.stringify(student.plans)),
    stammdaten: JSON.parse(JSON.stringify(student.stammdaten || {}))
  };
  student.history.unshift(entry);
  return entry;
}

function generateFoerderplan(student, dateStr, erstelltVon = '') {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  let y = 0;

  // Header bar
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, pageWidth, 17, 'F');
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('Lern-Förderplan', pageWidth / 2, 11, { align: 'center' });

  if (state.schoolName) {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(state.schoolName, pageWidth - margin, 11, { align: 'right' });
  }

  y = 27;
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(student.name, margin, y);

  y += 7;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Erstellt am: ${dateStr}`, margin, y);

  if (erstelltVon) {
    y += 5;
    doc.text(`Erstellt von: ${erstelltVon}`, margin, y);
  }

  y += 6;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Stammdaten & Zeitraum ---
  const zeitraumData = loadZeitraum();
  const schuljahr = zeitraumData.schuljahr || {};
  const sd = student.stammdaten || {};
  const _notenLabels = { ja: 'Ja', nein: 'Nein', 'ind-paed': 'Ind.-päd.', esa: 'ESA angestrebt (ab Kl 8)' };
  const sdRows = [
    sd.foerderbedarf        ? ['Förderbedarf',         sd.foerderbedarf] : null,
    sd.foerderbedarfWeiterer ? ['Weiterer Förderbedarf', sd.foerderbedarfWeiterer] : null,
    sd.nachteilsausgleich   ? ['Nachteilsausgleich',    sd.nachteilsausgleich === 'ja' ? 'Ja' : 'Nein'] : null,
    sd.beschulungsjahr      ? ['Beschulungsjahr',       sd.beschulungsjahr] : null,
    sd.thematischeTeilnahme ? ['Thematische Teilnahme', sd.thematischeTeilnahme === 'ja' ? 'Ja' : 'Nein'] : null,
    sd.noten                ? ['Noten',                 _notenLabels[sd.noten] || sd.noten] : null,
    sd.bemerkungen          ? ['Bemerkungen',           sd.bemerkungen] : null,
  ].filter(Boolean);

  let addedMetaContent = false;

  if (sdRows.length > 0) {
    const pairedRows = [];
    for (let i = 0; i < sdRows.length; i += 2) {
      const left = sdRows[i];
      const right = sdRows[i + 1];
      pairedRows.push(right
        ? [left[0], left[1], right[0], right[1]]
        : [left[0], left[1], '', '']
      );
    }
    doc.autoTable({
      startY: y,
      head: [[{ content: 'Stammdaten', colSpan: 4, styles: { fillColor: [30, 41, 59], textColor: [255,255,255], fontStyle: 'bold', fontSize: 9, cellPadding: { top: 4, bottom: 4, left: 5, right: 5 } } }]],
      body: pairedRows,
      margin: { left: margin, right: margin },
      bodyStyles: { fontSize: 8, cellPadding: { top: 3, bottom: 3, left: 4, right: 4 }, valign: 'top' },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold', textColor: [71, 85, 105] },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 40, fontStyle: 'bold', textColor: [71, 85, 105] },
        3: { cellWidth: 'auto' }
      },
      styles: { lineColor: [226, 232, 240], lineWidth: 0.3 },
      theme: 'grid'
    });
    y = doc.lastAutoTable.finalY + 5;
    addedMetaContent = true;
  }

  if (schuljahr.name || schuljahr.von || schuljahr.bis) {
    let zeitraumText = 'Gültig für';
    if (schuljahr.name) zeitraumText += ` ${schuljahr.name}`;
    if (schuljahr.von || schuljahr.bis) {
      zeitraumText += ' im Zeitraum';
      if (schuljahr.von) zeitraumText += ` ${formatDate(schuljahr.von)}`;
      if (schuljahr.von && schuljahr.bis) zeitraumText += ' –';
      if (schuljahr.bis) zeitraumText += ` ${formatDate(schuljahr.bis)}`;
    }
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(71, 85, 105);
    doc.text(zeitraumText, margin, y);
    y += 8;
    addedMetaContent = true;
  }

  if (addedMetaContent) {
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;
  }

  const subjectColors = {
    allgemein: [100, 116, 139],
    mathe:     [79, 70, 229],
    englisch:  [2, 132, 199],
    deutsch:   [13, 148, 136]
  };

  ['allgemein', 'mathe', 'englisch', 'deutsch'].forEach(subject => {
    const plansObj = student.plans[subject] || {};
    const activeGoals = Object.keys(plansObj).filter(g => {
      const val = plansObj[g];
      return val && (typeof val === 'object' ? val.level > 0 : val > 0);
    });
    if (activeGoals.length === 0) return;

    if (y > pageHeight - 35) { doc.addPage(); y = 16; }

    const color = subjectColors[subject];
    const tableRows = activeGoals.map(goalName => {
      const val = plansObj[goalName];
      const level = typeof val === 'object' ? val.level : val;
      const measures = (val && typeof val === 'object' && Array.isArray(val.measures)) ? val.measures : [];
      const levelText = level === 3 ? 'Hoch' : 'Mittel';
      const levelFill = level === 3 ? [254, 226, 226] : [254, 249, 195];
      const levelColor = level === 3 ? [185, 28, 28] : [161, 98, 7];
      return [
        goalName,
        { content: levelText, styles: { fillColor: levelFill, textColor: levelColor, fontStyle: 'bold', halign: 'center' } },
        measures.length > 0 ? measures.join('\n') : '–'
      ];
    });

    doc.autoTable({
      startY: y,
      head: [
        [{ content: subjectConfig[subject].name, colSpan: 3, styles: { fillColor: color, textColor: [255,255,255], fontStyle: 'bold', fontSize: 10, cellPadding: { top: 5, bottom: 5, left: 5, right: 5 } } }],
        [
          { content: 'Förderziel',       styles: { fillColor: [248,250,252], textColor: [71,85,105], fontStyle: 'bold', fontSize: 8.5 } },
          { content: 'Gewichtung',       styles: { fillColor: [248,250,252], textColor: [71,85,105], fontStyle: 'bold', fontSize: 8.5, halign: 'center' } },
          { content: 'Fördermaßnahmen', styles: { fillColor: [248,250,252], textColor: [71,85,105], fontStyle: 'bold', fontSize: 8.5 } }
        ]
      ],
      body: tableRows,
      margin: { left: margin, right: margin },
      headStyles: {},
      bodyStyles: { fontSize: 8.5, valign: 'top', cellPadding: 4 },
      columnStyles: {
        0: { cellWidth: 62 },
        1: { cellWidth: 22, halign: 'center' },
        2: { cellWidth: 'auto' }
      },
      styles: { lineColor: [226, 232, 240], lineWidth: 0.3, overflow: 'linebreak' },
      theme: 'grid'
    });

    y = doc.lastAutoTable.finalY + 8;
  });

  // Signature section
  if (y > pageHeight - 52) { doc.addPage(); y = 16; }
  y += 6;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Unterschriften', margin, y);
  y += 14;

  const halfW = (pageWidth - margin * 2) / 2 - 5;
  const col2X = margin + halfW + 10;

  doc.setDrawColor(50, 50, 50);
  doc.setLineWidth(0.5);
  doc.line(margin, y + 12, margin + halfW, y + 12);
  doc.line(col2X, y + 12, col2X + halfW, y + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Sonderpädagoge/in',       margin, y + 18);
  doc.text('Erziehungsberechtigte/r', col2X,  y + 18);
  doc.text('Datum: ____________________', margin, y + 27);
  doc.text('Datum: ____________________', col2X,  y + 27);

  // Fußzeile mit Seitenzahlen (und Schulname) auf jeder Seite.
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    if (state.schoolName) {
      doc.text(state.schoolName, margin, pageHeight - 8);
    }
    doc.text(`Seite ${i} von ${pageCount}`, pageWidth - margin, pageHeight - 8, { align: 'right' });
  }

  return doc;
}

// --- Subject Detail View (Read-Only) ---
function openSubjectDetailView(subject) {
  const student = state.students.find(s => s.id === state.selectedStudentId);
  if (!student) return;

  const subName = subjectConfig[subject].name;
  DOM.subjectDetailTitle.textContent = `${student.name} · ${subName}`;

  renderSubjectDetailContent(student, subject);

  DOM.studentDashboardView.classList.remove('active');
  DOM.subjectDetailView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeSubjectDetailView() {
  DOM.subjectDetailView.classList.remove('active');
  DOM.studentDashboardView.classList.add('active');
}

function renderSubjectDetailContent(student, subject) {
  const plansObj = student.plans[subject] || {};
  const activeGoals = Object.keys(plansObj).filter(g => {
    const val = plansObj[g];
    return val && (typeof val === 'object' ? val.level > 0 : val > 0);
  });

  if (activeGoals.length === 0) {
    DOM.subjectDetailContent.innerHTML = `<p class="tile-empty-state" style="padding: 40px 0;">Noch keine Förderziele für dieses Fach vorhanden.</p>`;
    return;
  }

  DOM.subjectDetailContent.innerHTML = buildGoalCardsHTML(plansObj);
}

// Baut die (schreibgeschützte) Förderziel-Karten für ein Fach als HTML-String.
function buildGoalCardsHTML(plansObj) {
  const activeGoals = Object.keys(plansObj).filter(g => {
    const val = plansObj[g];
    return val && (typeof val === 'object' ? val.level > 0 : val > 0);
  });
  return activeGoals.map(goalName => {
    const val = plansObj[goalName];
    const level = typeof val === 'object' ? val.level : val;
    const measures = (val && typeof val === 'object' && Array.isArray(val.measures)) ? val.measures : [];
    const levelLabel = level === 3 ? 'Hoher Förderbedarf' : 'Mittlerer Förderbedarf';

    const measuresHTML = measures.length > 0
      ? `<ul class="detail-measures-list">${measures.map(m => `<li>${escapeHTML(m)}</li>`).join('')}</ul>`
      : `<p class="detail-no-measures">Keine Maßnahmen ausgewählt.</p>`;

    return `
      <div class="detail-goal-card">
        <div class="detail-goal-header">
          <span class="goal-status-dot" data-level="${level}"></span>
          <div class="detail-goal-info">
            <span class="detail-goal-name">${escapeHTML(goalName)}</span>
            <span class="detail-goal-level" data-level="${level}">${levelLabel}</span>
          </div>
        </div>
        ${measuresHTML}
      </div>
    `;
  }).join('');
}

// Rendert die fertigen Förderpläne (PDF) eines Schülers, nach Schuljahr gruppiert
// und aufklappbar. Wird sowohl im Dashboard als auch in der Schüler-Verwaltung genutzt.
function renderHistoryPdfList(student, historyBody) {
  if (!historyBody) return;
  const history = student.history || [];

  // Nach Schuljahr gruppieren
  const grouped = {};
  history.forEach(entry => {
    const sy = getSchoolYear(entry.date);
    if (!grouped[sy]) grouped[sy] = [];
    grouped[sy].push(entry);
  });

  // Aktuelles Schuljahr immer anzeigen
  const now = new Date();
  const curMonth = now.getMonth() + 1;
  const curYear = now.getFullYear();
  const currentSY = curMonth >= 8 ? `${curYear}/${curYear + 1}` : `${curYear - 1}/${curYear}`;
  if (!grouped[currentSY]) grouped[currentSY] = [];

  // Neuestes Schuljahr zuerst
  const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  historyBody.innerHTML = sortedYears.map(sy => {
    const entries = grouped[sy];
    const entriesHTML = entries.length === 0
      ? `<p class="tile-empty-state" style="padding: 10px 0 6px;">Keine Förderpläne für dieses Schuljahr.</p>`
      : entries.map(entry => {
          const safeName = student.name.replace(/\s+/g, '_');
          const safeFach = entry.subject ? subjectConfig[entry.subject].name.replace(/\s+/g, '_') : 'Alle';
          const safeDate = entry.date.replace(/\./g, '-');
          const filename = `Förderplan_${safeName}_${safeFach}_${safeDate}.pdf`;
          return `
            <div class="history-entry history-entry-clickable" data-entry-id="${escapeHTML(entry.id)}" data-filename="${escapeHTML(filename)}">
              <span class="history-entry-label">${escapeHTML(filename)}</span>
            </div>
          `;
        }).join('');

    return `
      <div class="history-year-tile" data-sy="${escapeHTML(sy)}">
        <div class="history-year-header">
          <span class="history-year-label">Schuljahr ${escapeHTML(sy)}</span>
          <span class="history-year-chevron">&#8250;</span>
        </div>
        <div class="history-year-content">${entriesHTML}</div>
      </div>
    `;
  }).join('');

  historyBody.querySelectorAll('.history-year-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      header.closest('.history-year-tile').classList.toggle('open');
    });
  });

  historyBody.querySelectorAll('.history-entry-clickable').forEach(row => {
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      const entry = history.find(h => h.id === row.dataset.entryId);
      if (!entry) return;
      try {
        const tempStudent = { name: student.name, plans: entry.plans, stammdaten: entry.stammdaten || student.stammdaten || {} };
        const doc = generateFoerderplan(tempStudent, entry.date, entry.erstelltVon);
        showPDFPreview(doc, row.dataset.filename);
      } catch (err) {
        showToast('PDF konnte nicht erstellt werden.', 'error');
      }
    });
  });
}

// --- Stammdaten ---
function stammdatenAktualisiert(student) {
  const sd = student?.stammdaten;
  if (!sd) return false;
  return Object.values(sd).some(v => v && v !== '');
}

function openStammdatenEdit(origin = 'dashboard') {
  const student = state.students.find(s => s.id === state.selectedStudentId);
  if (!student) return;
  state.stammdatenEditMode = true;
  state.stammdatenEditOrigin = origin;

  document.getElementById('anlegen-name').value = student.name;
  const sd = student.stammdaten || {};
  document.querySelectorAll('#schueler-anlegen-view input[type="radio"]').forEach(r => r.checked = false);
  ['nachteilsausgleich','thematische-teilnahme','noten'].forEach(name => {
    const sdKey = name === 'nachteilsausgleich' ? 'nachteilsausgleich'
                : name === 'thematische-teilnahme' ? 'thematischeTeilnahme'
                : 'noten';
    if (sd[sdKey]) {
      const r = document.querySelector(`input[name="anlegen-${name}"][value="${sd[sdKey]}"]`);
      if (r) r.checked = true;
    }
  });
  document.getElementById('anlegen-foerderbedarf-select').value   = sd.foerderbedarf         || '';
  document.getElementById('anlegen-foerderbedarf-weiterer').value = sd.foerderbedarfWeiterer || '';
  document.getElementById('anlegen-beschulungsjahr').value = sd.beschulungsjahr || '';
  document.getElementById('anlegen-bemerkungen').value    = sd.bemerkungen      || '';

  const titleEl = document.querySelector('#schueler-anlegen-view .home-title');
  if (titleEl) titleEl.textContent = 'Stammdaten bearbeiten';
  const btnEl = document.getElementById('btn-save-neuer-schueler');
  if (btnEl) btnEl.textContent = 'Änderungen speichern';

  DOM.studentDashboardView.classList.remove('active');
  DOM.schuelerAnlegenView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function parseDEDate(str) {
  const [d, m, y] = str.split('.');
  return `${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`;
}

function updateHistoryStammdatenForCurrentSchuljahr(studentIdx) {
  const student = state.students[studentIdx];
  if (!student.history || student.history.length === 0) return;
  const sj = loadZeitraum().schuljahr || {};
  if (!sj.von && !sj.bis) return; // Kein Schuljahr gesetzt → nichts aktualisieren
  const newSd = JSON.parse(JSON.stringify(student.stammdaten || {}));
  student.history.forEach(entry => {
    if (!entry.date) return;
    try {
      const entryDate = parseDEDate(entry.date);
      const inSchuljahr =
        (!sj.von || entryDate >= sj.von) &&
        (!sj.bis || entryDate <= sj.bis);
      if (inSchuljahr) entry.stammdaten = newSd;
    } catch (e) { /* skip unparseable dates */ }
  });
}

function saveStammdatenEdit() {
  const idx = state.students.findIndex(s => s.id === state.selectedStudentId);
  if (idx === -1) return;
  const name = document.getElementById('anlegen-name').value.trim();
  if (!name) { showToast('Bitte einen Namen eingeben.', 'error'); return; }

  const radio = n => document.querySelector(`input[name="${n}"]:checked`)?.value || null;
  const val   = id => document.getElementById(id)?.value.trim() || '';

  state.students[idx].name = name;
  state.students[idx].stammdaten = {
    foerderbedarf:        val('anlegen-foerderbedarf-select'),
    foerderbedarfWeiterer: val('anlegen-foerderbedarf-weiterer'),
    nachteilsausgleich:   radio('anlegen-nachteilsausgleich'),
    beschulungsjahr:      val('anlegen-beschulungsjahr'),
    thematischeTeilnahme: radio('anlegen-thematische-teilnahme'),
    noten:                radio('anlegen-noten'),
    bemerkungen:          val('anlegen-bemerkungen'),
  };
  state.students[idx].stammdatenConfirmed = true;
  updateHistoryStammdatenForCurrentSchuljahr(idx);
  storage.saveStudent(state.students[idx]);
  state.stammdatenEditMode = false;
  state.stammdatenConfirmed = true;

  const titleEl = document.querySelector('#schueler-anlegen-view .home-title');
  if (titleEl) titleEl.textContent = 'Schüler anlegen';

  DOM.schuelerAnlegenView.classList.remove('active');
  const student = state.students[idx];
  if (state.stammdatenEditOrigin === 'verwaltung') {
    state.stammdatenEditOrigin = null;
    openSchuelerDetailVerwaltung(student.id);
  } else {
    DOM.studentDashboardName.textContent = `${student.name} · Förderpläne`;
    renderStudentDashboardTiles(student);
    DOM.studentDashboardView.classList.add('active');
  }
  renderStudents();
  showToast('Stammdaten wurden aktualisiert.');
}

function renderStammdatenInTile(student, bodyEl) {
  if (!bodyEl) return;
  const sd = student.stammdaten;
  if (!sd || Object.values(sd).every(v => !v || v === '')) {
    bodyEl.innerHTML = `<p class="tile-empty-state">Stammdaten werden hier ergänzt.</p>`;
    return;
  }
  const notenLabels = { ja: 'Ja', nein: 'Nein', 'ind-paed': 'Ind.-päd.', esa: 'ESA angestrebt (ab Kl 8)' };
  const rows = [
    sd.foerderbedarf       ? ['Förderbedarf',             sd.foerderbedarf] : null,
    sd.foerderbedarfWeiterer ? ['Weiterer Förderbedarf',  sd.foerderbedarfWeiterer] : null,
    sd.nachteilsausgleich  ? ['Nachteilsausgleich',        sd.nachteilsausgleich === 'ja' ? 'Ja' : 'Nein'] : null,
    sd.beschulungsjahr     ? ['Beschulungsjahr',           sd.beschulungsjahr] : null,
    sd.thematischeTeilnahme? ['Thematische Teilnahme',     sd.thematischeTeilnahme === 'ja' ? 'Ja' : 'Nein'] : null,
    sd.noten               ? ['Noten',                     notenLabels[sd.noten] || sd.noten] : null,
    sd.bemerkungen         ? ['Bemerkungen',               sd.bemerkungen] : null,
  ].filter(Boolean);
  bodyEl.innerHTML = `<div class="stammdaten-display">${rows.map(([k, v]) =>
    `<div class="stammdaten-row"><span class="stammdaten-key">${k}:</span><span class="stammdaten-val">${escapeHTML(v)}</span></div>`
  ).join('')}</div>`;
}

function navigateToSchuelerAnlegen() {
  document.getElementById('anlegen-name').value = '';
  document.querySelectorAll('#schueler-anlegen-view input[type="radio"]').forEach(r => r.checked = false);
  ['anlegen-foerderbedarf-select','anlegen-foerderbedarf-weiterer','anlegen-beschulungsjahr','anlegen-bemerkungen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const titleEl = document.querySelector('#schueler-anlegen-view .home-title');
  if (titleEl) titleEl.textContent = 'Schüler anlegen';
  const btnEl = document.getElementById('btn-save-neuer-schueler');
  if (btnEl) btnEl.textContent = 'Schüler anlegen';
  setGearButtonVisible(true);
  DOM.schuelerVerwaltungView.classList.remove('active');
  DOM.schuelerAnlegenView.classList.add('active');
}

function saveNeuerSchueler() {
  if (state.stammdatenEditMode) { saveStammdatenEdit(); return; }
  const name = document.getElementById('anlegen-name').value.trim();
  if (!name) { showToast('Bitte einen Namen eingeben.', 'error'); return; }

  // Warnung bei gleichnamigem, aktivem Schüler (zwei Kinder können gleich heißen → nur Nachfrage).
  const isDuplicate = state.students.some(
    s => !s.archived && s.name.trim().toLowerCase() === name.toLowerCase()
  );
  if (isDuplicate && typeof Swal !== 'undefined') {
    Swal.fire({
      title: 'Name bereits vorhanden',
      text: `Es gibt bereits einen aktiven Schüler namens „${name}". Trotzdem anlegen?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Trotzdem anlegen',
      cancelButtonText: 'Abbrechen',
      confirmButtonColor: '#334155'
    }).then(r => { if (r.isConfirmed) finalizeNeuerSchueler(name); });
    return;
  }
  finalizeNeuerSchueler(name);
}

function finalizeNeuerSchueler(name) {
  const radio = n => document.querySelector(`input[name="${n}"]:checked`)?.value || null;
  const val   = id => document.getElementById(id)?.value.trim() || '';

  const newStudent = {
    id: Date.now().toString(),
    name,
    archived: false,
    stammdaten: {
      foerderbedarf:        val('anlegen-foerderbedarf-select'),
      foerderbedarfWeiterer: val('anlegen-foerderbedarf-weiterer'),
      nachteilsausgleich:   radio('anlegen-nachteilsausgleich'),
      beschulungsjahr:      val('anlegen-beschulungsjahr'),
      thematischeTeilnahme: radio('anlegen-thematische-teilnahme'),
      noten:                radio('anlegen-noten'),
      bemerkungen:          val('anlegen-bemerkungen'),
    },
    plans: { allgemein: {}, mathe: {}, englisch: {}, deutsch: {} },
    history: []
  };
  state.students.push(newStudent);
  storage.saveStudent(newStudent);
  renderStudents();
  renderHomeUebersicht();
  showToast(`Schüler/in "${name}" wurde angelegt.`);

  DOM.schuelerAnlegenView.classList.remove('active');
  DOM.dashboardGrid.classList.add('einsehen-mode');
  DOM.dashboardGrid.classList.remove('hidden');
}

// --- Shared Helper ---
function hasPlan(student, subject) {
  const plans = student.plans[subject] || {};
  return Object.keys(plans).some(g => {
    const val = plans[g];
    return val && (typeof val === 'object' ? val.level > 0 : val > 0);
  });
}

// --- Home Übersicht-Panel ---
function renderHomeUebersicht() {
  const list = document.getElementById('home-uebersicht-list');
  const countEl = document.getElementById('home-uebersicht-count');
  if (!list || !countEl) return;

  const subjects = ['allgemein', 'mathe', 'englisch', 'deutsch'];
  const subjectLabels = { allgemein: 'Allgemein', mathe: 'Mathe', englisch: 'Englisch', deutsch: 'Deutsch' };

  const incompleteStudents = state.students.filter(s =>
    !s.archived && !subjects.every(sub => hasPlan(s, sub))
  );

  const activeStudents = state.students.filter(s => !s.archived);
  if (activeStudents.length === 0) {
    countEl.textContent = '';
    list.innerHTML = `<p class="home-uebersicht-no-students">Noch keine Schüler angelegt.</p>`;
    return;
  }

  if (incompleteStudents.length === 0) {
    countEl.textContent = 'Alle vollständig';
    list.innerHTML = `<p class="home-uebersicht-all-done">&#10003; Alle Schüler haben vollständige Förderpläne.</p>`;
    return;
  }

  countEl.textContent = `${incompleteStudents.length} Schüler mit offenen Plänen`;

  list.innerHTML = incompleteStudents.map(student => {
    const missingTags = subjects
      .filter(sub => !hasPlan(student, sub))
      .map(sub => `<span class="missing-subject-tag" data-subject="${sub}">${subjectLabels[sub]}</span>`)
      .join('');

    return `
      <div class="home-uebersicht-entry" data-student-id="${escapeHTML(student.id)}">
        <div class="home-uebersicht-entry-info">
          <div class="home-uebersicht-name">${escapeHTML(student.name)}</div>
          <div class="home-uebersicht-missing">${missingTags}</div>
        </div>
      </div>`;
  }).join('');
}

// --- Übersicht / Status ---
function navigateToUebersicht() {
  renderUebersicht();
  DOM.verwaltungView.classList.remove('active');
  DOM.uebersichtView.classList.add('active');
  setGearButtonVisible(true);
}

function renderUebersicht() {
  const subjects = ['allgemein', 'mathe', 'englisch', 'deutsch'];
  const subjectLabels = { allgemein: 'Allgemein', mathe: 'Mathe', englisch: 'Englisch', deutsch: 'Deutsch' };

  const zeitraum = loadZeitraum();
  const fp = zeitraum?.foerderplan || {};
  const zeitraumBar = document.getElementById('uebersicht-zeitraum-bar');
  if (fp.von || fp.bis) {
    const aktiv = isZeitraumAktiv(zeitraum);
    const vonStr = fp.von ? formatDate(fp.von) : '–';
    const bisStr = fp.bis ? formatDate(fp.bis) : '–';
    zeitraumBar.innerHTML = `
      <div class="zeitraum-status-info ${aktiv ? 'zeitraum-aktiv' : 'zeitraum-inaktiv'}">
        <div class="zeitraum-status-label">${aktiv ? 'Zeitraum aktiv' : 'Zeitraum inaktiv'}</div>
        <div class="zeitraum-status-range">Von: ${vonStr} &nbsp;·&nbsp; Bis: ${bisStr}</div>
      </div>`;
  } else {
    zeitraumBar.innerHTML = `<p style="font-size:0.85rem;color:var(--text-muted);">Kein Zeitraum festgelegt.</p>`;
  }

  const wrap = document.getElementById('uebersicht-table-wrap');

  const activeStudents = state.students.filter(s => !s.archived);

  if (activeStudents.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><p class="empty-state-text">Keine Schüler vorhanden.</p></div>`;
    return;
  }

  const headerCells = subjects.map(s =>
    `<div class="uebersicht-subject-label" data-subject="${s}">${subjectLabels[s]}</div>`
  ).join('');

  const rows = activeStudents.map(student => {
    const cells = subjects.map(subject => {
      const done = hasPlan(student, subject);
      return `<div class="uebersicht-status-cell">
        ${done
          ? `<span class="status-badge-done">&#10003; Vorhanden</span>`
          : `<span class="status-badge-open">Offen</span>`}
      </div>`;
    }).join('');

    return `
      <div class="uebersicht-student-row">
        <div class="uebersicht-student-name">
          <span>${escapeHTML(student.name)}</span>
        </div>
        ${cells}
      </div>`;
  }).join('');

  const completeCount = activeStudents.filter(s => subjects.every(sub => hasPlan(s, sub))).length;

  wrap.innerHTML = `
    <div class="uebersicht-header-row">
      <div></div>
      ${headerCells}
    </div>
    ${rows}
    <div class="uebersicht-summary">
      <strong>${completeCount} von ${activeStudents.length}</strong> Schülern haben alle 4 Förderpläne
    </div>`;
}

// --- Archiv ---
function archiveStudent(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  student.archived = true;
  storage.saveStudent(student);
  renderStudents();
  renderHomeUebersicht();
  showToast(`"${student.name}" wurde archiviert.`);
}

function navigateToArchiv() {
  renderArchiv();
  DOM.verwaltungView.classList.remove('active');
  DOM.archivView.classList.add('active');
  setGearButtonVisible(true);
}

// Sichert alle Schülerdaten + Zeiträume der Schule als JSON-Datei (lokaler Download).
function exportAllData() {
  try {
    const backup = {
      exportedAt: new Date().toISOString(),
      schoolId: state.currentUser ? state.currentUser.schoolId : null,
      exportedBy: state.currentUser ? state.currentUser.name : null,
      zeitraum: state.zeitraum,
      students: state.students
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const datum = new Date().toISOString().slice(0, 10);
    const schule = (state.currentUser && state.currentUser.schoolId) || 'schule';
    a.href = url;
    a.download = `Foerderplan-Backup_${schule}_${datum}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`Backup mit ${state.students.length} Schüler(n) erstellt.`);
  } catch (e) {
    console.error('Fehler beim Export:', e);
    showToast('Backup konnte nicht erstellt werden.', 'error');
  }
}

function renderArchiv() {
  const list = document.getElementById('archiv-list');
  const archived = state.students.filter(s => s.archived);

  if (archived.length === 0) {
    list.innerHTML = `<div class="empty-state"><p class="empty-state-text">Keine archivierten Schüler.</p></div>`;
    return;
  }

  list.innerHTML = archived.map(student => {
    return `
      <div class="archiv-entry">
        <div class="student-info">
          <div class="student-name">${escapeHTML(student.name)}</div>
        </div>
        <div class="archiv-entry-actions">
          <button type="button" class="btn-restore" data-student-id="${escapeHTML(student.id)}">
            Wiederherstellen
          </button>
          <button type="button" class="btn-delete-permanent" data-student-id="${escapeHTML(student.id)}">
            Endgültig löschen
          </button>
        </div>
      </div>`;
  }).join('');

  list.querySelectorAll('.btn-restore').forEach(btn => {
    btn.addEventListener('click', () => {
      const student = state.students.find(s => s.id === btn.dataset.studentId);
      if (!student) return;
      student.archived = false;
      storage.saveStudent(student);
      renderStudents();
      renderHomeUebersicht();
      renderArchiv();
      showToast(`"${student.name}" wurde wiederhergestellt.`);
    });
  });

  list.querySelectorAll('.btn-delete-permanent').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = state.students.find(s => s.id === btn.dataset.studentId)?.name || '';
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          title: 'Endgültig löschen?',
          text: `"${name}" wird unwiderruflich gelöscht.`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#dc2626',
          cancelButtonText: 'Abbrechen',
          confirmButtonText: 'Löschen'
        }).then(result => {
          if (result.isConfirmed) {
            deleteStudent(btn.dataset.studentId);
            renderArchiv();
          }
        });
      } else {
        deleteStudent(btn.dataset.studentId);
        renderArchiv();
      }
    });
  });
}

// --- Schüler Verwaltungs-Dashboard ---
function openSchuelerDetailVerwaltung(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  state.selectedStudentId = studentId;
  DOM.schuelerDetailVerwaltungTitle.textContent = student.name;
  renderStammdatenInTile(student, document.getElementById('tile-stammdaten-verwaltung-body'));
  renderHistoryPdfList(student, document.getElementById('tile-foerderplaene-verwaltung-body'));
  DOM.dashboardGrid.classList.add('hidden');
  DOM.schuelerDetailVerwaltungView.classList.add('active');
  setGearButtonVisible(true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Student Dashboard ---
function openStudentDashboard(studentId) {
  if (state.mode === 'verwaltung') {
    openSchuelerDetailVerwaltung(studentId);
    return;
  }

  const student = state.students.find(s => s.id === studentId);
  if (!student) return;

  state.selectedStudentId = studentId;
  if (state.mode === 'erstellen') state.stammdatenConfirmed = student.stammdatenConfirmed === true;
  DOM.studentDashboardName.textContent = `${student.name} · Förderpläne`;
  renderStudentDashboardTiles(student);

  DOM.btnNewFoerderplan.style.display = (state.mode === 'einsehen' || state.mode === 'erstellen') ? 'none' : '';

  DOM.dashboardGrid.classList.add('hidden');
  DOM.studentDashboardView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeStudentDashboard() {
  DOM.studentDashboardView.classList.remove('active');
  DOM.dashboardGrid.classList.remove('hidden');
  DOM.studentSearch.value = '';
  filterStudents('');
  state.selectedStudentId = null;
}

function getSchoolYear(dateStr) {
  const parts = dateStr.split('.');
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  return month >= 8 ? `${year}/${year + 1}` : `${year - 1}/${year}`;
}

function renderStudentDashboardTiles(student) {
  const stammdatenBody = document.querySelector('#tile-stammdaten .subject-tile-body');
  const stammdatenEditBtn = document.getElementById('btn-stammdaten-edit');
  if (state.mode === 'erstellen' && !state.stammdatenConfirmed) {
    stammdatenBody.innerHTML = `<p class="tile-warn-prompt">Stammdaten müssen aktualisiert werden.<br><small>Klicken zum Bearbeiten</small></p>`;
    if (stammdatenEditBtn) stammdatenEditBtn.style.display = 'none';
  } else {
    renderStammdatenInTile(student, stammdatenBody);
    if (stammdatenEditBtn) stammdatenEditBtn.style.display = state.mode === 'erstellen' ? 'flex' : 'none';
  }

  // Hide "Alte Förderpläne" tile in erstellen mode
  const historyTile = document.getElementById('tile-alte-foerderplaene');
  if (historyTile) historyTile.style.display = state.mode === 'erstellen' ? 'none' : '';

  // Render "Alte Förderpläne" tile
  renderHistoryPdfList(student, document.querySelector('#tile-alte-foerderplaene .subject-tile-body'));

  ['allgemein', 'mathe', 'englisch', 'deutsch'].forEach(subject => {
    const tile = document.getElementById(`tile-${subject}`);
    const tileBody = tile.querySelector('.subject-tile-body');
    const plansObj = student.plans[subject] || {};

    const activeGoals = Object.keys(plansObj).filter(g => {
      const val = plansObj[g];
      return val && (typeof val === 'object' ? val.level > 0 : val > 0);
    });

    if (state.mode === 'erstellen') {
      if (!state.stammdatenConfirmed) {
        tile.classList.add('tile--locked');
        tileBody.innerHTML = `<p class="tile-warn-prompt">Bitte zuerst Stammdaten aktualisieren.</p>`;
        return;
      }
      tile.classList.remove('tile--locked');
      if (activeGoals.length === 0) {
        tileBody.innerHTML = `<p class="tile-create-prompt">Noch kein Förderplan vorhanden.<br>Klicken zum Anlegen.</p>`;
        return;
      }
    } else {
      tile.classList.remove('tile--locked');
      if (activeGoals.length === 0) {
        tileBody.innerHTML = `<p class="tile-empty-state">Noch keine Förderziele vorhanden.</p>`;
        return;
      }
    }

    tileBody.innerHTML = activeGoals.map(goalName => {
      const val = plansObj[goalName];
      const level = typeof val === 'object' ? val.level : val;
      const measures = (val && typeof val === 'object' && Array.isArray(val.measures)) ? val.measures : [];
      const measuresHTML = measures.length > 0
        ? `<ul class="tile-measures-list">${measures.map(m => `<li>${escapeHTML(m)}</li>`).join('')}</ul>`
        : '';
      return `
        <div class="tile-goal-item">
          <div class="tile-goal-name">
            <span class="goal-status-dot" data-level="${level}"></span>
            <span>${escapeHTML(goalName)}</span>
          </div>
          ${measuresHTML}
        </div>
      `;
    }).join('');
  });
}

// --- Event Listeners ---
function setupEventListeners() {
  // Home tiles
  DOM.homeTileVerwaltung.addEventListener('click', () => {
    if (DOM.homeView.classList.contains('active')) {
      navigateToVerwaltung();
    } else {
      showHomeView();
    }
  });
  DOM.homeTileErstellen.addEventListener('click', () => {
    if (!DOM.homeTileErstellen.classList.contains('home-tile--locked')) navigateToApp();
  });
  DOM.homeTileEinsehen.addEventListener('click', navigateToEinsehen);

  // Zurück-Button in der Schülerübersicht
  DOM.btnBackFromList.addEventListener('click', () => {
    DOM.studentSearch.value = '';
    filterStudents('');
    if (state.mode === 'einsehen' || state.mode === 'erstellen') {
      showHomeView();
    } else {
      DOM.dashboardGrid.classList.add('hidden');
      DOM.verwaltungView.classList.add('active');
    }
  });

  // Verwaltung sub-tiles
  DOM.verwaltungTileSchueler.addEventListener('click', navigateToSchuelerVerwaltung);
  DOM.schuelerTileAnlegen.addEventListener('click', navigateToSchuelerAnlegen);
  DOM.btnBackFromSchuelerAnlegen.addEventListener('click', () => {
    if (state.stammdatenEditMode) {
      state.stammdatenEditMode = false;
      const titleEl = document.querySelector('#schueler-anlegen-view .home-title');
      if (titleEl) titleEl.textContent = 'Schüler anlegen';
      DOM.schuelerAnlegenView.classList.remove('active');
      if (state.stammdatenEditOrigin === 'verwaltung') {
        state.stammdatenEditOrigin = null;
        openSchuelerDetailVerwaltung(state.selectedStudentId);
      } else {
        DOM.studentDashboardView.classList.add('active');
      }
    } else {
      DOM.schuelerAnlegenView.classList.remove('active');
      DOM.schuelerVerwaltungView.classList.add('active');
    }
  });
  DOM.btnSaveNeuerSchueler.addEventListener('click', saveNeuerSchueler);
  DOM.schuelerTileVerwalten.addEventListener('click', navigateToSchuelerVerwalten);
  DOM.btnBackFromSchuelerVerwaltung.addEventListener('click', () => {
    DOM.schuelerVerwaltungView.classList.remove('active');
    DOM.verwaltungView.classList.add('active');
  });

  DOM.btnBackFromSchuelerDetail.addEventListener('click', () => {
    DOM.schuelerDetailVerwaltungView.classList.remove('active');
    DOM.dashboardGrid.classList.remove('hidden');
    DOM.studentSearch.value = '';
    filterStudents('');
  });
  document.getElementById('home-uebersicht-list').addEventListener('click', (e) => {
    const entry = e.target.closest('[data-student-id]');
    if (!entry) return;
    if (DOM.homeTileErstellen.classList.contains('home-tile--locked')) {
      showToast('Förderpläne können nur im festgelegten Zeitraum erstellt werden.', 'error');
      return;
    }
    navigateToApp();
    openStudentDashboard(entry.dataset.studentId);
  });

  DOM.verwaltungTileZeitraum.addEventListener('click', navigateToZeitraum);
  DOM.verwaltungTileUebersicht.addEventListener('click', navigateToUebersicht);
  DOM.btnBackFromUebersicht.addEventListener('click', () => {
    DOM.uebersichtView.classList.remove('active');
    DOM.verwaltungView.classList.add('active');
  });
  DOM.verwaltungTileArchiv.addEventListener('click', navigateToArchiv);
  if (DOM.verwaltungTileExport) DOM.verwaltungTileExport.addEventListener('click', exportAllData);
  DOM.btnBackFromArchiv.addEventListener('click', () => {
    DOM.archivView.classList.remove('active');
    DOM.verwaltungView.classList.add('active');
  });

  // Lehrkräfte verwalten
  DOM.verwaltungTileLehrer.addEventListener('click', navigateToLehrerVerwaltung);
  DOM.btnBackFromLehrerVerwaltung.addEventListener('click', () => {
    DOM.lehrerVerwaltungView.classList.remove('active');
    DOM.verwaltungView.classList.add('active');
  });
  document.getElementById('lehrer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lehrer-name').value.trim();
    const email = document.getElementById('lehrer-email').value.trim();
    const errEl = document.getElementById('lehrer-error');
    if (!name || !email) {
      errEl.textContent = 'Bitte Name und E-Mail angeben.';
      return;
    }
    if (!isValidEmail(email)) {
      errEl.textContent = 'Bitte eine gültige E-Mail-Adresse eingeben.';
      return;
    }
    createLehrer(name, email);
  });
  document.getElementById('btn-stammdaten-edit-verwaltung').addEventListener('click', () => {
    DOM.schuelerDetailVerwaltungView.classList.remove('active');
    openStammdatenEdit('verwaltung');
  });
  document.getElementById('btn-schueler-archivieren').addEventListener('click', () => {
    const student = state.students.find(s => s.id === state.selectedStudentId);
    if (!student) return;
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: 'Schüler archivieren?',
        text: `"${student.name}" wird in das Archiv verschoben.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ea580c',
        cancelButtonText: 'Abbrechen',
        confirmButtonText: 'Archivieren'
      }).then(result => {
        if (result.isConfirmed) {
          archiveStudent(state.selectedStudentId);
          DOM.schuelerDetailVerwaltungView.classList.remove('active');
          DOM.dashboardGrid.classList.remove('hidden');
        }
      });
    } else {
      archiveStudent(state.selectedStudentId);
      DOM.schuelerDetailVerwaltungView.classList.remove('active');
      DOM.dashboardGrid.classList.remove('hidden');
    }
  });

  // Zeitraum form
  DOM.btnBackFromZeitraum.addEventListener('click', navigateBackFromZeitraum);
  DOM.btnSaveZeitraum.addEventListener('click', () => {
    const data = {
      schuljahr:        { name: DOM.zeitraumSjName.value.trim() || null, von: DOM.zeitraumSjVon.value || null, bis: DOM.zeitraumSjBis.value || null },
      foerderplan:      { von: DOM.zeitraumFpVon.value || null, bis: DOM.zeitraumFpBis.value || null },
      elterngespraeche: { von: DOM.zeitraumEgVon.value || null, bis: DOM.zeitraumEgBis.value || null }
    };
    const fp = data.foerderplan;
    if (fp.von && fp.bis && fp.von > fp.bis) {
      showToast('"Von" darf nicht nach "Bis" liegen (Förderpläne).', 'error');
      return;
    }
    saveZeitraumData(data);
    renderZeitraumStatus();
    updateHomeTileErstellen();
    updateHomeTileGespraeche();
    renderFristenTile();
    showToast('Zeiträume gespeichert.');
  });

  // Student search live filter
  DOM.studentSearch.addEventListener('input', () => {
    filterStudents(DOM.studentSearch.value);
  });

  // Logo → back to home
  DOM.logoHomeBtn.addEventListener('click', showHomeView);
  DOM.logoHomeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') showHomeView();
  });

  // Add Student
  DOM.studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = DOM.studentNameInput.value;
    if (name.trim()) {
      addStudent(name);
      DOM.studentNameInput.value = '';
    } else {
      showToast('Bitte gib einen gültigen Namen ein.', 'error');
    }
  });

  // Subject tile clicks → Detail View
  document.getElementById('tile-stammdaten').addEventListener('click', () => {
    if (state.mode === 'erstellen' && !state.stammdatenConfirmed) openStammdatenEdit();
  });

  document.getElementById('btn-stammdaten-edit').addEventListener('click', (e) => {
    e.stopPropagation();
    openStammdatenEdit();
  });

  document.querySelectorAll('.subject-tiles-grid .subject-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const subject = tile.id.replace('tile-', '');
      if (state.mode === 'erstellen') {
        if (!state.stammdatenConfirmed) {
          Swal.fire({
            title: 'Stammdaten aktualisieren',
            text: 'Die Stammdaten müssen aktualisiert werden, bevor ein neuer Förderplan angelegt werden kann.',
            icon: 'warning',
            showConfirmButton: false,
            showCloseButton: true,
          });
          return;
        }
        openWorkspace(subject);
      } else {
        openSubjectDetailView(subject);
      }
    });
  });

  DOM.btnBackFromDetail.addEventListener('click', closeSubjectDetailView);

  // Student Dashboard navigation
  DOM.btnBackFromStudentDashboard.addEventListener('click', closeStudentDashboard);

  DOM.btnNewFoerderplan.addEventListener('click', () => {
    openSubjectModal(state.selectedStudentId);
  });

  // Close Subject Selection Modal
  DOM.closeModalBtn.addEventListener('click', closeSubjectModal);
  DOM.subjectModal.addEventListener('click', (e) => {
    if (e.target === DOM.subjectModal) closeSubjectModal();
  });

  // Subject Selection Buttons
  DOM.subjectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.dataset.subject;
      if (subject) {
        openWorkspace(subject);
      }
    });
  });

  // Workspace Actions
  DOM.btnBackToDashboard.addEventListener('click', () => closeWorkspace(true));
  // Go to Step 2
  DOM.btnGoToStep2.addEventListener('click', () => {
    if (state.selectedGoals.length === 0) {
      showToast('Bitte wähle mindestens ein Förderziel aus.', 'error');
      return;
    }
    DOM.workspaceStep1.classList.remove('active');
    DOM.workspaceStep2.classList.add('active');
    DOM.stepNode1.classList.remove('active');
    DOM.stepNode2.classList.add('active');
    
    const student = state.students.find(s => s.id === state.selectedStudentId);
    renderStep2(student, state.selectedSubject);
  });
  
  // Back to Step 1
  DOM.btnBackToStep1.addEventListener('click', () => {
    DOM.workspaceStep2.classList.remove('active');
    DOM.workspaceStep1.classList.add('active');
    DOM.stepNode2.classList.remove('active');
    DOM.stepNode1.classList.add('active');
    
    const student = state.students.find(s => s.id === state.selectedStudentId);
    renderStep1(student, state.selectedSubject);
  });
  
  // Go to Step 3
  DOM.btnGoToStep3.addEventListener('click', () => {
    DOM.workspaceStep2.classList.remove('active');
    DOM.workspaceStep3.classList.add('active');
    DOM.stepNode2.classList.remove('active');
    DOM.stepNode3.classList.add('active');
    
    const student = state.students.find(s => s.id === state.selectedStudentId);
    renderStep3(student, state.selectedSubject);
  });
  
  // Back to Step 2
  DOM.btnBackToStep2.addEventListener('click', () => {
    DOM.workspaceStep3.classList.remove('active');
    DOM.workspaceStep2.classList.add('active');
    DOM.stepNode3.classList.remove('active');
    DOM.stepNode2.classList.add('active');
    
    const student = state.students.find(s => s.id === state.selectedStudentId);
    renderStep2(student, state.selectedSubject);
  });
  
  // Custom Goal (Enter key)
  DOM.customGoalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomGoal();
    }
  });
  DOM.btnAddCustomGoal.addEventListener('click', addCustomGoal);
  
  // Save Goals
  DOM.btnSaveWorkspace.addEventListener('click', saveWorkspaceGoals);

  // PDF Preview Modal
  document.getElementById('btn-export-pdf').addEventListener('click', () => {
    if (pdfPreviewFilename && pdfPreviewUrl) {
      const a = document.createElement('a');
      a.href = pdfPreviewUrl;
      a.download = pdfPreviewFilename;
      a.click();
    }
  });
  document.getElementById('btn-close-pdf-preview').addEventListener('click', closePDFPreview);
  document.getElementById('pdf-preview-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('pdf-preview-modal')) closePDFPreview();
  });

  // Escape key support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('pdf-preview-modal').classList.contains('active')) {
        closePDFPreview();
      } else if (DOM.subjectModal.classList.contains('active')) {
        closeSubjectModal();
      }
    }
  });
}

// --- Zeitraum Storage & Logic ---
// Gibt den in state.zeitraum gecachten Zeitraum synchron zurück
// (wird beim Login via loadZeitraumFromFirestore() befüllt).
function loadZeitraum() {
  return state.zeitraum || { schuljahr: {}, foerderplan: {}, elterngespraeche: {} };
}

// Lädt den Zeitraum der aktuellen Schule aus Firestore in den Cache.
async function loadZeitraumFromFirestore() {
  const leer = { schuljahr: {}, foerderplan: {}, elterngespraeche: {} };
  try {
    const doc = await zeitraumDocRef().get();
    if (!doc.exists) {
      state.zeitraum = leer;
      return;
    }
    const parsed = doc.data();
    // Migration: altes Format war { von, bis }
    if ('von' in parsed || 'bis' in parsed) {
      state.zeitraum = {
        schuljahr: {},
        foerderplan: { von: parsed.von || null, bis: parsed.bis || null },
        elterngespraeche: {}
      };
    } else {
      state.zeitraum = {
        schuljahr: parsed.schuljahr || {},
        foerderplan: parsed.foerderplan || {},
        elterngespraeche: parsed.elterngespraeche || {}
      };
    }
  } catch (e) {
    console.error('Fehler beim Laden des Zeitraums:', e);
    state.zeitraum = leer;
  }
}

// Schreibt den Zeitraum nach Firestore und aktualisiert den Cache.
function saveZeitraumData(data) {
  state.zeitraum = data;
  return trackSave(zeitraumDocRef().set(data));
}

function clearZeitraumData() {
  state.zeitraum = { schuljahr: {}, foerderplan: {}, elterngespraeche: {} };
  return trackSave(zeitraumDocRef().delete());
}

function todayStr() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function formatDate(str) {
  const [y, m, d] = str.split('-');
  return `${d}.${m}.${y}`;
}

function isZeitraumAktiv(zeitraum) {
  const fp = zeitraum?.foerderplan || {};
  if (!fp.von && !fp.bis) return true;
  const today = todayStr();
  return (!fp.von || today >= fp.von) && (!fp.bis || today <= fp.bis);
}

function updateHomeTileErstellen() {
  const zeitraum = loadZeitraum();
  const aktiv = isZeitraumAktiv(zeitraum);
  const tile = DOM.homeTileErstellen;
  const hint = DOM.homeTileErstellenHint;
  const desc = DOM.homeTileErstellenDesc;

  if (aktiv) {
    tile.classList.remove('home-tile--locked');
    desc.style.display = '';
    const fp = zeitraum?.foerderplan || {};
    if (fp.von || fp.bis) {
      const vonStr = fp.von ? formatDate(fp.von) : '–';
      const bisStr = fp.bis ? formatDate(fp.bis) : '–';
      hint.textContent = `${vonStr} – ${bisStr}`;
      hint.style.display = '';
    } else {
      hint.style.display = 'none';
    }
  } else {
    tile.classList.add('home-tile--locked');
    desc.style.display = 'none';
    hint.style.display = '';
    const fp = zeitraum?.foerderplan || {};
    if (fp.von && todayStr() < fp.von) {
      hint.textContent = `Anlegen möglich ab ${formatDate(fp.von)}`;
    } else {
      hint.textContent = 'Zeitraum abgelaufen';
    }
  }
}

function updateHomeTileGespraeche() {
  const hint = document.getElementById('home-tile-gespraeche-hint');
  if (!hint) return;
  const eg = loadZeitraum()?.elterngespraeche || {};
  if (eg.von || eg.bis) {
    const vonStr = eg.von ? formatDate(eg.von) : '–';
    const bisStr = eg.bis ? formatDate(eg.bis) : '–';
    hint.textContent = `${vonStr} – ${bisStr}`;
    hint.style.display = '';
  } else {
    hint.style.display = 'none';
  }
}

function renderZeitraumStatus() {
  const zeitraum = loadZeitraum();
  const fp = zeitraum?.foerderplan || {};
  const el = DOM.zeitraumStatus;
  if (!fp.von && !fp.bis) { el.innerHTML = ''; return; }
  const aktiv = isZeitraumAktiv(zeitraum);
  const vonStr = fp.von ? formatDate(fp.von) : '–';
  const bisStr = fp.bis ? formatDate(fp.bis) : '–';
  el.innerHTML = `
    <div class="zeitraum-status-info ${aktiv ? 'zeitraum-aktiv' : 'zeitraum-inaktiv'}">
      <div class="zeitraum-status-label">${aktiv ? 'Zeitraum aktiv' : 'Zeitraum inaktiv'}</div>
      <div class="zeitraum-status-range">Von: ${vonStr} &nbsp;·&nbsp; Bis: ${bisStr}</div>
    </div>`;
}

function renderFristenTile() {
  const body = document.getElementById('home-fristen-body');
  if (!body) return;
  const zeitraum = loadZeitraum();

  function col(label, period, showBadge) {
    const hasData = period && (period.von || period.bis);
    if (!hasData) {
      return `<div class="fristen-col">
        <span class="fristen-col-label">${label}</span>
        <span class="fristen-col-value fristen-col-value--empty">Nicht festgelegt</span>
      </div>`;
    }
    const vonStr = period.von ? formatDate(period.von) : '–';
    const bisStr = period.bis ? formatDate(period.bis) : '–';
    const colorClass = showBadge
      ? (isZeitraumAktiv(zeitraum) ? 'fristen-col--aktiv' : 'fristen-col--inaktiv')
      : '';
    return `<div class="fristen-col ${colorClass}">
      <span class="fristen-col-label">${label}</span>
      <span class="fristen-col-value">${vonStr} – ${bisStr}</span>
    </div>`;
  }

  const sjLabel = zeitraum.schuljahr?.name ? `Schuljahr ${zeitraum.schuljahr.name}` : 'Schuljahr';
  body.innerHTML =
    col(sjLabel, zeitraum.schuljahr, false) +
    col('Förderpläne schreiben', zeitraum.foerderplan, true) +
    col('Förderplangespräche', zeitraum.elterngespraeche, false);
}

// --- Header ---
function setHeader(text) {
  const el = document.getElementById('logo-text');
  if (el) el.textContent = text;
}

// --- Home Navigation ---
function navigateToSchuelerVerwaltung() {
  DOM.verwaltungView.classList.remove('active');
  DOM.schuelerVerwaltungView.classList.add('active');
  setGearButtonVisible(true);
}

function navigateToZeitraum() {
  const zeitraum = loadZeitraum();
  DOM.zeitraumSjName.value = zeitraum.schuljahr?.name || '';
  fpSjVon.setDate(zeitraum.schuljahr?.von || null);
  fpSjBis.setDate(zeitraum.schuljahr?.bis || null);
  fpFpVon.setDate(zeitraum.foerderplan?.von || null);
  fpFpBis.setDate(zeitraum.foerderplan?.bis || null);
  fpEgVon.setDate(zeitraum.elterngespraeche?.von || null);
  fpEgBis.setDate(zeitraum.elterngespraeche?.bis || null);
  renderZeitraumStatus();
  DOM.verwaltungView.classList.remove('active');
  DOM.zeitraumView.classList.add('active');
  setGearButtonVisible(true);
}

function navigateBackFromZeitraum() {
  DOM.zeitraumView.classList.remove('active');
  DOM.verwaltungView.classList.add('active');
}

function showHomeView() {
  setHeader('Förderplan · Startseite');
  renderHomeUebersicht();
  renderFristenTile();
  updateHomeTileGespraeche();
  setGearButtonVisible(true);
  DOM.homeView.classList.add('active');
  DOM.verwaltungView.classList.remove('active');
  DOM.lehrerVerwaltungView.classList.remove('active');
  DOM.schuelerVerwaltungView.classList.remove('active');
  DOM.schuelerDetailVerwaltungView.classList.remove('active');
  DOM.zeitraumView.classList.remove('active');
  DOM.uebersichtView.classList.remove('active');
  DOM.archivView.classList.remove('active');
  DOM.schuelerAnlegenView.classList.remove('active');
  DOM.dashboardGrid.classList.add('hidden');
  DOM.dashboardGrid.classList.remove('einsehen-mode');
  DOM.studentDashboardView.classList.remove('active');
  DOM.subjectDetailView.classList.remove('active');
  DOM.goalsWorkspaceView.classList.remove('active');
  DOM.subjectModal.classList.remove('active');
  state.selectedStudentId = null;
  state.selectedSubject = null;
  state.selectedGoals = [];
  state.editingPlans = {};
  state.mode = null;
}

function setGearButtonVisible(visible) {
  const btn = document.getElementById('btn-verwaltung-header');
  // Admins sehen das Zahnrad immer (in jeder Ansicht); Lehrkräfte nie.
  const isAdmin = state.currentUser && state.currentUser.role === 'admin';
  if (btn) btn.style.display = isAdmin ? '' : 'none';
}

function navigateToApp() {
  setHeader('Förderplan · Erstellen');
  state.mode = 'erstellen';
  DOM.homeView.classList.remove('active');
  DOM.dashboardGrid.classList.add('einsehen-mode');
  DOM.dashboardGrid.classList.remove('hidden');
  setGearButtonVisible(false);
}

function navigateToVerwaltung() {
  // Nur Admins dürfen in die Verwaltung.
  if (!state.currentUser || state.currentUser.role !== 'admin') return;
  setHeader('Förderplan · Verwaltung');
  state.mode = 'verwaltung';
  DOM.homeView.classList.remove('active');
  DOM.verwaltungView.classList.add('active');
}

// --- Lehrkräfte verwalten (nur Admin) ---
function navigateToLehrerVerwaltung() {
  if (!state.currentUser || state.currentUser.role !== 'admin') return;
  DOM.verwaltungView.classList.remove('active');
  DOM.lehrerVerwaltungView.classList.add('active');
  document.getElementById('lehrer-starter-hint').innerHTML =
    `Neue Lehrkräfte erhalten automatisch das Starter-Passwort <strong>${escapeHTML(STARTER_PASSWORT)}</strong>. Teile es der Lehrkraft mit – beim ersten Login muss sie ein eigenes Passwort festlegen.`;
  document.getElementById('lehrer-error').textContent = '';
  renderLehrerListe();
  setGearButtonVisible(true);
}

async function renderLehrerListe() {
  const listEl = document.getElementById('lehrer-liste');
  listEl.innerHTML = '<div class="lehrer-list-empty">Wird geladen…</div>';
  try {
    const snap = await db.collection('users')
      .where('schoolId', '==', state.currentUser.schoolId).get();
    const users = snap.docs.map(d => ({ uid: d.id, ...d.data() }));
    if (users.length === 0) {
      listEl.innerHTML = '<div class="lehrer-list-empty">Noch keine Lehrkräfte angelegt.</div>';
      return;
    }
    // Admins zuerst, dann alphabetisch nach Name.
    users.sort((a, b) => {
      if ((a.role === 'admin') !== (b.role === 'admin')) return a.role === 'admin' ? -1 : 1;
      return (a.name || '').localeCompare(b.name || '', 'de');
    });
    listEl.innerHTML = users.map(u => {
      const isSelf = u.uid === state.currentUser.uid;
      const roleLabel = u.role === 'admin' ? 'Admin' : 'Lehrkraft';
      const removeBtn = (u.role === 'admin' || isSelf)
        ? ''
        : `<button type="button" class="btn-lehrer-remove" data-uid="${escapeHTML(u.uid)}" data-name="${escapeHTML(u.name || u.email || '')}">Entfernen</button>`;
      return `
        <div class="lehrer-list-item">
          <div class="lehrer-list-info">
            <span class="lehrer-list-name">${escapeHTML(u.name || '(ohne Namen)')}</span>
            <span class="lehrer-list-email">${escapeHTML(u.email || '')}</span>
          </div>
          <div class="lehrer-list-actions">
            <span class="lehrer-list-role ${u.role === 'admin' ? 'role-admin' : ''}">${roleLabel}</span>
            ${removeBtn}
          </div>
        </div>`;
    }).join('');
    listEl.querySelectorAll('.btn-lehrer-remove').forEach(btn => {
      btn.addEventListener('click', () => removeLehrer(btn.dataset.uid, btn.dataset.name));
    });
  } catch (e) {
    console.error('Fehler beim Laden der Lehrkräfte:', e);
    listEl.innerHTML = '<div class="lehrer-list-empty">Fehler beim Laden der Lehrkräfte.</div>';
  }
}

async function createLehrer(name, email) {
  const errEl = document.getElementById('lehrer-error');
  const btn = document.getElementById('btn-lehrer-anlegen');
  errEl.textContent = '';
  btn.disabled = true;
  let secondary = null;
  try {
    // Sekundär-App-Instanz: Der neue Nutzer wird dort eingeloggt, der Admin bleibt
    // in der Haupt-App angemeldet.
    secondary = firebase.initializeApp(firebaseConfig, 'Secondary-' + Date.now());
    const cred = await secondary.auth().createUserWithEmailAndPassword(email, STARTER_PASSWORT);
    await db.collection('users').doc(cred.user.uid).set({
      email: email,
      name: name,
      role: 'lehrer',
      schoolId: state.currentUser.schoolId,
      mustChangePassword: true
    });
    await secondary.auth().signOut();
    document.getElementById('lehrer-name').value = '';
    document.getElementById('lehrer-email').value = '';
    showToast(`Lehrkraft "${name}" wurde angelegt.`);
    renderLehrerListe();
  } catch (err) {
    console.error('Fehler beim Anlegen der Lehrkraft:', err);
    errEl.textContent = authErrorMessage(err.code);
  } finally {
    if (secondary) { try { await secondary.delete(); } catch (e) { /* ignore */ } }
    btn.disabled = false;
  }
}

function removeLehrer(uid, name) {
  const doRemove = async () => {
    try {
      await db.collection('users').doc(uid).delete();
      showToast('Lehrkraft wurde entfernt.');
      renderLehrerListe();
    } catch (e) {
      console.error('Fehler beim Entfernen:', e);
      showToast('Fehler beim Entfernen der Lehrkraft.', 'error');
    }
  };
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: 'Lehrkraft entfernen?',
      text: `"${name}" verliert damit den Zugang zu dieser Schule.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonText: 'Abbrechen',
      confirmButtonText: 'Entfernen'
    }).then(result => { if (result.isConfirmed) doRemove(); });
  } else {
    doRemove();
  }
}

function navigateToSchuelerVerwalten() {
  DOM.verwaltungView.classList.remove('active');
  DOM.schuelerVerwaltungView.classList.remove('active');
  DOM.dashboardGrid.classList.add('einsehen-mode');
  DOM.dashboardGrid.classList.remove('hidden');
  setGearButtonVisible(state.mode === 'verwaltung');
}

function navigateToEinsehen() {
  setHeader('Förderpläne · Einsehen');
  state.mode = 'einsehen';
  DOM.homeView.classList.remove('active');
  DOM.dashboardGrid.classList.add('einsehen-mode');
  DOM.dashboardGrid.classList.remove('hidden');
  setGearButtonVisible(false);
}

// --- Flatpickr Date Pickers ---
let fpSjVon, fpSjBis, fpFpVon, fpFpBis, fpEgVon, fpEgBis;

function initDatePickers() {
  const options = {
    dateFormat: 'Y-m-d',
    altInput: true,
    altFormat: 'd.m.Y',
    altInputClass: 'form-input zeitraum-date-input',
    locale: 'de',
    disableMobile: true
  };
  fpSjVon = flatpickr(DOM.zeitraumSjVon, options);
  fpSjBis = flatpickr(DOM.zeitraumSjBis, options);
  fpFpVon = flatpickr(DOM.zeitraumFpVon, options);
  fpFpBis = flatpickr(DOM.zeitraumFpBis, options);
  fpEgVon = flatpickr(DOM.zeitraumEgVon, options);
  fpEgBis = flatpickr(DOM.zeitraumEgBis, options);
}

// ================= AUTHENTIFIZIERUNG =================

function showLoginView() {
  document.getElementById('auth-overlay').classList.remove('hidden');
  document.getElementById('auth-loading').style.display = 'none';
  document.getElementById('login-view').style.display = '';
  document.getElementById('passwort-aendern-view').style.display = 'none';
}

function showPwChangeView() {
  document.getElementById('auth-overlay').classList.remove('hidden');
  document.getElementById('auth-loading').style.display = 'none';
  document.getElementById('login-view').style.display = 'none';
  document.getElementById('passwort-aendern-view').style.display = '';
}

function showAppView() {
  document.getElementById('auth-overlay').classList.add('hidden');
}

// Übersetzt Firebase-Fehlercodes in verständliche deutsche Meldungen.
function authErrorMessage(code) {
  switch (code) {
    case 'auth/invalid-email': return 'Ungültige E-Mail-Adresse.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential': return 'E-Mail oder Passwort ist falsch.';
    case 'auth/too-many-requests': return 'Zu viele Versuche. Bitte später erneut versuchen.';
    case 'auth/weak-password': return 'Das Passwort muss mindestens 6 Zeichen haben.';
    case 'auth/email-already-in-use': return 'Diese E-Mail-Adresse wird bereits verwendet.';
    case 'auth/network-request-failed': return 'Netzwerkfehler. Bitte Internetverbindung prüfen.';
    case 'auth/requires-recent-login': return 'Bitte melde dich neu an und versuche es erneut.';
    default: return 'Es ist ein Fehler aufgetreten. Bitte erneut versuchen.';
  }
}

// Reagiert auf An-/Abmeldung: steuert Login-Screen vs. App.
async function handleAuthStateChanged(user) {
  if (!user) {
    state.currentUser = null;
    state.students = [];
    state.zeitraum = null;
    showLoginView();
    return;
  }
  try {
    const doc = await db.collection('users').doc(user.uid).get();
    if (!doc.exists) {
      // Konto existiert in Auth, ist aber keiner Schule zugeordnet.
      await firebase.auth().signOut();
      document.getElementById('login-error').textContent =
        'Dieses Konto ist nicht freigeschaltet. Bitte an die Schulleitung wenden.';
      showLoginView();
      return;
    }
    const data = doc.data();
    state.currentUser = {
      uid: user.uid,
      email: data.email || user.email,
      name: data.name || '',
      role: data.role || 'lehrer',
      schoolId: data.schoolId
    };
    if (data.mustChangePassword) {
      showPwChangeView();
      return;
    }
    await bootApp();
  } catch (e) {
    console.error('Fehler bei der Anmeldung:', e);
    document.getElementById('login-error').textContent =
      'Fehler beim Laden des Profils. Bitte erneut versuchen.';
    await firebase.auth().signOut();
    showLoginView();
  }
}

function setupAuthListeners() {
  // Login
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pw = document.getElementById('login-password').value;
    const errEl = document.getElementById('login-error');
    const btn = document.getElementById('btn-login');
    errEl.textContent = '';
    btn.disabled = true;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw);
      document.getElementById('login-password').value = '';
      // handleAuthStateChanged übernimmt den Rest.
    } catch (err) {
      errEl.textContent = authErrorMessage(err.code);
    } finally {
      btn.disabled = false;
    }
  });

  // Passwort vergessen
  document.getElementById('btn-forgot-password').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const errEl = document.getElementById('login-error');
    if (!email) {
      errEl.textContent = 'Bitte zuerst die E-Mail-Adresse oben eingeben.';
      return;
    }
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      errEl.textContent = '';
      showToast('E-Mail zum Zurücksetzen des Passworts wurde gesendet.');
    } catch (err) {
      errEl.textContent = authErrorMessage(err.code);
    }
  });

  // Erzwungener Passwort-Wechsel beim ersten Login
  document.getElementById('pw-change-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pw1 = document.getElementById('pw-neu').value;
    const pw2 = document.getElementById('pw-neu-bestaetigung').value;
    const errEl = document.getElementById('pw-change-error');
    const btn = document.getElementById('btn-pw-change');
    errEl.textContent = '';
    if (pw1.length < 6) { errEl.textContent = 'Das Passwort muss mindestens 6 Zeichen haben.'; return; }
    if (pw1 !== pw2) { errEl.textContent = 'Die Passwörter stimmen nicht überein.'; return; }
    if (pw1 === STARTER_PASSWORT) { errEl.textContent = 'Bitte wähle ein anderes als das Starter-Passwort.'; return; }
    btn.disabled = true;
    try {
      await firebase.auth().currentUser.updatePassword(pw1);
      await db.collection('users').doc(state.currentUser.uid).update({ mustChangePassword: false });
      document.getElementById('pw-neu').value = '';
      document.getElementById('pw-neu-bestaetigung').value = '';
      await bootApp();
    } catch (err) {
      errEl.textContent = authErrorMessage(err.code);
      btn.disabled = false;
    }
  });

  // Abmelden
  document.getElementById('btn-logout-header').addEventListener('click', async () => {
    await firebase.auth().signOut();
    // handleAuthStateChanged zeigt den Login-Screen; App-Ansicht zurücksetzen.
    showHomeView();
  });
}

// Stellt die UI passend zur Rolle ein.
function applyRoleUI() {
  // Zahnrad/Verwaltung nur für Admins (setGearButtonVisible prüft die Rolle selbst).
  setGearButtonVisible(true);
}

// ================= INIT / BOOT =================
let datePickersReady = false;

// Einmalige Einrichtung; wartet auf den Auth-Status.
function init() {
  db = firebase.firestore();
  // Offline-Persistenz: Schreibvorgänge werden in IndexedDB zwischengespeichert und
  // automatisch synchronisiert, sobald wieder eine Verbindung besteht – auch nach
  // einem Tab-Neustart. Muss vor dem ersten Firestore-Zugriff aufgerufen werden.
  db.enablePersistence({ synchronizeTabs: true }).catch(err => {
    if (err.code === 'failed-precondition') {
      console.warn('Offline-Persistenz nur in einem Tab gleichzeitig aktiv.');
    } else if (err.code === 'unimplemented') {
      console.warn('Offline-Persistenz wird von diesem Browser nicht unterstützt.');
    } else {
      console.warn('Offline-Persistenz konnte nicht aktiviert werden:', err);
    }
  });
  setupEventListeners();
  setupAuthListeners();
  setupConnectivityWatch();
  firebase.auth().onAuthStateChanged(handleAuthStateChanged);
}

// Zeigt einen Hinweis, wenn keine Internetverbindung besteht.
function setupConnectivityWatch() {
  const update = () => {
    if (DOM.offlineBanner) {
      DOM.offlineBanner.style.display = navigator.onLine ? 'none' : '';
    }
  };
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

// Läuft nach erfolgreichem Login (und ggf. Passwortwechsel): lädt Schul-Daten.
async function bootApp() {
  state.students = await storage.loadData();
  await loadZeitraumFromFirestore();
  await loadSchoolName();
  renderStudents();
  updateHomeTileErstellen();
  updateHomeTileGespraeche();
  if (!datePickersReady) { initDatePickers(); datePickersReady = true; }
  renderHomeUebersicht();
  renderFristenTile();
  applyRoleUI();
  showAppView();
}

// Lädt den Anzeigenamen der Schule (für PDF-Kopf). Fehlerhaft/leer → schoolId als Fallback.
async function loadSchoolName() {
  try {
    if (!state.currentUser || !state.currentUser.schoolId) { state.schoolName = ''; return; }
    const doc = await db.collection('schools').doc(state.currentUser.schoolId).get();
    state.schoolName = (doc.exists && doc.data().name) ? doc.data().name : '';
  } catch (e) {
    console.error('Fehler beim Laden des Schulnamens:', e);
    state.schoolName = '';
  }
}

document.addEventListener('DOMContentLoaded', init);
