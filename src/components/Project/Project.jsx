import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ name, img, index, description, deployLink }) => {
  return (
    <div className="flex flex-col max-w-md gap-4 m-6">
      <div className="flex gap-2 mb-2 text-xl">
        <h3 className="text-rose-700">Project {index + 1}</h3>
        <h3>/{name}</h3>
      </div>
      <div className="overflow-hidden border shadow-lg rounded-xl border-slate-700">
        <figure>
          <img src={img} alt={`image project ${index}`} className="min-h-[200px] object-cover" />
        </figure>
        <div className="flex flex-col items-center justify-center gap-5 p-8">
          <p className="text-sm">{description}</p>
          <a href={deployLink} target="_black">
            <button className="px-4 py-3 text-base text-white bg-slate-800 rounded-xl">
              viewProject
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
