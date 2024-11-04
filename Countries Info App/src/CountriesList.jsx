import { useEffect, useState } from "react";
import Loading from "./Loading";

function CountriesList({ region, search, sortBy, setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(countries);
  useEffect(() => {
    setIsLoading(true);

    const url = region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";

    const startTime = Date.now();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const elapsedTime = Date.now() - startTime;
        const minLoadingTime = 300;
        const delay = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          let sortedData = [...data];

          if (sortBy === "Alphabetically (A-Z)") {
            sortedData.sort((a, b) =>
              a.name.common.localeCompare(b.name.common),
            );
          } else if (sortBy === "Alphabetically (Z-A)") {
            sortedData.sort((a, b) =>
              b.name.common.localeCompare(a.name.common),
            );
          } else if (sortBy === "Population (Low to High)") {
            sortedData.sort((a, b) => a.population - b.population);
          } else if (sortBy === "Population (High to Low)") {
            sortedData.sort((a, b) => b.population - a.population);
          }

          setCountries(sortedData);
          setIsLoading(false);
        }, delay);
      })
      .catch(() => setIsLoading(false));
  }, [region, sortBy]);

  if (isLoading) return <Loading />;

  return (
    <div className="mx-auto my-12 grid w-full gap-16 px-10">
      {!search
        ? countries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              setSelectedCountry={setSelectedCountry}
            />
          ))
        : countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(search.toLowerCase()),
            )
            .map((country) => (
              <Country
                key={country.cca2}
                country={country}
                setSelectedCountry={setSelectedCountry}
              />
            ))}
    </div>
  );
}

function Country({ country, setSelectedCountry }) {
  return (
    <div
      className="mx-auto rounded-xl p-3 dark:bg-neutral-very-dark-blue-text/10"
      onClick={() => setSelectedCountry(country)}
    >
      <div className="grid w-full max-w-[320px] grid-rows-[200px,1fr] rounded-lg shadow-md">
        <div className="rounded-lg">
          <img
            className="h-full w-[320px] min-w-0 rounded-t-lg"
            src={country.flags.svg}
          ></img>
        </div>
        <div className="space-y-1 rounded-b-lg bg-white px-8 pb-10 pt-8 dark:bg-neutral-dark-blue dark:text-white">
          <p className="mb-5 text-2xl font-bold">{country.name?.common}</p>
          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal">
              {country?.population.toLocaleString()}
            </span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{country?.region}</span>
          </p>
          {country.capital && (
            <p className="font-semibold">
              Capital: <span className="font-normal">{country.capital}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
