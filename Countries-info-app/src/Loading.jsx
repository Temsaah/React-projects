function Loading() {
  return (
    <div className="my-12 grid w-full animate-pulse grid-cols-[repeat(auto-fit,minmax(0,290px))] justify-center gap-16 md:justify-between">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="">
          <div className="mx-auto grid h-fit w-full max-w-[320px] grid-rows-[200px,1fr] shadow-md">
            <div className="utra w-full max-w-[320px] rounded-t-lg bg-gray-300 dark:bg-neutral-very-dark-blue-text/50"></div>
            <div className="space-y-3 bg-white px-8 pb-10 pt-8 dark:bg-neutral-dark-blue">
              <p className="mb-5 h-7 w-2/5 bg-gray-300 dark:bg-neutral-very-dark-blue-text/50"></p>
              <p className="h-4 w-1/2 bg-gray-300 dark:bg-neutral-very-dark-blue-text/50"></p>
              <p className="h-4 w-1/2 bg-gray-300 dark:bg-neutral-very-dark-blue-text/50"></p>
              <p className="h-4 w-1/2 bg-gray-300 dark:bg-neutral-very-dark-blue-text/50"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
