// components/ThemeToggle.tsx
"use client"; // This component needs to be a client component for interaction

import { useTheme } from "./ThemeProvider"; // Import the custom hook
import { Sun, Moon } from "lucide-react"; // Import icons from Lucide React

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Use our custom theme hook

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" /> // Show Moon icon in light mode
      ) : (
        <Moon className="w-5 h-5" /> // Show Sun icon in dark mode
      )}
    </button>
  );
}
