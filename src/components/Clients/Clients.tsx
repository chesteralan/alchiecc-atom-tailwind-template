import Image from "next/image";

const Clients = () => {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="font-header text-primary text-center text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            <span className="m-8 block">
              <Image
                width={100}
                height={100}
                src="/images/logo-coca-cola.svg"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                width={100}
                height={100}
                src="/images/logo-apple.svg"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                width={100}
                height={100}
                src="/images/logo-netflix.svg"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                width={100}
                height={100}
                src="/images/logo-amazon.svg"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                width={100}
                height={100}
                src="/images/logo-stripe.svg"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
