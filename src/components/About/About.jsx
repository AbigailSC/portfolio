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
  SiGithub,
  SiSass,
  SiSwagger,
  SiJsonwebtokens,
  SiGit,
} from "react-icons/si";
import { AiFillFileMarkdown } from "react-icons/ai";
import { Footer } from "../Footer/Footer";
import { backData, frontData, otherData } from "./Data";

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
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col w-full pt-20 text-xl lg:flex-row lg:pt-[48px]">
        <div className="lg:fixed flex flex-col lg:w-[430px] lg:gap-0 lg:h-[calc(100vh-106px)] lg:border-r lg:border-[rgba(255,255,255,0.1)]">
          <h2 className="p-5 text-gray-200">.AboutMe</h2>
          <button
            className="border-y border-[rgba(255,255,255,0.1)] flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all lg:bg-inherit lg:border-y lg:border-[rgba(255,255,255,0.1)] focus:bg-gray-800 focus:bg-opacity-50"
            onClick={() => setPersonalInfoDisplay(!personaInfoDisplay)}
          >
            {personaInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            personalInfo
          </button>
          <div className={`${personaInfoDisplay ? "flex flex-col" : "hidden"}`}>
            <button
              className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              onClick={() => setInterests(!interests)}
            >
              {interests ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              <AiFillFolder className="text-red-300" />
              interests
            </button>
            <div className={`py-2 pl-12 items-start ${interests ? "flex flex-col" : "hidden"}`}>
              <button
                value="interests"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              >
                <AiFillFileMarkdown />
                interests.md
              </button>
            </div>
            <button
              className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              onClick={() => setEducation(!education)}
            >
              {education ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              <AiFillFolder className="text-green-300" />
              education
            </button>
            <div
              className={`py-2 pl-12 gap-1 items-start ${education ? "flex flex-col" : "hidden"}`}
            >
              <button
                value="university"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              >
                <AiFillFileMarkdown />
                university.md
              </button>
              <button
                value="secundary"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              >
                <AiFillFileMarkdown />
                highSchool.md
              </button>
              <button
                value="courses"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              >
                <AiFillFileMarkdown />
                courses.md
              </button>
            </div>

            <button
              className="flex items-center w-full gap-1 px-6 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              onClick={() => setHobbiesDisplay(!hobbiesDisplay)}
            >
              {hobbiesDisplay ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              <AiFillFolder className="text-blue-300" />
              hobbies
            </button>
            <div
              className={`py-2 pl-12 items-start ${hobbiesDisplay ? "flex flex-col" : "hidden"}`}
            >
              <button
                value="hobbies"
                onClick={(e) => displayMainInfo(e)}
                className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
              >
                <AiFillFileMarkdown />
                hobbies.md
              </button>
            </div>
          </div>

          <button
            className="border-y  border-[rgba(255,255,255,0.1)] flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all lg:bg-inherit lg:border-y lg:border-[rgba(255,255,255,0.1)] focus:bg-gray-800 focus:bg-opacity-50"
            onClick={() => setProfInfoDisplay(!profInfoDisplay)}
          >
            {profInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            professionalInfo
          </button>
          <div className={`py-2 pl-12 items-start ${profInfoDisplay ? "flex flex-col" : "hidden"}`}>
            <button
              value="professionalExperience"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
            >
              <AiFillFileMarkdown />
              experience.md
            </button>
          </div>
          <button
            className="border-y border-[rgba(255,255,255,0.1)] flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all lg:bg-inherit lg:border-y lg:border-[rgba(255,255,255,0.1)] focus:bg-gray-800 focus:bg-opacity-50"
            onClick={() => setTecnologies(!tecnologies)}
          >
            {tecnologies ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            tecnologies
          </button>
          <div
            className={`pt-2 pb-6 pl-12 items-start gap-1  lg:border-none px-6 ${
              tecnologies ? "flex flex-col" : "hidden"
            }`}
          >
            <button
              value="frontend"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
            >
              <AiFillFileMarkdown />
              frontEnd.md
            </button>
            <button
              value="backend"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
            >
              <AiFillFileMarkdown />
              backEnd.md
            </button>
            <button
              value="others"
              onClick={(e) => displayMainInfo(e)}
              className="flex items-center gap-1 transition duration-300 ease-in-out text-start hover:text-gray-200 hover:transition-all"
            >
              <AiFillFileMarkdown />
              others.md
            </button>
          </div>
        </div>
        <main className="lg:ml-[430px] mb-8 md:h-min lg:w-[70%] lg:py-0 xl:w-[80%] 2xl:w-[85%] ">
          {interestsDetail ? (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400  lg:border-b lg:border-[rgba(255,255,255,0.1)]">
                //Interests
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">
                I am very interested in learning new things, I really like web design and user
                interface design, I am constantly learning and updating my knowledge. My goal is to
                gain experience in the area of Web Development and collaborate with the company I
                work for in order to provide quality service to potential or current clients.
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">
                    I am very interested in learning new things, I really like web design and user
                    interface design, I am constantly learning and updating my knowledge. My goal is
                    to gain experience in the area of Web Development and collaborate with the
                    company I work for in order to provide quality service to potential or current
                    clients.
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : educationSecundaryDetail ? (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //High School
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">Dolores Lavalle Technical School</p>
              <p className="px-6 lg:py-8 lg:hidden">Computer technician</p>
              <p className="px-6 lg:py-8 lg:hidden">2012 - 2018</p>
              <p className="px-6 lg:py-8 lg:hidden">
                Acquiring solid knowledge about analytical thinking and object-oriented programming
                foundations, I also learned several languages, including C++, C# and MySQL that gave
                me the foundation for my career as a fullstack developer
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9 10</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">Dolores Lavalle Technical School</p>
                  <p className="max-w-2xl pl-4">Computer technician</p>
                  <p className="max-w-2xl pl-4">2012 - 2018</p>
                  <p className="max-w-2xl pl-4">
                    Acquiring solid knowledge about analytical thinking and object-oriented
                    programming foundations, I also learned several languages, including C++, C# and
                    MySQL that gave me the foundation for my career as a fullstack developer
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : educationUniversityDetail ? (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //University
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">University of Buenos aires (UBA)</p>
              <p className="px-6 lg:py-8 lg:hidden">Graphic design</p>
              <p className="px-6 lg:py-8 lg:hidden">2019 - 2020</p>
              <p className="px-6 lg:py-8 lg:hidden">
                I did the cbc of the career for more than a year in which I acquired various
                knowledge that expanded my creativity and gave me tools to complement front end
                development
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">University of Buenos aires (UBA)</p>
                  <p className="max-w-2xl pl-4">Graphic design</p>
                  <p className="max-w-2xl pl-4">2019 - 2020</p>
                  <p className="max-w-2xl pl-4">
                    I did the cbc of the career for more than a year in which I acquired various
                    knowledge that expanded my creativity and gave me tools to complement front end
                    development
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : educationCoursesDetail ? (
            <div className="flex flex-col h-min border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //courses.md
              </h3>
              <ul className="flex flex-col gap-4 p-6 text-gray-200 md:px-28 lg:hidden ">
                <li className="text-2xl font-bold">🌱My courses</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-6 px-8 py-2">
                  <div className="flex flex-col gap-2 ">
                    <div className="flex flex-col items-start justify-start w-full gap-3 mb-2 ">
                      <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                        Oct 22 - present
                      </p>
                      <p>Bootcamp Nucba</p>
                      <p className="italic text-slate-400">Fullstack Developer</p>
                    </div>
                    <p>
                      I am learning to code both the frontend and backend of web applications using
                      HTML, CSS, JavaScript, Node.js, and React. Also, I'm learning about
                      non-relational databases like MongoDB and how to build scalable and secure
                      applications. All of this is allowing me to gain a deep understanding of the
                      software development process and how to create high quality and effective
                      solutions for complex web projects.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex flex-col items-start justify-start w-full gap-3 mb-2 ">
                      <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                        Mar 22 - Sep 22
                      </p>
                      <p>Bootcamp Soy Henry</p>
                      <p className="italic text-slate-400">Fullstack Developer</p>
                    </div>
                    <p>
                      During my experience at Soy Henry, I have gained strong web programming skills
                      and cutting-edge technologies such as JavaScript, React, Node.js, MongoDB, and
                      MySQL. Furthermore, I have improved my soft skills, including effective
                      communication, teamwork and problem solving. As a result, I have the ability
                      to build complete web applications.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex flex-col items-start justify-start w-full gap-3 mb-2 ">
                      <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                        Mar 16 - Nov 16
                      </p>
                      <p>Aprende programando</p>
                      <p className="italic text-slate-400">Introduction to web development</p>
                    </div>
                    <p>
                      During my introductory course on basic web development, I've learned the
                      fundamentals of building websites, including HTML, CSS, and JavaScript. I have
                      gained skills in creating static web pages, design and content structuring,
                      and I have learned to style pages using CSS.
                    </p>
                  </div>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-180px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">🌱My courses</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-4 px-12 py-2 lg:max-h-[calc(100vh-350px)] lg:overflow-y-auto">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col items-start justify-start w-full gap-3 mb-2">
                        <div className="gap-4 lg:flex lg:flex-col lg:items-start xl:flex-row xl:items-center">
                          <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            Oct 22 - present
                          </p>
                          <div className="flex gap-1">
                            <p>Bootcamp Nucba</p>
                            <span className="text-rose-500">-</span>
                            <p className="italic text-slate-400">Fullstack Developer</p>
                          </div>
                        </div>
                      </div>
                      <p>
                        I am learning to code both the frontend and backend of web applications
                        using HTML, CSS, JavaScript, Node.js, and React. Also, I'm learning about
                        non-relational databases like MongoDB and how to build scalable and secure
                        applications. All of this is allowing me to gain a deep understanding of the
                        software development process and how to create high quality and effective
                        solutions for complex web projects.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex flex-col items-start justify-start w-full gap-3 mb-2">
                        <div className="gap-4 lg:flex lg:flex-col lg:items-start xl:flex-row xl:items-center">
                          <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            Mar 22 - Sep 22
                          </p>
                          <div className="flex gap-1">
                            <p>Bootcamp Soy Henry</p>
                            <span className="text-rose-500">-</span>
                            <p className="italic text-slate-400">Fullstack Developer</p>
                          </div>
                        </div>
                      </div>
                      <p>
                        During my experience at Soy Henry, I have gained strong web programming
                        skills and cutting-edge technologies such as JavaScript, React, Node.js,
                        MongoDB, and MySQL. Furthermore, I have improved my soft skills, including
                        effective communication, teamwork and problem solving. As a result, I have
                        the ability to build complete web applications.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex flex-col items-start justify-start w-full gap-3 mb-2">
                        <div className="gap-4 lg:flex lg:flex-col lg:items-start xl:flex-row xl:items-center">
                          <p className="px-4 py-2 text-sm bg-gray-600 border border-gray-800 drop-shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            Mar 16 - Nov 16
                          </p>
                          <div className="flex gap-1">
                            <p>Aprende programando</p>
                            <span className="text-rose-500">-</span>
                            <p className="italic text-slate-400">Introduction to web development</p>
                          </div>
                        </div>
                      </div>
                      <p>
                        During my introductory course on basic web development, I've learned the
                        fundamentals of building websites, including HTML, CSS, and JavaScript. I
                        have gained skills in creating static web pages, design and content
                        structuring, and I have learned to style pages using CSS.
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : hobbiesDetail ? (
            <div className="flex flex-col h-min gap-4 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //hobbies.md
              </h3>
              <ul className="flex flex-col gap-4 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">🎮My hobbies</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <p className="px-6">
                  In my free time I really like to work on small projects to develop my skills in
                  the front end, I also look for new trends in web development.
                </p>
                <p className="px-6">
                  I really like drawing on paper or digitally, I really like creating characters and
                  everything my creativity imagines
                </p>
                <p className="px-6">
                  I also really like playing video games with friends or with people I meet in said
                  games, there is always someone to meet!
                </p>
                <p className="px-6">
                  With the latter comes another of my hobbies, which is streaming, it can be while
                  playing or drawing, it is something that I really enjoy doing since I always meet
                  someone new and I really enjoy talking to new people.
                </p>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">🎮My hobbies</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-4 px-12 py-2">
                    <p>
                      In my free time I really like to work on small projects to develop my skills
                      in the front end, I also look for new trends in web development.
                    </p>
                    <p>
                      I really like drawing on paper or digitally, I really like creating characters
                      and everything my creativity imagines
                    </p>
                    <p>
                      I also really like playing video games with friends or with people I meet in
                      said games, there is always someone to meet!
                    </p>
                    <p>
                      With the latter comes another of my hobbies, which is streaming, it can be
                      while playing or drawing, it is something that I really enjoy doing since I
                      always meet someone new and I really enjoy talking to new people.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          ) : professionalExp ? (
            <div className="flex flex-col h-min gap-2 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //experience.md
              </h3>
              <ul className="flex flex-col gap-4 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">👨‍💻Work</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-start w-full gap-1 mb-2 lg:py-8 lg:hidden">
                      <p className="font-bold">Cashier</p>
                      <span className="text-rose-500">@</span>
                      <p>Supermarket</p>
                    </div>
                    <p className="italic">Sep 2020 - Feb 2022</p>
                    <p>
                      I acquired important skills in customer service, handling monetary
                      transactions and teamwork.
                    </p>
                    <p>
                      Developed a detailed record of transactions, handled difficult situations, and
                      worked closely with other staff members to ensure efficiency and customer
                      satisfaction.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-start w-full gap-1 mb-2">
                      <p className="font-bold">Illustrator</p>
                      <span className="text-rose-500">@</span>
                      <p>Freelance</p>
                    </div>
                    <p className="italic">Mar 2020 - Feb 2021</p>
                    <p>
                      I gained important skills in project management, client communication, and
                      delivering high-quality work.
                    </p>
                    <p>
                      I also highlight the ability to establish long-term working relationships with
                      clients.
                    </p>
                  </div>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">👨‍💻Work</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-4 px-12 py-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-start w-full gap-1">
                        <p className="font-bold">Cashier</p>
                        <span className="text-rose-500">@</span>
                        <p>Supermarket</p>
                      </div>
                      <p className="italic">Sep 2020 - Feb 2022</p>
                      <p>
                        I acquired important skills in customer service, handling monetary
                        transactions and teamwork.
                      </p>
                      <p>
                        Developed a detailed record of transactions, handled difficult situations,
                        and worked closely with other staff members to ensure efficiency and
                        customer satisfaction.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-start w-full gap-1">
                        <p className="font-bold">Digital Illustrator</p>
                        <span className="text-rose-500">@</span>
                        <p>Freelance</p>
                      </div>
                      <p className="italic">Mar 2020 - Feb 2021</p>
                      <p>
                        I gained important skills in project management, client communication, and
                        delivering high-quality work.
                      </p>
                      <p>
                        I also highlight the ability to establish long-term working relationships
                        with clients.
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : frontend ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //frontend.md
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">🎨Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  {frontData.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        {item.emoteImport}
                        <p className="text-white">{item.title}</p>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">🎨Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-12 py-2">
                    {frontData.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                        <li className="flex items-center gap-2 group">
                          {item.emoteImport}
                          <p className="text-white">{item.title}</p>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          ) : backend ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //backend.md
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">💻Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  {backData.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        {item.emoteImport}
                        <p className="text-white">{item.title}</p>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">💻Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-12 py-2">
                    {backData.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                        <li className="flex items-center gap-2 group">
                          {item.emoteImport}
                          <p className="text-white">{item.title}</p>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          ) : others ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //Others.md
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">💾Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  {otherData.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        {item.emoteImport}
                        <p className="text-white">{item.title}</p>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">💾Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-12 py-2">
                    {otherData.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                        <li className="flex items-center gap-2 group">
                          {item.emoteImport}
                          <p className="text-white">{item.title}</p>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //Personal information
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">📖 Overview</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 mb-8">
                  <h3 className="text-xl font-normal">Passionate Developer</h3>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <p className="text-base">
                    Hello everyone, my name is Abigail and I'm originally from Argentina. I am a
                    passionate developer with over one year of academic experience in the field. I
                    love to create digital experiences that bring together my skills in both design
                    and development.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  <h3 className="text-xl font-normal">Impactful Programming</h3>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <p className="text-base">
                    For me, programming is not only about writing code but also about creating
                    something that can impact people's lives. I enjoy working on challenging
                    projects and pushing myself to learn new technologies and skills to make my work
                    better. My goal is to continue to grow as a developer and to make meaningful
                    contributions to the tech community.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-normal">From Graphic Design to Full Stack</h3>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <p className="text-base">
                    I started in the world of programming in high school, programming with C# and
                    C++ and it wasn't until I took an introductory web development course that my
                    curiosity about the world of web development grew. I studied graphic design for
                    a year at the UBA and that gave me UI knowledge to integrate into my career as a
                    full stack developer.
                  </p>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-[90%] gap-5 h-min">
                  <li className="text-4xl font-bold">📖 Overview</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 mb-8">
                      <h3 className="text-2xl font-normal">Passionate Developer</h3>
                      <span className="border-b border-[rgba(255,255,255,0.1)]" />
                      <p>
                        Hello everyone, my name is Abigail and I'm originally from Argentina. I am a
                        passionate developer with over one year of academic experience in the field.
                        I love to create digital experiences that bring together my skills in both
                        design and development.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                      <h3 className="text-2xl font-normal">Impactful Programming</h3>
                      <span className="border-b border-[rgba(255,255,255,0.1)]" />
                      <p>
                        For me, programming is not only about writing code but also about creating
                        something that can impact people's lives. I enjoy working on challenging
                        projects and pushing myself to learn new technologies and skills to make my
                        work better. My goal is to continue to grow as a developer and to make
                        meaningful contributions to the tech community.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-normal">From Graphic Design to Full Stack</h3>
                      <span className="border-b border-[rgba(255,255,255,0.1)]" />
                      <p>
                        I started in the world of programming in high school, programming with C#
                        and C++ and it wasn't until I took an introductory web development course
                        that my curiosity about the world of web development grew. I studied graphic
                        design for a year at the UBA and that gave me UI knowledge to integrate into
                        my career as a full stack developer.
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </main>
      </section>

      <Footer />
    </div>
  );
};
