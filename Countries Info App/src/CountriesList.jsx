import React, { useEffect, useMemo, useState } from "react";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";

function fetchCountries(region) {
  const url = region
    ? `https://restcountries.com/v3.1/region/${region}`
    : "https://restcountries.com/v3.1/all";

  return fetch(url).then((res) => res.json());
}

function fetchUserCountry() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const API_KEY = "71b39328e04449f48f86d6fb175b2d40";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        resolve(data.results[0]?.components?.country || "");
      } catch (error) {
        reject("Error Fetching data");
      }
    });
  });
}

function CountriesList({ region, search, sortBy, setSelectedCountry }) {
  const { data: userCountry } = useQuery({
    queryKey: ["userCountry"],
    queryFn: fetchUserCountry,
    retry: false,
  });
  const { data: countries = [], isLoading } = useQuery({
    queryKey: ["countries", region],
    queryFn: () => fetchCountries(region),
    staleTime: 1000 * 60 * 5,
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     const { latitude, longitude } = position.coords;

  //     const API_KEY = "71b39328e04449f48f86d6fb175b2d40";
  //     const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       const countryName = data.results[0]?.components?.country;

  //       if (countryName) setUserCountry(countryName);
  //     } catch (error) {
  //       console.error("Error fetching country data:", error);
  //     }
  //   });
  // }, []);

  const sortedCountries = useMemo(() => {
    let sorted = [...countries];

    if (sortBy === "Alphabetically (A-Z)") {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortBy === "Alphabetically (Z-A)") {
      sorted.sort((a, b) => b.name.common.localeCompare(a.name.common));
    } else if (sortBy === "Population (Low to High)") {
      sorted.sort((a, b) => a.population - b.population);
    } else if (sortBy === "Population (High to Low)") {
      sorted.sort((a, b) => b.population - a.population);
    }

    return sorted;
  }, [sortBy, countries]);

  if (isLoading) return <Loading />;

  return (
    <div className="my-12 grid grid-cols-[repeat(auto-fit,minmax(0,280px))] justify-center gap-20 md:justify-between">
      {!search
        ? sortedCountries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              setSelectedCountry={setSelectedCountry}
              isUserCountry={userCountry === country.name.common}
            />
          ))
        : sortedCountries
            .filter((country) =>
              country.name.common.toLowerCase().includes(search.toLowerCase()),
            )
            .map((country) => (
              <Country
                key={country.cca2}
                country={country}
                setSelectedCountry={setSelectedCountry}
                isUserCountry={userCountry === country.name.common}
              />
            ))}
    </div>
  );
}

// function Country({ country, setSelectedCountry }) {
//   return (
//     <div
//       className={`group relative ${country?.coatOfArms.svg ? "" : "rounded-lg shadow-md transition-all duration-300 hover:scale-105"}`}
//     >
//       {country?.coatOfArms.svg && (
//         <Landmark imageSrc={country.coatOfArms.svg} />
//       )}
//       <div
//         className={
//           country?.coatOfArms.svg
//             ? "x group h-full w-full cursor-pointer rounded-xl p-1.5 transition-all duration-300 [perspective:1000px] hover:scale-[1.04] hover:[transform:rotateX(25deg)]"
//             : "full h-full w-full cursor-pointer rounded-xl"
//         }
//         onClick={() => setSelectedCountry(country)}
//       >
//         <div
//           className={
//             country?.coatOfArms.svg
//               ? "relative grid h-full w-full origin-bottom transform grid-rows-[200px,1fr] rounded-lg shadow-md transition-transform duration-500 ease-out group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)] group-hover:[transform:rotateX(25deg)_translateY(-5%)]"
//               : "relative grid h-full w-full rounded-lg shadow-md"
//           }
//         >
//           {country?.coatOfArms.svg && <GradientOverlay />}

//           <div className="rounded-lg">
//             <img
//               className="h-full w-full min-w-0 rounded-t-lg object-cover"
//               src={country.flags.svg}
//             ></img>
//           </div>
//           <div className="space-y-1 rounded-b-lg bg-white px-8 pb-10 pt-8 dark:bg-neutral-dark-blue dark:text-white">
//             <p className="mb-5 text-2xl font-bold">{country.name?.common}</p>
//             <p className="font-semibold">
//               Population:{" "}
//               <span className="font-normal">
//                 {country?.population.toLocaleString()}
//               </span>
//             </p>
//             <p className="font-semibold">
//               Region: <span className="font-normal">{country?.region}</span>
//             </p>
//             {country.capital && (
//               <p className="font-semibold">
//                 Capital: <span className="font-normal">{country.capital}</span>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const Country = React.memo(({ country, setSelectedCountry, isUserCountry }) => {
  return (
    <div
      className={`group relative ${country?.coatOfArms.svg ? "" : "rounded-lg shadow-md transition-all duration-300 hover:scale-105"}`}
    >
      {isUserCountry && <CountryBadge />}
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
              ? `relative grid h-full w-full origin-bottom transform grid-rows-[200px,1fr] rounded-lg shadow-md transition-transform duration-500 ease-out group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)] group-hover:[transform:rotateX(25deg)_translateY(-5%)] ${isUserCountry ? "shadow-[0_0_15px_3px_rgba(0,4,255,0.7)] ring-2 dark:shadow-[0_0_15px_3px_rgba(0,132,255,0.7)]" : ""}`
              : `relative grid h-full w-full rounded-lg shadow-md ${isUserCountry ? "shadow-[0_0_15px_3px_rgba(0,4,255,0.7)] ring-2 dark:shadow-[0_0_15px_3px_rgba(0,132,255,0.7)]" : ""}`
          }
        >
          {country?.coatOfArms.svg && <GradientOverlay />}
          <div className="rounded-lg">
            <img
              className="h-full w-full min-w-0 rounded-t-lg object-cover"
              src={country.flags.svg}
            />
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
});

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

function CountryBadge() {
  return (
    <div className="pointer-events-none absolute -top-10 z-40 w-full rounded-lg text-center text-2xl font-extrabold text-black transition-opacity duration-300 group-hover:opacity-0 dark:text-yellow-500">
      <p>Your Country</p>
    </div>
  );
}

export default CountriesList;
