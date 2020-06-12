import ActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_OUT_FAILURE:
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
