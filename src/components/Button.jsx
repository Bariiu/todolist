import React from "react";

const Button = ({ greeting = "hello", onClick }) => {
  return <button onClick={onClick}>{greeting}</button>;
};

export default Button;