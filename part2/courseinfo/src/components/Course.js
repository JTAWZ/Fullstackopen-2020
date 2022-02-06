import React from "react";
import Header from "./course-components/Header";
import Content from "./course-components/Content";
import Total from "./course-components/Total";

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </>
  );
};

export default Course;
