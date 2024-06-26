import React from "react";
import nature from "../assets/px2.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section
        className=" bg-fixed bg-cover bg-center h-screen text-white "
        style={{
          backgroundImage: `url(${nature})`,
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-[85vh] ">
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"> */}
          {/* <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={heroImg}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div> */}

          <div className="lg:py-24  flex items-center justify-center flex-col">
            <h2
              className="md:text-7xl font-bold text-black border-white text-7xl md:my-0 my-8"
              style={{ WebkitTextStroke: "1px white" }}
            >
              <span>Hey,</span>
              <span> I'm Kishan</span>
            </h2>

            <p className="text-2xl font-bold text-white bg-black  md:text-white md:text-4xl text-center my-10 ">
              I'm a versatile full-stack Web Developer, transforming ideas into
              stunning and functional web applications.
            </p>

            <div className="flex md:flex-row flex-col ">
              <a
                href="mailto:kishankmr8078@gmail.com"
                className="mt-8 md:h-16 md:border-white  bg-black hover:bg-transparent md:bg-black md:mx-5  md:w-60 text-xl inline-block rounded border-2 scale-110 hover:scale-100 transform transition-transform duration-300 ease-in-out px-12 py-3 font-medium text-white  text-center"
              >
                Get in Touch
              </a>

              <Link
                to="skills"
                duration={500}
                smooth={true}
                className="mt-8 md:h-16 md:border-white  bg-black hover:bg-black md:bg-transparent md:mx-5 md:w-60 text-xl inline-block rounded border-2 scale-110 hover:scale-100 transform transition-transform duration-300 ease-in-out px-12 py-3 font-medium text-white  text-center cursor-pointer"
              >
                See My Skills
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
