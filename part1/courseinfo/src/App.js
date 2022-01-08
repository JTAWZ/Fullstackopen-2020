import React from "react";

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const Part = ({ parts }) => {
  return (
    <>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
