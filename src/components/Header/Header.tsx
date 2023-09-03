import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full z-50 top-0 py-3 sm:py-5 absolute px-2">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full text-center sm:text-left">
            <Link href="/" className="text-white text-3xl font-bold">
              ALCHIE TAGUDIN
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  About
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Services
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Portfolio
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Clients
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Work
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Statistics
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Blog
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header