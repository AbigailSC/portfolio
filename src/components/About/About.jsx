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
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col gap-1 pt-20 text-xl ">
        <h2 className="p-5 text-white">_aboutMe</h2>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setPersonalInfoDisplay(!personaInfoDisplay)}
        >
          {personaInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          personalInfo
        </button>
        <div className={`${personaInfoDisplay ? "flex flex-col" : "hidden"}`}>
          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setInterests(!interests)}
          >
            {interests ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-red-300" />
            interests
          </button>
          <div className={`py-6 px-6 ${interests ? "flex flex-col" : "hidden"}`}>
            <p>
              I am very interested in learning new things, I really like web design and user
              interface design, I am constantly learning and updating my knowledge. My goal is to
              gain experience in the area of Web Development and collaborate with the company I work
              for in order to provide quality service to potential or current clients.
            </p>
          </div>
          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setEducation(!education)}
          >
            {education ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-green-300" />
            education
          </button>
          <div className={`py-6 px-6 ${education ? "flex flex-col" : "hidden"}`}>
            <p>
              I finished my studies as a Full Stack developer at Bootcamp Henry on 09/22. I studied
              graphic design for a year at the uba and graduated as a computer technician at the
              technical high school.
            </p>
          </div>

          <button
            className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            onClick={() => setHobbiesDisplay(!hobbiesDisplay)}
          >
            {hobbiesDisplay ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            <AiFillFolder className="text-blue-300" />
            hobbies
          </button>
          <div className={`py-6 px-6 ${hobbiesDisplay ? "flex flex-col" : "hidden"}`}>
            <p>
              My hobbies are researching new trends in web design, digital drawing, playing video
              games, streaming, coding and listening to music.
            </p>
          </div>
        </div>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setProfInfoDisplay(!profInfoDisplay)}
        >
          {profInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          professionalInfo
        </button>
        <div className={`py-6 px-6 ${profInfoDisplay ? "flex flex-col" : "hidden"}`}>
          <p>I currently have no work experience.</p>
        </div>

        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setTecnologies(!tecnologies)}
        >
          {tecnologies ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          tecnologies
        </button>
        <div
          className={`py-6 border-b border-slate-700 px-6 ${
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
        <main className="flex flex-col gap-8 px-6 py-8">
          <h3 className="text-white">// personalInfo</h3>
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <img
              src="https://res.cloudinary.com/dbhb8sohh/image/upload/v1663642291/aaaaa22_oach10.png"
              className="object-cover w-72 h-72 rounded-xl"
            />
            <p>
              My name is Abigail, I'm from Argentina and I have 1 year of experience as a full stack
              developer with a front end orientation.
              <br />
              I really enjoy coding, solving problems and building functional, visually pleasing and
              above all best practice websites in my code, using various design principles and
              patterns.
              <br />I started in the world of programming in high school, programming with C# and
              C++ and it wasn't until I took an introductory web development course that my
              curiosity about the world of web development grew. I studied graphic design for a year
              at the UBA and that gave me UI knowledge to integrate into my career as a full stack
              developer.
            </p>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};
