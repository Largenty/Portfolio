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
  { theme: "dark", color: "#343639" },
  { theme: "red", color: "#ff5a5a" },
  { theme: "yellow", color: "#ffec88" },
  { theme: "green", color: "#b0e1a3" },
  { theme: "blue", color: "#376590" },
  { theme: "white", color: "#fffdf5" },
];

const lastJobData: WorkingData[] = [
  {
    enterprise: "Red Alert Labs",
    description:
      "Création d’une plateforme d’applications liée à la cybersécurité. Création d’un cahier des charges, d’une BDD, d’un BE et d’un FE.",
    tech: "ReactJS, MaterialUi, NodeJS, Nodemailer, PostgreSQL, Sequelize, Heroku, Jest ...",
    link: "https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab",
    image:
      "https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4=",
  },
  {
    enterprise: "Ko'llectif prod",
    description: "Création d'un site vitrine pour kollectif production.",
    tech: "REACTJS, tailwinds, hooks, Netlify, etc ...",
    link: "http///",
    image: "https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg",
  },
  {
    enterprise: "test",
    description: "small description",
    tech: "VueJs, nodeJs, etc ...",
    link: "http///",
    image:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },

];

const profileLink = { text: "enter", link: "/profile" };

const techBack: TechData[] = [
  { tech: "grezg", value: 10 },
  { tech: "grezg", value: 35 },
  { tech: "fds", value: 51 },
  { tech: "gfds", value: 41 },
];

const techFront: TechData[] = [
  { tech: "html", value: 64 },
  { tech: "css", value: 35 },
  { tech: "reactJs", value: 51 },
  { tech: "VueJs", value: 41 },
];

const techOther: TechData[] = [
  { tech: "bvcbvbvbcbb", value: 10 },
  { tech: "bbvcbvc", value: 1 },
  { tech: "bvcbvc", value: 1 },
  { tech: "vbcbbvcxbv", value: 1 },
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
