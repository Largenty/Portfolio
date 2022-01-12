import React, { useContext } from "react";
import { LangContext } from "../contexts/languageContext";
import translations from "../assets/translations/translation";
import { BtnLink } from "../types/types";
import Button from "../components/Button";

const Profile = () => {
  const { lang } = useContext(LangContext);
  return (
    <React.Fragment>
      <div className="flex justify-center align-center column height margin-auto autoMiddle">
        <div className="maxWidth  margin-auto width-70  autoMiddle-margin">
          <div>
            <h3>{translations[lang].profile.titlePart1}</h3>
            <h1 className="backgroundText profile-title">Ludovic Argenty</h1>
            <h3>{translations[lang].profile.titlePart2}</h3>
          </div>
          <p className="profile-p">{translations[lang].profile.description}</p>

          <div className="flex justify-center mediaButton margin-20">
            {translations[lang].btnProfile.map(
              (element: BtnLink, key: number) => (
                <div key={key} className="margin-side-20 ">
                  <Button {...element} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
