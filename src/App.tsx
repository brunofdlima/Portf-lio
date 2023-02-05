import "./index.css";

import { Navbar } from "./components/Navbartop";
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
      <Navbar />
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
      <div className="w-[5%] ml-[20%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
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
      <div className="w-[5%] ml-[20%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
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
      <div className="w-[5%] ml-[20%] h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500"></div>
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
