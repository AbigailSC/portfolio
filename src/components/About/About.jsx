import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";

export const About = () => {
  // *Categoria personalInfo

  const [personaInfoDisplay, setPersonalInfoDisplay] = useState(false);

  // *Subcategorias:

  const [interests, setInterests] = useState(false); // *Interests

  const [education, setEducation] = useState(false); // *Education

  const [profInfoDisplay, setProfInfoDisplay] = useState(false);

  const [hobbiesDisplay, setHobbiesDisplay] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col gap-1 pt-20 text-xl lg:bg-red-900">
        <h2 className="p-5 text-white">_aboutMe</h2>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setPersonalInfoDisplay(!personaInfoDisplay)}
        >
          {personaInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          personalInfo
        </button>
        <div
          className={`md:block md:pb-0 md:mt-0 ${personaInfoDisplay ? "flex flex-col" : "hidden"}`}
        >
          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setInterests(!interests)}
          >
            {interests ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-red-300" />
            interests
          </button>
          <div
            className={`md:block md:pb-0 px-6 md:mt-0 ${interests ? "flex flex-col" : "hidden"}`}
          >
            <p>ADJASPDASKDASPDAKSDPASDKAS ASDKASDPAS </p>
          </div>
          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setEducation(!education)}
          >
            {education ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-green-300" />
            education
          </button>
          <div
            className={`md:block md:pb-0 px-6 md:mt-0 ${education ? "flex flex-col" : "hidden"}`}
          >
            <p>education nasodj adpoas jasod as</p>
          </div>
        </div>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setProfInfoDisplay(!profInfoDisplay)}
        >
          {profInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          professionalInfo
        </button>
        <div
          className={`md:block md:pb-0 px-6 md:mt-0 ${
            profInfoDisplay ? "flex flex-col" : "hidden"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta iusto aperiam
            veritatis fugiat repellendus delectus sed esse ex nobis nisi, rerum atque nesciunt, et
            doloremque reprehenderit veniam incidunt magnam.
          </p>
        </div>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setHobbiesDisplay(!hobbiesDisplay)}
        >
          {hobbiesDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          hobbies
        </button>
        <div
          className={`md:block md:pb-0 px-6 md:mt-0 ${hobbiesDisplay ? "flex flex-col" : "hidden"}`}
        >
          <ul>
            <li>Streaming</li>
            <li>Play videogames</li>
            <li>Create apps about games</li>
            <li>Programming</li>
            <li>Listeng music</li>
          </ul>
        </div>

        <main className="flex flex-col gap-2 px-6 py-8">
          <h3 className="text-white">// personalInfo</h3>
          <p>
            My name is Abigail,i'm from Argentina and i have 1 year of experience in full stack
            development. Disfruto mucho de codear, resolver problemas y construir sitios web
            funcionales, buena user interface y sobre todo con buenas practicas. Empecé en el mundo
            de la programacion en la secundaria, viendo c#/c++ y no fue hasta que hice un curso en
            introducción al desarrollo web en donde crecio mi curiosidad por el mundo del desarrollo
            web. Estudie durante un año diseño grafico en la UBA y eso me dio conocimientos de UI.
          </p>
        </main>
      </section>
    </div>
  );
};
