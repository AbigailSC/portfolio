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
import { FcDocument } from "react-icons/fc";
import { Footer } from "../Footer/Footer";

export const About = () => {
  // *Categoria personalInfo

  const [personaInfoDisplay, setPersonalInfoDisplay] = useState(false);

  const [tecnologies, setTecnologies] = useState(false);

  const [profInfoDisplay, setProfInfoDisplay] = useState(false);

  // *Subcategorias:

  const [interests, setInterests] = useState(false); // *Interests

  const [education, setEducation] = useState(false); // *Education

  const [hobbiesDisplay, setHobbiesDisplay] = useState(false); // *Hobbies

  const displayMainInfo = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "interests":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(true);
        break;
      case "university":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(true);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "secundary":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(true);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "courses":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(true);
        setInterestDetail(false);
        break;
      case "hobbies":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(true);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "professionalExperience":
        setFrontend(false);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(true);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "frontend":
        setFrontend(true);
        setBackend(false);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "backend":
        setFrontend(false);
        setBackend(true);
        setOthers(false);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      case "others":
        setFrontend(false);
        setBackend(false);
        setOthers(true);
        setProfessionalExp(false);
        setHobbiesDetail(false);
        setEducationSecundaryDetail(false);
        setEducationUniversityDetail(false);
        setEducationCoursesDetail(false);
        setInterestDetail(false);
        break;
      default:
        <p>nadaaa</p>;
    }
  };

  const [interestsDetail, setInterestDetail] = useState(false);
  const [educationSecundaryDetail, setEducationSecundaryDetail] = useState(false);
  const [educationUniversityDetail, setEducationUniversityDetail] = useState(false);
  const [educationCoursesDetail, setEducationCoursesDetail] = useState(false);
  const [hobbiesDetail, setHobbiesDetail] = useState(false);
  const [professionalExp, setProfessionalExp] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [others, setOthers] = useState(false);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />

      <section className="flex flex-col w-full pt-20 text-xl lg:flex-row lg:pt-12">
        <div className="flex flex-col lg:w-[30%] xl:w-[20%] 2xl:w-[15%] gap-1 lg:h-[calc(100vh-106px)] lg:border-r lg:border-slate-700">
          <h2 className="p-5 text-white">_aboutMe</h2>
          <button
            className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all lg:bg-inherit lg:border-y lg:border-slate-700"
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
            <div className={`py-2 pl-12 items-start ${interests ? "flex flex-col" : "hidden"}`}>
              <button
                value="interests"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              >
                <FcDocument />
                interests
              </button>
            </div>
            <button
              className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              onClick={() => setEducation(!education)}
            >
              {education ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
              <AiFillFolder className="text-green-300" />
              education
            </button>
            <div className={`py-2 pl-12 items-start ${education ? "flex flex-col" : "hidden"}`}>
              <button
                value="university"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              >
                <FcDocument />
                university
              </button>
              <button
                value="secundary"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              >
                <FcDocument />
                secundary
              </button>
              <button
                value="courses"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              >
                <FcDocument />
                courses
              </button>
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
              className={`py-2 pl-12 items-start ${hobbiesDisplay ? "flex flex-col" : "hidden"}`}
            >
              <button
                value="hobbies"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
              >
                <FcDocument />
                hobbies
              </button>
            </div>
          </div>

          <button
            className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all lg:bg-inherit lg:border-y lg:border-slate-700"
            onClick={() => setProfInfoDisplay(!profInfoDisplay)}
          >
            {profInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            professionalInfo
          </button>
          <div className={`py-2 pl-12 items-start ${profInfoDisplay ? "flex flex-col" : "hidden"}`}>
            <button
              value="professionalExperience"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            >
              <FcDocument />
              experience
            </button>
          </div>

          <button
            className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all lg:bg-inherit lg:border-y lg:border-slate-700"
            onClick={() => setTecnologies(!tecnologies)}
          >
            {tecnologies ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            tecnologies
          </button>
          <div
            className={`py-2 pl-12 items-start border-b border-slate-700 lg:border-none px-6 ${
              tecnologies ? "flex flex-col" : "hidden"
            }`}
          >
            <button
              value="frontend"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            >
              <FcDocument />
              frontEnd
            </button>
            <button
              value="backend"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            >
              <FcDocument />
              backEnd
            </button>
            <button
              value="others"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-white hover:transition-all"
            >
              <FcDocument />
              others
            </button>
          </div>
        </div>
        <main className="px-6 py-8 lg:w-[70%] xl:w-[80%] 2xl:w-[85%]">
          {interestsDetail ? (
            <p>
              I am very interested in learning new things, I really like web design and user
              interface design, I am constantly learning and updating my knowledge. My goal is to
              gain experience in the area of Web Development and collaborate with the company I work
              for in order to provide quality service to potential or current clients.
            </p>
          ) : educationSecundaryDetail ? (
            <p>
              I finished my studies as a Full Stack developer at Bootcamp Henry on 09/22. I studied
              graphic design for a year at the uba and graduated as a computer technician at the
              technical high school.
            </p>
          ) : educationUniversityDetail ? (
            <p>university</p>
          ) : educationCoursesDetail ? (
            <p>henry</p>
          ) : hobbiesDetail ? (
            <p>
              My hobbies are researching new trends in web design, digital drawing, playing video
              games, streaming, coding and listening to music.
            </p>
          ) : professionalExp ? (
            <p>I currently have no work experience.</p>
          ) : frontend ? (
            <div>
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
              </ul>
            </div>
          ) : backend ? (
            <div>
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
            </div>
          ) : others ? (
            <div>
              <h3 className="text-white">// Others</h3>
              <ul className="flex flex-col gap-1 my-2">
                <li className="flex items-center gap-2 group">
                  <SiPostman className="group-hover:text-[#FF6934] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Postman
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiFigma className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Figma
                  </p>
                </li>
                <li className="flex items-center gap-2 group">
                  <SiAdobephotoshop className="group-hover:text-[#2DA9FF] transition duration-300 ease-in-out group-hover:transition-all" />
                  <p className="transition duration-300 ease-in-out group-hover:text-white group-hover:transition-all">
                    Adobe photoshop
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <h3 className="text-white">// personalInfo</h3>
              {/* <img
                src="https://res.cloudinary.com/dbhb8sohh/image/upload/v1663642291/aaaaa22_oach10.png"
                className="object-cover w-72 h-72 rounded-xl"
              /> */}
              <p>
                My name is Abigail, I'm from Argentina and I have 1 year of experience as a full
                stack developer with a front end orientation.
                <br />
                I really enjoy coding, solving problems and building functional, visually pleasing
                and above all best practice websites in my code, using various design principles and
                patterns.
                <br />I started in the world of programming in high school, programming with C# and
                C++ and it wasn't until I took an introductory web development course that my
                curiosity about the world of web development grew. I studied graphic design for a
                year at the UBA and that gave me UI knowledge to integrate into my career as a full
                stack developer.
              </p>
            </div>
          )}
        </main>
      </section>

      <Footer />
    </div>
  );
};
