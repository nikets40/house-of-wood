import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "./storage";
import cartReducer from "./cart/cartReducer";

const persistCartConfig = {
    key: 'root',
    storage,
    whitelist: ['products']
}

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);


export const store = createStore(persistedCartReducer)
export const persistor = persistStore(store)

