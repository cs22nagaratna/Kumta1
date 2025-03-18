import React from "react";
import Home from "./Home";

export default {
  title: "Components1/Home",
  component: Home,
};

const Template=(args)=><Home {...args}/>
export const home=Template.bind()


