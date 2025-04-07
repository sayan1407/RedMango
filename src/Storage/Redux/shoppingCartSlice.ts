import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItem : []
};
export const shoppingCartSlice = createSlice({
    name : "MenuItem",
    initialState : initialState,
    reducers : {
        setCartItem : (state,action) => {
            state.cartItem = action.payload
        }
    }
});


export const {setCartItem} = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;