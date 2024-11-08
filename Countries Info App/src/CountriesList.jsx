import { useEffect, useState } from "react";
import Loading from "./Loading";

function CountriesList({ region, search, sortBy, setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="my-12 grid grid-cols-[repeat(auto-fit,minmax(0,280px))] justify-center gap-20 md:justify-between">
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
  if (!country?.coatOfArms.svg) console.log(country);
  return (
    <div
      className={`group relative ${country?.coatOfArms.svg ? "hover:[transform:rotateX(25deg)]" : "rounded-lg shadow-md transition-all duration-300 hover:scale-105"}`}
    >
      {country?.coatOfArms.svg && (
        <Landmark imageSrc={country.coatOfArms.svg} />
      )}
      <div
        className={
          country?.coatOfArms.svg
            ? "x group h-full w-full cursor-pointer rounded-xl p-1.5 transition-all duration-300 [perspective:1000px] hover:scale-[1.04] hover:[transform:rotateX(25deg)]"
            : "full h-full w-full cursor-pointer rounded-xl"
        }
        onClick={() => setSelectedCountry(country)}
      >
        <div
          className={
            country?.coatOfArms.svg
              ? "relative grid h-full w-full origin-bottom transform grid-rows-[200px,1fr] rounded-lg shadow-md transition-transform duration-500 ease-out group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)] group-hover:[transform:rotateX(25deg)_translateY(-5%)]"
              : "relative grid h-full w-full rounded-lg shadow-md"
          }
        >
          {country?.coatOfArms.svg && <GradientOverlay />}

          <div className="rounded-lg">
            <img
              className="h-full w-full min-w-0 rounded-t-lg object-cover"
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
    </div>
  );
}

function GradientOverlay() {
  return (
    <div className="absolute inset-0 z-10 rounded-lg opacity-0 transition-opacity duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-black/80 before:to-transparent group-hover:opacity-80"></div>
  );
}

function Landmark({ imageSrc }) {
  return (
    <div className="pointer-events-none absolute bottom-0 z-10 flex h-[70%] w-full justify-center opacity-0 transition-all duration-500 ease-out group-hover:-translate-y-1/2 group-hover:opacity-100">
      <img className=" " src={imageSrc}></img>
    </div>
  );
}

export default CountriesList;
