import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsB8L1CZDU7RQGM-pPGBb_UqUZM_9yEhU",
  authDomain: "toque-suave.firebaseapp.com",
  projectId: "toque-suave",
  storageBucket: "toque-suave.appspot.com",
  messagingSenderId: "322584570505",
  appId: "1:322584570505:web:eb1cf96ae8dc2e51ea7458",
  measurementId: "G-81WFZY05S4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database().ref();

export { firebase, auth, database }