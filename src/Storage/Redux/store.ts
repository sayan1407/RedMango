import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { authAPI, menuItemAPI, shoppingCartAPI } from "../../Apis";
import { shoppingCartReducer } from "./shoppingCartSlice";

const store = configureStore({
    reducer : {
    menuItemStore : menuItemReducer,
    shoppingCartStore : shoppingCartReducer,
    [menuItemAPI.reducerPath] : menuItemAPI.reducer,
    [shoppingCartAPI.reducerPath] : shoppingCartAPI.reducer,
    [authAPI.reducerPath] : authAPI.reducer
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(menuItemAPI.middleware).concat(authAPI.middleware)
        .concat(shoppingCartAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export default store;