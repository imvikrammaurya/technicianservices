import { useTheme } from "../../context/ThemeContext";

export default function Button({
  children,
  onClick,
  variant = "primary", // Default to primary
  className = "", // Allow custom margins like 'mt-4'
  ...props // Catch any other props like 'disabled'
}) {
  const { theme } = useTheme();

  // 1. Define the styles for each variant dynamically
  const variants = {
    primary: {
      backgroundColor: theme.primary[500],
      color: "#ffffff",
      border: "none",
    },
    secondary: {
      backgroundColor: theme.secondary[500],
      color: "#ffffff",
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.primary[500],
      border: `2px solid ${theme.primary[500]}`,
    },
    danger: {
      backgroundColor: "#ef4444", // Standard Red
      color: "#ffffff",
      border: "none",
    },
    ghost: {
      backgroundColor: "transparent",
      color: theme.primary,
      border: `2px solid ${theme.primary[500]}`,
    },
  };

  // 2. Base classes that every button needs (Layout & Animation)
  const baseClasses =
    "px-6 py-3 rounded-md font-bold transition-all duration-200 hover:opacity-80 active:scale-95";

  return (
    <button
      onClick={onClick}
      style={variants[variant]} // Apply the specific colors based on variant name
      className={`${baseClasses} ${className}`} // Merge base classes with any custom ones
      {...props}
    >
      {children}
    </button>
  );
}
