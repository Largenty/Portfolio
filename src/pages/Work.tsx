import React, { useContext } from "react";
import { LangContext } from "../contexts/languageContext";
import translations from "../assets/translations/translation";
import { WorkingData } from "../types/types";
import WorkingCard from "../components/WorkingCard";

const Work = () => {
  const { lang } = useContext(LangContext);
  return (
    <React.Fragment>
      <div className="flex column  height margin-auto full-width autoMiddle">
        <h2
          className="backgroundText work-title"
          style={{ marginTop: "150px" }}
        >
          {translations[lang].work.title.toUpperCase()}
        </h2>
        <div className="flex justify-space-around wrap margin-side-20">
          {translations[lang].lastJobData.map((element: WorkingData, key: number) => (
            <WorkingCard key={key} {...element} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
