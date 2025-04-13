import {createSlice} from "@reduxjs/toolkit";
import { shoppingCartModel } from "../../Interface";

const initialState : shoppingCartModel  = {
    cartItems : []
};
export const shoppingCartSlice = createSlice({
    name : "ShoppingCart",
    initialState : initialState,
    reducers : {
        setCartItem : (state,action) => {
            state.cartItems = action.payload
        },
        updateQuantity: (state,action) => {
            console.log("In updatequantity");
            state.cartItems = state.cartItems?.map((item => {
                if(item.id === action.payload.id)
                   item.quantity = action.payload.quantity
                return item;

            }))
        },
        deleteFromCart: (state,action) => {
            state.cartItems = state.cartItems?.filter(c => c.id !== action.payload.id)
        }
    }
});


export const {setCartItem,updateQuantity,deleteFromCart} = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;