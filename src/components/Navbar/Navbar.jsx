import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`bg-gray-900 w-full fixed border-b border-slate-700 ${
        navbar ? "h-screen sm:h-auto sm:border-b-1" : null
      }`}
    >
      <div className="justify-start mx-auto lg:max-w-7xl md:items-center md:flex md:mx-0 xl:max-w-full">
        <div className="flex items-center justify-end py-3 md:py-5 md:block">
          <div className="md:hidden">
            <button
              className="px-4 py-2 text-slate-700 outline-none focus:text-white"
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
            <ul className="items-center justify-center space-y-8 md:flex md:space-y-0">
              <Link to="/" className="focus:text-white">
                <li className="bg-gray-900 px-8 py-4 text-xl text-center font-medium border-t border-b border-slate-700 md:border-r md:text-sm md:border-b-0 md:border-t-0">
                  _hello
                </li>
              </Link>
              <Link to="/aboutMe" className="focus:text-white">
                <li className="bg-gray-900 px-8 py-4 text-xl text-center font-medium border-b border-slate-700 md:border-r md:text-sm md:border-b-0">
                  _aboutMe
                </li>
              </Link>
              <Link to="/projects" className="focus:text-white">
                <li className="bg-gray-900 px-8 py-4 text-xl text-center font-medium border-b border-slate-700 md:border-r md:text-sm md:border-b-0">
                  _projects
                </li>
              </Link>
              <Link to="/contact" className="focus:text-white">
                <li className="bg-gray-900 px-8 py-4 text-xl text-center font-medium border-b border-slate-700 md:border-r md:text-sm md:border-b-0">
                  _contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
