import { Link } from "react-router-dom";
import { BtnLink } from "../types/types";

const Button = (props: BtnLink) => {
  const { text, link } = props;

  return (
    <Link to={link ?? ""}>
      <button className="btn mt-2">
        {text}
      </button>
    </Link>
  );
};

export default Button;
