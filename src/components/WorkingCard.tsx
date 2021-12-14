import { WorkingData } from "../types/types";

const WorkingCard = (props: WorkingData) => {
  const { enterprise, description, tech, link, image } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="card" style={{ backgroundImage: `url("${image}")` }}>
        <div className="card-description">
          <div
            style={{
              margin: "10px",
            }}
          >
            <h4
              style={{ textTransform: "uppercase", letterSpacing: "3px" }}
              className="card-text"
            >
              {enterprise}
            </h4>
            <div style={{ margin: "10px 0" }} className="card-text"></div>
            <p style={{ fontSize: "12px" }} className="card-text">
              <strong>Description :</strong> {description}
            </p>
            <p style={{ fontSize: "12px" }} className="card-text">
              <strong>Tech :</strong> {tech}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkingCard;
