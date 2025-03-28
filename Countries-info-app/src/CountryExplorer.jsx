import { ChevronDown, Search } from "lucide-react";
import Dropdown from "./components/Dropdown";
import { useCallback, useEffect, useRef, useState } from "react";
import CountriesList from "./CountriesList";
import SortByDropdown from "./components/SortByDropdown";
import CountryInfo from "./CountryInfo";

function CountryExplorer() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Alphabetically (A-Z)");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const scrollPosition = useRef(0);

  const handleSelectCountry = (country) => {
    scrollPosition.current = window.scrollY;
    setSelectedCountry(country);
  };

  useEffect(() => {
    if (!selectedCountry) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [selectedCountry]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
      {selectedCountry && (
        <CountryInfo
          country={selectedCountry}
          onBack={() => {
            setSelectedCountry(null);
          }}
        />
      )}
      <div
        className={`${selectedCountry ? "hidden" : "grid"} grid-rows-[auto,auto,1fr]`}
      >
        <CountrySearchInput search={search} setSearch={setSearch} />
        <div className="mt-7 flex flex-wrap items-center justify-between gap-0">
          <FilterByRegion region={region} setRegion={setRegion} />
          <SortByDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <CountriesList
          sortBy={sortBy}
          search={search}
          region={region}
          setSelectedCountry={handleSelectCountry}
        />
      </div>
    </div>
  );
}

function CountrySearchInput({ search, setSearch }) {
  return (
    <div className="relative my-5 select-none rounded-lg py-5 pl-24 shadow-md dark:bg-neutral-dark-blue dark:text-white lg:max-w-[40%]">
      <input
        className="w-full outline-none placeholder:text-base placeholder:text-neutral-dark-gray/60 dark:bg-neutral-dark-blue dark:placeholder:text-white"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search
        size={20}
        className="absolute left-10 top-1/2 -translate-y-1/2 text-neutral-dark-gray dark:text-white"
      />
    </div>
  );
}

function FilterByRegion({ region, setRegion }) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Dropdown
      label={"Filter by region"}
      icon={
        <ChevronDown
          className="absolute right-3 dark:text-white xs:mt-1"
          size={17}
        />
      }
      options={regions}
      selected={region}
      setSelected={setRegion}
    />
  );
}

export default CountryExplorer;
