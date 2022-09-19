import React from "react";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between border-slate-700 border-y">
      <div className="p-4 pr-6 border-slate-700 border-x">
        <h3>find me in:</h3>
      </div>
      <a href="https://github.com/AbigailSC" target="_black">
        <div className="p-4 border-slate-700 border-x">
          <SiGithub />
        </div>
      </a>
    </div>
  );
};
