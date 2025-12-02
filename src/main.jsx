import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Add this import:
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap App inside ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
