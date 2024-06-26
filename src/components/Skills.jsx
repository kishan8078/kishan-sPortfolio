import React from "react";

import reactjs from "../assets/pngs/rjs.png";
import tailwind from "../assets/pngs/tailwindcss.png";
import bootstrap from "../assets/pngs/bootstrap.png";

import nodejs from "../assets/pngs/nodejs.png";
import aspnet from "../assets/pngs/aspnet.png";
import django from "../assets/pngs/django.png";

import sql from "../assets/pngs/sql.png";
import mongodb from "../assets/pngs/mdb.png";

import cplus from "../assets/pngs/c++.png";
import c from "../assets/pngs/c.png";
import csharp from "../assets/pngs/csharp.png";

import py from "../assets/pngs/python.png";
import java from "../assets/pngs/javaLogo.png";
import js from "../assets/pngs/js.png";

// reactjs tailwindcss bootstrap sql mongodb aspnet django nodejs
// c++ c c# python java javascript
const Skills = () => {
  return (
    <div className="h-auto  bg-qqq py-5">
      <div className="w-full h-full font-bold text-3xl  text-center">
        <h1>Skills</h1>
        <div className="flex items-center justify-center  ">
          <div className=" h-full gap-3 w-[70vw] md:w-[70vw] grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2">
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={reactjs}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={tailwind}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-50 scale-75 "
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={bootstrap}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75 scale-90"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={nodejs}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75 scale-90"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={aspnet}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75 scale-90"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={django}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75 scale-90"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={sql}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75  h-[6vh] w-[6vh] md:h-[11vh] md:w-[5vw]"
                />
              </div>
            </div>
            <div className="grid justify-center place-items-center p-3  ">
              <div className="bg-white md:w-32 md:h-32 h-24 w-24 group overflow-hidden border-black text-center flex items-center  justify-center rounded-full md:gap-3  shadow-xl cursor-pointer shadow-black hover:scale-110 group transition-transform duration-200">
                <img
                  src={mongodb}
                  alt=""
                  className="transition-transform duration-250 group-hover:scale-75 h-[8vh] w-[8vh] md:h-[10vh] md:w-[4vw]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-normal items-center flex-col">
          <div className="text-center text-xl md:text-2xl md:py-[3vh] pt-[2vh]">
            Programming Languages{" "}
          </div>
          <div className="grid  md:grid-cols-6 md:grid-rows-1 grid-cols-3 grid-rows-2  py-1  md:w-[60vw] md:h-[20vh] w-[80vw]">
            <div className=" p-3 flex justify-center items-center ">
              <img
                src={cplus}
                alt=""
                className="hover:translate-y-4 cursor-cell h-[6vh] w-[6vh] md:h-[12vh] md:w-[5.4vw]"
              />
            </div>
            <div className=" p-3  flex justify-center items-center">
              <img
                src={c}
                alt=""
                className="hover:translate-y-4 cursor-cell h-[6.4vh] w-[6.4vh] md:h-[12vh] md:w-[5.4vw]"
              />
            </div>
            <div className=" p-3 h-auto w-auto   flex justify-center items-center">
              <img
                src={csharp}
                alt=""
                className="hover:translate-y-4 cursor-cell h-[6vh] w-[6vh] md:h-[11vh] md:w-[5vw]"
              />
            </div>
            <div className=" p-3  flex justify-center items-center">
              <img
                src={py}
                alt=""
                className="h-auto w-auto scale-50 hover:translate-y-4 cursor-cell"
              />
            </div>
            <div className=" p-3 flex justify-center items-center h-auto w-auto">
              <img
                src={java}
                alt=""
                className="h-[10vh] w-[10vh] md:h-[23vh] md:w-[10vw] scale-50 hover:translate-y-4 cursor-cell"
              />
            </div>
            <div className=" p-3 h-auto w-auto hover:cursor-cell  flex justify-center items-center">
              <img
                src={js}
                alt=""
                className="scale-50 hover:translate-y-4 cursor-cell"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
