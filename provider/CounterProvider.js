import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({
    counter: 0,
    increment: (byValue) => {},
    decrement: (byValue) => {},
    reset: () => {}
});

// You can also directly export useContext from here only
// So no need to call useContext in every file where needed and provide the context separately.
const useCounter = () => useContext(CounterContext);

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(Number(0));
    const increment = (byValue) => {
        if(byValue === 0)
            setCounter(Number(counter) + 1);
        else 
            setCounter(Number(counter) + byValue)
    }
    const decrement = (byValue) => {
        if(byValue === 0)
            setCounter(Number(counter) - 1);
        else 
            setCounter(Number(counter) - byValue)
    }
    const reset = () => {
        setCounter(0);
    }
    
    return(
        <CounterContext.Provider value={{counter, decrement, increment, reset}}>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext, useCounter};
export default CounterProvider;