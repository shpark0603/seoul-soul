import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./shop.types";

export const createFetchCollectionsStartAction = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const createFetchCollectionsSuccessAction = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const createFetchCollectionsFailureAction = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
