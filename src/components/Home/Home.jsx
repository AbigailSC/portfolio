import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { projectsReverse } from "../utils/dataProjects.js";
import { HiDownload } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../../assets/Abigail_Sarzuri_Backend_Developer.pdf";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper";

export const Home = () => {
  const [text, count] = useTypewriter({
    words: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 4000,
  });
  const length = projectsReverse.length;
  const boxLanding = projectsReverse.filter((obj) => obj.id > length - 4);
  return (
    <div
      className={`flex flex-col justify-between w-full h-full min-h-screen text-slate-400 font-RobotoMono`}
    >
      <Navbar />
      <section className="flex mt-16 flex-col items-center justify-center h-[90vh] gap-4 leading-10 text-center lg:px-10 lg:flex-row lg:text-left lg:pt-6 xl:pt-0 xl:justify-center xl:gap-20">
        <div className="flex flex-col justify-center gap-5 mt-16h-[60%] sm:w-full sm:mt-16 sm:h-[40%] lg:mt-0 xl:w-[50%] xl:max-w-[800px] 2xl:max-w-[700px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl xl:text-2xl">Hi all! I am</h2>
            <h1 className="text-6xl xl:text-7xl">Abigail Sarzuri</h1>
            <h2 className="text-xl text-rose-500 xl:text-2xl">
              {text} <Cursor />
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-slate-500">//download my CV:</h2>
            <button className="flex shadow-xl justify-center self-center max-w-[200px] px-4 py-3 text-lg rounded-xl lg:self-start bg-slate-800 transition duration-300 ease-in-out hover:transition-all hover:bg-slate-700 hover:text-gray-200">
              <a href={CV} download={CV} className="flex items-center self-center gap-2">
                Download <HiDownload />
              </a>
            </button>
          </div>
        </div>
        <div className="w-full h-[40%] flex items-center px-10 lg:w-[700px] mb-4 sm:w-full sm:h-[60%] lg:h-[280px] lg:mb-0 lg:px-0 xl:h-min xl:w-[540px] 2xl:w-[580px] 2xl:h-[340px]">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCoverflow]}
            centeredSlides={true}
            grabCursor={true}
            className="w-full max-w-[400px] h-[80%] sm:max-w-[512px] sm:h-[67%] md:h-[74%] lg:h-[270px] lg:max-w-full xl:h-[320px] xl:max-w-full lg:w-full 2xl:h-[340px]"
          >
            {boxLanding.reverse().map((project) => (
              <SwiperSlide key={project.id} className="grid w-full h-52 sm:h-60 lg:h-full">
                <div className="p-1 flex flex-col justify-around rounded-lg shadow-xl border-[rgba(255,255,255,0.1) bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-start">
                  <h2 className="px-2">
                    Project {project.id + 1} <span className="text-rose-500"> @ </span>
                    {project.name}
                  </h2>
                  <img src={project.img} alt={project.name} className="rounded-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  );
};
