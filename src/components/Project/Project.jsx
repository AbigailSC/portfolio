import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ name, img, index }) => {
  return (
    <div className="flex flex-col gap-4 m-6">
      <div className="flex gap-2 mb-2 text-xl">
        <h3 className="text-rose-700">Project {index + 1}</h3>
        <h3>/ {name}</h3>
      </div>
      <div className="overflow-hidden border shadow-lg rounded-xl border-slate-700">
        <figure>
          <img src={img} alt={`image project ${index}`} className="" />
        </figure>
        <div className="flex flex-col gap-5 p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis adipisci suscipit
          </p>
          <Link to={name}>
            <button className="px-4 py-3 text-white bg-slate-800 rounded-xl">viewProject</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
