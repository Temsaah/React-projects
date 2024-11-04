import { Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex select-none items-center justify-between px-5 py-10 shadow-md dark:bg-neutral-dark-blue">
      <p className="text-lg font-extrabold dark:text-white">Where in the world?</p>
      <ThemeToggle/>
    </header>
  );
}

export default Header;
