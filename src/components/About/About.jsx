import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";

export const About = () => {
  const [personaInfoDisplay, setPersonalInfoDisplay] = useState(false);
  const [profInfoDisplay, setProfInfoDisplay] = useState(false);
  const [hobbiesDisplay, setHobbiesDisplay] = useState(false);
  return (
    <div className="bg-gradient-to-r bg-slate-900  text-slate-400 font-RobotoMono h-screen">
      <Navbar />
      <section className="pt-20 text-xl flex flex-col gap-1">
        <h2 className="text-white p-5">_aboutMe</h2>

        <button
          className="w-full text-start px-5 py-2 bg-slate-800 flex items-center"
          onClick={() => setPersonalInfoDisplay(!personaInfoDisplay)}
        >
          {personaInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          personalInfo
        </button>
        <div
          className={`md:block md:pb-0 md:mt-0 ${personaInfoDisplay ? "flex flex-col" : "hidden"}`}
        >
          <button>interests</button>
          <button>education</button>
        </div>

        <button
          className="w-full text-start px-5 py-2 bg-slate-800 flex items-center"
          onClick={() => setProfInfoDisplay(!profInfoDisplay)}
        >
          {profInfoDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          professionalInfo
        </button>
        <div className={`md:block md:pb-0 md:mt-0 ${profInfoDisplay ? "flex flex-col" : "hidden"}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta iusto aperiam
            veritatis fugiat repellendus delectus sed esse ex nobis nisi, rerum atque nesciunt, et
            doloremque reprehenderit veniam incidunt magnam.
          </p>
        </div>

        <button
          className="w-full text-start px-5 py-2 bg-slate-800 flex items-center"
          onClick={() => setHobbiesDisplay(!hobbiesDisplay)}
        >
          {hobbiesDisplay ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          hobbies
        </button>
        <div className={`md:block md:pb-0 md:mt-0 ${hobbiesDisplay ? "flex flex-col" : "hidden"}`}>
          <ul>
            <li>Streaming</li>
            <li>Play videogames</li>
            <li>Create apps about games</li>
            <li>Programming</li>
            <li>Listeng music</li>
          </ul>
        </div>

        <main>
          <h3>// personalInfo</h3>
          <p>
            I have 1 year of experience in Full stack development Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nostrum laborum ipsam molestias expedita voluptatibus
            deserunt corrupti atque officia laboriosam fugiat. Similique laudantium, dicta corrupti
            delectus cupiditate iusto odio. Quibusdam, dolorem?
          </p>
        </main>
      </section>
    </div>
  );
};
