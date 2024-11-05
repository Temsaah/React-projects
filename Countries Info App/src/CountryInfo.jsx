import { LoaderCircle, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";

function CountryInfo({ country, onBack }) {
  const [loading, setLoading] = useState(false);
  const [borderNames, setBorderNames] = useState([]);
  const [error, setError] = useState("");

  const firstNativeKey = country.name.nativeName
    ? Object.keys(country.name.nativeName)[0]
    : null;

  const firstNativeName = firstNativeKey
    ? country.name.nativeName[firstNativeKey].common
    : null;

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : null;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : null;

  useEffect(() => {
    if (!country.borders || country.borders.length === 0) return;

    setLoading(true);
    setError("");

    fetch(
      `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const names = data.map((c) => c.name.common);
        setBorderNames(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching border countries:", error);
        setError("Failed to fetch");
        setLoading(false);
      });
  }, [country.borders]);

  return (
    <div className="grid h-full w-full justify-items-center dark:text-white">
      <div className="z-50 grid w-fit grid-rows-[auto,auto,1fr] p-8">
        <button
          className="mb-16 flex w-fit items-center gap-5 rounded-md px-8 py-3 font-light shadow-[0px_0px_15px_3px_rgba(0,_0,_0,_0.1)] dark:bg-neutral-dark-blue"
          onClick={onBack}
        >
          <MoveLeft />
          <span>Back</span>
        </button>
        <div className="mb-10 max-w-[400px] overflow-hidden">
          <img
            className="max-h-[300px] w-full"
            src={country.flags.svg}
            alt=""
          />
        </div>
        <div>
          <div className="mb-10 grid gap-5">
            <p className="text-2xl font-extrabold">{country.name.common}</p>
            <div className="space-y-4 text-[0.95rem]">
              {firstNativeName && (
                <p className="font-light">
                  <span className="font-semibold">Native Name</span>:{" "}
                  {firstNativeName}
                </p>
              )}
              <p className="font-light">
                <span className="font-semibold">Population</span>:{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="font-light">
                <span className="font-semibold">Region</span>: {country.region}
              </p>
              {country.subregion && (
                <p className="font-light">
                  <span className="font-semibold">Sub Region</span>:{" "}
                  {country.subregion}
                </p>
              )}
              {country.capital && (
                <p className="font-light">
                  <span className="font-semibold">Capital</span>:{" "}
                  {country.capital}
                </p>
              )}
            </div>
          </div>
          <div className="mb-10 space-y-4 text-[0.95rem]">
            <p className="font-light">
              <span className="font-semibold">Top Level Domain</span>:{" "}
              {country.tld[0]}
            </p>
            {currencies && (
              <p className="font-light">
                <span className="font-semibold">Currencies</span>: {currencies}
              </p>
            )}
            {languages && (
              <p className="font-light">
                <span className="font-semibold">Languages</span>: {languages}
              </p>
            )}
          </div>
          {loading ? (
            <LoaderCircle size={30} className="mx-auto animate-spin" />
          ) : (
            country.borders && (
              <div className="space-y-5">
                <p className="text-xl font-semibold">Border Countries:</p>
                <div
                  className={`grid grid-cols-${Math.min(borderNames.length, 2)} items-center gap-5 text-center text-sm font-light xs:grid-cols-${Math.min(borderNames.length, 3)}`}
                >
                  {borderNames.map((borderName) => (
                    <p
                      key={borderName}
                      className="rounded-lg border border-neutral-dark-gray/40 py-2 shadow-md"
                    >
                      {borderName}
                    </p>
                  ))}
                  {error && (
                    <p className="rounded-lg border border-neutral-dark-gray/40 py-2 shadow-md">
                      {error}
                    </p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
