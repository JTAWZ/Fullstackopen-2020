import { React, useState } from "react";

const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  const handleRightClick = () => {
    setClick({ ...click, right: click.right + 1 });
  };

  const handleleftClick = () => {
    setClick({ ...click, left: click.left + 1 });
  };

  const handleSpecialClick = () => {
    setClick({ ...click, left: click.left++ });
  };
  return (
    <div>
      <div>
        {click.left}
        <button onClick={handleleftClick}>left</button>
      </div>
      <div>
        {click.right}
        <button onClick={handleRightClick}>right</button>
      </div>
      <div>
        <button onClick={handleSpecialClick}>special</button>
      </div>
    </div>
  );
};

export default App;
