import { useContext } from "react";
import { LangContext } from "../contexts/languageContext";
import { useNavigate } from "react-router-dom";
import translations from "../assets/translations/translation";
import FrenchFlag from "../assets/translations/france.svg";
import EnglishFlag from "../assets/translations/united-kingdom.svg";
const HomeLink = () => {
  const navigate = useNavigate();
  const { lang, toggleLang } = useContext(LangContext);
  return (
    <div className="home-link">
      <div className="flex">
        <h4 className="home-link-title" onClick={() => navigate("/profile")}>
          Ludovic Argenty
        </h4>
        <div className="flex" style={{ margin: "0 15px" }}>
          <img
            style={{ margin: "0 5px" }}
            onClick={() => toggleLang("FR")}
            src={FrenchFlag}
            width="20px"
          />
          <img
            style={{ margin: "0 5px" }}
            onClick={() => toggleLang("EN")}
            src={EnglishFlag}
            width="20px"
          />
        </div>
      </div>

      <p
        className="home-link-title home-link-p"
        onClick={() => navigate("/profile")}
      >
        {translations[lang].homeLink}
      </p>
    </div>
  );
};

export default HomeLink;
