
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase/'
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/database'
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyD5weTu3aIXnsQgFx6dmCcSjRP4f6dL_lY",
  authDomain: "innovation-hand.firebaseapp.com",
  databaseURL: "https://innovation-hand-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "innovation-hand",
  storageBucket: "innovation-hand.appspot.com",
  messagingSenderId: "901859590127",
  appId: "1:901859590127:web:1948cf7249dd6a00ca001a",
  measurementId: "G-5ERZNJG7E9"
}

// firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
// const storage = firebase.storage();
// const database = getDatabase(firebaseApp);
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true,
//     merge: true
// };
// firebase.db.settings(settings);

const db = getDatabase(app)

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// };
// db.settings(settings);

export {
    db,
    // database
}
