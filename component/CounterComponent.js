import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import {CounterContext, useCounter} from "../provider/CounterProvider";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {
    // use below method to call useContext in component and provide the context else use useContext directly
    // const counterConsumer = useContext(CounterContext);
    // const counterConsumer = useCounter();

    const dispatch = useDispatch();
    const counterConsumer = useSelector((state)=>state.counter);
    console.log("counterConsumer : ",counterConsumer);
    
    const [userNumber, setUserNumber] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Counter Component</Text>
            <Text>Count: {counterConsumer.count} </Text>
            <TextInput value={userNumber} onChangeText={(num)=>setUserNumber(num)} placeholder="Enter Number To inc/dec" style={[{marginTop: 10, fontSize: 18}]}/>
            {/* <Button title="Increment" onPress={()=>counterConsumer.increment(Number(userNumber))}>Increment</Button> */}
            <Button title="Increment" onPress={()=>dispatch(counterActions.increment(Number(userNumber)))}>Increment</Button>
            {/* <Button title="Decrement" onPress={()=>counterConsumer.decrement(Number(userNumber))}>Decrement</Button> */}
            <Button title="Decrement" onPress={()=>dispatch(counterActions.decrement(Number(userNumber)))}>Decrement</Button>
            {/* <Button title="Reset" onPress={()=>counterConsumer.reset()}>Reset</Button> */}
            <Button title="Reset" onPress={()=>dispatch(counterActions.reset())}>Reset</Button>
        </SafeAreaView>
    )
}

export default CounterComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})