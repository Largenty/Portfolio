const Bar = (props: any) => {
  return (
    <div
      style={{
        margin: "20px 0",
      }}
    >
      <p style={{ textTransform: "capitalize" }}>{props.tech}</p>
      <div
        style={{
          width: props.value + "%",
        }}
      >
        <div className="firstBar">
          <div className="secondBar"></div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
