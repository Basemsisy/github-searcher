import { success, error } from "@redux-requests/core";
import * as T from "./types";

const initialState = { items: null, isLoading: false, error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case T.LOAD_DATA:
      return { ...state, isLoading: true };
    case success(T.LOAD_DATA):
      return { ...state, items: action.response.data.items, isLoading: false };
    case error(T.LOAD_DATA):
      return {
        ...state,
        items: null,
        isLoading: false,
        error: action.error.response.data.message,
      };
    case T.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};
