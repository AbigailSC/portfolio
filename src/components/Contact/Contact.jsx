import React from "react";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { ContactForm } from "../ContactForm/ContactForm";
import { FiExternalLink } from "react-icons/fi";
import { Footer } from "../Footer/Footer";

export const Contact = () => {
  const [contacts, setContacs] = useState(false);
  const [others, setOthers] = useState(false);
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col w-full pt-20 text-xl lg:flex-row lg:pt-12">
        <div className="flex flex-col lg:w-[30%] xl:w-[20%] 2xl:w-[15%] gap-1 lg:gap-0 lg:h-[calc(100vh-106px)] lg:border-r lg:border-slate-700">
          <h2 className="p-5 text-white">_contact</h2>
          <button
            className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all lg:bg-inherit lg:border-y lg:border-slate-700"
            onClick={() => setContacs(!contacts)}
          >
            {contacts ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            contacts
          </button>
          <div className={`py-4 px-6 ${contacts ? "flex flex-col" : "hidden"}`}>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
                <FiExternalLink />
                <a href="https://www.linkedin.com/in/abigailsarzuri/" target="_black">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
                <FiExternalLink />
                <a href="https://github.com/AbigailSC" target="_black">
                  Github
                </a>
              </li>
              <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
                <FiExternalLink />
                <a href="https://twitter.com/abigail_sarzuri" target="_black">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <button
            className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all lg:bg-inherit lg:border-y lg:border-slate-700"
            onClick={() => setOthers(!others)}
          >
            {others ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
            findMeAlsoIn
          </button>
          <div
            className={`py-4 border-b border-slate-700 px-6 md:mt-0 ${
              others ? "flex flex-col" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
                <FiExternalLink />
                Twith profile
              </li>
            </ul>
          </div>
        </div>
        <main className="mb-8 lg:w-[70%] lg:py-0 xl:w-[80%] 2xl:w-[85%] flex justify-center items-center">
          <ContactForm />
        </main>
      </section>
      <Footer />
    </div>
  );
};
