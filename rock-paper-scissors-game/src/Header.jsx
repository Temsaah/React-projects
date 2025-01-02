function Header({score}) {
  return (
    <div className="border-neutral-headerOutline flex items-center justify-between gap-5 rounded-md border-[3px] p-3">
      <div className="pl-3 text-xl font-bold uppercase leading-4 text-white">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="rounded-md bg-white px-6 py-2 text-center uppercase">
      <p className="text-neutral-scoreText text-xs font-medium tracking-widest">
        Score
      </p>
      <p className="text-neutral-darkText text-4xl font-bold">{score}</p>
    </div>
    </div>
  );
}



export default Header;
