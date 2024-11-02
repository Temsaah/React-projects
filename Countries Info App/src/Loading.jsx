function Loading() {
  return (
    <div className="mx-auto my-12 grid w-fit animate-pulse gap-16 px-10">
      <div className="grid h-fit max-w-[320px] grid-rows-[200px,1fr] shadow-md">
        <div className="w-[320px] rounded-lg bg-gray-300"></div>
        <div className="space-y-3 bg-white px-8 pb-10 pt-8">
          <p className="mb-5 h-7 w-2/5 bg-gray-300"></p>
          <p className="h-4 w-1/2 bg-gray-300"></p>
          <p className="h-4 w-1/2 bg-gray-300"></p>
          <p className="h-4 w-1/2 bg-gray-300"></p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
