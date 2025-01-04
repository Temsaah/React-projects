function Header({ score }) {
  return (
    <div className="mx-auto flex w-full max-w-[600px] items-center justify-between gap-5 rounded-md border-[3px] border-neutral-headerOutline p-3 lg:py-5">
      <div className="pl-3 text-xl font-bold uppercase leading-4 text-white lg:text-3xl lg:leading-6">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="rounded-md bg-white px-6 py-2 lg:py-4 lg:px-11 text-center uppercase">
        <p className="text-xs font-medium tracking-widest text-neutral-scoreText">
          Score
        </p>
        <p className="text-4xl font-bold text-neutral-darkText lg:text-5xl">{score}</p>
      </div>
    </div>
  );
}

export default Header;
