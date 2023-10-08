import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: "url(/images/bg-hero2.webp)" }}
    >
      <div className="from-hero-gradient-from to-hero-gradient-to absolute inset-0 z-20 bg-gradient-to-r bg-cover bg-center bg-no-repeat"></div>

      <div className="container relative z-30 mx-auto px-4 pb-12 pt-20 sm:pb-48 sm:pt-56 lg:pb-48 lg:pt-64">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="border-primary rounded-full border-8 shadow-xl">
            <Image
              width={224}
              height={224}
              src="/images/alchie_square.jpg"
              className="h-56 rounded-full"
              alt="author"
            />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="font-header text-center text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              Hello I&apos;m Alchie!
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-yellow text-3xl"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pl-2 pt-5 sm:justify-start sm:pt-0">
                <Link href="/">
                  <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-twitter hover:text-yellow text-2xl text-white"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-dribbble hover:text-yellow text-2xl text-white"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-linkedin hover:text-yellow text-2xl text-white"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-instagram hover:text-yellow text-2xl text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
