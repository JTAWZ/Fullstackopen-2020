import React from "react";
import Part from "./Part";

const Content = ({ courseParts }) => {
  return courseParts.map((item) => (
    <Part key={item.id} title={item.name} value={item.exercises} />
  ));
};

export default Content;
