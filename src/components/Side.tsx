import { useNavigate } from "react-router";

const Side = (props: any) => {
  const { text, classSide, link } = props;
  const navigate = useNavigate();

  return (
    <div style={{ cursor: "pointer" }} onClick={() => navigate(link)}>
      <p className={`${classSide} `}>{text}</p>
      {/* 
      <hr
        style={{
          position: "absolute",
          top: "33.3%%",
          right: "-31%",
          transform: "rotate(90deg)",
          border: "1px solid black",
          width: "75%",
        }}
      /> */}
    </div>
  );
};

export default Side;
