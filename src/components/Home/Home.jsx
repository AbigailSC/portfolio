import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { projectsReverse } from "../utils/dataProjects.js";

export const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col justify-center pt-10 md:pt-20 lg:pt-52 items-center text-center gap-10 leading-10 h-[90%] lg:flex-row lg:text-left">
        <div className="flex flex-col gap-20 pt-20 mx-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl xl:text-2xl">Hi all! I am</h2>
            <h1 className="text-6xl xl:text-7xl">Abigail Sarzuri</h1>
            <h2 className="text-xl text-rose-700 xl:text-2xl">Full stack Developer</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-slate-500">//write the code below to continue:</h2>
            <div className="flex items-center self-center gap-2 lg:self-start">
              <h3 className="text-3xl text-blue-600 xl:text-4xl">{">"}</h3>
              <input
                className="w-24 text-3xl text-blue-600 bg-slate-900 focus:outline-none xl:text-4xl xl:w-28"
                placeholder="start"
              />
            </div>
          </div>
        </div>
        <div className="w-[300px]">
          {projectsReverse.map((project, index) => (
            <div key={index} className="grid w-full h-16">
              <div className="p-1 border rounded-lg shadow-xl border-slate-700 bg-slate-800 text-start ">
                <h2 className="px-2">Project {index + 1}</h2>
                <img src={project.img} alt={project.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
