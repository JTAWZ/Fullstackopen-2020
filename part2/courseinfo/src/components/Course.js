import React from "react";
import Header from "./course-components/Header";
import Content from "./course-components/Content";

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content courseParts={course.parts} />
    </>
  );
};

export default Course;
