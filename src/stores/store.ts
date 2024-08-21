import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import registerSlice from "@/stores/registerSlice";
import activeAccountSlice from "@/stores/activeAccountSlice";
import authSlice from "@/stores/authSlice";
import userSlice from "@/stores/userSlice";
import userProfileSlice from "@/stores/userProfileSlice";
import publicUserProfileSlice from "@/stores/publicUserProfileSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authSlice", "userSlice"],
  blacklist: [
    "registerSlice",
    "activeAccountSlice",
    "userProfileSlice",
    "publicUserProfileSlice",
  ],
};

const rootReducer = combineReducers({
  registerSlice: registerSlice,
  activeAccountSlice: activeAccountSlice,
  authSlice: authSlice,
  userSlice: userSlice,
  userProfileSlice: userProfileSlice,
  publicUserProfileSlice: publicUserProfileSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export let persistor = persistStore(store);
