import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDwG5-ZpvSCZIUPFu-gym5omtrS8vubTDY',
  authDomain: 'journal-app-16b9d.firebaseapp.com',
  projectId: 'journal-app-16b9d',
  storageBucket: 'journal-app-16b9d.appspot.com',
  messagingSenderId: '377633584444',
  appId: '1:377633584444:web:4573958b1f0b8d46c01a39',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
