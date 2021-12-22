import { useNavigate } from "react-router-dom";
const HomeLink = () => {
  const navigate = useNavigate();

  return (
    <div className="home-link" onClick={() => navigate("/profile")}>
      <h4 className=" home-link-title">
        Ludovic Argenty
      </h4>
      <p className="home-link-title home-link-p">Developer Full stack - HOME</p>
    </div>
  );
};

export default HomeLink;
