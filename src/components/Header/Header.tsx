import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full px-2 py-3 sm:py-5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="w-full text-center sm:text-left">
          <Link href="/" className="text-3xl font-bold text-white">
            ALCHIE TAGUDIN
          </Link>
        </div>

        <div className="block lg:hidden">
          <button>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
