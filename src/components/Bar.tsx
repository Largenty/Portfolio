const Bar = (props: any) => {
  return (
    <div className="margin-up-down-20 ">
      <p className="text-transform-capitalize ">{props.tech}</p>
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
