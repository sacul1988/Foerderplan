# Einrichtung: Login, Rollen & Firebase

Diese Schritte macht **du in der Firebase-Konsole** (https://console.firebase.google.com).
Der Programmcode ist fertig – es fehlt nur die Verbindung zu deinem Firebase-Projekt.

---

## 1. Firebase-Projekt & Dienste anlegen

1. Neues Firebase-Projekt erstellen.
2. **Firestore Database** erstellen → Region **`europe-west3` (Frankfurt)** wählen.
   ⚠️ Die Region lässt sich **später nicht mehr ändern** – gleich richtig wählen (DSGVO).
   - Beim Erstellen „im Produktionsmodus starten" ist ok (die Regeln setzt du in Schritt 3).
3. **Authentication** öffnen → **Sign-in method** → **E-Mail/Passwort** aktivieren.

## 2. Web-App registrieren & Config eintragen

1. Zahnrad oben links → **Projekteinstellungen** → Reiter **Allgemein**.
2. Unter „Deine Apps" auf das **Web-Symbol `</>`** klicken, App registrieren.
3. **`firebase-config.example.js`** kopieren und in **`firebase-config.js`**
   umbenennen (diese echte Datei ist per `.gitignore` vom Repo ausgeschlossen,
   damit das Starter-Passwort nicht öffentlich wird).
4. Firebase zeigt ein `firebaseConfig`-Objekt an. Diese Werte in
   **`firebase-config.js`** eintragen (apiKey, authDomain, projectId, storageBucket,
   messagingSenderId, appId).
5. In derselben Datei das `STARTER_PASSWORT` setzen (mind. 6 Zeichen).

## 3. Sicherheitsregeln einspielen

1. Firestore Database → Reiter **Regeln**.
2. Den kompletten Inhalt der Datei **`firestore.rules`** einfügen.
3. **Veröffentlichen** klicken.

## 4. Ersten Admin von Hand anlegen (einmalig pro Schule)

**a) Auth-Konto:**
- Authentication → **Nutzer hinzufügen** → E-Mail + Passwort eingeben.
- Die erzeugte **UID kopieren** (steht in der Nutzerliste).

**b) Schule anlegen (Firestore → Daten):**
- Collection `schools` starten.
- Dokument mit eigener ID anlegen, z. B. `schule-musterstadt`.
- Feld hinzufügen: `name` (String) = „Meine Schule".

**c) Nutzerprofil anlegen (Firestore → Daten):**
- Collection `users` starten.
- Dokument-ID = **die kopierte UID** aus Schritt a.
- Felder (alle als String):
  | Feld       | Wert                         |
  |------------|------------------------------|
  | `email`    | die Admin-E-Mail             |
  | `name`     | Name des Sonderpädagogen     |
  | `role`     | `admin`                      |
  | `schoolId` | `schule-musterstadt` (die ID aus b) |

## 5. Testen

1. `index.html` öffnen → der **Login-Screen** erscheint.
2. Mit den Admin-Daten anmelden.
3. Du solltest sehen: Startseite **und** das Zahnrad → Verwaltung → Kachel
   **„Lehrkräfte verwalten"**.
4. Dort eine Lehrkraft mit Name + E-Mail anlegen. Sie erhält automatisch das
   Starter-Passwort (wird dir angezeigt) und muss es beim ersten Login ändern.

---

## Weitere Schulen

Für jede weitere Schule wiederholst du **nur Schritt 4** (neue `schoolId`, neuer Admin).
Die Lehrkräfte legt dann der jeweilige Admin selbst in der App an.

## Später (beim Verkauf an viele Schulen)

- Gebrandeter **Einladungslink** statt Starter-Passwort (braucht Cloud Functions + Blaze-Tarif).
- Automatische Schul-Registrierung / Self-Service.
Diese Punkte sind bewusst noch nicht gebaut.
