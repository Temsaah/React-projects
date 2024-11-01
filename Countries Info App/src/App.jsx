import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CountryExplorer from "./CountryExplorer";

function App() {

  return <div className="min-h-screen bg-neutral-very-light-gray">
    <Header/>
    <CountryExplorer/>
  </div>;
}

export default App;
