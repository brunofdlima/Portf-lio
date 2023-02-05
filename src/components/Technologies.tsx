import { Techs } from "./extras/ComponentTechnologies";

import { FaReact, FaCss3Alt, FaHtml5, FaSass, FaVuejs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

export const Technologies = (props: any) => {
  return (
    <section
      id={props.id}
      className="mx-auto max-w-[75rem] py-60 text-slate-400 px-8 max-[425px]:py-32"
    >
      <div className="grid grid-cols-5 gap-20 max-[1050px]:grid-cols-3 max-[1050px]:ml-auto max-[425px]:grid-cols-2 max-[425px]:ml-[8%]">
        <Techs icon={FaReact} name="React.js" />
        <Techs icon={FaVuejs} name="Vue.js" />
        <Techs icon={AiFillApi} name="Api`s" />
        <Techs icon={FaHtml5} name="Html" />
        <Techs icon={FaCss3Alt} name="Css" />
        <Techs icon={SiJavascript} name="JavaScript" />
        <Techs icon={SiTypescript} name="TypeScript" />
        <Techs icon={SiTailwindcss} name="Tailwind.css" />
        <Techs icon={FaSass} name="Sass.css" />
        <Techs icon={SiAdobephotoshop} name="Photoshop" />
      </div>
    </section>
  );
};
