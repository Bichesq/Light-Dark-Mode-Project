// components/ThemeProvider.tsx
"use client"; // This component needs to be a client component as it uses useState, localStorage, and window

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the shape of our theme context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create the context with a default undefined value, as it will be set by the Provider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme state with a default value, it will be updated by useEffect
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // This effect runs only on the client side after hydration
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);
      // Apply the dark class only if the theme is dark
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Check user's system preference if no theme is stored
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      // Apply the dark class only if the theme is dark
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", initialTheme);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      // Apply/remove the 'dark' class to the html element
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        console.log("Applied dark mode, classes:", document.documentElement.className);
      } else {
        document.documentElement.classList.remove("dark");
        console.log("Applied light mode, classes:", document.documentElement.className);
      }
      return newTheme;
    });
  };

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to easily consume the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
