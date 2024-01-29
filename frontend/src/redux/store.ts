import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist'
import { authReducer } from './features/auth-slice'
import { cartReducer } from './features/cart-slice'
import { deliveryReducer } from './features/delivery-slice'
import storage from './persistStorage'

/* export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
      delivery: deliveryReducer,
    },
    devTools: true,
  })
} */
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  delivery: deliveryReducer,
})
const persistConfig = {
  key: 'root',
  whitelist: ['cart', 'auth', 'delivery'], // make sure it does not clash with server keys
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
//------------------------------------------------------------------------------------
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  })
}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
