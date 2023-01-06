import { IService, ISkill,IProject } from './type'
// import { RiComputerLine } from 'react-icons/ri'








// export const services: IService[] = [
//     {
//         title: "Frontend Development",
//         about: "I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b> React.js </b>",
//         Icon: RiComputerLine,

//     },
//     {
//         title: "Backend Development",
//         about: 'handle database, server using <b> React </b> & other frameworks',
//         Icon: RiComputerLine,
//     },
// ]

import { RiComputerLine } from "react-icons/ri";
import { FaServer,FaReact } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi,AiFillCode } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {BsApp, BsBootstrap} from 'react-icons/bs';
import {FaPython} from 'react-icons/fa';
import {DiJavascript, DiJava} from 'react-icons/di';
import {GiCyberEye,GiArtificialIntelligence} from 'react-icons/gi';
import {SiNextdotjs,SiCodingninjas} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {GrVirtualMachine} from 'react-icons/gr';
;






import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful page using <b> HTML</b>,<b>CSS</b>, <b>.js</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database  using <b> MongoDb </b> & other frameworks",
  },
  // {
  //   Icon: AiOutlineApi,
  //   title: "API Development",
  //   about:
  //     "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  // },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>, <b>MyPerfectice</b>, <b>Codeshef</b>, <b>GeeksforGeeks</b>, <b>Codestudio</b>, <b>HackerEarth</b>and <b>LeetCode</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Graphic Designer",
    about:
      "stunning Graphic designer using <b>Canva</b>  and  <b>Abode Photoshop</b> ",
  },
  {
    Icon: BsApp,
    title: "App Development",
    about:
      "I can develop an application using <b> Java</b> and <b> Recycler View</b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: FaPython,
    name: "Python",
    level: '50',
  },
  {
    Icon: DiJavascript,
    name: "JavaScript",
    level: "80",
  },
  // {
  //   Icon: FaReact,
  //   name: "R",
  //   level: "30",
  // },
  {
    Icon: FaReact,
    name: "React",
    level: "70",
  },
  {
    Icon: GiCyberEye,
    name: "Cyber security",
    level: "90",
  },
  {
    Icon: BsBootstrap,
    name: "Bootstrap",
    level: "60",
  },
  {
    Icon: SiNextdotjs,
    name: "Next",
    level: "40",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsApp,
    name: "App Development",
    level: "85",
  },
  {
    Icon: SiAdobephotoshop,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: DiJava,
    name: "Java",
    level: "60",
  },
  {
    Icon: AiFillCode,
    name: "C/C++",
    level: "45",
  },
  {
    Icon: GrVirtualMachine,
    name: "Machine Learning",
    level: "45",
  },
  {
    Icon: SiCodingninjas,
    name: "Data Structure",
    level: "45",
  },
  {
    Icon: GiArtificialIntelligence,
    name: "Artifical Intelligence",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Covid.jfif",
    deployed_url: "https://nikhil3389.github.io/project/",
    github_url: "https://github.com/Nikhil3389/project",
    category: ["python"],
    key_techs: ["python" ],
  },
  // {
  //   name: "Algorithm Visualizer",
  //   image_path: "/images/algoVisual.png",
  //   deployed_url: "https://visual-algorithm.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  //   category: ["react"],
  //   description:
  //     "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
  //   key_techs: ["React", "firebase", "Framer Motion"],
  // },

  {
    name: "Lucrer",
    image_path: "/images/Lurer.png",
    deployed_url: "https://enchanting-daifuku-59e0c2.netlify.app/",

    github_url: "https://github.com/Nikhil3389/Lucrer",
    category: ["node", "react"],
    description:
      "Cryptocurrency Platform for Traders",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Nikhil3389/Protfolio",
    category: ["node", "react"],
    description:
      "It contain details of my resume and projects",
    key_techs: ["Next", "Node", "Bootstrap"],
  },

  {
    name: "Tic Toe Game ",
    image_path: "/images/tic.jpg",
    deployed_url: "#",
    github_url: "https://github.com/Nikhil3389/FirstGame",
    category: [ "react"],
    description:
      "First Game Project :)",
    key_techs: ["Java"],
  },

  {
    name: "News Application",
    image_path: "/images/news.jpg",
    deployed_url: "#",
    github_url: "https://github.com/Nikhil3389/News-Application",
    category: [],
    description:
      "News Application :) | this app show news",
    key_techs: ["Java"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "#",
    github_url: "#",
    category: [],
    description:
      'COMING SOON  ',
    key_techs: [
      ,
    ]
    ,
  },
  {
    name: "Fair Price Prediction ",
    image_path: "/images/car.png",
    deployed_url: "#",
    github_url: "https://github.com/Nikhil3389/Uber_Price_prediction",
    category: [],
    description:
      "This is use to fair price of uber ",
    key_techs: ["Python","Machine Learning"],
  },
  {
    name: "Stock Price Prediction ",
    image_path: "/images/stock.jfif",
    deployed_url: "#",
    github_url: "https://github.com/Nikhil3389/Stock_prediction",
    category: [],
    description:
      "This is stock prediction of Microsoft dataset using LSTM Model",
    key_techs: ["Python","Machine Learning"],
  },
  {
    name: "Sudoku",
    image_path: "/images/game1.jfif",
    deployed_url: "https://sudoku-liard-five.vercel.app/",
    github_url: "https://github.com/Nikhil3389/sudoku",
    category: [],
    description:
      "Simple game with using data structures",
    key_techs: ["Data Structures","C++","HTML"],
  },

  
];
