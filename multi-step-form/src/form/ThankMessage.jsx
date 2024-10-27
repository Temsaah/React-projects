function ThankMessage() {
  return (
    <div className="relative -top-14 rounded-xl bg-white px-5 py-24 shadow-xl">
      <div className="grid justify-items-center gap-2">
        <img className="mb-3 w-14" src="/images/icon-thank-you.svg"></img>
        <p className="text-2xl font-bold text-primary-marine-blue">
          Thank you!
        </p>
        <p className="text-center text-neutral-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default ThankMessage;
