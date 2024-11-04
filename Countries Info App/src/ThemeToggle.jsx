import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <button className="flex items-center gap-3" onClick={toggleTheme}>
      <Moon className="dark:text-white dark:fill-white" size={19} />{" "}
      <span className="text-[0.92rem] font-medium dark:text-white">Dark Mode</span>
    </button>
  );
}

export default ThemeToggle;
