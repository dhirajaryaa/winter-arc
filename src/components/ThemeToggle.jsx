'use client'
import { useTheme } from "@/context/ThemeContext";

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button onClick={()=>toggleTheme()} className="fixed top-3 right-3 sm:right-6 bg-violet-500 rounded-xl border-2 border-gray-200 p-1 text-3xl z-50">
            {isDark ? "🌞" : "🌙"}
        </button>
    )
}

export default ThemeToggle