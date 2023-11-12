import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, toggle] = useToggle();

  const toggleDarkMode = () => {
    toggle();
  };

  const value = { darkMode, toggleDarkMode };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
