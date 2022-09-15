import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <div className="bg-gradient-to-r bg-slate-900  text-slate-400 font-RobotoMono h-screen">
      <Navbar />
      <section className="flex flex-col justify-center items-center text-center gap-10 leading-10 h-[90%] lg:flex-row lg:text-left">
        <div className="flex flex-col gap-20  mx-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl xl:text-2xl">Hi all! I am</h2>
            <h1 className="text-6xl xl:text-7xl">Abigail Sarzuri</h1>
            <h2 className="text-rose-700 text-xl xl:text-2xl">Full stack Developer</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-500 text-xl">//write the code below to continue:</h2>
            <div className="flex items-center self-center gap-2 lg:self-start">
              <h3 className="text-3xl text-blue-600 xl:text-4xl">{">"}</h3>
              <input
                className="text-3xl text-blue-600 bg-slate-900 focus:outline-none w-24 xl:text-4xl xl:w-28"
                placeholder="start"
              />
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[100px] bg-slate-100 mx-20"></div>
      </section>
    </div>
  );
};
