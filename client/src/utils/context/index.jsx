/** @format */

import { createContext, useState } from "react";

//Setting up a change theme functionality (light or dark)
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
