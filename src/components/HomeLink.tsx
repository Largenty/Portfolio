import { useNavigate } from "react-router-dom";
const HomeLink = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        cursor: "pointer",
      }}
      onClick={() => navigate("/profile")}
    >
      <h4
        style={{
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      >
        Ludovic Argenty
      </h4>
      <p style={{ fontWeight: "300", fontSize: "12px" }}>Dev Full stack</p>
    </div>
  );
};

export default HomeLink;
