const Newsletter = () => {
  return (
    <div
      className="bg-primary relative bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
      style={{ backgroundImage: "url(/images/bg-cta.jpg)" }}
    >
      <div className="container relative z-30 mx-auto px-4">
        <h3 className="font-header text-center text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
          Keep <span className="font-bold">up-to-date</span> <br />
          with what I&apos;m up to
        </h3>
        <form className="mt-6 flex flex-col justify-center sm:flex-row">
          <input
            className="font-body w-full rounded px-4 py-3 text-black sm:w-2/5 sm:py-4 lg:w-1/3"
            type="text"
            id="email"
            placeholder="Give me your Email"
          />
          <button className="bg-yellow font-body text-primary hover:bg-primary focus:ring-yellow mt-2 rounded px-8 py-3 text-base font-bold uppercase transition-colors hover:text-white focus:border-transparent focus:outline-none focus:ring sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
            Join the club
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
