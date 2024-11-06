import { Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="   py-10 shadow-md dark:bg-neutral-dark-blue">
      <div className="flex select-none items-center justify-between max-w-[1440px] mx-auto px-5 md:px-10">
        <p className="text-lg font-extrabold dark:text-white">
          Where in the world?
        </p>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
