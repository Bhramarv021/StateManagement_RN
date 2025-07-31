import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {products: []};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            console.log("fulfilled action : ",[...action.payload.products])
            state.products = [...action.payload.products];
        })
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            console.log("Promise rejected")
            state.products = [];
        })
    }
})

export const fetchAllProducts = createAsyncThunk("products/fetchAll", async (_, thunkAPI) => {
    try{
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json();
        console.log("data : ",data)
        return thunkAPI.fulfillWithValue(data);
    }
    catch(e){
        console.log("error in thunkApi catch : ",e);
        thunkAPI.abort("Something wents wrong");
        return thunkAPI.rejectWithValue("Unable to fetch : ",e);
    }
})