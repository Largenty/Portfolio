import React from "react";
import Button from "../components/Button";

const Home = () => {
  const button = { text: "enter" };
  const test = () => {
    document.body.classList.remove("test");
  };

  const [themeState,setThemeState] = React.useState('') as any

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('test');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('test');
    }
  }

  React.useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
  })

  return (
    <div
      className="flex justify-center align-center column"
      style={{ height: "100vh" }}
    >
      <h1>Ludovic Argenty</h1>
      <h2>Developper Full stack</h2>
      <Button {...button} />
      <button onClick={handleChange}>test</button>
    </div>
  );
};

export default Home;
