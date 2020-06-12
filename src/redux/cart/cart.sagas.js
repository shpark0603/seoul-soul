import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { createClearCartAction } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(createClearCartAction());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
