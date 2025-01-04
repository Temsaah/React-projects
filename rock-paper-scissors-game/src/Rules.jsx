import rulesImg from "./images/image-rules.svg";
import close from "./images/icon-close.svg";
function Rules({ setShowRules }) {
  return (
    <div className="absolute grid h-screen w-screen place-items-center">
      <div
        className="z-40 h-screen w-screen bg-black/60"
        onClick={() => setShowRules(false)}
      ></div>
      <div className="absolute z-50 grid min-h-screen w-full place-items-center bg-white lg:min-h-fit lg:w-fit lg:grid-cols-[auto,auto] lg:place-items-start lg:gap-14 lg:rounded-lg lg:p-10">
        <h1 className="text-3xl font-bold uppercase text-neutral-darkText">
          Rules
        </h1>
        <div className="lg:col-span-2 lg:col-start-1">
          <img src={rulesImg}></img>
        </div>
        <button
          className="lg:col-start-2 lg:row-start-1 lg:self-center lg:justify-self-end"
          onClick={() => setShowRules(false)}
        >
          <img src={close}></img>
        </button>
      </div>
    </div>
  );
}

export default Rules;
