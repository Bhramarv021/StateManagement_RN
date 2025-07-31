import React from "react";
import CounterComponent from "./CounterComponent";
import CounterProvider from "../provider/CounterProvider";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "./store/feature/theme-slice";

const AppController = () => {
    // const {theme, toggleTheme} = useTheme();
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);
    console.log("theme store : ",theme);

    const handleToggleTheme = () => {
        dispatch(themeAction.toggleTheme())
    }
    
    return(
        // <View style={[{marginTop: 60, flex: 1}]}>
        <SafeAreaView style={[{flex: 1, backgroundColor: theme === 'light' ? 'white' : 'black'}]}>
            <View>
                <Text style={[{color: theme === 'light' ? 'blue' : 'yellow', fontSize: 20}]}>Hello</Text>
                {/* <Button title="Switch Theme" onPress={toggleTheme}/> */}
                <Button title="Switch Theme" onPress={handleToggleTheme}/>
            </View>
            <CounterProvider>
                <CounterComponent />
            </CounterProvider>
        </SafeAreaView>
    )
}

export default AppController;