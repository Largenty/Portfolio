import Button from "../components/Button";

const Home = () => {
  const profileLink = { text: "enter", link: "/profile" };
  return (
    <div
      className="flex justify-center align-center column"
      style={{ height: "100vh" }}
    >
      <h1>Ludovic Argenty</h1>
      <h2>Developer Full stack</h2>
      <Button {...profileLink} />
    </div>
  );
};

export default Home;
