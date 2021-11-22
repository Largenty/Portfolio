import Button from "../components/Button";
import Theme from "../components/Theme";

const Home = () => {
  const button = { text: "enter" };
  return (
    <div
      className="flex justify-center align-center column"
      style={{ height: "100vh" }}
    >
      <h1>Ludovic Argenty</h1>
      <h2>Developer Full stack</h2>
      <Button {...button} />
      <Theme />
    </div>
  );
};

export default Home;
