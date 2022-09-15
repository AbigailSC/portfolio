import React, { useState } from "react";
import { Project } from "../Project/Project";
import projects from "../utils/dataProjects.js";

export const Projects = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <h1>{project.name}.txt</h1>
          <div>
            <Project name={project.name} img={project.img} index={index} />
          </div>
        </div>
      ))}
    </section>
  );
};
