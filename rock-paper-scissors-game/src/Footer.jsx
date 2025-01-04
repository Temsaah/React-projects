function Footer({ setShowRules }) {
  return (
    <div className="justify-self-center lg:justify-self-end">
      <button
        className="mb-10 lg:mb-0 rounded-lg border border-white px-10 py-2 font-medium uppercase tracking-widest text-white"
        onClick={() => setShowRules(true)}
      >
        Rules
      </button>
    </div>
  );
}

export default Footer;
