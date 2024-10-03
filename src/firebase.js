import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCoYTrBeS1ucdJQ017sgjManDMWFpVJ4E",
    authDomain: "task-management-ce6c4.firebaseapp.com",
    projectId: "task-management-ce6c4",
    storageBucket: "task-management-ce6c4.appspot.com",
    messagingSenderId: "639031300538",
    appId: "1:639031300538:web:18eab5fe4f907a479acd83"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };



