import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcIlra3xVPKc-OdXTbEG3yYUvI5XLEsBQ",
  authDomain: "clone-efba9.firebaseapp.com",
  projectId: "clone-efba9",
  storageBucket: "clone-efba9.appspot.com",
  messagingSenderId: "384947768630",
  appId: "1:384947768630:web:460cea686f7a8559a33797",
  measurementId: "G-3XB135V5GJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
