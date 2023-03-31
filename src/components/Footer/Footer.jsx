import React from "react";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="backdrop-filter backdrop-blur-lg md:fixed md:bottom-0 md:w-full flex items-center justify-between border-t border-[rgba(255,255,255,0.1)]">
      <div className="p-3 pr-6 border-r border-[rgba(255,255,255,0.1)]">
        <h3>find me in:</h3>
      </div>
      <a
        href="https://github.com/AbigailSC"
        target="_black"
        className="border-l border-[rgba(255,255,255,0.1)] group"
      >
        <div className="flex items-center h-full gap-4 p-4 border-[rgba(255,255,255,0.1)]">
          <h3 className="hidden transition duration-300 ease-in-out lg:block group-hover:text-gray-200 group-hover:transition-all">
            @AbigailSC
          </h3>
          <SiGithub className="min-h-full transition duration-300 ease-in-out group-hover:text-gray-200 group-hover:transition-all" />
        </div>
      </a>
    </div>
  );
};
