import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [{ width: "100px", height: "100px", bgColor: "red" }];
  const [box, setBox] = useState(INITIAL_STATE);

  const addBox = (width, height, bgColor, newId) => {
    setBox((box) => [...box, { width, height, bgColor, newId }]);
  };
  const boxComponents = box.map((box) => (
    <Box
      key={box.newId}
      width={box.width}
      height={box.height}
      bgColor={box.bgColor}
    />
  ));
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
};

export default BoxList;
