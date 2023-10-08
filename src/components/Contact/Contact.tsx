const Contact = () => {
  return (
    <div className="container mx-auto px-4 pb-16 md:pb-20" id="contact">
      <div className="flex flex-col lg:flex-row">
        <div className="border-grey-60 w-full border-b-2 border-l-2 border-r-2 border-t-2 px-6 py-6 sm:py-8 lg:w-1/2 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-grey-40 text-2xl"></i>
            <p className="font-body text-grey-40 pl-2 font-bold uppercase lg:text-lg">My Email</p>
          </div>
          <p className="font-body text-primary pt-2 text-left font-bold lg:text-lg">
            tagudinalchie@gmail.com
          </p>
        </div>
        <div className="border-grey-60 w-full border-b-2 border-l-2 border-r-2 border-t-0 px-6 py-6 sm:py-8 lg:w-1/2 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-grey-40 text-2xl"></i>
            <p className="font-body text-grey-40 pl-2 font-bold uppercase lg:text-lg">My Address</p>
          </div>
          <p className="font-body text-primary pt-2 text-left font-bold lg:text-lg">
            Small Village, Purok 21, Brgy. Mintal, Davao City
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
