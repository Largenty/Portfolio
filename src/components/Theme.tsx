import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { initThemeColor, setThemeColor } from "../helpers/theme";

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) as any;

  const themeArrayForButton = [
    { theme: "dark", color: "#343639" },
    { theme: "red", color: "#ff5a5a" },
    { theme: "yellow", color: "#ffec88" },
    { theme: "green", color: "#b0e1a3" },
    { theme: "blue", color: "#376590" },
    { theme: "white", color: "#fffdf5" },
  ];

  // for disable adding true/false
  const handleChange = (color: string) => {
    const colorTheme = setThemeColor(color, theme);
    setTheme(colorTheme);
  };

  React.useEffect(() => {
    const theme = localStorage.getItem("Theme");
    initThemeColor(theme ?? "dark");
  });
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {themeArrayForButton.map((item: any, key: number) => {
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
