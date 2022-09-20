import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Project } from "../Project/Project";
import { projects } from "../utils/dataProjects.js";
import { filterTecnologiesFunc } from "../utils/filterTecnologies.js";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { SiReact, SiRedux, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";
import { Footer } from "../Footer/Footer";

export const Projects = () => {
  const [projectsDisplay, setProjectsDisplay] = useState(false);
  const [tecnologies, setTecnologies] = useState({
    names: [],
  });
  const handleChecked = (e) => {
    if (e.target.checked === true) {
      setTecnologies({
        ...tecnologies,
        names: [...tecnologies.names, e.target.name],
      });
    } else {
      setTecnologies({
        ...tecnologies,
        names: tecnologies.names.filter((elem) => elem !== e.target.name),
      });
    }
  };
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col gap-1 pt-20 text-xl">
        <h2 className="p-5 text-white">_projects</h2>
        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setProjectsDisplay(!projectsDisplay)}
        >
          {projectsDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          projects
        </button>
        <div
          className={`px-6 py-6 border-b border-slate-700 ${
            projectsDisplay ? "flex flex-col" : "hidden"
          }`}
        >
          <label className="flex items-center group">
            <input
              type="radio"
              id="React"
              name="lenguage"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none "
            />
            <SiReact className="mr-2 group-hover:text-[#61DBFB] transition duration-300 ease-in-out group-hover:transition-all" />
            <span className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
              React
            </span>
          </label>
          <label className="flex items-center group">
            <input
              type="radio"
              id="Redux"
              name="lenguage"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiRedux className="mr-2 group-hover:text-[#764ABC] transition duration-300 ease-in-out group-hover:transition-all" />
            <span className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
              Redux
            </span>
          </label>
          <label className="flex items-center group">
            <input
              type="radio"
              id="Typescript"
              name="lenguage"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiTypescript className="mr-2 group-hover:text-[#2d79c7] transition duration-300 ease-in-out group-hover:transition-all" />
            <span className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
              Typescript
            </span>
          </label>
          <label className="flex items-center group">
            <input
              type="radio"
              id="HTML"
              name="lenguage"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiHtml5 className="mr-2 group-hover:text-[#F16524] transition duration-300 ease-in-out group-hover:transition-all" />
            <span className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
              HTML
            </span>
          </label>
          <label className="flex items-center group">
            <input
              type="radio"
              id="CSS"
              name="lenguage"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiCss3 className="mr-2 group-hover:text-[#2EA3D5] transition duration-300 ease-in-out group-hover:transition-all" />
            <span className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
              CSS
            </span>
          </label>
        </div>
        <div className="">
          <div className="flex flex-col gap-1 pt-20 text-xl lg:bg-red-900">
            {projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                img={project.img}
                index={index}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
