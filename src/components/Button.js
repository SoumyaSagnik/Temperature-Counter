import React from "react";

const Button = ({ text, click }) => {
  const isIncrease = text === ">" ? true : false;
  return <button onClick={() => click(isIncrease)}>{text}</button>;
};

export default Button;
