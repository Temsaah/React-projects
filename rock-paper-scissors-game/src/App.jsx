import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Game from "./Game";
import Header from "./Header";
import Rules from "./Rules";

function App() {
  const [showRules, setShowRules] = useState(false);
  return (
    <div className="bg-radial-bg grid min-h-screen grid-rows-[auto,1fr,auto] p-7">
      {showRules && <Rules />}
      <Header />
      <Game />
      <Footer setShowRules={setShowRules} />
    </div>
  );
}

export default App;
