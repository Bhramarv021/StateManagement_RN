import React from "react";
import { View, Text } from "react-native"
import Products from "./component/Products";
import { Provider } from "react-redux";
import store from "./component/store";

const App = () => {
    return(
        <Provider store={store}>
            <View>
                <Products />
            </View>
        </Provider>
    )
}

export default App;