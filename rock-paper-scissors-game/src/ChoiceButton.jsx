import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";

const choiceImages = {
  paper,
  rock,
  scissors,
};

function ChoiceButton({ choice, setUserSelection, result }) {
  let positionClasses = "";

  if (result === "user1") {
    positionClasses = "left-1/2 -translate-x-1/2 ";
  } else if (result === "user2") {
    positionClasses = "left-1/2 -translate-x-1/2";
  } else {
    if (choice === "paper") {
      positionClasses = "-left-10 -top-14";
    } else if (choice === "scissors") {
      positionClasses = "-right-10 -top-14";
    } else {
      positionClasses = "-bottom-10 left-1/2 -translate-x-1/2";
    }
  }

  return (
    <button
      className={`absolute ${positionClasses} flex items-center justify-center rounded-full bg-gradient-to-t ${`from-${choice}-from`} ${`to-${choice}-to`} p-4 shadow-[inset_0px_-6px_3px_0px_rgba(0,_0,_0,_0.35)] transition-all ${!result ? "hover:scale-110" : "pointer-events-none"} select-none`}
      onClick={() => setUserSelection(choice)}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_7px_1px_0px_rgba(0,_0,_0,_0.15)]">
        <img className="w-10" src={choiceImages[choice]} alt={choice} />
      </div>
    </button>
  );
}

export default ChoiceButton;
