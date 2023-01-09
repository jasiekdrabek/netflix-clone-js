import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyKdjvOcCX4tWMvRP_7DwKaRLOkrkdM7U",
  authDomain: "netflix-clone-2910e.firebaseapp.com",
  projectId: "netflix-clone-2910e",
  storageBucket: "netflix-clone-2910e.appspot.com",
  messagingSenderId: "694970347813",
  appId: "1:694970347813:web:51519a1201c72de1aeeacc",
  measurementId: "G-1BCVGF2TNG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
