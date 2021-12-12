import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/themeContext";
import "./scss/index.scss";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Theme from "./components/Theme";
import Side from "./components/Side";
import Work from "./pages/Work";
import HomeLink from "./components/HomeLink";

function App() {
  const [theme, setTheme] = React.useState<String>("dark");

  return (
    <div id="app" style={{ position: "relative" }}>
      <ThemeContext.Provider value={{ theme, setTheme } as any}>
        <Routes>
          <Route path="/workspace" element={<Work />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Theme />
        <HomeLink />
        <Side
          {...{ text: "skills", classSide: "sideRight", link: "/skills" }}
        />
        <Side
          {...{ text: "work", classSide: "sideLeft", link: "/workspace" }}
        />

        {/* <hr
          style={{
            position: "absolute",
            top: "33.3%%",
            right: "-31%",
            transform: "rotate(90deg)",
            border: "1px solid black",
            width: "75%",
          }}
        /> */}
        {/* <hr
          style={{
            position: "absolute",
            bottom: "33.3%",
            left: "-31%",
            transform: "rotate(90deg)",
            border: "1px solid black",
            width: "75%",
          }}
        /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
