import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { httpDriver } from "utils/httpDriver";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainReducer from "./main/reducer";

const reducers = combineReducers({
  main: mainReducer,
});

const configureStore = () => {
  const { requestsMiddleware } = handleRequests({
    driver: createDriver(httpDriver),
  });

  const persistConfig = {
    key: "root",
    storage,
    whiteList: "main",
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    applyMiddleware(...requestsMiddleware)
  );

  let persistor = persistStore(store);

  return { store, persistor };
};

export type RootState = ReturnType<typeof reducers>;

export default configureStore;
