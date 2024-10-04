// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXPPDIeY_qA8OQ5RLVMnC1VXBFLuZmK0Q",
    authDomain: "fir-1a2e5.firebaseapp.com",
    projectId: "fir-1a2e5",
    storageBucket: "fir-1a2e5.appspot.com",
    messagingSenderId: "262758191246",
    appId: "1:262758191246:web:843b2a3c7e529b1aa6f9df",
    measurementId: "G-8LYEFVQ018"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
