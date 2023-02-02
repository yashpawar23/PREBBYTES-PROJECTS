import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../feature/task/PostSlice";

export default configureStore ({
    reducer:{
        counter : PostReducer
    }
})