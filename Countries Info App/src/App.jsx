import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CountryExplorer from "./CountryExplorer";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="grid gap-1 min-h-screen grid-rows-[auto,1fr] bg-neutral-very-light-gray dark:bg-neutral-very-dark-blue ">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <CountryExplorer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
