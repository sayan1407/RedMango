import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { menuItemAPI, shoppingCartAPI } from "../../Apis";

const store = configureStore({
    reducer : {
    menuItemStore : menuItemReducer,
    [menuItemAPI.reducerPath] : menuItemAPI.reducer,
    [shoppingCartAPI.reducerPath] : shoppingCartAPI.reducer
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(menuItemAPI.middleware).concat(shoppingCartAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export default store;