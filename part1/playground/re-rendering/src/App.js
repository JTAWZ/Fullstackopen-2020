import React from "react";

const App = (props) => {
  const { counter } = props;
  return (
    <div>
      <p> Hello </p>
      {counter}
    </div>
  );
};

export default App;
