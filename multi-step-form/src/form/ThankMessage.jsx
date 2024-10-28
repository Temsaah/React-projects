function ThankMessage() {
  return (
    <div className="relative -top-14 rounded-xl px-6 py-8 lg:px-24 lg:p-0 bg-white  shadow-xl lg:top-0 lg:my-36 lg:shadow-none">
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
