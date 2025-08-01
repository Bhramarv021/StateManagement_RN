import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({theme: "light", toggleTheme: () => {}});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {useTheme};
export default ThemeProvider;