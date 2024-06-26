import React from "react";
import laptop from "../assets/desk.jpg";
import uv from "../assets/uv.jpg";
import res from "../assets/KR.pdf";

const Resume = () => {
  return (
    <>
      <section
        className=" overflow-hidden shadow-2xl md:grid md:grid-cols-3 px-0 md:px-11 h-auto bg-grey md:h-[46vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${uv})`,
          opacity: 2,
        }}
      >
        <img
          alt=""
          src={laptop}
          className="h-32 w-full  object-cover md:h-56 shadow shadow-black hidden md:block"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <h2 className="mt-6 font-black uppercase mb-8">
            <span className="text-4xl text-white sm:text-5xl lg:text-6xl">
              {" "}
              Check out my RÉSUMÉ!{" "}
            </span>
          </h2>

          <div className="relative">
            <a
              className="group md:w-[35vw] relative inline-block text-sm font-medium text-black focus:outline-none focus:ring hover:bg-transparent"
              href={res}
              target="_blank"
              rel="noopener noreferrer" // This attribute is recommended for security reasons
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-transparent"></span>
              <span className="relative block border border-current bg-transparent px-8 py-3 text-2xl text-white">
                Grab a copy
              </span>
            </a>
          </div>

          {/* <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Resume;
