import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/themeContext";
import LanguageContextProvider from "./contexts/languageContext";
import "./scss/index.scss";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Theme from "./components/Theme";
import Work from "./pages/Work";
import HomeLink from "./components/HomeLink";
import Skills from "./pages/Skills";

function App() {
  const [theme, setTheme] = React.useState<String>("dark");
  console.log(
    `%cTiens un curieux :p, comme tu es par ici, si mon portfolio t'a tappé(e) dans l'oeil n'hésite pas à m'envoyer un mail : `,
    `color: #eeb02a; font-size: 1.2rem;`
  );
  console.log(
    `%clargenty.web@gmail.com`,
    `color: #ee472a; font-size: 1rem; text-decoration: underline;`
  );
  console.log(
    `%cbonne journée !`,
    `color: #2a8fee; font-size: 1rem;`
  );

  return (
    <div id="app" style={{ position: "relative" }}>
      <LanguageContextProvider>
        <ThemeContext.Provider value={{ theme, setTheme } as any}>
          <Routes>
            <Route path="/workspace" element={<Work />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Theme />
          <HomeLink />
        </ThemeContext.Provider>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
