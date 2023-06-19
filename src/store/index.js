import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import cartSliceReducer from "./slices/cart";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};


const persistedState = loadState();

export default configureStore({
    reducer: {
        productsReducer,
        cartSliceReducer
    },
    preloadedState: persistedState,
}); 
