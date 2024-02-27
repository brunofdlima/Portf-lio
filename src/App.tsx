import "./index.css";

import { Navbarfull } from "./components/Navbartop";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Certifications } from "./components/Certifications";
import { Form } from "./components/Form";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="text-xl bg-slate-900">
      <Navbarfull />
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Welcome id="about" />
      </div>
      <div className="flex py-20">
        <h2 className="text-white ml-[17%] "># Projetos</h2>
        <div className="ml-8 w-[55%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Projects id="projects" />
      </div>
      <div className="flex py-20">
        <h2 className="text-white ml-[17%] "># Tecnologias</h2>
        <div className="ml-8 w-[55%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Technologies id="technologies" />
      </div>
      <div className="flex py-20">
        <h2 className="text-white ml-[17%] "># Certificações</h2>
        <div className="ml-8 w-[55%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Certifications id="certifications" />
      </div>
      <Form />
    </div>
  );
}

export default App;
