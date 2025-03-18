import React from "react";
import { linkTo } from "@storybook/addon-links";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <button onClick={linkTo("Components1/Emergency")}>Go to Emergency Page</button>
    </div>
  );
};

export default Home;
