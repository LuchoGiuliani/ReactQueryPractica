import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const ThemeContext = createContext()

export const useThemeContext = () =>  {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const [darkMode, toggle] =useToggle()
    

    const toggleDarkMode = () => {
        toggle()
    }

    return (
        <ThemeContext.Provider value ={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}