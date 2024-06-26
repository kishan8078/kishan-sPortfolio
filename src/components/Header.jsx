import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PortfolioLogo from "../assets/PortfolioLogo.jpeg";

const Header = () => {
  const [yolo, setYolo] = useState(false); //varible to translate navbar in x direct. when hamburger pressed
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
        setYolo(false);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
        setYolo(false);
      } else {
        setIsVisible(true);
        setYolo(false);
      }
      setLastScrollY(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggle = () => {
    if (window.scrollY === lastScrollY) {
      setYolo(false);
    }
    setYolo(!yolo);
  };

  return (
    <>
      <header
        className={`md:z-10 z-20 text-xl content-center md:h-28 h-[9vh] sticky top-0  bg-black transition-transform duration-200 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  mt-0 rounded-xl">
          <div className=" z-20 flex h-16 items-center justify-between mx-auto ">
            {/* logo */}
            <div className="z-10 flex-1 md:flex md:items-center md:gap-1  h-auto w-auto overflow-hidden">
              <a
                className=" text-white  h-auto w-[15vw] flex justify-center items-center"
                href="#"
              >
                <img
                  src={PortfolioLogo}
                  alt="kishan's logo"
                  className="h-11 md:scale-[2.5] scale-[2.5] md:translate-x-0 translate-x-7"
                />
              </a>
            </div>

            {/* medium and above navbar */}
            <div className="z-10 md:flex hidden md:items-center md:gap-12  text-3xl md:w-[50vw] ">
              <nav aria-label="Global" className="md:flex  w-full">
                <ul className="flex items-center justify-between gap-10 text-sm  w-full">
                  <li className="">
                    <Link
                      to="hero"
                      smooth={true}
                      duration={500}
                      className="text-white transition hover:text-slate-300 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="passion"
                      smooth={true}
                      duration={500}
                      className="text-white transition hover:text-slate-300 cursor-pointer"
                    >
                      Passion
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="work"
                      smooth={true}
                      duration={500}
                      className="text-white transition hover:text-slate-300 cursor-pointer"
                    >
                      Works
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      className="text-white transition hover:text-slate-300 cursor-pointer"
                    >
                      Skills
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="footer"
                      smooth={true}
                      duration={500}
                      className="text-white transition hover:text-slate-300 cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* hamburger button */}
            <div className="z-10 flex md:hidden" onClick={toggle}>
              <button className="rounded  border-gray-600 border-2 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* mobile navbar */}
          <nav
            className={`-z-10 w-full overflow-hidden block md:hidden  rounded-b-xl text-xl transition-transform duration-200 ease-in-out bg-black ${
              yolo ? "translate-x-0" : "-translate-x-[100vw]"
            }`}
          >
            <ul className="flex flex-col items-center justify-between gap-4 py-2  w-full">
              <li className="">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="text-white transition hover:text-slate-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="passion"
                  smooth={true}
                  duration={500}
                  className="text-white transition hover:text-slate-300 cursor-pointer"
                >
                  Passion
                </Link>
              </li>

              <li>
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  className="text-white transition hover:text-slate-300 cursor-pointer"
                >
                  Works
                </Link>
              </li>

              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-white transition hover:text-slate-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="text-white transition hover:text-slate-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
