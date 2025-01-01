import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Game from "./Game";
import Header from "./Header";
import Rules from "./Rules";

function App() {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      {showRules && <Rules setShowRules={setShowRules} />}
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-radial-bg p-7">
        <Header />
        <Game />
        <Footer setShowRules={setShowRules} />
      </div>
    </>
  );
}

export default App;
