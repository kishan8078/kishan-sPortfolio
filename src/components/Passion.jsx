import React from "react";

import database from "../assets/database.png";
import fdev from "../assets/fdev.png";
import bdev from "../assets/bdev.png";

const Passion = () => {
  return (
    <>
      <section className=" text-black h-auto lg:h-[100vh] bg-qqq">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:mb-[15vh]">
              What I Do
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <p className="block rounded-xl border hover:border-gray-300 p-8 shadow-xl transition border-black shadow-black">
              <img alt="" src={fdev} className="h-[7vh]" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Frontend Development
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Creating intuitive and engaging user interfaces with modern web
                technologies.
              </p>
            </p>

            <p className="block rounded-xl border hover:border-gray-300 p-8 shadow-xl transition border-black shadow-black">
              <img alt="" src={bdev} className="h-[7vh]" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Backend Development
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Building scalable and secure backend systems to power your
                applications.
              </p>
            </p>

            <p className="block rounded-xl border hover:border-gray-300 p-8 shadow-xl transition border-black shadow-black">
              <img alt="" src={database} className="h-[7vh]" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Database Management
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Ensuring data integrity and optimizing database performance for
                your applications.
              </p>
            </p>
          </div>

          <p className="mt-10 text-black font-bold text-center ">
            Apart from my professional interests, I enjoy creating music using
            digital audio workstations (DAWs).
          </p>

          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/kishan8078"
              target="_blank"
              className="inline-block rounded bg-black px-12 py-7 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
            >
              View my LinkedIn Page
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Passion;
