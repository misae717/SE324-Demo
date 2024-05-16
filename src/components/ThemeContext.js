import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); 
    const [fontSize, setFontSize] = useState(16); 

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const updateFontSize = (size) => {
        document.body.style.fontSize = `${size}px`;
    };

    const increaseFontSize = () => {
        const newSize = fontSize + 2;
        setFontSize(newSize);
        updateFontSize(newSize);
    };

    const decreaseFontSize = () => {
        const newSize = fontSize - 2;
        setFontSize(newSize);
        updateFontSize(newSize);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, fontSize, increaseFontSize, decreaseFontSize }}>
            {children}
        </ThemeContext.Provider>
    );
};
