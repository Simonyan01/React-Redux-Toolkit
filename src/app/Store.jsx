import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const Store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default Store