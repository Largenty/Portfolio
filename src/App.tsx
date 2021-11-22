import React from "react";
import Home from "./pages/Home";

import { ThemeContext } from "./contexts/themeContext";
import "./scss/index.scss";

function App() {
  const [theme, setTheme] = React.useState<String>("dark");

  return (
    <div id="app" className="x" style={{ position: "relative" }}>
      <ThemeContext.Provider value={{ theme, setTheme } as any}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
