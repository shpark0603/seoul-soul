import ActionTypes from "./user.types";

export const createGoogleSignInStartAction = () => ({
  type: ActionTypes.GOOGLE_SIGN_IN_START,
});

export const createEmailSignInStartAction = (emailAndPassword) => ({
  type: ActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const createSignInSuccessAction = (user) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const createSignInFailureAction = (error) => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const createCheckUserSessionAction = () => ({
  type: ActionTypes.CHECK_USER_SESSION,
});

export const createSignOutStartAction = () => ({
  type: ActionTypes.SIGN_OUT_START,
});

export const createSignOutSuccessAction = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS,
});

export const createSignOutFailureAction = (error) => ({
  type: ActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const createSignUpStartAction = (signUpFormInput) => ({
  type: ActionTypes.SIGN_UP_START,
  payload: signUpFormInput,
});

export const createSignUpSuccessAction = ({ user, additionalData }) => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const createSingUpFailureAction = (error) => ({
  type: ActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
