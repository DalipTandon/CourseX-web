import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        signedUser:(state,action)=>{
            return action.payload;
        }
    }
})

export const {signedUser}=userSlice.actions;
export default userSlice.reducer;