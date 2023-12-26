import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostReducer from './Slices/PostSlice'
import AuthSlice from "./Slices/AuthSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth_user'], 
  }

  const rootReducer = combineReducers({
    auth_user: AuthSlice,
    posts: PostReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
export const persistor = persistStore(store)