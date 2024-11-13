import { useEffect, useRef, useState } from "react";

function Dropdown({ label, options, selected, setSelected, icon, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`sm relative z-50 w-1/2 ${type === "sort" ? "max-w-fit" : "max-w-64"} select-none rounded-xl dark:bg-neutral-dark-blue`}
      ref={dropdownRef}
    >
      <div
        className={`flex cursor-pointer flex-wrap justify-between gap-5 rounded-lg shadow-md ${type === "sort" ? "px-5 py-2" : "px-7 py-5"}`}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Current isOpen state before click:", isOpen);

          setIsOpen((prev) => !prev);
          console.log("Setting isOpen to:", !isOpen);
        }}
      >
        <button className="text-sm dark:text-white xs:text-base">
          {type === "sort" ? label : selected || label}
        </button>

        {icon}
      </div>
      <div
        className={`absolute right-0 mt-1 origin-top scale-y-100 rounded-lg border-neutral-dark-gray/20 bg-white py-3 shadow-md transition-all duration-200 ease-out dark:bg-neutral-dark-blue ${type === "sort" ? "text-center" : "w-full"} ${isOpen ? "visible scale-y-100 opacity-100" : "invisible scale-y-0 opacity-0"}`}
      >
        {options.map((option) => {
          return (
            <div
              key={option}
              className={`cursor-pointer ${option === selected ? "bg-neutral-dark-gray/40" : "hover:bg-neutral-dark-gray/10"} px-5 py-2 text-sm font-medium dark:text-white`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
