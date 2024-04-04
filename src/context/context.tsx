import React, { createContext, useState, useContext } from "react";
import { lightTheme, darkTheme } from "../styles/themes";
import { IThemes } from "@/styles/types";

export const ThemeContext = createContext<IThemes | undefined | any>(lightTheme);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
