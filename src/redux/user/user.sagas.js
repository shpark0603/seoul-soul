import { takeLatest, put, all, call } from "redux-saga/effects";
import ActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  createSignInFailureAction,
  createSignInSuccessAction,
  createSignOutSuccessAction,
  createSignOutFailureAction,
  createSingUpFailureAction,
  createSignUpSuccessAction,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapshot = yield userRef.get();

    yield put(
      createSignInSuccessAction({ id: snapshot.id, ...snapshot.data() })
    );
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* googleSignInStart() {
  yield takeLatest(ActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(createSignInFailureAction(error));
  }
}

function* emailSignInStart() {
  yield takeLatest(ActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* checkUserSession() {
  yield takeLatest(ActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(createSignOutSuccessAction());
  } catch (error) {
    yield put(createSignOutFailureAction(error));
  }
}

function* signOutStart() {
  yield takeLatest(ActionTypes.SIGN_OUT_START, signOut);
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      createSignUpSuccessAction({ user, additionalData: { displayName } })
    );
  } catch (error) {
    yield put(createSingUpFailureAction(error));
  }
}

function* onSignOutStart() {
  yield takeLatest(ActionTypes.SIGN_UP_START, signUp);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* onSignUpSuccess() {
  yield takeLatest(ActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(onSignOutStart),
    call(onSignUpSuccess),
  ]);
}
