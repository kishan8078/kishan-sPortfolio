import React from "react";
//Book store , weather app , asp.net , django , marine backend , crickect
import bk1 from "../assets/bk1.png";
import wa from "../assets/weatherApp.png";
import aspnet from "../assets/aspnet.png";
import django from "../assets/django.png";
import mb from "../assets/marine_backend.png";
import cc from "../assets/cricket.png";
const Work = () => {
  return (
    <div className=" lg:h-[100vh] h-auto bg-white">
      <div className="flex justify-center content-center ">
        <h1 className="text-3xl font-bold text-black">Works</h1>
      </div>

      <div className="content-center justify-center flex py-7 px-7 md:pxauto lg:h-[90vh] h-auto">
        <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 md:gap-4 lg:w-[60vw]  md:w-[60vw] w-screen">
          {/* <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 hover:bg-slate-950"> */}

          <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://kishan8078.github.io/WeatherWeb/index.html"
              target="_blank"
              className="relative flex "
            >
              <img
                alt=""
                src={wa}
                className="absolute inset-0 l object-cover opacity-100 md:opacity-50 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Weather APP
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  React JS
                </p>
              </div>
            </a>
          </div>

          <div className=" bg-gray-900 h-[35vh] w-full md:w-auto  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://github.com/kishan8078/Book-Store"
              className="relative flex "
            >
              <img
                alt=""
                src={bk1}
                className="absolute inset-0 l object-cover md:opacity-50 opacity-100 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Book store
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  MERN Stack
                </p>
              </div>
            </a>
          </div>

          <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://github.com/kishan8078/Asp.net-CRUD-APIs"
              className="relative flex "
              target="_blank"
            >
              <img
                alt=""
                src={aspnet}
                className="absolute inset-0 l object-cover opacity-100 md:opacity-50 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Education Management
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  ASP.NET & React JS
                </p>
              </div>
            </a>
          </div>

          <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://github.com/kishan8078/Django-CRUD-Operaions/tree/master/crudsystem"
              target="_blank"
              className="relative flex "
            >
              <img
                alt=""
                src={django}
                className="absolute inset-0 l object-cover opacity-100 md:opacity-50 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Task Manager
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Django
                </p>
              </div>
            </a>
          </div>

          <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://github.com/kishan8078?tab=repositories"
              className="relative flex "
              target="_blank"
            >
              <img
                alt=""
                src={mb}
                className="absolute inset-0 l object-cover opacity-100 md:opacity-50 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Log-Book Backend
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Node js
                </p>
              </div>
            </a>
          </div>

          <div className=" bg-gray-900 h-[35vh]  flex flex-col  sm:mt-1 group shadow-xl shadow-black">
            <a
              href="https://github.com/kishan8078/Cricket-DBMS"
              className="relative flex "
              target="_blank"
            >
              <img
                alt=""
                src={cc}
                className="absolute inset-0 l object-cover opacity-100 md:opacity-50 transition-opacity group-hover:opacity-100 group"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 md:group-hover:translate-y-28 transition-all translate-y-40 md:translate-y-0 ">
                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Cricket Website
                </p>

                <p
                  className="text-xl font-bold text-black border-white sm:text-2xl"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  PHP
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
