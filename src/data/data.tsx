import { BtnLink, TechData, ThemeType, WorkingData } from "../types/types";

const btnProfile: BtnLink[] = [
  { text: "linkedin", link: "https://www.linkedin.com/in/ludovic-argenty/" },
  { text: "github", link: "https://github.com/Largenty" },
  { text: "works", link: "/workspace" },
  { text: "skills", link: "/skills" },
];

const btnSkills: BtnLink[] = [
  { text: "front-end" },
  { text: "Back-end" },
  { text: "other" },
];

const btnTheme: ThemeType[] = [
  { theme: "white", color: "#fffdf5" },
  { theme: "yellow", color: "#FDD068" },
  { theme: "green", color: "#52B788" },
  { theme: "blue", color: "#376590" },
  { theme: "red", color: "#ff5a5a" },
  { theme: "dark", color: "#343639" },
];

const lastJobData: WorkingData[] = [
  {
    enterprise: "Red Alert Labs",
    description:
      "Création d’une plateforme d’applications liée à la cybersécurité. Création d’un cahier des charges, d’une BDD, d’un BE et d’un FE.",
    tech: "ReactJS, MaterialUi, NodeJS, Nodemailer, PostgreSQL, Sequelize, Heroku, Jest ...",
    link: "https://www.redalertlabs.com/",
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/741060/BROCHURE_e51dre.png",
  },
  {
    enterprise: "Ko'llectif prod",
    description: "Création d'un site vitrine pour kollectif production.",
    tech: "REACTJS, tailwinds, hooks, Netlify, etc ...",
    link: "https://www.kollectif-prod.com/",
    image: "https://zupimages.net/up/21/51/nkz0.png",
  },
  {
    enterprise: "Mytako",
    description:
      "Création d’une plateforme de mise en relation entre les particuliers et les flottes de taxis à travers la france.",
    tech: "VueJS, Vuetify, Adyen, NodeJS, Nodemailer, PostgreSQL, Sequelize, Heroku, Jest, Clis, Crons, Google, Tomtom, GoogleAnalytics, Segment, Nodemailer ...",
    link: "https://mytako.com",
    image: "https://zupimages.net/up/21/51/tay3.png",
  },
];

const profileLink = { text: "enter", link: "/profile" };

const techBack: TechData[] = [
  { tech: "NodeJS", value: 45 },
  { tech: "MongoDB", value: 42 },
  { tech: "SQL", value: 25 },
  { tech: "PosgreSQL", value: 33 },
  { tech: "ExpressJS", value: 40 },
  { tech: "Sequelize", value: 27 },
  { tech: "Jest", value: 30 },
];

const techFront: TechData[] = [
  { tech: "HTML5", value: 59 },
  { tech: "CSS3 / SASS/SCSS", value: 40 },
  { tech: "ReactJS", value: 46 },
  { tech: "Redux", value: 32 },
  { tech: "VueJs", value: 41 },
  { tech: "Vuetify", value: 35 },
  { tech: "JavaScript", value: 52 },
  { tech: "Jest", value: 20 },
  { tech: "TailwindCSS", value: 34 },
  { tech: "ReactHook", value: 37 },
];

const techOther: TechData[] = [
  { tech: "Netlify", value: 40 },
  { tech: "Heroku", value: 40 },
  { tech: "GoogleAPI", value: 35 },
];

export {
  btnProfile,
  btnSkills,
  btnTheme,
  lastJobData,
  profileLink,
  techBack,
  techFront,
  techOther,
};
