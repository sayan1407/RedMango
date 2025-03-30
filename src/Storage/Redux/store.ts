import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { menuItemAPI } from "../../Apis";

const store = configureStore({
    reducer : {
    menuItemStore : menuItemReducer,
    [menuItemAPI.reducerPath] : menuItemAPI.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;