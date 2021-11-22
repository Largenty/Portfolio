import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { initThemeColor, setThemeColor } from "../helpers/theme";

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) as any;

  const themeArrayForButton = [
    { theme: "red", color: "#ff5a5a" },
    { theme: "yellow", color: "#ffec88" },
    { theme: "green", color: "#b0e1a3" },
    { theme: "blue", color: "#376590" },
    { theme: "white", color: "#fffdf5" },
    { theme: "dark", color: "#343639" },
  ];

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
            style={{
              padding: "10px",
              margin: "6px 20px",
              borderRadius: "50%",
              backgroundColor: item.color,
              border: "none",
              cursor: "pointer",
            }}
          ></button>
        );
      })}
    </div>
  );
};

export default Theme;
