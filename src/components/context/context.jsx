import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches

    const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

    return storedDarkMode || prefersDarkMode;
}

export const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

    const [searchTerm, setSearchTerm] = useState('morty')

    const toggleDarkTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkTheme', newDarkMode)
    }

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [isDarkMode])

    return <AppContext.Provider value={{ isDarkMode, toggleDarkTheme, searchTerm, setSearchTerm }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)