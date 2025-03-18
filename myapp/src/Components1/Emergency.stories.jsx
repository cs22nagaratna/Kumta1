import React from "react";
import Emergency from "./Emergency";

export default {
  title: "Components1/Emergency",
  component: Emergency,
};

const Template=(args)=><Emergency {...args}/>
export const emergency=Template.bind()
