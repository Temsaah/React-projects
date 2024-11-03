import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

function SortByDropdown({ sortBy, setSortBy, sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  const sortMethods = [
    "Alphabetically (A-Z)",
    "Alphabetically (Z-A)",
    "Population (Low to High)",
    "Population (High to Low)",
  ];
  return (
    <div className="relative z-50">
      <div
        className="inline-flex items-center gap-5 rounded-md bg-white px-5 py-2 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button>Sort by </button>
        <ArrowUpDown size={20} />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-4 rounded-lg bg-white py-0 shadow-md">
          {sortMethods.map((sortMethod) => {
            return (
              <div
                key={sortMethod}
                className={`cursor-pointer ${sortMethod === sortBy ? "bg-neutral-dark-gray/40" : "hover:bg-neutral-dark-gray/10"} px-7 py-2 text-center text-sm font-medium`}
                onClick={() => {
                  setSortBy(sortMethod);
                  setIsOpen(false);
                }}
              >
                {sortMethod}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SortByDropdown;
