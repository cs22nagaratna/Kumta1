import React from "react";
import Home from "./Home";

export default {
  title: "Components/Home",
  component: Home,
};

const Template=(args)=><Home {...args}/>
export const home=Template.bind()


