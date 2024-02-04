import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  EnhancedStore,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import settings from "../../entities/Settings/model";

import authentication from "entities/Authentication/model";
const reducers = combineReducers({ settings, authentication });
const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export type PreloaderState = ReturnType<typeof persistedReducer>;
export type StoreType = EnhancedStore<PreloaderState>;

export const makeStore = (preloadedState?: PreloaderState) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: preloadedState as PreloaderState,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });

      return defaultMiddleware;
    },
  });
};

export const store: StoreType = makeStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);
