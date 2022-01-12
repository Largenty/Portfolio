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
