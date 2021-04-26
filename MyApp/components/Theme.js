import React from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}