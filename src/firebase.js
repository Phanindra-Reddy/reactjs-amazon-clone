import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCfkbJ6HEEqBgjbzBYUDMZFL8bwRoshslY",
    authDomain: "react--clone-6137b.firebaseapp.com",
    projectId: "react--clone-6137b",
    storageBucket: "react--clone-6137b.appspot.com",
    messagingSenderId: "385084480716",
    appId: "1:385084480716:web:9de797c45c8bf7cdb9b669"
})

//firebase.initializeApp(app);

export const auth = app.auth();

export const db = app.firestore();

export default app;



