import Image from "next/image";

const Navbar = () => {
  return (
    <div className="z-70 pointer-events-none fixed inset-0 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
      <div className="bg-primary absolute right-0 min-h-screen w-2/3 px-8 py-4 shadow md:w-1/3">
        <button className="absolute right-0 top-0 mr-4 mt-4">
          <Image
            width={100}
            height={100}
            src="/images/icon-close.svg"
            className="h-10 w-auto"
            alt=""
          />
        </button>

        <ul className="mt-8 flex flex-col">
          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              About
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Services
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Portfolio
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Clients
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Work
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Statistics
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Blog
            </span>
          </li>

          <li className="py-2">
            <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
