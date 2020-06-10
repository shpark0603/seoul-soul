import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAo_kt5nex81VBSpBDP_tN3Mi18AG3AGN8",
  authDomain: "seoul-soul-db-86dd6.firebaseapp.com",
  databaseURL: "https://seoul-soul-db-86dd6.firebaseio.com",
  projectId: "seoul-soul-db-86dd6",
  storageBucket: "seoul-soul-db-86dd6.appspot.com",
  messagingSenderId: "261214181433",
  appId: "1:261214181433:web:bf3552d5911d9e660b15e8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;