import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6dXWUFZDuE6knQZocBE355CgUcufWP7k",
  authDomain: "relu-consultancy-d680d.firebaseapp.com",
  projectId: "relu-consultancy-d680d",
  storageBucket: "relu-consultancy-d680d.appspot.com",
  messagingSenderId: "550530630031",
  appId: "1:550530630031:web:176c5e79a920dcb43a0bfa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };