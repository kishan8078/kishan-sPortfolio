import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-qqq text-black">
        <div className="mx-auto max-w-5xl px-4 py-6 md:py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center "></div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-xl font-bold">
            I'm a lifelong learner who loves tackling challenges head-on, always
            striving to create innovative solutions with precision and
            dedication. Consistency is the key!
          </p>

          {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"> */}
          <div className="social-icons mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
            <a
              href="https://www.linkedin.com/in/kishan8078"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <FaLinkedin className="icon text-4xl" />
            </a>
            <a
              href="https://github.com/kishan8078"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <FaGithub className="icon text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/kishan_k02/"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <FaInstagram className="icon text-4xl" />
            </a>
            <a
              href="mailto:kishankmr8078@gmail.com"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <AiOutlineMail className="text-4xl" />
            </a>
          </div>
        </div>
        {/* Please don't steal my stuff without my permission */}
        <p className="text-center text-sm">KishanKumar@2024</p>
      </footer>
    </>
  );
};

export default Footer;

{
  /* <a
  className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
  href="#"
>
  <span className="absolute inset-0 border border-current"></span>
  <span
    className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Download
  </span>
</a> */
}
