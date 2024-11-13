import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice"
import courseReducer from "./courseSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        mycourse:courseReducer,
    }
})

export default appStore;