import React from "react";
import * as data from "../data/data";
import { Theme } from "../types/types";
import { ThemeContext } from "../contexts/themeContext";
import { initThemeColor, setThemeColor } from "../helpers/theme";

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) as any;

  React.useEffect(() => {
    const theme = localStorage.getItem("Theme");
    initThemeColor(theme ?? "dark");
  });
  
  const handleChange = (color: string) => {
    const colorTheme = setThemeColor(color, theme);
    setTheme(colorTheme);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.btnTheme.map((item: Theme, key: number) => {
        return (
          <button
            key={key}
            onClick={() => handleChange(item.theme)}
            className="theme"
            style={{
              backgroundColor: item.color,
            }}
          ></button>
        );
      })}
    </div>
  );
};

export default Theme;
