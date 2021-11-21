import React from "react";

const Button = (props: any) => {
  const { text } = props;
  return <button className="btn mt-2">{text}</button>;
};

export default Button;
