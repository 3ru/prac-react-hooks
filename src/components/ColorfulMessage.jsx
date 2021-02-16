import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
