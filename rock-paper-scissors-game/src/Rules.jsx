import rulesImg from "./images/image-rules.svg";
import close from "./images/icon-close.svg";
function Rules({ setShowRules }) {
  return (
    <div className="absolute z-50 grid min-h-screen w-full place-items-center bg-white">
      <h1 className="text-3xl font-bold uppercase text-neutral-darkText">
        Rules
      </h1>
      <div>
        <img src={rulesImg}></img>
      </div>
      <button onClick={() => setShowRules(false)}>
        <img src={close}></img>
      </button>
    </div>
  );
}

export default Rules;
