import React, { useState } from "react";
import tecnologies from "./utils.js";
import text from "../../assets/iconText.png";
import funcMouseMove from "../utils/mouseEvent.js";

export const Skills = () => {
  const [closeBtn, setCloseBtn] = useState("none");
  const handleCloseBtn = (value) => {
    setCloseBtn(value);
  };
  funcMouseMove("moveSkills");
  return (
    <section>
      <img
        src={text}
        alt="Skills.txt"
        className="h-32 cursor-pointer"
        onClick={() => handleCloseBtn("block")}
      />
      <p className="text-xl text-gray-200">Habilidades.txt</p>
      <div
        id="moveSkills"
        style={closeBtn === "none" ? { display: "none" } : { display: "block" }}
        className="fixed w-full p-1 font-medium text-left shadow-lg bg-stone-300 sm:w-7/12 lg:w-6/12 2xl:w-4/12 2xl:h-max "
      >
        <div className="flex flex-row justify-between p-2 bg-gradient-to-r from-blue-800 to-blue-500">
          <div className="flex items-center justify-center gap-1">
            <img src={text} className="w-5 h-5" />
            <h1 className="text-stone-100">Habilidades.txt</h1>
          </div>
          <div
            onClick={() => handleCloseBtn("none")}
            className="flex items-center justify-center w-6 h-6 cursor-pointer bg-stone-300 active:bg-stone-400"
            style={{ border: "2px outset", outline: "none" }}
          >
            <svg
              className="w-4 h-4 fill-black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row gap-3 p-1">
          <p>Archivo</p>
          <p>Edición</p>
          <p>Buscar</p>
          <p>Ayuda</p>
        </div>
        <div className="p-6 bg-stone-50">
          <h2 className="text-xl">Tecnologias Front-end:</h2>
          <ul className="my-5">
            {tecnologies.front.map((tecnology, index) => (
              <li key={index}>{tecnology}</li>
            ))}
          </ul>
          <h2 className="text-xl">Tecnologias Back-end:</h2>
          <ul className="my-5">
            {tecnologies.back.map((tecnology, index) => (
              <li key={index}>{tecnology}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
