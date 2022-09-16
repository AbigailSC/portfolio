import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Project } from "../Project/Project";
import projects from "../utils/dataProjects.js";

export const Projects = () => {
  return (
    <div className="h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col gap-1 pt-20 text-xl lg:bg-red-900">
        <h2 className="p-5 text-white">_projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <h2>{project.name}.txt</h2>
            <div>
              <Project name={project.name} img={project.img} index={index} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
