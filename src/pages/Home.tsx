import { useContext } from "react";
import { LangContext } from "../contexts/languageContext";
import translations from '../assets/translations/translation'
import * as data from "../data/data";
import Button from "../components/Button";

const Home = () => {
  const { lang } = useContext(LangContext);
  console.log(lang)
  return (
    <div className="flex justify-center align-center column height">
      <h1 style={{ fontSize: "3rem" }}>Ludovic Argenty</h1>
      <h2 style={{ fontSize: "3rem" }}>{translations[lang].home.subTitle}</h2>
      <Button {...data.profileLink} text={translations[lang].home.button} />
    </div>
  );
};

export default Home;
