import React from "react";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t border-slate-700 ">
      <div className="p-4 pr-6 border-r border-slate-700">
        <h3>find me in:</h3>
      </div>
      <a href="https://github.com/AbigailSC" target="_black" className="border-l border-slate-700">
        <div className="p-4 border-slate-700">
          <SiGithub className="min-h-full" />
        </div>
      </a>
    </div>
  );
};
