import { SOCIAL_MEDIA_LINKEDIN } from "@/utils/constants/links";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-primary text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="font-header pt-6 text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m Alchie Tagudin, a Front End Web Developer.
          </h4>
          <p className="font-body text-grey-20 pt-6 leading-relaxed">
            I am skilled Front End Web Developer with expertise in HTML, CSS, JavaScript, and
            TypeScript. He has experience with popular web development libraries and frameworks such
            as React, Gatsby, Next.js, and are also familiar with Strapi for content management. His
            strong foundation in core web technologies and his proficiency in these tools make him a
            valuable asset in crafting engaging and functional websites.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <Link
                className="font-body text-grey-20 text-lg font-semibold uppercase"
                href={SOCIAL_MEDIA_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </Link>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-primary text-2xl"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pl-2 pt-5 sm:justify-start sm:pt-0">
              <Link href="/">
                <i className="bx bxl-facebook-square text-primary hover:text-yellow text-2xl"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-primary hover:text-yellow text-2xl"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-dribbble text-primary hover:text-yellow text-2xl"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-linkedin text-primary hover:text-yellow text-2xl"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-instagram text-primary hover:text-yellow text-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">HTML & CSS</h4>
              <h3 className="font-body text-primary text-3xl font-bold">95%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Javascript</h4>
              <h3 className="font-body text-primary text-3xl font-bold">95%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Typescript</h4>
              <h3 className="font-body text-primary text-3xl font-bold">50%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">React</h4>
              <h3 className="font-body text-primary text-3xl font-bold">85%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Gatsby</h4>
              <h3 className="font-body text-primary text-3xl font-bold">75%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Next.js</h4>
              <h3 className="font-body text-primary text-3xl font-bold">65%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Strapi</h4>
              <h3 className="font-body text-primary text-3xl font-bold">55%</h3>
            </div>
            <div className="bg-lila mt-2 h-3 w-full rounded-full">
              <div className="bg-primary h-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
