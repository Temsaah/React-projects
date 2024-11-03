import { Search } from "lucide-react";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import CountriesList from "./CountriesList";
import SortByDropdown from "./components/SortByDropdown";

function CountryExplorer() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Alphabetically (A-Z)");
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <div className="grid grid-rows-[auto,auto,1fr]">
      <CountrySearchInput search={search} setSearch={setSearch} />
      <FilterByRegion
        sortBy={sortBy}
        setSortBy={setSortBy}
        region={region}
        setRegion={setRegion}
      />
      <CountriesList
        sortBy={sortBy}
        sortOrder={sortOrder}
        search={search}
        region={region}
      />
    </div>
  );
}

function CountrySearchInput({ search, setSearch }) {
  return (
    <div className="relative m-5 select-none rounded-lg py-5 pl-24 shadow-md">
      <input
        className="w-full outline-none placeholder:text-base placeholder:text-neutral-dark-gray/60"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search
        size={20}
        color="#778"
        className="absolute left-10 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function FilterByRegion({
  region,
  setRegion,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-between gap-0 px-5">
      <Dropdown currRegion={region} setRegion={setRegion} />
      <SortByDropdown
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  );
}

export default CountryExplorer;
