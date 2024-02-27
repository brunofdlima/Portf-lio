import pdf from "../archive/Programing.pdf";

import { FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { ComponentWelcome } from "./extras/ComponentWelcome";

const profile = require("../pictures/profile.png");

export const Welcome = (props: any) => {
  return (
    <div id={props.id} className="px-[17%]">
      <div className="pt-[18%] pb-[2%] flex max-[768px]:flex-col-reverse">
        <div>
          <div className="text-white text-6xl">Bruno Ferreira</div>
          <ComponentWelcome
            description="Bem-vindo ao meu mundo digital, onde linhas de código se transformam em experiências interativas e ideias ganham vida na forma de sites e aplicativos. 
          Um apaixonado desenvolvedor web dedicado a criar soluções digitais inovadoras e envolventes."
          />
          <ComponentWelcome
            description="Navegue pelo meu portfolio e descubra alguns dos projetos emocionantes 
            nos quais tive o privilégio de criar. Estou sempre aberto a novas oportunidades de colaboração e ansioso para transformar suas ideias em realidade digital. 
            Vamos criar algo incrível juntos!"
          />
        </div>
        <img src={profile} alt="img" className="rounded-full h-56 w-56 mx-6 max-[768px]:my-6" />
      </div>
      <div className="flex my-20 max-[768px]:flex-col">
        <a href={pdf} download="Currículo bruno ferreira">
          <button className="bg-white border transition duration-1000 border-1 p-[0.3125rem] relative w-72 h-14 text-[1.0625rem] rounded-md group flex items-center justify-center hover:bg-[#0077b5]">
            <p className="absolute font-bold transition text-[#0077b5] transform group-hover:-translate-x-4 group-hover:text-white duration-1000">
              Currículo.pdf
            </p>
            <HiDownload className="absolute top-[18px] right-[0.5em] opacity-0 mr-6 transition h-[1em] fill-[#fff] group-hover:opacity-100 duration-1000" />
          </button>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5585996824803&text=Olá! Vim pelo seu portfólio online.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#117E16] w-20 h-14 ml-4 rounded-full flex items-center justify-center max-[768px]:mt-8 hover:bg-[#12b93b] duration-[800ms]">
            <FaWhatsapp className="h-10 w-10" />
          </button>
        </a>
      </div>
    </div>
  );
};
