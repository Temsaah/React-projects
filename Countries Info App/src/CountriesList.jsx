import { useEffect, useState } from "react";

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  console.log(countries);

  return (
    <div className="mx-auto my-12 grid w-fit gap-16 px-10">
      {countries.map((country) => (
        <Country key={country.cca2} country={country} />
      ))}
    </div>
  );
}

function Country({ country }) {
  console.log(country);
  return (
    <div className="grid max-w-[320px] grid-rows-[200px,1fr] shadow-md">
      <div className="rounded-lg">
        <img
          className="h-full w-full rounded-t-lg"
          src={country.flags.png}
        ></img>
      </div>
      <div className="space-y-1 bg-white px-8 pb-10 pt-8">
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
        <p className="font-semibold">
          Capital: <span className="font-normal">{country?.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountriesList;
