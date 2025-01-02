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
  const [randomizedHouseCoice, setRandomizedHouseChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [counter, setCounter] = useState(0);
  const countTimes = useRef(0);

  const decideResult = useCallback(() => {
    if (userChoice === houseChoice) return "Draw";
    if (
      (userChoice === "rock" && houseChoice === "scissors") ||
      (userChoice === "paper" && houseChoice === "rock") ||
      (userChoice === "scissors" && houseChoice === "paper")
    ) {
      return "Win";
    }
    return "Lose";
  }, [userChoice, houseChoice]);

  // Memoized function to prevent unnecessary updates
  const calculateScore = useCallback(
    (result) => {
      setScore((prevScore) => {
        if (result === "Win") return prevScore + 1;
        if (result === "Lose") return Math.max(0, prevScore - 1);
        return prevScore;
      });
    },
    [setScore],
  );

  useEffect(() => {
    let interval;
    if (countTimes.current < 10) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % choices.length);
        setRandomizedHouseChoice(choices[counter]);
        countTimes.current = countTimes.current + 1;
      }, 100);
    } else {
      clearInterval(interval);
      setHouseChoice(choices[Math.floor(Math.random() * 3)]);
    }

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    if (houseChoice) {
      const result = decideResult();
      setResult(result);
      calculateScore(result);
    }
  }, [houseChoice, calculateScore, decideResult]);

  return (
    <div className="grid h-full grid-rows-2">
      <div className="grid grid-cols-2 self-center">
        <div className="relative grid h-28 w-full items-center justify-items-center">
          <div className="absolute h-28 w-28 rounded-full bg-black/15"></div>
          <ChoiceButton choice={userChoice} result={"user1"} />
          <p className="text-md absolute -bottom-14 w-full text-center font-bold uppercase tracking-wider text-white">
            You Picked
          </p>
        </div>
        <div className="relative grid h-28 w-full items-center justify-items-center">
          <div className="absolute h-28 w-28 rounded-full bg-black/15"></div>
          <ChoiceButton
            choice={houseChoice ? houseChoice : randomizedHouseCoice}
            result={"user2"}
          />
          <p className="text-md absolute -bottom-14 w-full text-center font-bold uppercase tracking-wider text-white">
            The House picked
          </p>
        </div>
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

export default Game;
