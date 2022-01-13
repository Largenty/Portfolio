import React, { useContext } from "react";
import { LangContext } from "../contexts/languageContext";
import translations from "../assets/translations/translation";
import { BtnLink } from "../types/types";
import Button from "../components/Button";

const Project = () => {
  const { lang } = useContext(LangContext);
  return (
    <React.Fragment>
      <div className="flex column  height margin-auto full-width autoMiddle">
        <h2
          className="backgroundText work-title"
          style={{ marginTop: "150px" }}
        >
          {translations[lang].projects.title.toUpperCase()}
        </h2>
        <div className="flex justify-space-around wrap margin-side-20">
          {translations[lang].projectsData.map(
            (element: BtnLink, key: number) => (
              <Button key={key} {...element} />
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
