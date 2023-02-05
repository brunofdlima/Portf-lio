import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { Divide as Hamburger } from "hamburger-react";

import { ComponentNavbar } from "./extras/ComponentNavbar";

const logo = require("../pictures/Logo.png");

export const Navbar = () => {
  return (
    <section className="fixed flex justify-around z-10 bg-slate-900 text-white text-2xl w-screen items-center max-[768px]:h-[3.75rem]">
      <button className="min-[710px]:hidden">
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              <div className="w-[800px] h-2">Prefiro fechado</div>;
            }
          }}
        />
      </button>
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-16 w-20 -translate-y-3 max-[768px]:hidden"
        />
      </div>
      <div className="max-[710px]:hidden">
        <ComponentNavbar item="Sobre" link="#about" />
        <ComponentNavbar item="Projetos" link="#projects" />
        <ComponentNavbar item="Tecnologias" link="#technologies" />
        <ComponentNavbar item="Certificações" link="#certifications" />
      </div>
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
