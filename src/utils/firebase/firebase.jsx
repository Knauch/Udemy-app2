import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClPUSmiHL7j0OVwYVor57CzBaZumBr7nY",
  authDomain: "schmotki-db.firebaseapp.com",
  projectId: "schmotki-db",
  storageBucket: "schmotki-db.appspot.com",
  messagingSenderId: "359801423353",
  appId: "1:359801423353:web:0f58648a777c622b176928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)