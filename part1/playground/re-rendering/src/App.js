import React, { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const decreaseByOne = () => setCounter(counter - 1);
  const increaseByone = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  // setTimeout(() => {
  //   setCounter(counter + 1);
  // }, 1000);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByone} text="Plus one" />
      <Button onClick={decreaseByOne} text="Minus one" />
      <Button onClick={setToZero} text="Reset" />
    </>
  );
};

export default App;
