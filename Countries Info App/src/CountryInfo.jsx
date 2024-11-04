import { MoveLeft } from "lucide-react";

function CountryInfo({ country, onBack }) {
  return (
    <div className="mt- grid h-full w-full justify-items-center">
      <div className="absolute z-50 grid max-w-[500px] grid-rows-[auto,auto,1fr] bg-white p-8">
        <button
          className="mb-16 flex w-fit items-center gap-5 px-8 py-2 shadow-md"
          onClick={onBack}
        >
          <MoveLeft />
          <span>Back</span>
        </button>
        <div className="mb-10 overflow-hidden">
          <img className="max-h-[450px]" src={country.flags.svg} alt="" />
        </div>
        <div className="mb-10 grid gap-5">
          <p className="text-2xl font-extrabold">Belgium</p>
          <div className="space-y-2 text-[0.95rem]">
            <p className="font-light">
              <span className="font-semibold">Native Name</span>: Belgie
            </p>
            <p className="font-light">
              <span className="font-semibold">Population</span>: 111
            </p>
            <p className="font-light">
              <span className="font-semibold">Region</span>: Europe
            </p>
            <p className="font-light">
              <span className="font-semibold">Sub Region</span>: Western Europe
            </p>
            <p className="font-light">
              <span className="font-semibold">Capital</span>: Brussels
            </p>
          </div>
        </div>
        <div className="mb-10 space-y-2 text-[0.95rem]">
          <p>
            <span className="font-semibold">Top Level Domain</span>: .be
          </p>
          <p>
            <span className="font-semibold">Currencies</span>: Euro
          </p>
          <p>
            <span className="font-semibold">Languages</span>:
            Dutch,French,German
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-xl font-semibold">Border Countries:</p>
          <div className="flex flex-wrap gap-5 text-center text-sm font-light">
            <p className="flex-1 rounded-lg border border-neutral-dark-gray/40 py-2 shadow-md">
              France
            </p>
            <p className="flex-1 rounded-lg border border-neutral-dark-gray/40 py-2 shadow-md">
              Germany
            </p>
            <p className="flex-1 rounded-lg border border-neutral-dark-gray/40 py-2 shadow-md">
              Netherlands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
