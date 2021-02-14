import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU4h0DMlVtwfEfponsubdVvQcl0X7o9aw",
  authDomain: "ztm-crwn-clothing.firebaseapp.com",
  projectId: "ztm-crwn-clothing",
  storageBucket: "ztm-crwn-clothing.appspot.com",
  messagingSenderId: "622582575615",
  appId: "1:622582575615:web:b2eac5c5d0bfec8a59f7ca",
  measurementId: "G-MPXQMGCF7Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Configure Google authentification
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'promp': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
