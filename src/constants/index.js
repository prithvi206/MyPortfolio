import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  sql,
  adobexd,
  firebase,
  postman,
  c,
  python,
  java,
  express,
} from "../assets";
import Portfolio from "../assets/projects/portfolio.png";
import HyperLocal from "../assets/projects/hyperlocal.png";
import JSSKOS from "../assets/projects/jsskos.png";
import GDSC from "../assets/projects/gdsc.png";
import HyperLocalNew from "../assets/projects/quadtree.png";
import Quadtree from "../assets/projects/quadtree.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const CoreTechnologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java ",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];
const FrontendTechnologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Futter",
    icon: flutter,
  },
];
const BackendTechnologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Express JS",
    icon: express,
  },
];

const Tools = [
  {
    name: "Adobe Xd",
    icon: adobexd,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const DataBaseTechnologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: sql,
  },
];

const projects = [
  {
    title: "My Portfolio",

    description: "Web application built on React Js,Tailwind css ,Three js",
    imgUrl: Portfolio,

    source_code_link: "https://github.com/prithvi206/MyPortfolio",
  },
  {
    title: "Hyper Local latest Version",

    description: "Web application that Node Js ,express Js,React Js ,prisma, TypeScript and MongoDB",
    imgUrl: HyperLocalNew,

    source_code_link: "https://hyper-local.vercel.app/",
  },
  {
    title: "Quad Tree visualization",

    description: "Html ,Javascript, ps5 website illustrating quad tree ",
    imgUrl: Quadtree,

    source_code_link: "https://quadtreevisualization.vercel.app/",
  },
  
  
  {
    title: "HyperLocal old version ",
    description: "Web application that Node Js ,express Js,Vue Js and MongoDB ",

    imgUrl: HyperLocal,

    source_code_link: "https://hyploc3.onrender.com/",
  },
  {
    title: "JSSKOS",
    description: "Cross-platform e-learning app build from Flutter,Firebase.",

    imgUrl: JSSKOS,
    source_code_link: "https://github.com/prithvi206",
  },
  {
    title: "Student Study Manager",
    description:
      "Contributed backend for open source e-learning app build from Flutter,Hive.",

    imgUrl: GDSC,
    source_code_link: "https://github.com/prithvi206/student_study_manager",
  },
];

export {
  CoreTechnologies,
  FrontendTechnologies,
  DataBaseTechnologies,
  Tools,
  projects,
  BackendTechnologies,
};
