import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        relative flex items-center justify-center
        w-11 h-11 rounded-full
        border border-gray-300 dark:border-white/20
        bg-white/60 dark:bg-white/10
        backdrop-blur-xl
        shadow-md hover:scale-110 transition-all duration-300
      "
    >
      {/* Sun Icon */}
      <Sun
        className={`absolute h-5 w-5 text-yellow-500 transition-all duration-300 ${
          darkMode ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
      />

      {/* Moon Icon */}
      <Moon
        className={`absolute h-5 w-5 text-blue-400 transition-all duration-300 ${
          darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        }`}
      />
    </button>
  );
};