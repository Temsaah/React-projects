import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Dropdown({ region, setRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="relative mx-5 mt-7 w-1/2 max-w-64 select-none">
      <div
        className="flex cursor-pointer items-center justify-between rounded-lg px-7 py-5 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button>{region ? region : "Filter by Region"}</button>
        <ChevronDown size={17} />
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full origin-top scale-y-100 rounded-lg border-neutral-dark-gray/20 bg-white py-3 opacity-100 shadow-md transition-all duration-200 ease-out">
          {regions.map((region) => {
            return (
              <div
                key={region}
                className="cursor-pointer px-7 py-2 text-sm font-medium hover:bg-neutral-dark-gray/10"
                onClick={() => {
                  setRegion(region);
                  setIsOpen(false);
                }}
              >
                {region}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
