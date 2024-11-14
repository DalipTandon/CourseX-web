import { createSlice } from "@reduxjs/toolkit";


const courseSlice=createSlice({
    name:"mycourse",
    initialState:[],
    reducers:{
       addCourse: (state, action) => {
  const newCourses = action.payload;
  newCourses.forEach(course => {
    if (!state.some(existingCourse => existingCourse._id === course._id)) {
      state.push(course);
    }
  });
}
    }
})

export const {addCourse}=courseSlice.actions;
export default courseSlice.reducer;