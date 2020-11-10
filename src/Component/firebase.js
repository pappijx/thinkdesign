import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRSHToG24og7FuhoFDHe7Thhid5ZScMXc",
  authDomain: "thinkdesign-4d5dc.firebaseapp.com",
  databaseURL: "https://thinkdesign-4d5dc.firebaseio.com",
  projectId: "thinkdesign-4d5dc",
  storageBucket: "thinkdesign-4d5dc.appspot.com",
  messagingSenderId: "142278944648",
  appId: "1:142278944648:web:bf8680e440e8d6192bfc3d",
});

const db = firebaseApp.firestore();

export default db;
