import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className={`backdrop-filter backdrop-blur-lg sm:border-b-1 transition-colors w-full z-10 fixed lg:flex border-b border-[rgba(255,255,255,0.1)] lg:h-[48px] ${
        navbar ? "h-screen sm:h-auto backdrop-filter backdrop-blur-lg sm:border-b-1" : null
      }`}
    >
      <div className="justify-start mx-auto lg:max-w-7xl md:items-center md:flex md:mx-0 xl:max-w-full">
        <div className="flex items-center justify-end py-3 md:py-5 md:block">
          <div className="flex justify-between w-full md:hidden">
            <button
              className="px-4 py-2 outline-none text-slate-700 focus:text-gray-200"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div className={`md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-start  justify-center space-y-8 h-[48px] md:flex md:space-y-0">
              <Link to="/" className="focus:text-gray-200">
                <li className="md:w-[200px] md:px-0 px-8 md:h-[48px] py-4 text-xl font-medium text-center transition duration-300 ease-in-out border-t border-b border-[rgba(255,255,255,0.1)] md:border-r md:text-sm md:border-b-0 md:border-t-0 hover:transition-all hover:text-gray-200">
                  <span className="text-rose-500">00</span>.Hello
                </li>
              </Link>
              <Link to="/aboutMe" className="focus:text-gray-200">
                <li className="md:w-[200px] md:px-0 px-8 md:h-[48px] py-4 text-xl font-medium text-center transition duration-300 ease-in-out border-b border-[rgba(255,255,255,0.1)] md:border-r md:text-sm md:border-b-0 hover:transition-all hover:text-gray-200">
                  <span className="text-rose-500">01</span>.AboutMe
                </li>
              </Link>
              <Link to="/projects" className="focus:text-gray-200">
                <li className="md:w-[200px] md:px-0 px-8 md:h-[48px] py-4 text-xl font-medium text-center transition duration-300 ease-in-out border-b border-[rgba(255,255,255,0.1)] md:border-r md:text-sm md:border-b-0 hover:transition-all hover:text-gray-200">
                  <span className="text-rose-500">02</span>.Projects
                </li>
              </Link>
              <Link to="/contact" className="focus:text-gray-200">
                <li className="md:w-[200px] md:px-0 px-8 md:h-[48px] py-4 text-xl font-medium text-center transition duration-300 ease-in-out border-b border-[rgba(255,255,255,0.1)] md:border-r md:text-sm md:border-b-0 hover:transition-all hover:text-gray-200">
                  <span className="text-rose-500">03</span>.Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
