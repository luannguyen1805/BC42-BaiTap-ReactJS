import { configureStore } from "@reduxjs/toolkit";
import { SeatsReducer } from "./reducer/SeatsReducer";

const store = configureStore({
    reducer: {
        SeatsReducer
    }
})

export default store