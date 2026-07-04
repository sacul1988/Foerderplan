# Datenschutz – Checkliste & Vorlage (Förderplan-Assistent)

> ⚠️ **Wichtiger Hinweis:** Dieses Dokument ist **keine Rechtsberatung** und **kein
> fertiger Vertrag**. Es ist eine praktische Orientierung, damit ihr mit einer
> Datenschutz-Fachperson (z. B. behördliche/r Datenschutzbeauftragte/r der Schule,
> Fachanwält/in) die nötigen Unterlagen erstellen könnt. Ihr verarbeitet
> **besondere Kategorien personenbezogener Daten von Minderjährigen**
> (sonderpädagogischer Förderbedarf → Gesundheitsdaten, Art. 9 DSGVO). Das erfordert
> besondere Sorgfalt. **Vor dem Verkauf/Einsatz an echten Schulen unbedingt prüfen lassen.**

---

## 1. Rollenverteilung (wer ist wofür verantwortlich?)

- **Die Schule** ist datenschutzrechtlich **Verantwortliche** (Controller) für die
  Schülerdaten.
- **Ihr (der Anbieter)** seid **Auftragsverarbeiter** (Processor) nach **Art. 28 DSGVO**.
  → Mit jeder Schule braucht ihr einen **Auftragsverarbeitungsvertrag (AVV / AV-Vertrag)**.
- **Google (Firebase/Google Cloud)** ist euer **Unterauftragsverarbeiter**.
  → Google stellt ein „Cloud Data Processing Addendum" bereit; das müsst ihr akzeptieren
  und im AVV mit den Schulen als Unterauftragsverarbeiter benennen.

## 2. Was ihr den Schulen bereitstellen solltet

- [ ] **AVV nach Art. 28 DSGVO** (Vertrag Schule ↔ Anbieter)
- [ ] **Liste der Unterauftragsverarbeiter** (mindestens: Google Ireland/Cloud)
- [ ] **Verzeichnis der Verarbeitungstätigkeiten** (Vorlage für die Schule)
- [ ] **Beschreibung der technischen & organisatorischen Maßnahmen (TOMs)** – siehe unten
- [ ] Ggf. Unterstützung bei einer **Datenschutz-Folgenabschätzung (DSFA)** – bei
      Art.-9-Daten von Kindern häufig erforderlich (Art. 35 DSGVO).

## 3. Technische & organisatorische Maßnahmen (TOMs) – aktueller Stand

| Bereich | Umsetzung in dieser App |
|---|---|
| **Serverstandort** | Firestore-Region `europe-west3` (Frankfurt) – Daten bleiben in der EU |
| **Transportverschlüsselung** | HTTPS/TLS (durch Firebase erzwungen) |
| **Verschlüsselung at rest** | Standardmäßig durch Google Cloud |
| **Zugriffskontrolle** | E-Mail/Passwort-Login, Rollen (admin/lehrer) |
| **Mandantentrennung** | Strikte Trennung nach `schoolId` über Firestore Security Rules |
| **Rechte-Durchsetzung** | Security Rules (`firestore.rules`) – nicht nur UI |
| **Passwort-Policy** | Erzwungener Wechsel des Starter-Passworts beim ersten Login |
| **Datensicherung** | Manueller Export („Daten-Backup", JSON) in der Verwaltung |

### Noch offen / empfohlen
- [ ] **Individuelle Einladungslinks** statt gemeinsamem Starter-Passwort
      (aktuell teilen sich neue Lehrkräfte dasselbe Start-Passwort → Schwachstelle).
- [ ] **Mindest-Passwortlänge/-komplexität** erhöhen (aktuell 6 Zeichen, Firebase-Minimum).
- [ ] **Zugriffs-/Änderungsprotokoll** (wer hat wann welchen Datensatz geändert).
- [ ] **Automatisierte, regelmäßige Backups** (aktuell nur manueller Export).
- [ ] **2-Faktor-Authentisierung** für Admins.

## 4. Datenminimierung & Aufbewahrung

- [ ] Nur die wirklich nötigen Felder erheben (regelmäßig prüfen).
- [ ] **Löschkonzept** festlegen: Wann werden Förderpläne/Schülerdaten gelöscht?
      (z. B. X Jahre nach Verlassen der Schule – Frist mit der Schule/Land klären).
- [ ] **Archiv ≠ Löschung**: Archivierte Schüler sind weiterhin gespeichert. Für echte
      Löschung „Endgültig löschen" nutzen. Aufbewahrungsfristen dokumentieren.

## 5. Betroffenenrechte (Art. 15–21 DSGVO)

Die Schule muss Auskunft, Berichtigung, Löschung, Datenübertragbarkeit etc. erfüllen können.
- [ ] **Auskunft/Export**: über „Daten-Backup" (JSON) je Schule möglich.
- [ ] **Berichtigung**: über „Schüler bearbeiten".
- [ ] **Löschung**: über „Endgültig löschen" im Archiv.
- [ ] Prozess dokumentieren, wie Eltern/Betroffene diese Rechte bei der Schule geltend machen.

## 6. Datenpannen (Art. 33/34 DSGVO)

- [ ] Meldeprozess definieren: Anbieter informiert die Schule **unverzüglich** bei einem
      Vorfall; die Schule meldet ggf. binnen 72 Stunden an die Aufsichtsbehörde.

## 7. Checkliste vor dem ersten echten Schuleinsatz

- [ ] AVV-Vorlage von Fachperson prüfen lassen
- [ ] Google Cloud DPA akzeptiert & dokumentiert
- [ ] Security Rules (`firestore.rules`) veröffentlicht und getestet
- [ ] Datenschutzerklärung für Endnutzer (Lehrkräfte) erstellt
- [ ] Löschkonzept & Aufbewahrungsfristen mit Schule/Land abgestimmt
- [ ] Verfahren für Betroffenenrechte & Datenpannen dokumentiert
- [ ] Starter-Passwort-Schwachstelle adressiert (Einladungslinks geplant)

---

*Stand: {{Datum beim Ausfüllen eintragen}}. Dieses Dokument ersetzt keine
individuelle rechtliche Prüfung.*
