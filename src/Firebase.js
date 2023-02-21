import firebase from "firebase"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDQPsrLw9APhAOD9a0UtCcRgugKXf-7kw",
    authDomain: "instareel-v1.firebaseapp.com",
    projectId: "instareel-v1",
    storageBucket: "instareel-v1.appspot.com",
    messagingSenderId: "828250461576",
    appId: "1:828250461576:web:5d48fbec115a432392563d",
    measurementId: "G-HH2X0W9XGE"
  };

  const firebaseapp = firebase.initializeApp
  {firebaseConfig};

  const db = firebaseapp.firestore();

  export default db;