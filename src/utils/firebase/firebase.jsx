import { initializeApp } from 'firebase/app';
//stuf from firebase 
import { 
    getAuth, 
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth';

//setting the geting documents and setting the document
import { getFirestore,
         doc,
         getDoc,
         setDoc, 
         collection,
         writeBatch,
         query,
         getDocs
        } from 'firebase/firestore';

  //config copied from firebase website
const firebaseConfig = {
  apiKey: "AIzaSyClPUSmiHL7j0OVwYVor57CzBaZumBr7nY",
  authDomain: "schmotki-db.firebaseapp.com",
  projectId: "schmotki-db",
  storageBucket: "schmotki-db.appspot.com",
  messagingSenderId: "359801423353",
  appId: "1:359801423353:web:0f58648a777c622b176928"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//for storing and all
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey, 
  objectsToAdd
  ) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) =>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })
  await batch.commit()
  console.log('done')
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  //mapping all documents from API to get them
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
 
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
//getting info from user auth
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating user document', error.message)
    }
  } 
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth, callback); 