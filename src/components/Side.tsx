import { useNavigate } from "react-router";

const Side = (props: any) => {
  const { text, classSide, link } = props;
  const navigate = useNavigate();

  return (
    <div style={{ cursor: "pointer" }} onClick={() => navigate(link)}>
      <p className={`${classSide} `}>{text}</p>
    </div>
  );
};

export default Side;
