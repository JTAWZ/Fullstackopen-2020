import { React, useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  // Different methods to add value in an array during setState
  // for .push() and spread operator, you need to define the type during setState

  // const handleRightClick1 = () => {
  //   setAllClicks([allClicks.push("R")]);
  //   setRight(right + 1);
  // };

  // const handleRightClick2 = () => {
  //   setAllClicks([...allClicks, "R"]);
  //   setRight(right + 1);
  // };

  const handleRightClick3 = () => {
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  // const handleleftClick1 = () => {
  //   setAllClicks([allClicks.push("L")]);
  //   setLeft(left + 1);
  // };

  // const handleleftClick2 = () => {
  //   setAllClicks([...allClicks, "L"]);
  //   setLeft(left + 1);
  // };

  const handleleftClick3 = () => {
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleleftClick3}>left</button>
      </div>
      <div>
        {right}
        <button onClick={handleRightClick3}>right</button>
      </div>
      <p>{allClicks.join("")}</p>
      <p>{allClicks.length}</p>
    </div>
  );
};

export default App;
