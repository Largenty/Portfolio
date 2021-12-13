import React from "react";
import WorkingCard from "../components/WorkingCard";

const Work = () => {
  type WorkingData = {
    enterprise: string;
    description: string;
    tech: string;
    link: string;
    image: string;
  };
  const data = [
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
    {
      enterprise: "test",
      description: "small description",
      tech: "VueJs, nodeJs, etc ...",
      link: "http///",
      image:
        "https://www.capital.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2020.2F10.2F14.2F84106a3d-6ec6-428a-82ff-0bda6147dc90.2Ejpeg/768x432/background-color/ffffff/quality/70/espace-la-france-va-t-elle-echouer-a-profiter-de-la-revolution-du-new-space-1383156.jpg",
    },
    {
      enterprise: "test",
      description: "small description",
      tech: "VueJs, nodeJs, etc ...",
      link: "http///",
      image:
        "https://www.rennes-business.com/uploads/sites/2/elementor/thumbs/iStock-1092964846-ohmc77w20o5x8bzxc8k15sf3rl5f9e17z5o6v4hf8w.jpg",
    },
    {
      enterprise: "test",
      description: "small description",
      tech: "VueJs, nodeJs, etc ...",
      link: "http///",
      image:
        "https://blogs.microsoft.com/wp-content/uploads/prod/2020/10/HERO-ART-microsoft_azure_1920x1000_nologo.jpg",
    },
  ];
  return (
    <React.Fragment>
      <div
        className="flex column"
        style={{ height: "100vh", margin: "auto", width: "100%" }}
      >
        <h2
          style={{ margin: "75px 20px", textAlign: "center", fontSize: "48px" }}
          className="backgroundText"
        >
          WORKSPACE
        </h2>

        {/* card */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "0px 20px",
          }}
        >
          {data.map((element: WorkingData, key: number) => (
            <WorkingCard key={key} {...element} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
