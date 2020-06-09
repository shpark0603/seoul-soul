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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
