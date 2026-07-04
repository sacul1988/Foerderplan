/*
 * Firebase-Konfiguration – VORLAGE
 * ---------------------------------
 * 1. Diese Datei kopieren und in "firebase-config.js" umbenennen.
 * 2. Die Werte aus deinem Firebase-Projekt eintragen:
 *      Firebase-Konsole → Projekteinstellungen → Allgemein → "Deine Apps"
 *      → Web-App → SDK-Konfiguration.
 * 3. Ein eigenes Starter-Passwort setzen (mind. 6 Zeichen).
 *
 * Die echte firebase-config.js ist per .gitignore vom Repo ausgeschlossen,
 * damit das Starter-Passwort nicht öffentlich wird.
 *
 * Hinweis: apiKey & Co. sind KEIN Geheimnis – sie identifizieren nur das
 * Projekt. Die Absicherung passiert über die Firestore Security Rules
 * (siehe firestore.rules).
 */
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJEKT.firebaseapp.com",
  projectId: "DEIN_PROJEKT",
  storageBucket: "DEIN_PROJEKT.firebasestorage.app",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
};

/*
 * Einheitliches Starter-Passwort für neu angelegte Lehrkräfte.
 * Der Admin nennt es der Lehrkraft; beim ersten Login MUSS sie es ändern.
 * Muss mindestens 6 Zeichen haben (Firebase-Vorgabe).
 */
const STARTER_PASSWORT = "BITTE-EIGENES-SETZEN";

// Firebase initialisieren (compat-SDK, globales `firebase`).
firebase.initializeApp(firebaseConfig);
