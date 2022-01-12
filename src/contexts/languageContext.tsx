import { createContext, useState } from "react";

export const LangContext = createContext("FR") as any;

const supportedLangs = ["EN", "FR"];

let browserLang = navigator.language.slice(0, 2).toUpperCase();
console.log(browserLang);

if (supportedLangs.indexOf(browserLang) === -1) {
  browserLang = "EN";
}

const LanguageContextProvider = (props: any) => {
  const [lang, setLang] = useState(browserLang);

  const toggleLang = (changeLang: string) => {
    setLang(changeLang);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LanguageContextProvider;
