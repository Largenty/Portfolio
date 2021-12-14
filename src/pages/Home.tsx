import * as data from "../data/data";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      className="flex justify-center align-center column"
      style={{ height: "100vh" }}
    >
      <h1>Ludovic Argenty</h1>
      <h2>Developer Full stack</h2>
      <Button {...data.profileLink} />
    </div>
  );
};

export default Home;
