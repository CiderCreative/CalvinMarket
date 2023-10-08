'use client'
import React, { createContext, useEffect, useState } from "react";

// Context provider for light/dark mode
export default function LightProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has already set a preference for light/dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // If a preference is saved, apply the corresponding theme
      document.documentElement.classList.add(savedTheme);
      setDarkMode(savedTheme === "dark");
    } else {
      // If no preference is saved, use the default theme
      const defaultTheme = darkMode ? "dark" : "light";
      localStorage.setItem("theme", defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
    console.log(darkMode);
  }, [darkMode]);

  const toggleDark = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.replace("dark", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.replace("light", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <Context.Provider value={{ darkMode, toggleDark}}>
          {children}
        </Context.Provider>
      );
    }

  export const Context = createContext();