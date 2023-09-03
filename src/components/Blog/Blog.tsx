import React from 'react'
import Link  from 'next/link';

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="bg-grey-50" id="blog">
          <div className="container px-4 mx-auto py-16 md:py-20">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              I also like to write
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Check out my latest posts!
            </h4>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
              <Link href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/images/post-01.png)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    How to become a frontend developer
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
              </Link>
              <Link href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/images/post-02.png)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    My personal productivity system
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
              </Link>
              <Link href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/images/post-03.png)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    My year in review 2020
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Blog