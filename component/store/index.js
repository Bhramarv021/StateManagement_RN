import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./feature/theme-slice";
import { counterSlice } from "./feature/couter-slice";
import { productSlice } from "./feature/product-slice";

const store = configureStore({ 
    reducer: {
        theme : themeSlice.reducer,
        counter: counterSlice.reducer,
        products: productSlice.reducer
    }
})

export default store;