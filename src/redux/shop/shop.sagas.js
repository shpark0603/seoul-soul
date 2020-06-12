import { takeLatest, call, put, all } from "redux-saga/effects";
import { FETCH_COLLECTIONS_START } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  createFetchCollectionsSuccessAction,
  createFetchCollectionsFailureAction,
} from "./shop.actions";

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(createFetchCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    yield put(createFetchCollectionsFailureAction(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
