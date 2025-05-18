import {createSlice} from "@reduxjs/toolkit";
import userModel from "../../Interface/userModel";

const initialState : userModel = {
   id : "",
   fullName : "",
   email : "",
   role : ""
};
export const userAuthlice = createSlice({
    name : "UserAuth",
    initialState : initialState,
    reducers : {
        setLoggedInUser : (state,action) => {
            state.id = action.payload.id
            
            state.fullName = action.payload.fullName
            state.email = action.payload.email
            state.role = action.payload.role

        }
    }
});


export const {setLoggedInUser} = userAuthlice.actions;
export const userAuthReducer = userAuthlice.reducer;