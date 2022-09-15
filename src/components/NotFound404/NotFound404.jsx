import React from "react";
import clipHelp from "../../assets/clip.png";

export const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="relative w-64 h-32 text-black bg-amber-200 rounded-xl flex justify-center items-center text-xl text-center p-4">
        Parece que lo estas buscando no existe.
        <div className="absolute border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[32px] border-t-amber-200 top-[100%] right-8 translate-y-[-50%]"></div>
      </div>
      <img src={clipHelp} alt="404 not found" className="w-72 h-72" />
    </div>
  );
};
