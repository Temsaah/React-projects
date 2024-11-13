import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Dropdown from "./Dropdown";

function SortByDropdown({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const sortMethods = [
    "Alphabetically (A-Z)",
    "Alphabetically (Z-A)",
    "Population (Low to High)",
    "Population (High to Low)",
  ];
  return (
    <Dropdown
      type={"sort"}
      label={"Sort by"}
      icon={<ArrowUpDown className="dark:text-white" size={20} />}
      options={sortMethods}
      selected={sortBy}
      setSelected={setSortBy}
    />
  );
}

export default SortByDropdown;
