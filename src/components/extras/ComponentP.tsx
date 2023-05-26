import { BiCodeAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

export const ComponentProjects = (props: any) => {
  return (
    <div
      className={`bg-slate-800 h-[22.5rem] max-w-[18.75rem] rounded-lg mb-[9%] hover:-translate-y-4 duration-[800ms] hover:z-0`}
    >
      <div className="flex justify-center items-center bg-slate-800 text-white rounded-t-lg h-12">
        {props.title}
      </div>
      <div>
        <img
          src={props.destination}
          alt="img"
          className="mb-7 max-h-[12.5rem] w-full"
        />
      </div>
      <div className="text-xl flex text-center text-white">
        <div className="mx-[1.875rem]">{props.description}</div>
      </div>
      <div className="flex justify-center mt-3">
        <a href={`${props.link}`} target="_blank" rel="noreferrer">
          <button className="w-[4rem] h-[1.875rem] my-2 mx-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:opacity-80">
            <FiEye className="mx-auto"/>
          </button>
        </a>
        <a href={`${props.linkrepo}`} target="_blank" rel="noreferrer">
          <button className="w-[4rem] h-[1.875rem] my-2 mx-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:opacity-80">
            <BiCodeAlt className="mx-auto"/>
          </button>
        </a>
      </div>
    </div>
  );
};
