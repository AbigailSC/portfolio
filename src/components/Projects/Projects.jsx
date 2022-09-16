import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Project } from "../Project/Project";
import projects from "../utils/dataProjects.js";
import { filterTecnologiesFunc } from "../utils/filterTecnologies.js";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { SiReact, SiRedux, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";

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
    <div className="h-full bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
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
          className={`md:block md:pb-0 px-6 md:mt-0 ${
            projectsDisplay ? "flex flex-col" : "hidden"
          }`}
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              id="React"
              name="React"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiReact className="mr-2" />
            <span>React</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="Redux"
              name="Redux"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiRedux className="mr-2" />
            <span>Redux</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="Typescript"
              name="Typescript"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiTypescript className="mr-2" />
            <span>Typescript</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="HTML"
              name="HTML"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiHtml5 className="mr-2" />
            <span>HTML</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="CSS"
              name="CSS"
              onChange={(e) => handleChecked(e)}
              className="w-4 h-4 mr-4 leading-tight bg-gray-100 border-gray-300 accent-rose-700 focus:none"
            />
            <SiCss3 className="mr-2" />
            <span>CSS</span>
          </label>
        </div>
        <div className="">
          <div className="flex flex-col gap-1 pt-20 text-xl lg:bg-red-900">
            {projects.map((project, index) => (
              <Project key={index} name={project.name} img={project.img} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
