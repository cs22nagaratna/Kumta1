import React from "react";
import { linkTo } from "@storybook/addon-links";

const Emergency = () => {
  return (
    <div>
      <h1>Emergency</h1>
      <p>This is the Emergency</p>
      <button onClick={linkTo("Components1/Home")}>Back to Home</button>
    </div>
  );
};

export default Emergency;

