import React from "react";
const Box = ({ key, width, height, bgColor }) => {
  return <div style={{ width, height, backgroundColor: bgColor }}></div>;
};

export default Box;
