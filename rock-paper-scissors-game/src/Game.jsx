import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import ChoiceButton from "./ChoiceButton";

function Game({ setShowRules, setScore }) {
  const [userSelection, setUserSelection] = useState(null);
  return (
    <div className="relative h-full w-full content-center place-self-center">
      {userSelection ? (
        <GameResult
          setUserSelection={setUserSelection}
          userChoice={userSelection}
          setScore={setScore}
        />
      ) : (
        <GameDecide setUserSelection={setUserSelection} />
      )}
    </div>
  );
}

function GameDecide({ setUserSelection }) {
  let choices = ["rock", "paper", "scissors"];
  return (
    <div className="relative mx-auto w-fit">
      <div className="mx-auto max-w-56">
        <img className="" src={triangle}></img>
      </div>

      {choices.map((choice) => (
        <ChoiceButton
          key={choice}
          choice={choice}
          setUserSelection={setUserSelection}
        />
      ))}
    </div>
  );
}

const choices = ["rock", "paper", "scissors"];

function GameResult({ userChoice, setScore, setUserSelection }) {
  const [randomizedHouseChoice, setRandomizedHouseChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [counter, setCounter] = useState(0);
  const countTimes = useRef(0);

  function decideResult() {
    if (userChoice === houseChoice) return "Draw";
    if (
      (userChoice === "rock" && houseChoice === "scissors") ||
      (userChoice === "paper" && houseChoice === "rock") ||
      (userChoice === "scissors" && houseChoice === "paper")
    ) {
      return "Win";
    }
    return "Lose";
  }

  useEffect(() => {
    let count = 0;

    const shuffleHouseChoice = () => {
      if (count < 10) {
        setRandomizedHouseChoice(choices[count % 3]);
        count++;
        setTimeout(shuffleHouseChoice, 100);
      } else {
        setHouseChoice(choices[Math.floor(Math.random() * 3)]);
      }
    };

    shuffleHouseChoice();
  }, []);

  useEffect(() => {
    if (!houseChoice) return;

    const result =
      userChoice === houseChoice
        ? "Draw"
        : (userChoice === "rock" && houseChoice === "scissors") ||
            (userChoice === "paper" && houseChoice === "rock") ||
            (userChoice === "scissors" && houseChoice === "paper")
          ? "Win"
          : "Lose";

    console.log(result);

    setResult(result);
    setScore((prevScore) =>
      result === "Win"
        ? prevScore + 1
        : result === "Lose"
          ? Math.max(0, prevScore - 1)
          : prevScore,
    );
  }, [houseChoice, userChoice, setScore]);

  return (
    <div className="grid h-full grid-rows-2">
      <div className="grid grid-cols-2 self-center">
        <ChoiceDisplay
          choice={userChoice}
          label={"You Picked"}
          player={"user1"}
        />
        <ChoiceDisplay
          choice={houseChoice || randomizedHouseChoice}
          label={"The House Picked"}
          player={"user2"}
        />
      </div>
      <div
        className={`grid place-items-center gap-10 self-center ${result ? "opacity-100 transition-opacity duration-300" : "opacity-0"}`}
      >
        <p className="text-5xl font-bold uppercase text-white">You {result}</p>
        <button
          className="rounded-xl bg-white px-14 py-3 font-bold uppercase tracking-[3px] text-neutral-darkText"
          onClick={() => setUserSelection(null)}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

function ChoiceDisplay({ choice, label, player }) {
  return (
    <div className="relative grid h-28 w-full items-center justify-items-center">
      <div className="absolute h-28 w-28 rounded-full bg-black/15"></div>
      <ChoiceButton choice={choice} player={player} />
      <p className="text-md absolute -bottom-14 w-full text-center font-bold uppercase tracking-wider text-white">
        {label}
      </p>
    </div>
  );
}

export default Game;
