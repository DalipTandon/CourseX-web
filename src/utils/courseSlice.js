import { createSlice } from "@reduxjs/toolkit";


const courseSlice=createSlice({
    name:"mycourse",
    initialState:null,
    reducers:{
        addCourse:(state,action)=>{
            return action.payload;
        }
    }
})

export const {addCourse}=courseSlice.actions;
export default courseSlice.reducer;