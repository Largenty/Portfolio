import React from "react";
import * as data from "../data/data";
import { ThemeType } from "../types/types";
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
    <div className="theme-other">
      {data.btnTheme.map((item: ThemeType, key: number) => {
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
