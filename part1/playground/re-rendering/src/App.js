import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  return <div>{counter}</div>;
};

// const App = (props) => {
//   const { counter } = props;
//   return (
//     <div>
//       <p> Hello </p>
//       {counter}
//     </div>
//   );
// };

export default App;
