import { React, useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button Pressed History: {props.allClicks.join("")}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

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

  const handleLeftClick3 = () => {
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleLeftClick3} text="Left" />
      </div>
      <div>
        <Button onClick={handleRightClick3} text="Right" />
      </div>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
