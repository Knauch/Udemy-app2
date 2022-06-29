import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword 
} from 'firebase/auth';

import { getFirestore,
         doc,
         getDoc,
         setDoc
        } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user document', error.message)
    }
  } 

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;

  return await createAuthUserWithEmailAndPassword(auth, email, password)
}