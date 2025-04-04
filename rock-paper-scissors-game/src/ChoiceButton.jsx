import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";

const choiceImages = {
  paper,
  rock,
  scissors,
};

const gradientClasses = {
  rock: "from-rock-from to-rock-to",
  paper: "from-paper-from to-paper-to",
  scissors: "from-scissors-from to-scissors-to",
};

function ChoiceButton({ choice, setUserSelection, player, win, label }) {
  let positionClasses = "";

  if (player === "user1") {
    positionClasses = " left-0 p-8";
  } else if (player === "user2") {
    positionClasses = "right-0 p-8";
  } else {
    if (choice === "paper") {
      positionClasses = "-left-10 -top-14 lg:-left-20 lg:-top-20";
    } else if (choice === "scissors") {
      positionClasses = "-right-10 -top-14 lg:-right-20 lg:-top-20";
    } else {
      positionClasses = "-bottom-10 left-1/2 -translate-x-1/2 lg:-bottom-16";
    }
  }

  return (
    <button
      className={`absolute ${positionClasses} flex items-center justify-center rounded-full bg-gradient-to-t ${gradientClasses[choice]} p-4 shadow-[inset_0px_-6px_3px_0px_rgba(0,_0,_0,_0.35)] transition-all ${!player ? "hover:scale-110" : "pointer-events-none"} select-none`}
      onClick={() => setUserSelection(choice)}
    >
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_7px_1px_0px_rgba(0,_0,_0,_0.15)] lg:h-32 lg:w-32 ${player ? "lg:h-52 lg:w-52" : ""}`}
      >
        <img
          className={`w-10 lg:w-14 ${player ? "lg:w-24" : ""}`}
          src={choiceImages[choice]}
          alt={choice}
        />
      </div>
      <p
        className={`text-md absolute text-nowrap ${player ? "-bottom-12" : ""} font-bold uppercase tracking-wider text-white`}
      >
        {label}
      </p>
    </button>
  );
}

export default ChoiceButton;
