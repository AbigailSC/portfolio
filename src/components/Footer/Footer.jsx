import React from "react";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t border-slate-700 ">
      <div className="p-3 pr-6 border-r border-slate-700">
        <h3>find me in:</h3>
      </div>
      <a
        href="https://github.com/AbigailSC"
        target="_black"
        className="border-l border-slate-700 group"
      >
        <div className="flex items-center h-full gap-4 p-4 border-slate-700">
          <h3 className="hidden transition duration-300 ease-in-out lg:block group-hover:text-white group-hover:transition-all">
            @AbigailSC
          </h3>
          <SiGithub className="min-h-full transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all" />
        </div>
      </a>
    </div>
  );
};
