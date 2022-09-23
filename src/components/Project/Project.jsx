import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ name, img, index, description, deployLink, tecnologies }) => {
  return (
    <div className="flex flex-col max-w-md gap-4 m-6">
      <div className="flex gap-2 mb-2 text-xl">
        <h3>Project</h3>
        <h3 className="text-rose-700">//{name}</h3>
      </div>
      <div className="border shadow-lg min-h-[440px] rounded-xl border-slate-700">
        <figure className="relative w-full h-[240px] overflow-hidden">
          <a href={deployLink} target="_black">
            <img
              src={img}
              alt={`block image project ${index}`}
              className="object-center w-full h-80"
            />
            <div className="absolute w-full h-full transition duration-300 ease-in-out top-0 hover:bg-[rgba(51,65,85,0.7)] opacity-0 hover:opacity-100 ">
              <p className="w-full h-full text-center text-white mt-28">View project</p>
            </div>
          </a>
        </figure>
        <div className="flex flex-col justify-center gap-5 p-8">
          <p className="text-sm">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tecnologies.map((tecnology, index) => (
              <li
                key={index}
                className="px-2 py-1 text-sm leading-none text-center text-white list-outside rounded bg-rose-700 whitespace-nowrap list"
              >
                {tecnology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
