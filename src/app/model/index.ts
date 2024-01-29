import {
  configureStore,
  combineReducers,
  EnhancedStore,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import AsyncStorage from "@react-native-async-storage/async-storage";

import settings from "../../entities/Settings/model";

const reducers = combineReducers({ settings });
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
