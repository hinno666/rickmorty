import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkMode;
        setIsDarkMode(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme');
    }

    return <AppContext.Provider value={{ isDarkMode, toggleDarkTheme }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)