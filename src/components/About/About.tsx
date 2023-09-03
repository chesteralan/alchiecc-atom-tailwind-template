import React from "react";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container px-4 mx-auto flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m Alchie Tagudin, a Web Developer.
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link href="/">
                <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML & CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Javascript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Typescript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">50%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                React
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Gatsby
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">75%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Next.js
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">65%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Strapi
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">55%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
