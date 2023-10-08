import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20" id="portfolio">
      <h2 className="font-header text-primary text-center text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="font-header pt-6 text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image
            width={732}
            height={412}
            src="/images/portfolio-apple.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </Link>
        <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image
            width={732}
            height={412}
            src="/images/portfolio-stripe.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </Link>
        <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image
            width={732}
            height={412}
            src="/images/portfolio-fedex.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </Link>
        <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image
            width={732}
            height={412}
            src="/images/portfolio-microsoft.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
