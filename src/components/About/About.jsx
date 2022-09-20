import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";
import {
  SiAdobephotoshop,
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiTailwindcss,
  SiStyledcomponents,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { Footer } from "../Footer/Footer";

export const About = () => {
  // *Categoria personalInfo

  const [personaInfoDisplay, setPersonalInfoDisplay] = useState(false);

  // *Subcategorias:

  const [interests, setInterests] = useState(false); // *Interests

  const [education, setEducation] = useState(false); // *Education

  const [tecnologies, setTecnologies] = useState(false); // * Tecnologies

  const [profInfoDisplay, setProfInfoDisplay] = useState(false);

  const [hobbiesDisplay, setHobbiesDisplay] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
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

          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setHobbiesDisplay(!hobbiesDisplay)}
          >
            {hobbiesDisplay ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-blue-300" />
            hobbies
          </button>
          <div
            className={`md:block md:pb-0 px-6 md:mt-0 ${
              hobbiesDisplay ? "flex flex-col" : "hidden"
            }`}
          >
            <p>hobbie</p>
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
          onClick={() => setTecnologies(!tecnologies)}
        >
          {tecnologies ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          tecnologies
        </button>
        <div
          className={`md:block md:pb-0 py-6 border-b-2 border-slate-700 px-6 md:mt-0 ${
            tecnologies ? "flex flex-col" : "hidden"
          }`}
        >
          <ul>
            <li>
              <h3 className="text-white">// Front end</h3>
              <ul className="flex flex-col gap-1 my-2">
                <li className="flex items-center gap-2 group">
                  <SiReact className="group-hover:text-[#61DBFB] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    React
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiTypescript className="group-hover:text-[#2d79c7] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Typescript
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiRedux className="group-hover:text-[#764ABC] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Redux & Redux Toolkit
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiJavascript className="group-hover:text-[#F7E018] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Javascript
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiHtml5 className="group-hover:text-[#F16524] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    HTML
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiCss3 className="group-hover:text-[#2EA3D5] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    CSS
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiChakraui className="group-hover:text-[#2DBFB4] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Chakra UI
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiTailwindcss className="group-hover:text-[#01B7D6] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Tailwind CSS
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiStyledcomponents className="group-hover:text-[#DD6F93] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Styled components
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiFigma className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Figma
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-white">// Back end</h3>
              <ul className="flex flex-col gap-1 my-2">
                <li className="flex items-center gap-2 group">
                  <SiNodedotjs className="group-hover:text-[#68A063] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    NodeJs
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiExpress className="group-hover:text-[#F7E018] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Express
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiMongodb className="group-hover:text-[#09934E] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Mongoose & MongoDB
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiSequelize className="group-hover:text-[#2879BD] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Sequelize
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiPostgresql className="group-hover:text-[#2F6792] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    PostgreSQL
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-white">// Others</h3>
              <ul className="flex flex-col gap-1 my-2">
                <li className="flex items-center gap-2 group">
                  <SiPostman className="group-hover:text-[#FF6934] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Postman
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiAdobephotoshop className="group-hover:text-[#2DA9FF] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Adobe photoshop
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <main className="flex flex-col gap-2 px-6 py-8">
          <h3 className="text-white">// personalInfo</h3>
          <p>
            My name is Abigail,i'm from Argentina and i have 1 year of experience in full stack
            development con enfoque en el front end. <br />
            Disfruto mucho de codear, resolver problemas y construir sitios web funcionales,
            visualmente agradables y sobre todo con buenas practicas en mi codigo, usando varios
            principios y patrones de diseño.
            <br /> Empecé en el mundo de la programacion en la secundaria, viendo c#/c++ y no fue
            hasta que hice un curso en introducción al desarrollo web en donde crecio mi curiosidad
            por el mundo del desarrollo web. Estudie durante un año diseño grafico en la UBA y eso
            me dio conocimientos de UI para integrar en mi desarrollo como Desarrolladora full
            stack.
          </p>
        </main>
      </section>
      <Footer />
    </div>
  );
};
