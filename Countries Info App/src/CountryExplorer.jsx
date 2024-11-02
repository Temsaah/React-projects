import { ChevronDown, Search } from "lucide-react";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import CountriesList from "./CountriesList";

function CountryExplorer() {
  const [region, setRegion] = useState("");
  return (
    <div className="grid grid-rows-[auto,auto,1fr]">
      <CountrySearchInput />
      <FilterByRegion region={region} setRegion={setRegion} />
      <CountriesList region={region} />
    </div>
  );
}

function CountrySearchInput() {
  return (
    <div className="relative m-5 select-none rounded-lg py-5 pl-24 shadow-md">
      <input
        className="w-full outline-none placeholder:text-base placeholder:text-neutral-dark-gray/60"
        type="text"
        placeholder="Search for a country..."
      />
      <Search
        size={20}
        color="#778"
        className="absolute left-10 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function FilterByRegion({ region, setRegion }) {
  return <Dropdown region={region} setRegion={setRegion} />;
}

export default CountryExplorer;
