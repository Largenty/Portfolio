import { ProjectData } from "../types/types";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props: ProjectData) => {
  const { description, tech, link, image } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(link)}>
      <div className="card" style={{ backgroundImage: `url("${image}")` }}>
        <div className="card-description">
          <div
            style={{
              margin: "10px",
            }}
          >
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
    </div>
  );
};

export default ProjectCard;
