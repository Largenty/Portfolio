import { Link } from "react-router-dom";
import { BtnLink } from "../types/types";

const Button = (props: BtnLink) => {
  const { text, link } = props;

  return text === "linkedin" || text === "github" ? (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      {" "}
      <button className="btn mt-2">{text}</button>
    </a>
  ) : (
    <Link to={link ?? ""}>
      <button className="btn mt-2">{text}</button>
    </Link>
  );
};

export default Button;
