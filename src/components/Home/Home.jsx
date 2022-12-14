import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { projectsReverse } from "../utils/dataProjects.js";
import { HiDownload } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../../assets/AbigailSarzuri_CV.pdf";

export const Home = () => {
  const [text, count] = useTypewriter({
    words: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 20,
    delaySpeed: 4000,
  });
  const boxLanding = projectsReverse.filter((obj) => obj.id < 3);
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col justify-center md:pt-20 lg:pt-60 items-center text-center gap-10 leading-10 h-[90%] lg:flex-row lg:text-left xl:pt-72 xl:gap-36">
        <div className="flex flex-col gap-20 pt-20 lg:pt-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl xl:text-2xl">Hi all! I am</h2>
            <h1 className="text-6xl xl:text-7xl">Abigail Sarzuri</h1>
            <h2 className="text-xl text-rose-700 xl:text-2xl">
              {text} <Cursor />
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-slate-500">//download my CV:</h2>
            <button className="flex shadow-xl justify-center self-center max-w-[200px] px-4 py-3 text-lg rounded-xl lg:self-start bg-slate-800 transition duration-300 ease-in-out hover:transition-all hover:bg-slate-700 hover:text-white">
              <a href={CV} download={CV} className="flex items-center self-center gap-2">
                Download <HiDownload />
              </a>
            </button>
          </div>
        </div>
        <div className="w-[300px] lg:w-[400px] mb-48 ">
          {boxLanding.map((project, index) => (
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
