import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfSKG8vXAyNEEA2Hxzo81D_xZlt704OPA",
    authDomain: "clone-282ff.firebaseapp.com",
    databaseURL: "https://clone-282ff.firebaseio.com",
    projectId: "clone-282ff",
    storageBucket: "clone-282ff.appspot.com",
    messagingSenderId: "7055124161",
    appId: "1:7055124161:web:bedc8ad8a343e47e44d640",
    measurementId: "G-JMF490SD11"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };