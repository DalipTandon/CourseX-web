import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        signedUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null
        }
    }
})

export const {signedUser,removeUser}=userSlice.actions;
export default userSlice.reducer;