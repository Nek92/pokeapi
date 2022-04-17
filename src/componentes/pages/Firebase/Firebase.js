import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebasefirestore';

const { REACT_APP_FB_API_KEY}  = process.env;

const firebaseConfig = {
  apiKey: "REACT_APP_FB_API_KEY",
  authDomain: "pokedex-firebase-8c7d6.firebaseapp.com",
  projectId: "pokedex-firebase-8c7d6",
  storageBucket: "pokedex-firebase-8c7d6.appspot.com",
  messagingSenderId: "942031144755",
  appId: "1:942031144755:web:0a3b768decfe8820d1e046"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
