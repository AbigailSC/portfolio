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
    <div className="flex flex-col justify-between h-screen bg-gradient-to-r bg-slate-900 text-slate-400 font-RobotoMono">
      <Navbar />
      <section className="flex flex-col gap-1 pt-20 text-xl lg:bg-red-900">
        <h2 className="p-5 text-white">_contact</h2>
        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setContacs(!contacts)}
        >
          {contacts ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          contacts
        </button>
        <div
          className={`md:block md:pb-0 py-4 px-6 md:mt-0 ${contacts ? "flex flex-col" : "hidden"}`}
        >
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
              <FiExternalLink />
              LinkedIn
            </li>
            <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
              <FiExternalLink />
              Github
            </li>
            <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
              <FiExternalLink />
              Twitter
            </li>
          </ul>
        </div>
        <button
          className="flex items-center w-full px-5 py-2 transition duration-300 ease-in-out cursor-pointer text-start bg-slate-800 hover:text-white hover:transition-all"
          onClick={() => setOthers(!others)}
        >
          {others ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          findMeAlsoIn
        </button>
        <div
          className={`md:block md:pb-0 py-4 px-6 md:mt-0 ${others ? "flex flex-col" : "hidden"}`}
        >
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer hover:text-white hover:transition-all">
              <FiExternalLink />
              Twith profile
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};
