import pdf from "../archive/Programing.pdf";

import { FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { ComponentWelcome } from "./extras/ComponentWelcome";

export const Welcome = (props: any) => {
  return (
    <section id={props.id} className="flex justify-center mx-auto px-8">
      <div className="flex-col max-w-[75rem] pt-[20%] pb-[8%]">
        <div className="text-white text-5xl">Bem-vindo,</div>
        <div className="text-white text-5xl">Me chamo Bruno Ferreira.</div>
        <ComponentWelcome
          description="26 anos, naturalizado em Fortaleza-CE onde vivo desde quando nasci,
          moro sozinho e tenho uma filha 'Salsichinha'."
        />
        <ComponentWelcome
          description="Sempre gostei de pesquisar e entender mais sobre o mundo da T.I. Por
          isso, desde os meus 12 anos de idade venho evoluindo o aprendizado no
          ramo, começando com infraestrutura. E cá estou eu, no mundo da
          programação onde sim, descobri o meu lugar."
        />
        <ComponentWelcome
          description="Eu diria que sou uma pessoa que busca sempre se aprimorar. Ao fim de
          cada dia eu reflito sobre o que posso fazer de diferente para ser uma
          pessoa e profissional melhor. Gosto de ter metas muito claras e
          objetivos muito bem definidos."
        />
        <ComponentWelcome
          description="'Escolha um trabalho que você ama e você nunca terá que trabalhar um
          dia sequer na vida'"
        />
        <p className="text-gray-400 text-sm mb-12">- filósofo Confúcio</p>
        <div className="flex">
          <a href={pdf} download="Currículo bruno ferreira">
            <button className="bg-white border transition duration-1000 border-1 p-[0.3125rem] relative w-48 h-8 text-[1.0625rem] rounded-full group flex justify-center hover:bg-[#0077b5]">
              <p className="absolute font-bold transition text-[#0077b5] transform group-hover:-translate-x-4 group-hover:text-white duration-1000">
                Currículo
              </p>
              <HiDownload className="absolute top-[0.45em] right-[0.5em] opacity-0 mr-6 transition h-[1em] fill-[#fff] group-hover:opacity-100 duration-1000" />
            </button>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5585996824803&text=Olá! Vi seu portfólio online.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[#117E16] w-12 h-8 ml-4 rounded-full flex items-center justify-center hover:bg-[#12b93b] duration-[800ms]">
              <FaWhatsapp className="h-8" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
