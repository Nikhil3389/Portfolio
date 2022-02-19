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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>Next.js</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>React </b> & other frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
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
    name: "Java Script",
    level: "80",
  },
  {
    Icon: FaReact,
    name: "React Native",
    level: "30",
  },
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
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["python"],
    key_techs: ["python" ],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
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
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: [ "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: [],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: [],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
