import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/themeContext";
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
      <ThemeContext.Provider value={{ theme, setTheme } as any}>
        <Routes>
          <Route path="/workspace" element={<Work />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Theme />
        <HomeLink />
        {/* <Side
          {...{ text: "skills", classSide: "sideRight", link: "/skills" }}
        />
        <Side
          {...{ text: "work", classSide: "sideLeft", link: "/workspace" }}
        /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
