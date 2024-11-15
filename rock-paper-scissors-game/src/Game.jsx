import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";

function Game({ setShowRules }) {
  return (
    <div className="overf relative place-self-center p-5">
      <div className="max-w-52">
        <img className="" src={triangle}></img>
      </div>

      <button className="from-paper-from to-paper-to absolute -left-10 -top-10 flex items-center justify-center rounded-full bg-gradient-to-t p-4 shadow-[inset_0px_-6px_3px_0px_rgba(0,_0,_0,_0.35)] transition-all hover:scale-110">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_7px_1px_0px_rgba(0,_0,_0,_0.15)]">
          <img className="w-10" src={paper} alt="paper" />
        </div>
      </button>

      <button className="from-scissors-from to-scissors-to absolute -right-10 -top-10 flex items-center justify-center rounded-full bg-gradient-to-t p-4 shadow-[inset_0px_-6px_3px_0px_rgba(0,_0,_0,_0.35)] transition-all hover:scale-110">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_7px_1px_0px_rgba(0,_0,_0,_0.15)]">
          <img className="w-10" src={scissors} alt="scissors" />
        </div>
      </button>

      <button className="from-rock-from to-rock-to absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-t p-4 shadow-[inset_0px_-6px_3px_0px_rgba(0,_0,_0,_0.35)] transition-all hover:scale-110">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_7px_1px_0px_rgba(0,_0,_0,_0.15)]">
          <img className="w-10" src={rock} alt="rock" />
        </div>
      </button>
    </div>
  );
}

export default Game;
