import { Link } from "react-router-dom";

const Button = (props: any) => {
  const { text, link } = props;
  return (
    <Link to={link}>
      <button className="btn mt-2">{text}</button>
    </Link>
  );
};

export default Button;
