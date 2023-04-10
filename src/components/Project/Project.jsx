import React from "react";

export const Project = ({ name, img, index, description, deployLink, tecnologies }) => {
  return (
    <div className="flex flex-col max-w-md gap-4 m-6">
      <div className="flex gap-2 mb-2 text-xl">
        <h3>Project</h3>
        <span className="text-rose-500">@</span>
        <h3>{name}</h3>
      </div>
      <div className="mb-8 border shadow-xl hover:shadow-2xl min-h-[440px] rounded-xl border-[rgba(255,255,255,0.1)]">
        <figure className="relative max-w-full overflow-hidden bg-no-repeat bg-cover">
          <a href={deployLink} target="_black">
            <img
              src={img}
              alt={`block image project ${index}`}
              className="h-[228px] object-cover max-w-full transition duration-300 ease-in-out md:h-full rounded-t-xl hover:scale-110 hover:rounded-t-xl"
            />
          </a>
        </figure>
        <div className="flex flex-col justify-center gap-5 p-8">
          <p className="text-sm">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tecnologies.map((tecnology, index) => (
              <li
                key={index}
                className="px-2 py-1 text-sm leading-none text-center text-gray-200 list-outside border border-gray-200 rounded whitespace-nowrap list"
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
