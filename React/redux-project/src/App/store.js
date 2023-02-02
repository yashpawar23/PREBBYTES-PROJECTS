import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Feature/Counter/counterSlice";
export default configureStore ({
    reducer:{
        counter : counterReducer
    }
})