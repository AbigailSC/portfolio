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
        <main className="lg:ml-[430px] mb-8 md:h-min lg:w-[70%] lg:py-0 xl:w-[80%] 2xl:w-[85%]">
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
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //Courses
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">Bootcamp Henry</p>
              <p className="px-6 lg:py-8 lg:hidden">Fullsatck Developer</p>
              <p className="px-6 lg:py-8 lg:hidden">March - September (2022)</p>
              <p className="px-6 lg:py-8 lg:hidden">
                I took the henry bootcamp course which gave me the tools to be able to develop a web
                page both from the front end and from the backend, it also gave me knowledge and
                experience working as a team.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">Aprendé programando</p>
              <p className="px-6 lg:py-8 lg:hidden">Web development</p>
              <p className="px-6 lg:py-8 lg:hidden">April - September(2016)</p>
              <p className="px-6 lg:py-8 lg:hidden">
                I took a course that gave me the knowledge of HTML, CSS and some bases of
                javascript.
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9 10 11 12 13 14</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">Bootcamp Henry</p>
                  <p className="max-w-2xl pl-4">Fullsatck Developer</p>
                  <p className="max-w-2xl pl-4">March - September (2022)</p>
                  <p className="max-w-2xl pl-4">
                    I took the henry bootcamp course which gave me the tools to be able to develop a
                    web page both from the front end and from the backend, it also gave me knowledge
                    and experience working as a team.
                  </p>
                  <p className="max-w-2xl pl-4">Aprendé programando</p>
                  <p className="max-w-2xl pl-4">Web development</p>
                  <p className="max-w-2xl pl-4">April - September (2016)</p>
                  <p className="max-w-2xl pl-4">
                    I took a course that gave me the knowledge of HTML, CSS and some bases of
                    javascript.
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : hobbiesDetail ? (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //Hobbies
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">
                In my free time I really like to work on small projects to develop my skills in the
                front end, I also look for new trends in web development.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                I really like drawing on paper or digitally, I really like creating characters and
                everything my creativity imagines
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                I also really like playing video games with friends or with people I meet in said
                games, there is always someone to meet!
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                With the latter comes another of my hobbies, which is streaming, it can be while
                playing or drawing, it is something that I really enjoy doing since I always meet
                someone new and I really enjoy talking to new people.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                Last but not least, sometimes I like to just relax and listen to music, especially
                if it's with a cup of tea.
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">
                    In my free time I really like to work on small projects to develop my skills in
                    the front end, I also look for new trends in web development.
                  </p>
                  <p className="max-w-2xl pl-4">
                    I really like drawing on paper or digitally, I really like creating characters
                    and everything my creativity imagines
                  </p>
                  <p className="max-w-2xl pl-4">
                    I also really like playing video games with friends or with people I meet in
                    said games, there is always someone to meet!
                  </p>
                  <p className="max-w-2xl pl-4">
                    With the latter comes another of my hobbies, which is streaming, it can be while
                    playing or drawing, it is something that I really enjoy doing since I always
                    meet someone new and I really enjoy talking to new people.
                  </p>
                  <p className="max-w-2xl pl-4">
                    Last but not least, sometimes I like to just relax and listen to music,
                    especially if it's with a cup of tea.
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : professionalExp ? (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //Experience
              </h3>
              <p className="px-6 lg:py-8 lg:hidden">Digital Illustrator</p>
              <p className="px-6 lg:py-8 lg:hidden">Freelance</p>
              <p className="px-6 lg:py-8 lg:hidden">2020 - 2021</p>
              <p className="px-6 lg:py-8 lg:hidden">
                I worked for a year creating and designing illustrations on demand with various
                clients.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">Cashier</p>
              <p className="px-6 lg:py-8 lg:hidden">Supermarket</p>
              <p className="px-6 lg:py-8 lg:hidden">2021 - 2022</p>
              <p className="px-6 lg:py-8 lg:hidden">
                Work organizing and ordering merchandise, helping customers with their questions and
                dealing with their complaints.
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9 10 11 12 13</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">Digital Illustrator</p>
                  <p className="max-w-2xl pl-4">Freelance</p>
                  <p className="max-w-2xl pl-4">2020 - 2021</p>
                  <p className="max-w-2xl pl-4">
                    I worked for a year creating and designing illustrations on demand with various
                    clients.
                  </p>
                  <p className="max-w-2xl pl-4">Cashier</p>
                  <p className="max-w-2xl pl-4">Supermarket</p>
                  <p className="max-w-2xl pl-4">2021 - 2022</p>
                  <p className="max-w-2xl pl-4">
                    Work organizing and ordering merchandise, helping customers with their questions
                    and dealing with their complaints.
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          ) : frontend ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //Frontend
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">🎨Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiChakraui className="text-[#2DBFB4]" />
                      <p className="text-white">Chakra UI</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiCss3 className="text-[#2EA3D5]" />
                      <p className="text-white">CSS</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiHtml5 className="text-[#F16524]" />
                      <p className="text-white">HTML</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiJavascript className="text-[#F7E018]" />
                      <p className="text-white">Javascript</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiReact className="text-[#61DBFB]" />
                      <p className="text-white group-hover:transition-all">React</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiRedux className="text-[#764ABC]" />
                      <p className="text-white">Redux & Redux Toolkit</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiTailwindcss className="text-[#01B7D6]" />
                      <p className="text-white">Tailwind CSS</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiTypescript className="text-[#2d79c7]" />
                      <p className="text-white">Typescript</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiSass className="text-[#BF4080]" />
                      <p className="text-white">Sass</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiStyledcomponents className="text-[#DD6F93]" />
                      <p className="text-white">Styled components</p>
                    </li>
                  </div>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-3/4 gap-5 py-6 h-min">
                  <li className="text-4xl font-bold">🎨Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-8 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiChakraui className="text-[#2DBFB4]" />
                        <p className="text-white">Chakra UI</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiCss3 className="text-[#2EA3D5]" />
                        <p className="text-white">CSS</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiHtml5 className="text-[#F16524]" />
                        <p className="text-white">HTML</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiJavascript className="text-[#F7E018]" />
                        <p className="text-white">Javascript</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiReact className="text-[#61DBFB]" />
                        <p className="text-white group-hover:transition-all">React</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiRedux className="text-[#764ABC]" />
                        <p className="text-white">Redux & Redux Toolkit</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiTailwindcss className="text-[#01B7D6]" />
                        <p className="text-white">Tailwind CSS</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiTypescript className="text-[#2d79c7]" />
                        <p className="text-white">Typescript</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiSass className="text-[#BF4080]" />
                        <p className="text-white">Sass</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiStyledcomponents className="text-[#DD6F93]" />
                        <p className="text-white">Styled components</p>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : backend ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //Backend
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">💻Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiNodedotjs className="text-[#68A063]" />
                      <p className="text-white">NodeJs</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiExpress className="text-[#F7E018]" />
                      <p className="text-white">Express</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiMongodb className="text-[#09934E]" />
                      <p className="text-white">MongoDB</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiMongodb className="text-[#A03333]" />
                      <p className="text-white">Mongoose</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiSequelize className="text-[#2879BD]" />
                      <p className="text-white">Sequelize</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiPostgresql className="text-[#2F6792]" />
                      <p className="text-white">PostgreSQL</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiSwagger className="text-[#85EA2D]" />
                      <p className="text-white">Swagger</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiJsonwebtokens className="text-[#D63AFF]" />
                      <p className="text-white">Json web token</p>
                    </li>
                  </div>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-3/4 gap-5 py-6 h-min">
                  <li className="text-4xl font-bold">💻Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-8 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiNodedotjs className="text-[#68A063]" />
                        <p className="text-white">NodeJs</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiExpress className="text-[#F7E018]" />
                        <p className="text-white">Express</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiMongodb className="text-[#09934E]" />
                        <p className="text-white">MongoDB</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiMongodb className="text-[#A03333]" />
                        <p className="text-white">Mongoose</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiSequelize className="text-[#2879BD]" />
                        <p className="text-white">Sequelize</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiPostgresql className="text-[#2F6792]" />
                        <p className="text-white">PostgreSQL</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiSwagger className="text-[#85EA2D]" />
                        <p className="text-white">Swagger</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiJsonwebtokens className="text-[#D63AFF]" />
                        <p className="text-white">Json web token</p>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : others ? (
            <div className="flex flex-col h-min gap-1 border-t-2 lg:border-t-0 border-[rgba(255,255,255,0.1)]">
              <h3 className="px-5 py-5 text-slate-400 border-b border-[rgba(255,255,255,0.1)]">
                //Others
              </h3>
              <ul className="flex flex-col gap-3 p-6 text-gray-200 md:px-28 lg:hidden">
                <li className="text-2xl font-bold">💾Skills</li>
                <span className="border-b border-[rgba(255,255,255,0.1)]" />
                <div className="flex flex-col gap-3 px-8 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiPostman className="text-[#FF6934]" />
                      <p className="text-white">Postman</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiFigma className="text-white" />
                      <p className="text-white">Figma</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiGit className="text-[#F54D27]" />
                      <p className="text-white">Git</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiGithub className="text-white" />
                      <p className="text-white">Github</p>
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                    <li className="flex items-center gap-2 group">
                      <SiAdobephotoshop className="text-[#2DA9FF]" />
                      <p className="text-white">Adobe photoshop</p>
                    </li>
                  </div>
                </div>
              </ul>
              <div className="hidden w-full lg:justify-center lg:h-[calc(100vh-200px)] lg:flex lg:items-center">
                <ul className="flex flex-col w-3/4 gap-5 py-6 h-min">
                  <li className="text-4xl font-bold">💻Skills</li>
                  <span className="border-b border-[rgba(255,255,255,0.1)]" />
                  <div className="flex flex-col gap-3 px-8 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiPostman className="text-[#FF6934]" />
                        <p className="text-white">Postman</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiFigma className="text-white" />
                        <p className="text-white">Figma</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiGit className="text-[#F54D27]" />
                        <p className="text-white">Git</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiGithub className="text-white" />
                        <p className="text-white">Github</p>
                      </li>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
                      <li className="flex items-center gap-2 group">
                        <SiAdobephotoshop className="text-[#2DA9FF]" />
                        <p className="text-white">Adobe photoshop</p>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full gap-1">
              <h3 className="px-5 py-5 text-slate-400 lg:border-b lg:border-slate-700">
                //Personal Info
              </h3>
              {/* <img
                src="https://res.cloudinary.com/dbhb8sohh/image/upload/v1663642291/aaaaa22_oach10.png"
                className="object-cover w-72 h-72 rounded-xl"
              /> */}
              <p className="px-6 lg:py-8 lg:hidden">
                My name is Abigail, I'm from Argentina and I have 1 year of experience as a full
                stack developer with a front end orientation.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                I really enjoy coding, solving problems and building functional, visually pleasing
                and above all best practice websites in my code, using various design principles and
                patterns.
              </p>
              <p className="px-6 lg:py-8 lg:hidden">
                I started in the world of programming in high school, programming with C# and C++
                and it wasn't until I took an introductory web development course that my curiosity
                about the world of web development grew. I studied graphic design for a year at the
                UBA and that gave me UI knowledge to integrate into my career as a full stack
                developer.
              </p>
              <div className="justify-start hidden min-h-full pt-10 pl-10 lg:flex">
                <span className="flex w-2">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16</span>
                <div className="px-6 lg:flex lg:flex-col">
                  <p>{"{/*"}</p>
                  <p className="max-w-2xl pl-4">
                    My name is Abigail, I'm from Argentina and I have 1 year of experience as a full
                    stack developer with a front end orientation.
                  </p>
                  <p className="max-w-2xl pl-4">
                    I really enjoy coding, solving problems and building functional, visually
                    pleasing and above all best practice websites in my code, using various design
                    principles and patterns.
                  </p>
                  <p className="max-w-2xl pl-4">
                    I started in the world of programming in high school, programming with C# and
                    C++ and it wasn't until I took an introductory web development course that my
                    curiosity about the world of web development grew. I studied graphic design for
                    a year at the UBA and that gave me UI knowledge to integrate into my career as a
                    full stack developer.
                  </p>
                  <p>{"*/}"}</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </section>

      <Footer />
    </div>
  );
};
