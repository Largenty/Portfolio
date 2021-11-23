import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/themeContext";
import "./scss/index.scss";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Theme from "./components/Theme";
import Side from "./components/Side";

function App() {
  const [theme, setTheme] = React.useState<String>("dark");

  return (
    <div id="app" style={{ position: "relative" }}>
      <ThemeContext.Provider value={{ theme, setTheme } as any}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Theme />
        <Side {...{ text: "skills", classSide: "sideRight" }} />
        <Side {...{ text: "work", classSide: "sideLeft" }} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
