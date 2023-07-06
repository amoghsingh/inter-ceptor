import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-slice";
import userReducer from "./user-slice";
import cardReducer from "./card-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-card",
  storage,
};

const cmbReducers = combineReducers({
  posts: postReducer,
  users: userReducer,
  cards: cardReducer,
});

const persistedReducer = persistReducer(persistConfig, cmbReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export default store;
export { persistor };
