'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    // toggle theme 
    function toggleTheme() {
        setIsDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    return useContext(ThemeContext)
}