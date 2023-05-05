import React from 'react';
import hyperlocal from "../assets/projects/hyperlocal.png";
import { projects } from '../constants';
import 'animate.css';
import { Parallax } from 'react-parallax';
import herobgrev from "../assets/projectbg.png"
import StarsCanvas from './canvas/Stars';

const Projects = () => {
  
  return (
   <Parallax  bgImage={herobgrev} strength={600}>
      <section className="project relative z-0" id="projects">
        <div className="container m-auto flex-1 flex-col p-10 pt-5 gap-10 ">
          
        <div className='p-10 text-5xl'>
            <h2>My Projects:</h2>
        </div>
        <div className='grid grid-rows-2 grid-flow-col gap-10'>
        {projects.map((project) => (
          <div className='group relative p-0 overflow-hidden border-2 border-white/50 rounded-x1 w-100 h-100 bg-black'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
            <img src={project.imgUrl} className="group-hover:scale-125 w-120 h-80 transition-all duration-500 " />
          <div className='absolute -bottom-full left-5 group-hover:bottom-20 transition-all duration-500 z-50'>
              <span className='font-bold text-[19]'>{project.title}</span>
          </div>
          {/* <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50'>
              <span>{project.description}</span>
            </div> */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50'>
             <a href={project.source_code_link} target={'_blank'} className="font-semibold text-[#1589FF]">Project Link</a>
           
           </div>
        </div>
          
        ))}
          </div>
        </div>
        <StarsCanvas/>
      </section>
      
      </Parallax>
   
  )
}

export default Projects;