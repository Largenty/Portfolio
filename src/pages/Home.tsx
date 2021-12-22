import * as data from "../data/data";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex justify-center align-center column height">
      <h1 style={{ fontSize: "3rem" }}>Ludovic Argenty</h1>
      <h2 style={{ fontSize: "3rem" }}>Developer Full stack</h2>
      <Button {...data.profileLink} />
    </div>
  );
};

export default Home;
