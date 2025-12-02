import { createContext, useContext, useEffect, useState } from "react";

// 1. Your Color Palette (Preserved exactly as you wanted)
const themeColors = {
  light: {
    text: "#03030c",
    background: "#f3f3f6",
    primary: {
      50: "#e7e7ed",
      100: "#d0d0dc",
      200: "#a1a2ba",
      300: "#737497",
      400: "#444675",
      500: "#161853",
      600: "#111342",
      700: "#0d0e31",
      800: "#080921",
      900: "#040410",
      950: "#020208",
    },
    secondary: {
      50: "#e9e9f0",
      100: "#d4d4e1",
      200: "#a9aac4",
      300: "#7e80a7",
      400: "#53568a",
      500: "#292c6d",
      600: "#202357",
      700: "#181a41",
      800: "#10112b",
      900: "#080815",
      950: "#04040a",
    },
    accent: "#faedf0",
  },
  dark: {
    text: "#fdfdfe",
    background: "#000002",
    primary: {
      50: "#020208",
      100: "#040410",
      200: "#080921",
      300: "#0d0e31",
      400: "#111342",
      500: "#161853",
      600: "#444675",
      700: "#737497",
      800: "#a1a2ba",
      900: "#d0d0dc",
      950: "#e7e7ed",
    },
    secondary: {
      50: "#04040a",
      100: "#080815",
      200: "#10112b",
      300: "#181a41",
      400: "#202357",
      500: "#292c6d",
      600: "#53568a",
      700: "#7e80a7",
      800: "#a9aac4",
      900: "#d4d4e1",
      950: "#e9e9f0",
    },
    accent: "#fbf0f3",
  },
};

// 2. Create the Context
const ThemeContext = createContext({
  theme: themeColors.light,
  isDark: false,
  toggleTheme: () => {},
});

// 3. The Provider Component
export function ThemeProvider({ children }) {
  // Check system preference on initial load
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Listen for system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const theme = isDark ? themeColors.dark : themeColors.light;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom Hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
