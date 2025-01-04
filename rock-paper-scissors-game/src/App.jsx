import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Game from "./Game";
import Header from "./Header";
import Rules from "./Rules";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(localStorage.getItem("score") || 0);

  return (
    <div className="grid place-items-center bg-radial-bg">
      {showRules && <Rules setShowRules={setShowRules} />}
      <div className="grid min-h-screen w-full grid-rows-[auto,1fr,auto] p-7 ">
        <Header score={score} />
        <Game setScore={setScore} />
        <Footer setShowRules={setShowRules} />
      </div>
    </div>
  );
}

export default App;
