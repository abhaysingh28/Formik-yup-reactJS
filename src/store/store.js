import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/userslice";

const store = configureStore({
    reducer: {
        user: cardSlice,
    }
});

export default store;