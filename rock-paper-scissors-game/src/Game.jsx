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
      <div className="mx-auto max-w-56 select-none">
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

    const oldScore = +localStorage.getItem("score");
    console.log(oldScore);

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

    if (result === "Win") {
      console.log("Saving new score:", oldScore + 1);
      localStorage.setItem("score", oldScore + 1);
    } else if (result === "Lose") {
      console.log("Saving new score:", Math.max(0, oldScore - 1));
      localStorage.setItem("score", Math.max(0, oldScore - 1));
    }
  }, [houseChoice, userChoice, setScore]);

  return (
    <div className="grid h-full grid-cols-2 py-16 max-w-[1000px] mx-auto lg:grid-rows-1 lg:grid-cols-3">
      <ChoiceDisplay
        choice={userChoice}
        label={"You Picked"}
        player={"user1"}
      />
      <div
        className={`grid place-items-center gap-10 self-center ${result ? "opacity-100 transition-opacity duration-300" : "opacity-0"} col-span-2 row-start-2 mt-auto text-center lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:mt-0`}
      >
        <p className="text-6xl font-bold uppercase text-white">You {result}</p>

        <button
          className="rounded-xl bg-white px-14 py-3 font-bold uppercase tracking-[3px] text-neutral-darkText"
          onClick={() => setUserSelection(null)}
        >
          Play Again
        </button>
      </div>
      <ChoiceDisplay
        choice={houseChoice || randomizedHouseChoice}
        label={"The House Picked"}
        player={"user2"}
      />
    </div>
  );
}

function ChoiceDisplay({ choice, label, player }) {
  return (
    <div
      className={`relative grid w-full h-full items-center ${player === "user1" ? "justify-self-start lg:col-start-1" : "justify-self-end lg:col-start-3"}`}
    >
      <ChoiceButton choice={choice} player={player} label={label} />

    </div>
  );
}

export default Game;
