import React from "react";
import classes from "./Description.module.css";

const Description = (props) => {
  return <div className={classes[`${props.class}`]}>{props.description}</div>;
};

export default Description;
