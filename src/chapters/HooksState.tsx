import React, { useState } from "react";

const HooksState = () => {
  const [bool, setBool] = useState(false);
  const handleToggle = () => {
    setBool((o) => !o);
  };
  return (
    <div>
      hey wussup {bool ? "true" : "false"}
      <button onClick={handleToggle}>toggle!</button>
    </div>
  );
};

export default HooksState;
