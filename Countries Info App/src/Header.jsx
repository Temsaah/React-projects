import { Moon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-10 shadow-md select-none">
      <p className="font-bold text-lg">Where in the world?</p>
      <button className="flex items-center gap-3">
        <Moon size={19} /> <span className="text-[0.92rem] font-medium">Dark Mode</span>
      </button>
    </header>
  );
}

export default Header;
