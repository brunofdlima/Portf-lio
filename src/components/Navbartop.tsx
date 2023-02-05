import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { ComponentNavbar } from "./extras/ComponentNavbar";

const logo = require("../pictures/Logo.png");

export const Navbarfull = () => {
  return (
    <section className="fixed flex justify-around px-4 z-10 bg-slate-900 text-white text-2xl w-screen items-center max-[768px]:h-[3.75rem] max-[768px]:justify-between">
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-16 w-20 -translate-y-3 max-[820px]:hidden"
        />
      </div>
      <ul className="hidden md:flex items-center pr-10 pointer">
        <li>
          <ComponentNavbar item="Sobre" link="#about" />
        </li>
        <li>
          <ComponentNavbar item="Projetos" link="#projects" />
        </li>
        <li>
          <ComponentNavbar item="Tecnologias" link="#technologies" />
        </li>
        <li>
          <ComponentNavbar item="Certificações" link="#certifications" />
        </li>
      </ul>
      <button className="md:hidden py-3 px-4 rounded focus:outline-none hover:bg-gray-100 group mr-auto">
        <GiHamburgerMenu />
        <div className="absolute top-0 -left-full h-screen w-8/12 bg-slate-900 opacity-0 group-focus:left-0 group-focus:opacity-100 transition-all duration-300">
          <ul>
            <li className="text-white hover:bg-gray-400 py-4 px-6 w-full mt-16">
              <ComponentNavbar item="Sobre" link="#about" />
            </li>
            <li className="text-white hover:bg-gray-400 py-4 px-6 w-full">
              <ComponentNavbar item="Projetos" link="#projects" />
            </li>
            <li className="text-white hover:bg-gray-400 py-4 px-6 w-full">
              <ComponentNavbar item="Tecnologias" link="#technologies" />
            </li>
            <li className="text-white hover:bg-gray-400 py-4 px-6 w-full">
              <ComponentNavbar item="Certificações" link="#certifications" />
            </li>
          </ul>
        </div>
      </button>
      <div className="flex justify-between">
        <a
          href="https://github.com/brunofdlima"
          target="blank"
          rel="noreferrer"
          className="hover:text-stone-600 hover:duration-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-ferreira-dias-de-lima-317022216/"
          target="blank"
          className="ml-8 hover:text-blue-500 hover:duration-500"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/brunoofdl/"
          target="_blank"
          className="ml-8 hover:text-[#FF0069] hover:duration-500"
          rel="noreferrer"
        >
          <RiInstagramLine />
        </a>
      </div>
    </section>
  );
};
