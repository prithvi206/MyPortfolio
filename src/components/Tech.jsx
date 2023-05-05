import React from "react";

import { SectionWrapper } from "../hoc";
import { FrontendTechnologies,BackendTechnologies,Tools,CoreTechnologies,DataBaseTechnologies } from "../constants";

const Tech = () => {
  const tech = [{ list: FrontendTechnologies, title: "FrontendTechnologies:"},{list: BackendTechnologies, title: "BackendTechnologies:"}, {list:DataBaseTechnologies, title: "DataBase Technologies:"},{list: Tools, title: "Tools:"}, {list:CoreTechnologies, title: "Core Programming Languages:"}];
  return (
    <section>
      <div className="font-bold text-4xl">Technologies I have worked On:</div>
      <br/>
      <div className="flex flex-col gap-10">
        {tech.map((tech) => (
        <div className="flex flex-row p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 from-10% via-sky-500 hover:via-30% hover:to-emerald-500 to-90%  hover:border-black hover:border-4  hover:shadow-md group rounded-md items-center hover:">
            <div className="relative w-40 ">{tech.title}</div>
          <div className="flex flex-col items-center ">
             <div className='flex flex-row flex-wrap justify-center ml-8'>
                {tech.list.map((technology) => (
                  <div className=' flex flex-col items-center w-28 h-20 gap-2 p-1' key={technology.name}>
                  <img  src={technology.icon}  className="w-10 h-10 bg-black p-1"/>
                   <div className="group-hover:text-lg">{technology.name}</div>
        </div>
        ))}
         </div>
          </div>
        </div>
          ))}
        </div>
       
    </section>
  );
};

export default SectionWrapper(Tech, "");
