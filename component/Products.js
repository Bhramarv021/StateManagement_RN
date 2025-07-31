import React, { useEffect } from "react";
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./store/feature/product-slice";

const Products = () => {
    const products = useSelector((state)=>state.Products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts());
    },[])
    console.log("products : ",products);
    return(
        <View>
            <Text>
                jvbivbovov vonvo 
            </Text>
        </View>
        
    )
}

export default Products;