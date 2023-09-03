import React from 'react'
import Image  from 'next/image';

type Props = {}

const Services = (props: Props) => {
  return (
    <div className="container px-4 mx-auto py-16 md:py-20" id="services">
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      Here&apos;s what I&apos;m good at
    </h2>
    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
      These are the services I offer
    </h3>

    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-development-white.svg"
              alt="development icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-development-black.svg"
              alt="development icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            WEB DEVELOPMENT
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-content-white.svg"
              alt="content marketing icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-content-black.svg"
              alt="content marketing icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            Technical Writing
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-mobile-white.svg"
              alt="Mobile Application icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-mobile-black.svg"
              alt="Mobile Application icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            Mobile Development
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-email-white.svg"
              alt="Email Marketing icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-email-black.svg"
              alt="Email Marketing icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            Email Development
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-design-white.svg"
              alt="Theme Design icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-design-black.svg"
              alt="Theme Design icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            Graphic Design
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="group rounded px-8 py-12 shadow hover:bg-primary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <Image width={100} height={100}
              src="/images/icon-graphics-white.svg"
              alt="Graphic Design icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <Image width={100} height={100}
              src="/images/icon-graphics-black.svg"
              alt="Graphic Design icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            Web Design
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services