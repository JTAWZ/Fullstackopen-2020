import React from "react";

const Total = ({ courseParts }) => {
  return (
    <>
      <p>
        Total of {courseParts.reduce((s, p) => s + p.exercises, 0)} exercies
      </p>
    </>
  );
};

export default Total;
