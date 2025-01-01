import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import { useEffect, useState } from "react";
import ChoiceButton from "./ChoiceButton";

function Game({ setShowRules }) {
  const [userSelection, setUserSelection] = useState(null);
  return (
    <div className="relative w-full place-self-center">
      {userSelection ? (
        <GameResult userChoice={userSelection} />
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
        <ChoiceButton choice={choice} setUserSelection={setUserSelection} />
      ))}
    </div>
  );
}

const choices = ["rock", "paper", "scissors"];

function GameResult({ userChoice }) {
  const [houseChoice, setHouseChoice] = useState(choices[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % choices.length);
    }, 200);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setHouseChoice(choices[counter]);
  }, [counter]);

  return (
    <div className="grid grid-cols-2">
      <div className="relative grid h-28 w-full items-center justify-items-center">
        <div className="absolute h-28 w-28 rounded-full bg-black/15"></div>
        <ChoiceButton choice={userChoice} result={"user1"} />
        <p className="text-md absolute -bottom-14 w-full text-center font-bold uppercase tracking-wider text-white">
          You Picked
        </p>
      </div>
      <div className="relative grid h-28 w-full items-center justify-items-center">
        <div className="absolute h-28 w-28 rounded-full bg-black/15"></div>
        <ChoiceButton choice={houseChoice} result={"user2"} />
        <p className="text-md absolute -bottom-14 w-full text-center font-bold uppercase tracking-wider text-white">
          The House picked
        </p>
      </div>
    </div>
  );
}

export default Game;
