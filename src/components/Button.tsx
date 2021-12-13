import { Link } from "react-router-dom";
type BtnData = {
  text: string;
  link?: string;
};

const Button = (props: BtnData) => {
  const { text, link } = props;
  return (
    <Link to={link ?? ""}>
      <button className="btn mt-2">{text}</button>
    </Link>
  );
};

export default Button;
